# Widly - Event Planning Application

## About the App

Widly is a dynamic web application designed to simplify event planning and management. Users can effortlessly create, view, update, and delete events, making it easier to organize gatherings, meetings, and social events. The app caters to both future and past events, ensuring a comprehensive event planning experience.

## Getting Started

Follow these instructions to get a copy of Widly running on your local machine for development and testing purposes.

### Prerequisites

Before running the app locally, ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from official website of Node.js https://nodejs.org.

### Installation

1. Clone the Widly repository:
    ```
    git clone https://github.com/shakhbozmn/widly.git
    ```

2. Navigate to the project directory:
    ```
    cd widly
    ```

3. Install the required dependencies:
    ```
    npm install
    ```

4. Start the application:
    ```
    npm start
    ```

5. Visit `http://localhost:3000` in your browser to start using Widly.

## Dependencies

- Express.js - The server framework used
- Pug - Templating engine
- Nodemon - A tool that automatically restarts the node application when file changes in the directory are detected
- Body Parser - Middleware that processes incoming request bodies, making it easier to handle POST and PUT requests
- Express Validator - A package that supports data validation and can be used to integrate with the NodeJS express framework to validate API request parameters

## Project Structure

```
widly/
├── app.js # Application entry point
├── package.json # Project configuration and dependencies
├── .gitignore # Specifies files not to track
├── public/ # Static assets
│ ├── images/ # Image files
│ ├── javascripts/ # JavaScript files
│ └── styles/ # Stylesheets
│ └── style.css # Main stylesheet
├── routes/ # Application routes
│ ├── index.js # Main routes
│ └── users/ # User-specific routes
│ └── index.js
├── views/ # Pug templates
│ ├── index.pug # Main page template
│ └── layout.pug # Base layout template
├── controllers/ # Route logic
│ ├── index.js # Main controller
│ └── users/ # User controller
│ └── index.js
└── services/ # Business logic
├── index.js # Main services
└── users/ # User services
└── index.js
```

## Links

- **GitHub Repository:** 
- **Live Demo:** [https://widly.glitch.me](https://widly.glitch.me)

## Author

- **Shahboz Munirov** - [shakhbozmn](https://github.com/shakhbozmn)

