# Gutenberg Project

A social cataloging website that allows users to freely search its database of books, annotations, and reviews.

## Overview

This project is a React application built with Vite.  It provides a user interface for browsing and searching books, inspired by the designs provided in the Gutenberg Project UI Styleguide. [cite: 32, 49, 56]

## Features

* **Browse Books by Category:** Users can explore books by various genres (Fiction, Drama, Humor, Politics, Philosophy, History, Adventure). [cite: 49, 50, 56]
* **Search Functionality:** Users can search for books by title or author. [cite: 40, 45]
* **Book Card Display:** Each book is displayed in a card format, showing the title, author, and cover image. [cite: 47]
* **Responsive Design:** The application is designed to work seamlessly on various screen sizes (desktop and mobile). [cite: 48, 55]
* **Project Gutenberg Integration:** The project interacts with the Gutenberg Project's database or imitates its data structure. [cite: 49, 52, 53, 56]

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A fast build tool for modern web development.
* **Styled Components:** For styling React components.
* **React Router:** For handling navigation within the application.
* **Infinite Scroll:** To efficiently load and display large lists of books. [cite: 62]
* **Other Libraries:** (Add any other libraries you used, e.g., Axios for API calls)

##  Fonts

* **Montserrat:** Used throughout the project for headings, body text, and search input. [cite: 33, 35, 37, 39, 41, 42]

## Color Palette

* **Primary:** #5E56E7 [cite: 32]
* **Greys:** #F8F7FF, #F0F0F6, #A0A0A0, #333333 [cite: 32]

##  How to Run the Project

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Siddhesh-Ujj/bookstoredemo.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd bookstoredemo
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev
    ```

5.  **Open your browser:**

    * The application should be running at `http://localhost:5173/` or a similar address. Vite will usually print the exact address in your terminal.

##  Build for Production

1.  **Build the application:**

    ```bash
    npm run build # or yarn build or pnpm build
    ```

    * This will create an optimized production build of your application in the `dist` directory.

2.  **Serve the production build:**

    * You can use a static file server to serve the contents of the `dist` directory.  Vite provides a preview command:

        ```bash
        npm run preview # or yarn preview or pnpm preview
        ```

    * This will emulate a production environment locally.

##  Project Structure
├── index.html
├── public
│   ├── fonts
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── vite.svg
│   │   └── ...
│   ├── components
│   │   ├── BookCard.jsx
│   │   ├── BookList.jsx
│   │   ├── SearchBar.jsx
│   │   └── ...
│   ├── main.jsx
│   ├── styles.js
│   └── vite-env.d.ts
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
└── ...

##  Assignment-Specific Notes

* This project fulfills the requirements of the Gutenberg Project UI Styleguide assignment. [cite: 32, 49, 56]
* The UI components are designed according to the specifications provided in the style guide. [cite: 33, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47]
* Responsive design considerations have been implemented to ensure usability across devices. [cite: 48, 55]

##  Credits

* This project was developed by \Siddhesh Ujjainkar(Siddhesh-Ujj).
* UI design is based on the Gutenberg Project UI Styleguide. [cite: 32]
