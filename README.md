# Blog Project - CRUD operations
A simple Blog Post application that provides basic CRUD (Create, Read, Update, Delete) functionality for managing blog posts. This project is built with React for the frontend and Node.js with Express for the backend.

Deployment link : https://blog-post-frontend-f1y0.onrender.com/
https://blog-web-xmy7.onrender.com/
## Table of Contents
* Overview
* Frontend Setup
* Backend Setup
* API Endpoints
* Deployment
* Usage Instructions
* Technologies Used

### Overview
This Blog Post application allows users to:

- C -Create a new post
- R -View a list of posts
- U-  Update any post
- D- Edit an existing post/ Delete a post

### Frontend Setup
Setup Environment :
* install Node.js
* git clone https://github.com/your-username/Assg_web.git
* cd Assg_web/my-app
* Open terminal and write command "npm start"

### Backend Setup
* Open VSCode
* git clone https://github.com/your-username/blog-post-app.git
* cd Assg_web/my-app/backend
* nodemon server.js

### API Endpoints
API endpoints are available for handling the blog post CRUD operations are :
* GET /posts  -> to  fetch all blog posts
* POST /posts -> Create a new blog post and store in database (MongoDB)
* GET /posts/:id -> Fetch a post by ID.
* PUT /posts/:id -> Update a blog post by ID.
*  DELETE /posts/:id -> Delete a blog post by ID.

### Deployment
For Deploying this application I used Rnder platform.
##### Backend Deployment on Render
- Go to Render and sign in or create an account.
- Navigate to the Dashboard and click on New > Web Service 
- Connect Your Repository and dir as ./my-app/backend
- Configure Backend Settings:
  > In Build part : npm install
  > 
  > In start command : node server.js
- Set Up Environment Variables
- Deploy the Backend

##### Frontend Deployment on Render
- Go to Render and sign in or create an account.
- Navigate to the Dashboard and click on New > Static Site.
- Configure Frontend Settings:
  > In the Build Command-> npm install;npm run build
  > 
  > In Publish Directory-> ./build

- Deploy the Frontend

### Usage Instructions
##### In the Side bar :
- All post : Navigate to homepage to show all the posts.
- Create post :Click on the  button to open a form where you can enter a post's title and content
##### In HomePage 
- Create a Post: Click on the "Create" button to open a form where you can enter a post's title and content.
- View Posts: The homepage lists all the posts, click it to navigate to each post's details page.
- Edit a Post: On a post's detail page, click the "Edit" button to open the form with the post's existing title and content for editing.
- Delete a Post: Click the "Delete" button on the post detail page to delete the post.

### Technologies Used :
* Frontend:
React.js, React Router
* Backend:
Node.js, Express.js
* MongoDB for database
* Axios for HTTP requests
* Styling : Tailwind CSS
