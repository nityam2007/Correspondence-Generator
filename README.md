Correspondence Generator
========================

This is a simple web application that generates professional correspondence (letters/emails) using AI. The user inputs the sender, recipient, subject, and message, and the app generates a formatted correspondence using the Groq API.

Features
--------

-   User input form for sender, recipient, subject, and message
-   AI-generated correspondence using Groq API
-   Copy to clipboard functionality for generated text

Technologies Used
-----------------

-   Node.js
-   Express.js
-   Tailwind CSS
-   Groq SDK
-   HTML/CSS/JavaScript

Getting Started
---------------

### Prerequisites

-   Node.js and npm installed
-   Groq API key

### Installation

1.  Clone the repository:

    bash

    Copy code

    `git clone https://github.com/nityam2007/Correspondence-Generator.git
    cd correspondence-generator`

2.  Install dependencies:

    bash

    Copy code

    `npm install`

3.  Create a `.env` file in the root of the project and add your Groq API key:

    makefile

    Copy code

    `GROQ_API_KEY=your_groq_api_key`

4.  Build Tailwind CSS:

    bash

    Copy code

    `npm run build:css`

### Running the App

1.  Start the server:

    bash

    Copy code

    `npm start`

2.  Open your browser and navigate to `http://localhost:3000`.

Project Structure
-----------------

lua

Copy code

`.
├── app.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   └── styles.css
│   │   └── output.css
│   ├── js
│   │   └── main.js
│   └── index.html
├── tailwind.config.js
├── .env
└── vercel.json`

Usage
-----

1.  Fill in the sender, recipient, subject, and message fields in the form.
2.  Click the "Generate Correspondence" button.
3.  The generated correspondence will be displayed below the form.
4.  Click the copy icon to copy the generated text to your clipboard.

Deployment
----------

To deploy this application, you can use any hosting service that supports Node.js applications, such as Heroku, AWS, or DigitalOcean.

License
-------

This project is licensed under the MIT License - see the <LICENSE> file for details.
