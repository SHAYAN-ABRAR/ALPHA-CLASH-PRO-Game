# ALPHA CLASH PRO — Keyboard Typing Game

A fast-paced browser typing game. A random letter appears on screen and lights up on a virtual keyboard. Press the matching key to score, or press the wrong one and lose a life.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

![ALPHA CLASH PRO gameplay](screenshots/gameplay.png)

## Features

- **Three-screen flow:** home → playground → final score, switched with small show/hide helpers.
- **Random target letter:** a new letter is drawn after every correct key press.
- **On-screen QWERTY keyboard** built from DaisyUI `kbd` components, with the target key highlighted.
- **Score and lives:** +1 point for the right key and −1 life for a wrong one. The game ends when lives reach zero.
- **Keyboard-only play:** a global `keyup` listener handles every key press, so no mouse is needed during a round.
- **Play Again** button on the final score screen.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | Tailwind CSS (Play CDN), DaisyUI 4, Google Fonts (Poppins, Anton) |
| Logic | Vanilla JavaScript (keyboard events, DOM manipulation) |

## Project Structure

```text
ALPHA-CLASH-PRO-Game/
├── index.html        # Home, playground and final-score sections
├── alpha-clash.js    # Game flow: key handling, scoring, lives, game over, replay
├── utility.js        # Helpers: random letter, key highlight, show/hide sections
├── styles.css        # Font utilities (Poppins, Anton)
├── tailwind.config.js
└── images/           # Background and UI icons
```

## Run Locally

```bash
git clone https://github.com/SHAYAN-ABRAR/ALPHA-CLASH-PRO-Game.git
cd ALPHA-CLASH-PRO-Game
# Open index.html in a browser, or serve the folder with VS Code Live Server
```

Click **Play Now**, then type the highlighted letter as fast as you can.

## How It Works

1. `play()` hides the home screen, shows the playground and calls `continueGame()`.
2. `continueGame()` picks a random letter, displays it and highlights the matching key.
3. On every `keyup`, the pressed key is compared with the target. A match adds a point and moves to the next letter. A miss removes a life.
4. At zero lives, `gameOver()` shows the final score screen.

## What I Learned

- Handling keyboard events and game state with plain JavaScript
- Organizing code into small utility functions shared across the game
- Styling interactive components quickly with Tailwind CSS and DaisyUI

## Author

**Shayan Abrar** · [GitHub](https://github.com/SHAYAN-ABRAR) · [LinkedIn](https://www.linkedin.com/in/shayan-abrar/) · [Portfolio](https://shayan-abrar.vercel.app)
