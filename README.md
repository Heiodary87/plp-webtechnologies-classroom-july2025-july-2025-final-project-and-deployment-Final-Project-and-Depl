# 🌿 WellBeing Hub — Mini Health Companion

A modern, interactive wellness web app designed to help users manage their **physical, mental, and emotional health** through simple tools like a BMI calculator, workout planner, sleep tracker, and mindfulness guide.

---

## 🚀 Overview

**WellBeing Hub** is a multi-page front-end project built with **HTML**, **CSS**, and **JavaScript**.  
The goal is to demonstrate practical use of core web technologies to create an app that feels clean, interactive, and purpose-driven — blending design and function for daily well-being.

Each page focuses on a specific aspect of health:
- **Physical Health:** via BMI tracking and workout planning  
- **Rest & Recovery:** via sleep monitoring  
- **Mind Wellness:** via affirmations and focus exercises  

---

## 🧩 Core Features

| Feature | Description | Key JS Functionality |
|----------|--------------|----------------------|
| **BMI Calculator** | Calculates BMI from weight and height | Math operations, DOM manipulation, input validation |
| **Workout Planner** | Add or remove workouts with live progress display | Dynamic DOM updates, `localStorage` for persistence |
| **Sleep Tracker** | Input sleep hours and get feedback | Conditional logic with live UI feedback |
| **Mind Wellness** | Shows affirmations or breathing animation | Randomization (`Math.random`), timing (`setTimeout`) |

---

## 🧠 App Logic & Function Flow

### 🏠 Homepage
- Provides an introduction and navigation to all sections.
- Uses a fade-in or typing effect for welcoming text.
- Navigation bar links all other pages dynamically.

### ⚖️ BMI Calculator
- Formula:  
  ```js
  const bmi = weight / (height * height);

  JS evaluates user input → updates the DOM with BMI result and health status.

Displays advice messages like “Normal weight” or “Overweight”.

.🏋️ Workout Planner

Users can log workouts and remove them.

All data is stored in localStorage:

localStorage.setItem('workouts', JSON.stringify(workoutList));


On page load, saved workouts are reloaded dynamically.

A progress bar updates based on completed tasks.

.😴 Sleep Tracker

Accepts total sleep hours → evaluates and displays a personalized message.

if (hours < 6) message = "Too little sleep!";
else if (hours <= 8) message = "Good rest!";
else message = "You might be oversleeping.";


Encourages healthy sleep patterns through feedback.

.🧘 Mind Wellness

Displays random affirmations using an array and Math.random().

Optionally triggers a guided breathing animation using setTimeout for timed steps ("Inhale", "Hold", "Exhale").

Promotes mental calm and mindfulness.



🎨DESIGN PHILOSOPHY

The design emphasizes simplicity, clarity, and positive energy.
All styling is consistent across pages, using a shared color palette and modern layout system.

Color Palette

:root {
  --color-primary: #14b148e0;
  --color-secondary: #0fcfdd;
  --color-accent: antiqueWhite;
  --color-dark: #212121;
  --color-light: #F5F5F5;
}


STYLING APPROACH

Flexbox and CSS Grid for structure

Card-based layout for tools

Hover effects and fade-in animations for interactivity

Media queries for responsiveness (mobile-first)



⚙️ TECH STACK

HTML5 — Semantic structure and navigation

CSS3 — Custom variables, Flexbox, transitions, and responsive design

JavaScript (ES6) — DOM manipulation, setTimeout, setInterval, conditional logic, and local storage



🗂️ Folder Structure
wellbeing-hub/
│
├── index.html
├── bmi.html
├── workout.html
├── sleep.html
├── mind.html
├── contact.html
│
├── style.css
├── script.js
└── assets/
    ├── images/
    

💡DEVELOPMENT INSIGHTS

This project was built from scratch to strengthen front-end logic and real-world problem solving.
The emphasis was not only on functionality but also on readability, user experience, and clear code structure.

Key learning points:

Breaking a project into logical components (pages and functions)

Using addEventListener effectively

Implementing condition-based DOM updates

Creating reusable JS components

Understanding the use of setTimeout and setInterval in animations and timers



🧩POSSIBLE FUTURE ENHANCEMENTS

Weekly progress summary dashboard

Dark/light mode toggle

Integrate APIs for quotes or health tips

Sleep pattern visualization (chart.js or canvas)

Mobile PWA version for offline use



🧑‍💻 AUTHOR

Henry Obado
WEB Developer & Medical Student
📧 obadohenry98@gmail.com

📍 Nairobi, Kenya

This project is open-source and free to use for educational or personal learning purposes.

“A healthy mind and body are built through small, consistent steps — WellBeing Hub helps make those steps interactive and fun.”

