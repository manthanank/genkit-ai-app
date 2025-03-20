# Genkit AI API

A simple Express.js application that uses Genkit AI to interact with Google AI's Gemini models through a RESTful API.

## Features

- REST API to generate AI responses using Google's Gemini 2.0 Flash model
- Express.js backend with organized MVC architecture
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google AI API key

## Installation

1. Clone this repository

    ```bash
    git clone https://github.com/manthanank/genkit-ai-app.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Google AI API key:

    ```plaintext
    PORT=5000
    GOOGLE_GENAI_API_KEY=your_api_key_here
    ```

4. Start the server:

    ```bash
    npm start
    # or development mode:
    npm run dev
    ```

5. The server will run on `http://localhost:5000` by default.

## API Endpoints

### POST /api/ai/generate

Generate a response using the Gemini model.

#### Request Body

```json
{
  "prompt": "Your prompt here"
}
```

#### Response

```json
{
  "response": "Generated response here"
}
```

## Directory Structure

```tree
genkit-ai-api
├── .env                # Environment variables
├── .example.env        # Example environment file
├── .gitignore          # Git ignore file
├── index.js            # Entry point
├── package.json        # Dependencies and scripts
├── README.md           # Project documentation
├── controllers/        # Request handlers
│   └── aiController.js
├── routes/             # API routes
│   └── aiRoutes.js
└── services/           # Business logic
    └── aiService.js
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
