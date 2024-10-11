Blog App

Description

A full-stack blog application built using React for the frontend and Appwrite for backend services like database, authentication, and file storage. Users can create, edit, and delete blog posts, as well as view posts from others.


Features

1.User authentication (Sign up, Log in)

2.Create, edit, and delete blog posts

3.View all blog posts

4.Upload and display images for blog posts

5.Responsive design

Technologies

Frontend: React, React Router, Axios

Backend Services: Appwrite (Database, Authentication, File Storage)

Styling: CSS Modules or Styled Components

Installation

Prerequisites

Appwrite server (self-hosted or cloud)

Node.js and npm

Appwrite Setup

Install and set up Appwrite locally or in the cloud.

Create a project in Appwrite and configure:

Database for blog posts

Authentication for user management

File storage for image uploads

Create collections in Appwrite for blog posts with fields like:

title: String

content: String

author: String

image: File

Frontend Setup

Clone the repo:

git clone https://github.com/your-username/blog-app.git

cd blog-app

Install dependencies:

npm install

Create a .env file:

env

REACT_APP_APPWRITE_ENDPOINT=http://localhost/v1

REACT_APP_APPWRITE_PROJECT_ID=your-project-id

Run the app:

npm start

Usage

Open the app at http://localhost:3000

Sign up or log in to create blog posts, edit them, and explore posts by others.

License

This project is licensed under the MIT License.
