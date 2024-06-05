import conf from '../conf/conf.js';
import {Client,ID,Databases,Storage, Query} from "appwrite";

export class Service
{
    client = new Client();
    databases;
    bucket;

    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.bucket = new Storage(this.client);
        this.databases = new Databases(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId})
    {
        try {
            return await this.databases.client.createDocumnet(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error;
        }
    }
    async updatePost(slug,{title,content,featuredImage,status})
    {
        try 
        {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )   
        } catch (error) {
            throw error;
        }
    }
    async deletePost(slug)
    {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error;
            return false;
        }
    }
    async getPost(slug)
    {
        try 
        {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )    
        } 
        catch (error) {
            throw error;
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                queries
            )
        } catch (error) {
            console.log("error") 
            return false
        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await tthis.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file

            )
        } catch (error) {
            console.log("error")
            return false
        }
    }
    
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("Error")
            return false
        }
    }

    async filePreview(fileId){
        return this.bucket.filePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}



const service = new Service()
export default service