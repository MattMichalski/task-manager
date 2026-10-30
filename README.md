# Task Manager
A JavaScript task manager built with vanilla DOM manipulation. Organize tasks
across multiple boards, customize the background theme, and everything persists
in the browser via `localStorage` — refresh the page and your boards are still
there.

## Features

- Multiple boards with a duplicate-name guard
- Add, complete, and delete tasks per board
- Animated background themes, including the Matrix themes, plus custom top/bottom color pickers
- "Break it down" AI task breakdown
- All boards and tasks saved to `localStorage` (auto-save + restore on load)
- Quick-week view, food/grocery list, and "today" helpers
- Theme and background choices persist across sessions

## A note on the canvas engine

The canvas engine behind the animated backgrounds (the Matrix themes) was built with coaching and guidance. I wrote and debugged the code myself, rather than building that portion entirely solo.

## Tech

- Vanilla JavaScript (no frameworks)
- HTML / CSS (Bootstrap)
- Browser `localStorage` for persistence

## Run it

No build step needed:

1. Clone the repo
2. Open `Task-Manager/Task-Manager/taskManager.html` in a browser
   (or serve the folder with any static server, e.g. `npx serve`)

Or try the live demo via GitHub Pages: https://mattmichalski.github.io/task-manager/Task-Manager/Task-Manager/taskManager.html

## What this project shows

DOM manipulation, event handling, client-side state persistence with
`localStorage`, and a user-facing customization feature — the fundamentals of
interactive front-end work.
