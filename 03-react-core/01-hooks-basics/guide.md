# 🪝 Bài 1: React Hooks Basics

## 🎯 Mục Tiêu

- Hiểu useState và useEffect
- Nắm vững component lifecycle trong functional components
- Xử lý events và forms

---

## 📚 Lý Thuyết

### 1. useState - Quản lý State

```jsx
import { useState } from 'react';

function Counter() {
  // [state, setState] = useState(initialValue)
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### 2. useState với Objects/Arrays

```jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  // ❌ KHÔNG làm thế này (mutate state)
  // user.name = 'John';
  
  // ✅ Luôn tạo object mới
  const updateName = (name) => {
    setUser({ ...user, name });
    // hoặc
    setUser(prev => ({ ...prev, name }));
  };
  
  // Arrays
  const [items, setItems] = useState([]);
  
  // Thêm item
  const addItem = (item) => {
    setItems([...items, item]);
  };
  
  // Xóa item
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  // Update item
  const updateItem = (id, updates) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };
}
```

### 3. useEffect - Side Effects

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Chạy sau mỗi render
  useEffect(() => {
    console.log('Render completed');
  });
  
  // Chạy 1 lần khi mount (componentDidMount)
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty dependency array
  
  // Chạy khi userId thay đổi
  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    
    fetchUser();
  }, [userId]); // Dependencies
  
  // Cleanup function (componentWillUnmount)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    return () => {
      clearInterval(timer); // Cleanup
    };
  }, []);
  
  if (loading) return <p>Loading...</p>;
  return <div>{user?.name}</div>;
}
```

### 4. useEffect Dependencies

```jsx
useEffect(() => {
  // Code here
}, dependencies);

// dependencies là gì?
// - Không có: Chạy sau MỌI render
// - []: Chạy 1 lần khi mount
// - [a, b]: Chạy khi a HOẶC b thay đổi
```

### 5. Handling Events

```jsx
function EventExamples() {
  // Click
  const handleClick = (e) => {
    console.log('Clicked!', e.target);
  };
  
  // Click với params
  const handleItemClick = (id) => (e) => {
    console.log('Item clicked:', id);
  };
  
  // Input change
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  
  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleItemClick(1)}>Item 1</button>
    </form>
  );
}
```

### 6. Controlled Components (Forms)

```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## 💻 Bài Tập

1. **Counter App**: useState với increment, decrement, reset
2. **Todo List**: useState với array (add, remove, toggle)
3. **Fetch Data**: useEffect để load data từ API
4. **Form Handling**: Controlled form với validation

---

## ✅ Checklist

- [ ] Sử dụng useState với primitives
- [ ] Sử dụng useState với objects/arrays (immutable updates)
- [ ] useEffect với dependencies đúng cách
- [ ] Cleanup function trong useEffect
- [ ] Controlled forms với onChange
