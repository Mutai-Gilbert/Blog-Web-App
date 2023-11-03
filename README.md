# Blog Web Application

This is a Blog Web Application built using Node.js, Express.js, EJS, and Bootstrap for creating, viewing, editing, and deleting blog posts. This application enables users to interact with blog posts through a user-friendly interface.

## Features

- **Post Creation:** Users can create new blog posts with titles and content.
- **Post Viewing:** Display all existing posts with titles and a snippet of content on the homepage.
- **Post Update/Delete:** Users can edit and delete existing posts.
- **Styling:** Bootstrap is utilized for an enhanced and responsive user interface.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
[https://github.com/Mutai-Gilbert/Blog-Web-App]
1. Navigate into the project directory:
```
cd blog-web-app
```

1. Install dependencies:
```
npm install express nodemon ejs
```
## Usage

1. Start the application:
node app.js
1. Access the application via the browser at [http://localhost:3000](http://localhost:3000).

## Structure

The project directory is organized as follows:

```
blog-web-app/
│
├── app.js # Entry point of the application
├── public/ # Contains static assets (CSS, images)
│ └── styles/
│ └── style.css # Styles for the application
├── views/ # EJS templates for views
│ ├── create.ejs # Form for creating a new post
│ ├── edit.ejs # Form for editing a post
│ ├── index.ejs # Homepage displaying all posts
│ └── post.ejs # View a single post
└── node_modules/ # Node.js modules (generated after npm install)
└── package.json # Project details and dependencies
```


## Additional Notes

- **Database:** This version of the application does not utilize a database. Posts are stored in memory and will not persist between sessions.
- Feel free to expand the application by integrating a database, adding user authentication, or any other desired features.

## Contributing

Pull requests are welcome. For major changes or new features, please open an issue first to discuss proposed changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).