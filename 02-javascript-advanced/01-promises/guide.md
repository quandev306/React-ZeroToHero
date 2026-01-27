# 🔄 Bài 1: Promises

## 🎯 Mục Tiêu

- Hiểu vấn đề callback hell
- Nắm vững Promise states
- Sử dụng Promise chaining
- Xử lý nhiều Promises cùng lúc

---

## 📚 Lý Thuyết

### 1. Vấn Đề Callback Hell

```javascript
// ❌ Callback Hell - Code khó đọc, khó maintain
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getFinalData(c, function(d) {
        console.log(d);
      });
    });
  });
});
```

### 2. Promise Là Gì?

Promise là một object đại diện cho một giá trị có thể có trong tương lai.

**3 States:**
- `pending`: Đang chờ
- `fulfilled`: Thành công
- `rejected`: Thất bại

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Async operation
  const success = true;
  
  if (success) {
    resolve("Data loaded!");  // → fulfilled
  } else {
    reject("Error occurred"); // → rejected
  }
});
```

### 3. Sử Dụng Promise

```javascript
myPromise
  .then((result) => {
    console.log(result);  // Xử lý khi thành công
  })
  .catch((error) => {
    console.error(error); // Xử lý khi lỗi
  })
  .finally(() => {
    console.log("Done");  // Luôn chạy
  });
```

### 4. Promise Chaining

```javascript
// ✅ Clean và dễ đọc
fetchUser(userId)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => {
    console.log(comments);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

### 5. Xử Lý Nhiều Promises

```javascript
// Promise.all - Chờ TẤT CẢ hoàn thành
const promises = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
];

Promise.all(promises)
  .then(([users, posts, comments]) => {
    console.log(users, posts, comments);
  })
  .catch(error => {
    // Nếu BẤT KỲ promise nào fail
    console.error(error);
  });

// Promise.allSettled - Lấy kết quả tất cả (kể cả fail)
Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log(result.value);
      } else {
        console.log(result.reason);
      }
    });
  });

// Promise.race - Lấy kết quả đầu tiên
Promise.race(promises)
  .then(firstResult => {
    console.log(firstResult);
  });

// Promise.any - Lấy kết quả thành công đầu tiên
Promise.any(promises)
  .then(firstSuccess => {
    console.log(firstSuccess);
  });
```

### 6. Tạo Promise Helper

```javascript
// Delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Usage
delay(2000).then(() => console.log("2 seconds passed"));

// Wrap callback thành Promise
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
```

---

## 💻 Bài Tập

### Exercise 1: Tạo Promise cơ bản
Tạo promise mô phỏng việc kiểm tra đăng nhập.

### Exercise 2: Promise Chaining
Chain nhiều promises để fetch data theo thứ tự.

### Exercise 3: Promise.all
Fetch song song nhiều resources.

---

## ✅ Checklist

- [ ] Giải thích 3 states của Promise
- [ ] Viết Promise từ đầu
- [ ] Sử dụng .then(), .catch(), .finally()
- [ ] Biết khi nào dùng Promise.all vs Promise.race
