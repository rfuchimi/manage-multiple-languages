# Manage Multiple Languages for Chatbot

A backend service created with Node.js, Express.js and Watson Developer Cloud SDK (for Watson Conversation Service). 
This project was created in order to test the usage of 'Identify Language' in Watson Language Translator.

## Problem & Idea
Managing a chatbot with multiple language is a hard challenge for a developer. So if you first use an identify language function, you can validate the language and then redirect to the correct workspace (if you are using Watson Conversation service).

## How to install and setup
1. Clone this project from [Github](https://github.com/victorshinya/manage-multiple-languages)
2. Open your terminal and then install all dependencies using [NPM](https://www.npmjs.com) (Node Package Management)
```bash
npm install
```
3. Create .env file
```
touch .env
```
4. Set up all environment variables in your .env file
```js
# Environment variables
LANGUAGE_TRANSLATOR_USERNAME=<WLT_CREDENTIALS_USERNAME>
LANGUAGE_TRANSLATOR_PASSWORD=<WLT_CREDENTIALS_PASSWORD>
```

## Run your app
1. Complete the previous step for app configuration, and then
2. Start your Node.js app
```bash
node server.js
```
3. After starting your app, you will have access to the service through API at http://localhost:3000/language/identify
