# 🚀 Phase 4: Final Project - Task Management App

> Tuần 8-10 | Dự án tổng hợp tất cả kiến thức

## 🎯 Mục Tiêu

Xây dựng ứng dụng Task Management hoàn chỉnh, tích hợp tất cả những gì đã học:
- CSS modern (Flexbox, Grid, Responsive)
- JavaScript async (API calls, error handling)
- React (Hooks, Components, Context)
- Real-world patterns

---

## 📋 Features

### Core Features
| Feature | Description | Concepts |
|---------|-------------|----------|
| 🔐 Auth | Login/Logout (Mock) | Context, Protected Routes |
| 📋 Tasks CRUD | Create, Read, Update, Delete | useState, API calls |
| 🏷️ Categories | Organize tasks | Filter, Relationships |
| 🔍 Search | Find tasks | Debounce, Filter |
| 📱 Responsive | Mobile-first | CSS Grid, Media Queries |
| 🌙 Dark Mode | Theme toggle | CSS Variables, Context |

### Nice-to-have
- Drag & Drop reorder
- Due dates with calendar
- Priority levels
- Notifications

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React + Vite |
| Styling | CSS Modules |
| Routing | React Router v6 |
| State | Context + useReducer |
| API | JSONPlaceholder / Mock |
| Icons | Lucide React |

---

## 📁 Project Structure

```
04-final-project/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   ├── Spinner/
│   │   │   └── index.js
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   └── Layout/
│   │   └── features/
│   │       ├── auth/
│   │       ├── tasks/
│   │       └── categories/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── TaskContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useTasks.js
│   │   ├── useLocalStorage.js
│   │   └── useDebounce.js
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Dashboard/
│   │   └── NotFound/
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── taskService.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   ├── App.jsx
│   ├── Router.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

---

## 🚀 Setup

```bash
# Create project
npm create vite@latest task-manager -- --template react
cd task-manager

# Install dependencies
npm install react-router-dom lucide-react

# Start dev server
npm run dev
```

---

## 📝 Implementation Guide

### Week 8: Foundation

#### Day 1-2: Project Setup
- [ ] Initialize Vite project
- [ ] Setup folder structure
- [ ] Create global styles và CSS variables
- [ ] Setup React Router

#### Day 3-4: Common Components
- [ ] Button component với variants
- [ ] Input component với validation styles
- [ ] Modal component
- [ ] Loading spinner

#### Day 5-7: Layout & Theme
- [ ] Header component
- [ ] Sidebar navigation
- [ ] Layout wrapper
- [ ] Dark/Light theme toggle
- [ ] Responsive navigation

### Week 9: Core Features

#### Day 1-3: Authentication
- [ ] Login page UI
- [ ] Auth Context
- [ ] Protected Route component
- [ ] Mock auth service
- [ ] Persist auth state

#### Day 4-7: Tasks Management
- [ ] Task list component
- [ ] Task card component
- [ ] Add task modal/form
- [ ] Edit task
- [ ] Delete with confirmation
- [ ] Toggle complete

### Week 10: Polish & Deploy

#### Day 1-3: Advanced Features
- [ ] Search với debounce
- [ ] Filter by status/category
- [ ] Categories management
- [ ] Empty states

#### Day 4-5: UX Polish
- [ ] Loading states
- [ ] Error handling
- [ ] Toast notifications
- [ ] Animations/transitions

#### Day 6-7: Final
- [ ] Code cleanup
- [ ] README documentation
- [ ] Build production
- [ ] (Optional) Deploy to Vercel/Netlify

---

## 🎨 Design Reference

### Color Palette
```css
:root {
  /* Light Theme */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f7fa;
  --text-primary: #1a1a2e;
  --text-secondary: #666666;
  --accent: #667eea;
  --accent-hover: #5a6fd6;
  --success: #27ae60;
  --warning: #f39c12;
  --danger: #e74c3c;
  
  /* Dark Theme */
  --dark-bg-primary: #1a1a2e;
  --dark-bg-secondary: #2d2d44;
  --dark-text-primary: #ffffff;
  --dark-text-secondary: #a0a0a0;
}
```

### Typography
```css
:root {
  --font-family: 'Inter', -apple-system, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
}
```

---

## ✅ Final Checklist

### Functionality
- [ ] User can login/logout
- [ ] User can create tasks
- [ ] User can edit tasks
- [ ] User can delete tasks
- [ ] User can mark tasks complete
- [ ] User can filter tasks
- [ ] User can search tasks
- [ ] User can toggle dark mode
- [ ] Data persists in localStorage

### UI/UX
- [ ] Responsive on all devices
- [ ] Loading states shown
- [ ] Error messages displayed
- [ ] Empty states handled
- [ ] Smooth animations
- [ ] Consistent styling

### Code Quality
- [ ] Components are reusable
- [ ] State management is clean
- [ ] No prop drilling
- [ ] Code is well-organized
- [ ] README is complete

---

## 🏆 Kết Thúc Khóa Học

Khi hoàn thành dự án này, bạn đã:
- ✅ Nắm vững CSS modern
- ✅ Thành thạo JavaScript async
- ✅ Biết cách xây dựng React app từ đầu
- ✅ Có portfolio project để showcase

**Chúc mừng bạn đã hoàn thành React Zero To Hero! 🎉**
