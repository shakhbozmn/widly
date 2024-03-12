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
├── controllers/ # Route logic
│ ├── index.js # Main controller
│ └── users/ # User controller
│ └── index.js
├── data/ # Contains Database file
| └── widly_db_16395.json #Database file
├── public/ # Static assets
│ ├── images/ # Image files
│ ├── js/ # JavaScript files
│ └── styles/ # Stylesheets
│ └── style.scss # Main stylesheet
│ └── _typography.css # Typography stylesheet
├── routes/ # Application routes
│ ├── api/ # Api (server-side) routes
| └── event/ # Main functions for event routs
| └── index.js # Contains router for routing
│ └── web/ # Web (client-side) routes
| └── home/ # Main functions for routing
| └── index.js # Contains router for routing
├── views/ # Pug templates
│ ├── head.pug # Contains head of the HTML Markup
│ └── home/ # Contains logic layout for Home and other pages
│ └── addUpdateEvent.pug # Add or Update event layout and logic
│ └── eventList.pug # Added Events layout and logic
│ └── index.pug # Home Page layout and logic
└── services/ # Business logic
└── eventService/ # Event services
└── index.js
└── validators/ # validations for inputs
└── index.js
├── app.js # Application entry point
├── package.json # Project configuration and dependencies
├── .gitignore # Specifies files not to track
```

## Links

- **Live Demo:** [https://widly.shahbozms.uz](https://widly.shahbozms.uz)

## Author

- **Shahboz Munirov** - [shakhbozmn](https://github.com/shakhbozmn)

