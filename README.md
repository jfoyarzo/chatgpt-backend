<a name="readme-top"></a>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Storyteller AI ](#-storyteller-ai-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Author ](#-author-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)


# 📖 Storyteller AI <a name="about-project"></a>

**Storyteller AI** is a full-stack app that uses the OpenAI API to enable a chatbot that answers questions in the form of a story, using analogies to explain topics. It consists of a single endpoint created with Express on the backend that sends the request to the API and a frontend built with React. This project was built as an exercise to integrate the OpenAI API with a full-stack app. You can see the frontend repository [here](https://github.com/jfoyarzo/chatgpt-frontend).


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://react.dev/">React</a></li>
  </ul>
</details>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>API</summary>
  <ul>
    <li><a href="https://openai.com/blog/openai-api">OpenAI API</a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

- You can ask questions in the chatbox.
- Uses chat-gpt ver 3.5
- The chatbot responds by telling a story.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

To run this project you need:
- Git
- Npm/Node.js

### Setup

Clone this repository to your desired folder using this command:

```
git clone git@github.com:jfoyarzo/chatgpt-backend.git
```

```
cd chatgpt-backend
```


### Install

Install this project's dependencies using:

  ```
  npm install
  ```

Since this project uses the OpenAI API, you need to supply your corresponding credentials by creating a `.env` file in the root of the app. You can use the provided `.env.example` file as a guide. If you don't have an API key yet, you can get one by signing up on the [OpenAI API Website](https://openai.com/blog/openai-api).

### Usage

To run the project, execute the following command from the root folder of the app:
```
npm start
```
this will start the backend on http://localhost:8000/


## 👥 Author <a name="authors"></a>

👤 **Felipe Oyarzo**

- GitHub: [@jfoyarzo](https://github.com/jfoyarzo)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jorge-felipe-oyarzo-contreras)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page]([../../issues/](https://github.com/jfoyarzo/chatgpt-backend/issues)).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>


If you like this project please consider giving it a star!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

This project was built following the [How to Build an AI-Powered ChatBot](https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-openai-chatgpt-nodejs-and-react/) Tutorial by [Njoku Samson Ebere](https://www.freecodecamp.org/news/author/ebereplenty/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>