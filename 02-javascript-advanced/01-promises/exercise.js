/**
 * 🎯 Bài Tập: Promises
 * 
 * Chạy file này bằng Node.js: node exercise.js
 * Hoặc copy vào browser console
 */

console.log("=== PROMISES EXERCISES ===\n");

// ==========================================
// EXERCISE 1: Tạo Promise Cơ Bản
// Tạo hàm checkLogin(username, password) trả về Promise
// - Resolve nếu username === "admin" && password === "123456"
// - Reject với message "Invalid credentials" nếu sai
// ==========================================

function checkLogin(username, password) {
  // TODO: Implement
  return new Promise((resolve, reject) => {
    // Mô phỏng delay như thật
    setTimeout(() => {
      // TODO: Check credentials và resolve/reject
    }, 1000);
  });
}

// Test Exercise 1
// Uncomment để test:
// checkLogin("admin", "123456")
//   .then(result => console.log("✅ Exercise 1:", result))
//   .catch(err => console.log("❌ Exercise 1:", err));


// ==========================================
// EXERCISE 2: Promise Chaining
// Viết 3 functions mô phỏng việc:
// 1. fetchUser(userId) → trả về { id, name }
// 2. fetchPosts(userId) → trả về [{ id, title }]
// 3. fetchFirstPostDetails(postId) → trả về { id, title, content }
// 
// Chain chúng lại để: 
// fetchUser → fetchPosts → fetchFirstPostDetails
// ==========================================

function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe" });
    }, 500);
  });
}

function fetchPosts(userId) {
  // TODO: Return Promise với mảng posts
  return new Promise((resolve) => {
    setTimeout(() => {
      // TODO: resolve với array posts
    }, 500);
  });
}

function fetchFirstPostDetails(postId) {
  // TODO: Return Promise với post details
  return new Promise((resolve) => {
    setTimeout(() => {
      // TODO: resolve với post object có content
    }, 500);
  });
}

// Test Exercise 2
// Uncomment để test:
// fetchUser(1)
//   .then(user => {
//     console.log("User:", user);
//     return fetchPosts(user.id);
//   })
//   .then(posts => {
//     console.log("Posts:", posts);
//     return fetchFirstPostDetails(posts[0].id);
//   })
//   .then(post => {
//     console.log("✅ Exercise 2 - Post Details:", post);
//   })
//   .catch(err => console.error("❌ Error:", err));


// ==========================================
// EXERCISE 3: Promise.all
// Fetch 3 resources song song:
// - fetchProfile()
// - fetchSettings()
// - fetchNotifications()
// Hiển thị kết quả khi TẤT CẢ hoàn thành
// ==========================================

function fetchProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John", email: "john@example.com" });
    }, 800);
  });
}

function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "dark", language: "vi" });
    }, 600);
  });
}

function fetchNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "New message" },
        { id: 2, text: "Task completed" }
      ]);
    }, 400);
  });
}

// TODO: Sử dụng Promise.all để fetch song song
// const startTime = Date.now();
// Promise.all([...])
//   .then(([profile, settings, notifications]) => {
//     console.log("✅ Exercise 3:");
//     console.log("Profile:", profile);
//     console.log("Settings:", settings);
//     console.log("Notifications:", notifications);
//     console.log(`Time: ${Date.now() - startTime}ms`);
//     // Nên là ~800ms, không phải 800+600+400=1800ms
//   });


// ==========================================
// EXERCISE 4: Error Handling
// Sửa lại fetchSettings để đôi khi fail (50% chance)
// Sử dụng Promise.allSettled để vẫn lấy được các kết quả khác
// ==========================================

function fetchSettingsWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ theme: "dark", language: "vi" });
      } else {
        reject(new Error("Failed to load settings"));
      }
    }, 600);
  });
}

// TODO: Sử dụng Promise.allSettled
// Promise.allSettled([fetchProfile(), fetchSettingsWithError(), fetchNotifications()])
//   .then(results => {
//     console.log("✅ Exercise 4:");
//     results.forEach((result, index) => {
//       if (result.status === "fulfilled") {
//         console.log(`Resource ${index}: `, result.value);
//       } else {
//         console.log(`Resource ${index} FAILED: `, result.reason.message);
//       }
//     });
//   });


// ==========================================
// EXERCISE 5: Delay Helper
// Tạo hàm delay(ms) trả về Promise resolve sau ms milliseconds
// Sử dụng để log message mỗi giây trong 3 giây
// ==========================================

function delay(ms) {
  // TODO: Implement
}

// Test:
// delay(1000)
//   .then(() => console.log("1 second"))
//   .then(() => delay(1000))
//   .then(() => console.log("2 seconds"))
//   .then(() => delay(1000))
//   .then(() => console.log("✅ Exercise 5: 3 seconds - Done!"));


// ==========================================
// SOLUTION (Uncomment để xem đáp án)
// ==========================================
/*
// Exercise 1
function checkLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        resolve("Login successful!");
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

// Exercise 2
function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: "First Post" },
        { id: 102, title: "Second Post" }
      ]);
    }, 500);
  });
}

function fetchFirstPostDetails(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: postId,
        title: "First Post",
        content: "This is the full content of the post."
      });
    }, 500);
  });
}

// Exercise 5
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
*/
