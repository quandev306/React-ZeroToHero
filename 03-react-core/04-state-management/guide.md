# 📦 Bài 4: State Management

## 🎯 Mục Tiêu

- useContext cho global state
- useReducer cho complex state
- Context + Reducer pattern
- Khi nào cần state management library

---

## 📚 Lý Thuyết

### 1. Prop Drilling Problem

```jsx
// ❌ Prop drilling - truyền qua nhiều levels
function App() {
  const [user, setUser] = useState({ name: 'John' });
  return <Header user={user} />;
}

function Header({ user }) {
  return <Navigation user={user} />;
}

function Navigation({ user }) {
  return <UserMenu user={user} />;
}

function UserMenu({ user }) {
  return <span>{user.name}</span>;
}
```

### 2. useContext

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext(null);

// 2. Create Provider
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Create custom hook (optional but recommended)
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// 4. Wrap App
function App() {
  return (
    <UserProvider>
      <Header />
      <MainContent />
    </UserProvider>
  );
}

// 5. Use anywhere
function UserMenu() {
  const { user, logout } = useUser();
  
  if (!user) return <LoginButton />;
  
  return (
    <div>
      <span>{user.name}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### 3. useReducer

```jsx
import { useReducer } from 'react';

// Initial state
const initialState = {
  items: [],
  loading: false,
  error: null
};

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
      
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, items: action.payload };
      
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
      
    case 'ADD_TODO':
      return { ...state, items: [...state.items, action.payload] };
      
    case 'TOGGLE_TODO':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
      
    case 'DELETE_TODO':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
      
    default:
      return state;
  }
}

// Usage
function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  const addTodo = (text) => {
    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), text, completed: false }
    });
  };
  
  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };
  
  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <ul>
        {state.items.map(item => (
          <li 
            key={item.id}
            onClick={() => toggleTodo(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 4. Context + Reducer Pattern

```jsx
// TodoContext.jsx
import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext(null);

const initialState = { items: [], filter: 'all' };

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, items: [...state.items, action.payload] };
    case 'TOGGLE':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    case 'DELETE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  // Action creators
  const actions = {
    addTodo: (text) => dispatch({
      type: 'ADD',
      payload: { id: Date.now(), text, completed: false }
    }),
    toggleTodo: (id) => dispatch({ type: 'TOGGLE', payload: id }),
    deleteTodo: (id) => dispatch({ type: 'DELETE', payload: id }),
    setFilter: (filter) => dispatch({ type: 'SET_FILTER', payload: filter })
  };
  
  // Selectors
  const filteredItems = state.items.filter(item => {
    if (state.filter === 'active') return !item.completed;
    if (state.filter === 'completed') return item.completed;
    return true;
  });
  
  return (
    <TodoContext.Provider value={{ 
      items: filteredItems,
      filter: state.filter,
      totalCount: state.items.length,
      ...actions 
    }}>
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

### 5. Khi Nào Cần Redux/Zustand?

| Situation | Solution |
|-----------|----------|
| Local component state | useState |
| Complex local state | useReducer |
| Share state 2-3 levels | Lift state up |
| Global state (auth, theme) | Context + useReducer |
| Large app, nhiều global state | Redux/Zustand |
| Server state (API data) | React Query/SWR |

---

## 💻 Bài Tập

1. **Theme Context**: Toggle dark/light mode
2. **Auth Context**: Login/logout with protected routes
3. **Todo App với Reducer**: CRUD + filter

---

## ✅ Checklist

- [ ] Tạo và sử dụng Context
- [ ] Custom hook cho Context
- [ ] Viết reducer function
- [ ] Dispatch actions
- [ ] Kết hợp Context + Reducer
