# Blog Website with Next.js

## Overview

Welcome to the Blog Adaptive Website project built with Next.js! This web application offers a seamless user experience across various devices by adapting its layout and functionality to suit different screen sizes.

### Pages

- **Home**: The landing page welcomes users and provides an overview of the website.
- **About**: Learn more about the team, mission, and values on the About page.
- **Contact**: Reach out directly through the contact page for any questions or feedback.
- **Blog**: Explore a dynamic blog where users can share images and stories. The blog is powered by a MongoDB database, allowing users to store and retrieve their posts securely.

## Key Features

### Authentication and Authorization

- **Secure Authentication**: Users can sign in securely using their Google or GitHub accounts, or they can create a new account manually. Passwords are hashed using bcrypt for enhanced security.
- **Role-based Authorization**: Admin users have access to additional features, including managing posts and users through the admin panel.

### Admin Panel

- **User Management**: Admin users can view and manage user accounts, including deleting user accounts and their associated posts if necessary.
- **Post Management**: Admins have the ability to create, edit, and delete posts on the blog. They can also moderate user-generated content to maintain quality and relevance.

## Technology Stack

The website leverages the following technologies to deliver a robust and responsive user experience:

- **Next.js 14**: Next.js provides a powerful framework for building server-rendered React applications, offering benefits such as improved performance, SEO optimization, and simplified routing.
- **React**: The frontend of the website is built using React, a popular JavaScript library for building user interfaces.
- **CSS**: CSS is used for styling components and pages, ensuring a visually appealing and consistent design across the website.
- **MongoDB Atlas**: MongoDB Atlas serves as the cloud database platform, offering scalability, flexibility, and reliability for storing and managing data.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your MongoDB Atlas database and configure the connection string in the project.
4. Run the development server using `npm run dev`.


## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```


run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
