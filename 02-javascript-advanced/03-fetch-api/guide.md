# 🌐 Bài 3: Fetch API & Error Handling

## 🎯 Mục Tiêu

- Sử dụng Fetch API để gọi REST APIs
- Xử lý response và errors đúng cách
- Hiểu HTTP methods và headers
- Thực hành với real APIs

---

## 📚 Lý Thuyết

### 1. Fetch Cơ Bản

```javascript
// GET request đơn giản
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Với async/await
async function getUsers() {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();
  return data;
}
```

### 2. Kiểm Tra Response

```javascript
async function fetchData(url) {
  const response = await fetch(url);
  
  // ⚠️ fetch() chỉ reject khi network error
  // HTTP errors (404, 500) vẫn resolve!
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  return response.json();
}
```

### 3. HTTP Methods

```javascript
// GET (default)
fetch('/api/users');

// POST
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com'
  })
});

// PUT
fetch('/api/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John Updated' })
});

// DELETE
fetch('/api/users/1', {
  method: 'DELETE'
});

// PATCH
fetch('/api/users/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John Patched' })
});
```

### 4. Headers & Authentication

```javascript
// Custom headers
fetch('/api/data', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here',
    'X-Custom-Header': 'custom-value'
  }
});

// Credentials (cookies)
fetch('/api/data', {
  credentials: 'include'  // Gửi cookies cross-origin
});
```

### 5. Error Handling Best Practice

```javascript
async function apiCall(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    // Check HTTP errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        statusText: response.statusText,
        message: errorData.message || 'Request failed'
      };
    }

    return await response.json();
    
  } catch (error) {
    // Network error hoặc parsing error
    if (!error.status) {
      throw {
        status: 0,
        message: 'Network error. Please check your connection.'
      };
    }
    throw error;
  }
}

// Usage
try {
  const data = await apiCall('/api/users');
} catch (error) {
  switch (error.status) {
    case 401:
      console.log('Please login');
      break;
    case 404:
      console.log('Not found');
      break;
    case 500:
      console.log('Server error');
      break;
    default:
      console.log(error.message);
  }
}
```

### 6. Abort Fetch (Cancel Request)

```javascript
// Tạo AbortController
const controller = new AbortController();

// Pass signal vào fetch
fetch('/api/data', {
  signal: controller.signal
})
  .then(response => response.json())
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled');
    }
  });

// Cancel request sau 5 giây
setTimeout(() => controller.abort(), 5000);
```

### 7. API Service Pattern

```javascript
// api.js - Reusable API service
const API_BASE = 'https://api.example.com';

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export const api = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, data) => request(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  put: (endpoint, data) => request(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (endpoint) => request(endpoint, { method: 'DELETE' })
};

// Usage
import { api } from './api';

const users = await api.get('/users');
const newUser = await api.post('/users', { name: 'John' });
```

---

## 💻 Bài Tập

Sử dụng JSONPlaceholder API: `https://jsonplaceholder.typicode.com`

1. **GET** - Lấy danh sách users
2. **POST** - Tạo post mới
3. **Error Handling** - Xử lý 404, 500 errors
4. **Tạo API Service** - Module reusable

---

## ✅ Checklist

- [ ] Sử dụng fetch với async/await
- [ ] Kiểm tra response.ok
- [ ] Xử lý HTTP errors (404, 500)
- [ ] Gửi POST request với body
- [ ] Tạo reusable API service
