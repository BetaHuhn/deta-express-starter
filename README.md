<div align="center">
  
# Deta Express Starter

Starter repository for a Express app using Deta Base written in TypeScript and running on Deta Micros

<br/>

</div>

## 👋 Introduction

This is a demo/starter template for a simple TypeScript Express API runnning on [Deta](https://deta.sh). It uses [Deta Base](https://docs.deta.sh/docs/base/about) as its database and [deta-base-orm](https://github.com/BetaHuhn/deta-base-orm) to structure and access it.

## 🚀 Get Started

Click "Use this template" on the GitHub website to create a new repository based on this template.

Clone the newly created repository and cd into it:

```shell
git clone https://github.com/<username>/deta-express-starter && cd $_
```

Install the dependencies:

```shell
npm install
```

Create a `.env` file and add your Deta project key:

```env
DETA_PROJECT_KEY=<your project key>
```

Start the development server: 

```shell
npm run dev
```

Deploy to Deta:

```shell
npm run deploy
```

## 📚 Usage

The example consists of a simple REST API with two main resources, `users` and `messages`. Each message has a `text` and is sent `from` one user `to` another. Take a look at `src/models/` to see how they are structured using [deta-base-orm](https://github.com/BetaHuhn/deta-base-orm).

The API is served under `/api/v1` with simple `GET` and `POST` endpoints at `/api/v1/user` and `/api/v1/message`. They both return JSON data in the following format:

```json
{
    "status": 200,
    "message": "ok",
    "data": {}
}
```

Here is a list of all the endpoints:

### User

**POST /api/v1/user**

Create a new user.

Payload:

```json
{ "username": "username", "email": "email" }
```

**GET /api/v1/user**

Get all users.

Response:

```json
{
    "status": 200,
    "message": "ok",
    "data": [
        {
            "username": "...",
            "email": "...",
            "key": "..."
        },
    ]
}
```

**GET /api/v1/user/:key**

Get a single user by its key.

Response:

```json
{
    "status": 200,
    "message": "ok",
    "data": {
        "username": "...",
        "email": "...",
        "key": "..."
    }
}
```

### Message

**POST /api/v1/message**

Create a new message.

Payload:

```json
{ "text": "Hello World", "from": "user key", "to": "user key" }
```

**GET /api/v1/message**

Get all messages.

Response:

```json
{
    "status": 200,
    "message": "ok",
    "data": [
        {
            "text": "...",
            "from": "...",
            "to": "...",
            "key": "..."
        },
    ]
}
```

**GET /api/v1/message/:key**

Get a single message by its key.

Response:

```json
{
    "status": 200,
    "message": "ok",
    "data": {
        "text": "...",
        "from": "...",
        "to": "...",
        "key": "..."
    }
}
```

**GET /api/v1/message/sent/:key**

Get all messages sent from a user.

Response:

```json
{
    "status": 200,
    "message": "ok",
    "data": [
        {
            "text": "...",
            "from": "...",
            "to": "...",
            "key": "..."
        },
    ]
}
```

**GET /api/v1/message/received/:key**

Get all messages received by a user.

Response:

```json
{
    "status": 200,
    "message": "ok",
    "data": [
        {
            "text": "...",
            "from": "...",
            "to": "...",
            "key": "..."
        },
    ]
}
```

Checkout `/src/router/api` to see how they are implemented.

## ❔ About

This project was developed by me ([@betahuhn](https://github.com/BetaHuhn)) in my free time. If you want to support me:

[![Donate via PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=394RTSBEEEFEE)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F81S2RK)

## 📄 License

Copyright 2021 Maximilian Schiller

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
