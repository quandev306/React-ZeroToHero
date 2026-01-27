# ⏳ Bài 2: Async/Await

## 🎯 Mục Tiêu

- Hiểu async/await là syntax sugar cho Promise
- Viết code async dễ đọc như synchronous
- Xử lý lỗi với try/catch
- Chạy song song với async

---

## 📚 Lý Thuyết

### 1. Async Function

```javascript
// Thêm 'async' trước function → tự động return Promise
async function getData() {
  return "Hello"; // Tự động wrap trong Promise.resolve()
}

// Tương đương với:
function getData() {
  return Promise.resolve("Hello");
}

// Cả 2 sử dụng như nhau:
getData().then(result => console.log(result));
```

### 2. Await Keyword

```javascript
// 'await' chờ Promise resolve, chỉ dùng trong async function
async function fetchUserData() {
  // ✅ Code đọc như synchronous
  const user = await fetchUser(1);
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
  
  return { user, posts, comments };
}

// So sánh với Promise:
function fetchUserData() {
  return fetchUser(1)
    .then(user => fetchPosts(user.id).then(posts => ({ user, posts })))
    .then(({ user, posts }) => 
      fetchComments(posts[0].id).then(comments => ({ user, posts, comments }))
    );
}
```

### 3. Error Handling với Try/Catch

```javascript
async function loadData() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Failed to load data:", error.message);
    // Có thể return default value hoặc re-throw
    return null;
  } finally {
    console.log("Fetch attempt completed");
  }
}
```

### 4. Chạy Song Song

```javascript
// ❌ SAI - Chạy tuần tự (chậm)
async function loadAllSequential() {
  const users = await fetchUsers();      // 1s
  const products = await fetchProducts(); // 1s
  const orders = await fetchOrders();     // 1s
  // Total: 3s
}

// ✅ ĐÚNG - Chạy song song (nhanh)
async function loadAllParallel() {
  const [users, products, orders] = await Promise.all([
    fetchUsers(),     // 1s
    fetchProducts(),  // 1s  → All start at same time
    fetchOrders()     // 1s
  ]);
  // Total: 1s
}

// ✅ Cách khác - Start trước, await sau
async function loadAllParallel2() {
  const usersPromise = fetchUsers();
  const productsPromise = fetchProducts();
  const ordersPromise = fetchOrders();
  
  const users = await usersPromise;
  const products = await productsPromise;
  const orders = await ordersPromise;
}
```

### 5. Async trong Array Methods

```javascript
// ❌ forEach không đợi async
urls.forEach(async (url) => {
  const data = await fetch(url); // Không đợi
});
console.log("Done"); // Chạy ngay lập tức

// ✅ Dùng for...of để await từng item
async function fetchSequentially(urls) {
  for (const url of urls) {
    const data = await fetch(url);
    console.log(data);
  }
}

// ✅ Dùng Promise.all để fetch song song
async function fetchParallel(urls) {
  const results = await Promise.all(
    urls.map(url => fetch(url))
  );
  return results;
}
```

### 6. Real-World Pattern

```javascript
// API Service với retry logic
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("HTTP Error");
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Retry ${i + 1}...`);
      await delay(1000 * (i + 1)); // Exponential backoff
    }
  }
}
```

---

## 💻 Bài Tập

1. **Chuyển Promise sang Async/Await**
2. **Xử lý lỗi với try/catch**
3. **Tối ưu với Promise.all**

---

## ✅ Checklist

- [ ] Biết async function tự động return Promise
- [ ] Sử dụng await trong async function
- [ ] Xử lý lỗi với try/catch
- [ ] Biết khi nào chạy tuần tự vs song song
