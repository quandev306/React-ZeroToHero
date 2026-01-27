# ✅ Mini Project: Todo App

## 🎯 Mục Tiêu

Xây dựng Todo App hoàn chỉnh áp dụng tất cả kiến thức React đã học:
- Hooks (useState, useEffect, useReducer, useContext)
- Component patterns
- Styling với CSS Modules
- LocalStorage persistence

---

## 📋 Features

### Core Features
- ✅ Add todo
- ✅ Edit todo (inline)
- ✅ Delete todo
- ✅ Toggle complete
- ✅ Filter (All / Active / Completed)
- ✅ Clear completed
- ✅ Persist to localStorage

### UI/UX
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Empty states
- ✅ Loading states
- ✅ Keyboard shortcuts (Enter to submit)

---

## 📁 Project Structure

```
05-mini-project/
├── src/
│   ├── components/
│   │   ├── TodoApp.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoFilter.jsx
│   │   └── styles/
│   │       ├── TodoApp.module.css
│   │       ├── TodoForm.module.css
│   │       └── ...
│   ├── context/
│   │   └── TodoContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## 🚀 Setup

```bash
# Tạo project
npm create vite@latest todo-app -- --template react
cd todo-app
npm install
npm run dev
```

---

## 💡 Implementation Steps

### Step 1: Basic Structure
1. Tạo TodoApp component
2. useState cho todos array
3. Add/Delete/Toggle functions

### Step 2: Components
1. Extract TodoForm, TodoList, TodoItem
2. Props drilling đúng cách
3. Conditional rendering

### Step 3: Styling
1. CSS Modules cho mỗi component
2. Responsive design
3. Animations

### Step 4: Context + Reducer
1. Tạo TodoContext
2. useReducer cho actions
3. Replace prop drilling

### Step 5: Persistence
1. Custom hook useLocalStorage
2. Load initial state
3. Save on changes

### Step 6: Polish
1. Edit inline
2. Filter tabs
3. Clear completed
4. Empty state

---

## 📝 Component Code Hints

### TodoContext.jsx
```jsx
import { createContext, useContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
  filter: 'all' // 'all' | 'active' | 'completed'
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return { ...state, todos: action.payload };
    case 'ADD':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'EDIT':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        )
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      dispatch({ type: 'INIT', payload: JSON.parse(saved) });
    }
  }, []);
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);
  
  // Filtered todos
  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });
  
  const value = {
    todos: filteredTodos,
    allTodos: state.todos,
    filter: state.filter,
    activeCount: state.todos.filter(t => !t.completed).length,
    addTodo: (text) => dispatch({
      type: 'ADD',
      payload: { id: Date.now(), text, completed: false }
    }),
    toggleTodo: (id) => dispatch({ type: 'TOGGLE', payload: id }),
    deleteTodo: (id) => dispatch({ type: 'DELETE', payload: id }),
    editTodo: (id, text) => dispatch({ type: 'EDIT', payload: { id, text } }),
    clearCompleted: () => dispatch({ type: 'CLEAR_COMPLETED' }),
    setFilter: (filter) => dispatch({ type: 'SET_FILTER', payload: filter })
  };
  
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}
```

---

## ✅ Checklist

- [ ] Add, toggle, delete todos
- [ ] Edit todo inline
- [ ] Filter: All / Active / Completed
- [ ] Clear completed
- [ ] LocalStorage persistence
- [ ] Responsive design
- [ ] Clean component structure
- [ ] Context + Reducer pattern

---

**Thời gian ước tính: 6-8 giờ**
