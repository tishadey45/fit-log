````md
# 💪 FitLog — Workout Library

FitLog is a responsive workout library and workout planning web application built with Next.js. Users can browse workouts, view detailed exercise information, add workouts to Today's Plan, save workouts for later, and manage their workout activities from the My Plan page.

## 🔗 Project Links

- 🌐 **Live Website:** https://fit-log-lilac.vercel.app
- 💻 **GitHub Repository:** https://github.com/tishadey45/fit-log

---

## ✨ Key Features

### 1. 🏋️ Workout Library
- Browse all available workouts from the FitLog API.
- Responsive workout cards with:
  - Workout image
  - Category
  - Workout name
  - Equipment
  - Duration
  - Calories
  - Rating
- Responsive grid layout for mobile, tablet, and desktop.

### 2. 📋 Workout Details Page
- Dedicated details page for every workout.
- Displays:
  - Large workout image
  - Workout title
  - Description
  - Category tags
  - Equipment
  - Difficulty
  - Sets
  - Reps
  - Duration
  - Calories
  - Rating
  - Step-by-step instructions
- Users can add a workout to Today's Plan or save it for later.

### 3. 📌 Today's Plan & Saved Workouts
- Add workouts to Today's Plan.
- Save workouts for later.
- Navbar counters show the current number of planned and saved workouts.
- My Plan page contains separate:
  - Today's Plan tab
  - Saved tab
- Today's Plan supports a maximum of five lifts.

### 4. ✅ Workout Management
- View workout details from the My Plan page.
- Mark a planned workout as done.
- Remove workouts from Today's Plan.
- Remove workouts from Saved.
- Shows relevant toast notifications after user actions.

### 5. 🔄 Dynamic Sorting
- Sort workout lists by:
  - Duration
  - Calories
  - Rating
- Sorting updates the current workout list dynamically.

### 6. 📊 Dynamic Workout Statistics
The My Plan page dynamically calculates:
- Total Exercises
- Total Minutes
- Total Calories

These values update automatically when workouts are added or removed.

### 7. 📱 Fully Responsive Design
- Mobile-friendly navigation
- Responsive hero section
- Responsive workout grid
- Responsive workout details page
- Responsive My Plan page
- Works across mobile, tablet, and desktop screen sizes.

### 8. 🔔 Loading, Empty & Error States
- Loading animation while workout data is being fetched.
- Helpful empty state when no workouts are available.
- Custom 404 page for unknown or invalid routes.
- Toast notifications for important user actions.

### 9. 💾 Persistent Data
- Today's Plan and Saved workouts are stored in `localStorage`.
- Workout selections remain available after refreshing the page.

---

## 🛠️ Technologies Used

- **Next.js** — React framework for building the application
- **Next.js App Router** — Routing and page navigation
- **React** — Building reusable UI components
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive layouts
- **DaisyUI** — UI components
- **React Hot Toast** — Toast notifications
- **Lucide React** — Icons
- **Next/Image** — Optimized image handling
- **LocalStorage** — Persisting plan and saved workout data
- **REST API** — Fetching workout data

---

## 🔌 API

### All Workout Data

```text
https://api.api-store.workers.dev/api/fitlog
````

### Single Workout Details

```text
https://api.api-store.workers.dev/api/fitlog/:id
```

---

## 📄 Main Pages

| Page                      | Route             |
| ------------------------- | ----------------- |
| 🏠 Home / Workout Library | `/`               |
| 🏋️ Workout Details       | `/workout/[id]`   |
| 📋 My Plan                | `/my-plan`        |
| ❌ Not Found               | Custom `404` page |

---

## 🎯 Main Functionalities

### Add to Today's Plan

Users can add a workout from the details page to Today's Plan.

After adding:

* Plan counter increases.
* Workout appears on My Plan.
* Success toast is displayed.
* Maximum plan limit is five workouts.

### Save for Later

Users can save a workout from the details page.

After saving:

* Saved counter increases.
* Workout appears in the Saved tab.
* Success toast is displayed.

### Mark as Done

Users can mark a planned workout as completed.

After clicking **Mark as Done**:

* Workout is removed from Today's Plan.
* A success toast is displayed.

### Remove Workout

Users can remove workouts using the `X` button.

After removing:

* Workout disappears from the current list.
* Relevant counter and statistics update.
* A toast notification is displayed.

---

## 📊 My Plan

The My Plan page contains:

* Today's Plan
* Saved Workouts
* Exercise count
* Total minutes
* Total calories
* Workout thumbnails
* Workout information
* View Details button
* Mark as Done button
* Remove button
* Sort functionality
* Empty state

---

## 🎨 UI Highlights

* Dark fitness-focused design
* Lime accent color
* Clean workout cards
* Responsive navigation
* Interactive buttons
* Toast feedback
* Smooth and user-friendly experience

---

## 🚀 Deployment

The project is deployed using Vercel.

### 🌐 Live Website

https://fit-log-lilac.vercel.app

### 💻 GitHub Repository

https://github.com/tishadey45/fit-log

---

## 👩‍💻 Author

### Tisha Dey

GitHub:
https://github.com/tishadey45

Project Repository:
https://github.com/tishadey45/fit-log

---

## 💪 FitLog

**Train with intent. Log every set.**

```


