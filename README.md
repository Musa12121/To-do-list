# To-Do List

A lightweight to do list application built with HTML, CSS, and JavaScript. Works with persistent local storage.

## Features

- **Create Tasks**: Quickly add new items with unique identifiers (`crypto.randomUUID()`).
- **Inline Editing**: Update existing task titles directly within the list.
- **Delete Tasks**: Remove completed or unwanted tasks instantaneously.
- **Persistent Storage**: Automatically syncs tasks with the browser's `localStorage` so data persists across page reloads.
- **Responsive Layout**: Clean, centered UI built with CSS Grid and Flexbox.

## Tech Stack

- **HTML5**: Semantic markup structure.
- **CSS3**: Custom styling using Flexbox, CSS Grid, and native CSS nesting.
- **Vanilla JavaScript (ES6+)**: DOM manipulation, event handling, and `localStorage` state management.

## Project Structure

```text
├── index.html   # Application markup and structure
├── style.css    # Layout and component styles
├── script.js    # CRUD logic and localStorage synchronization
└── README.md    # Project documentation
```

## Getting Started

No build tools or package installations are required.

1. Clone the repository or download the project folder.
2. Open `index.html` directly in any modern web browser, or serve the folder using a local development server (e.g., VS Code **Live Server**).

## Usage

- **Add a task**: Type your task into the input field and click **Add** (or press `Enter`).
- **Update a task**: Click directly on an existing task's text to edit it, then click **Update** to save changes.
- **Delete a task**: Click **Delete** next to any task to remove it from the list and storage.
