/**
 * 🎯 Bài Tập: Async/Await
 * 
 * Chạy: node exercise.js
 */

console.log("=== ASYNC/AWAIT EXERCISES ===\n");

// Helper function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
const mockApi = {
    getUser: (id) => delay(500).then(() => ({ id, name: "John Doe", email: "john@example.com" })),
    getPosts: (userId) => delay(400).then(() => [
        { id: 1, title: "Post 1", userId },
        { id: 2, title: "Post 2", userId }
    ]),
    getComments: (postId) => delay(300).then(() => [
        { id: 1, text: "Nice post!", postId },
        { id: 2, text: "Thanks!", postId }
    ]),
    getProfile: () => delay(600).then(() => ({ avatar: "avatar.jpg", bio: "Developer" })),
    getSettings: () => delay(400).then(() => ({ theme: "dark", notifications: true })),
};

// ==========================================
// EXERCISE 1: Chuyển Promise sang Async/Await
// Chuyển đoạn code Promise bên dưới sang async/await
// ==========================================

// Code gốc dùng Promise:
function loadUserDataPromise(userId) {
    return mockApi.getUser(userId)
        .then(user => {
            return mockApi.getPosts(user.id)
                .then(posts => {
                    return mockApi.getComments(posts[0].id)
                        .then(comments => {
                            return { user, posts, comments };
                        });
                });
        });
}

// TODO: Viết lại bằng async/await
async function loadUserData(userId) {
    // TODO: Implement
}

// Test Exercise 1
// (async () => {
//   const data = await loadUserData(1);
//   console.log("✅ Exercise 1:", data);
// })();


// ==========================================
// EXERCISE 2: Error Handling
// Viết function fetchWithErrorHandling gọi API
// - Nếu thành công: return data
// - Nếu lỗi: log error và return null
// ==========================================

// Mock API có thể fail
const unreliableApi = {
    getData: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve({ data: "Success!" });
            } else {
                reject(new Error("Network error"));
            }
        }, 500);
    })
};

async function fetchWithErrorHandling() {
    // TODO: Implement với try/catch
}

// Test Exercise 2
// (async () => {
//   const result = await fetchWithErrorHandling();
//   console.log("✅ Exercise 2:", result);
// })();


// ==========================================
// EXERCISE 3: Song Song vs Tuần Tự
// Viết 2 versions:
// 1. loadAllSequential - chạy tuần tự (chậm)
// 2. loadAllParallel - chạy song song (nhanh)
// So sánh thời gian thực thi
// ==========================================

async function loadAllSequential() {
    const start = Date.now();

    // TODO: Gọi 3 APIs tuần tự
    // const user = await mockApi.getUser(1);
    // const profile = await mockApi.getProfile();
    // const settings = await mockApi.getSettings();

    console.log(`Sequential Time: ${Date.now() - start}ms`);
    // return { user, profile, settings };
}

async function loadAllParallel() {
    const start = Date.now();

    // TODO: Gọi 3 APIs song song với Promise.all

    console.log(`Parallel Time: ${Date.now() - start}ms`);
    // return { user, profile, settings };
}

// Test Exercise 3
// (async () => {
//   console.log("\n=== Exercise 3: Comparison ===");
//   await loadAllSequential();  // Should be ~1500ms
//   await loadAllParallel();    // Should be ~600ms
// })();


// ==========================================
// EXERCISE 4: Xử lý Array với Async
// Fetch data cho mỗi userId trong mảng
// Version 1: Tuần tự (for...of)
// Version 2: Song song (Promise.all + map)
// ==========================================

const userIds = [1, 2, 3, 4, 5];

async function fetchUsersSequential(ids) {
    const users = [];
    // TODO: Dùng for...of
    return users;
}

async function fetchUsersParallel(ids) {
    // TODO: Dùng Promise.all + map
}

// Test Exercise 4
// (async () => {
//   console.log("\n=== Exercise 4 ===");
//   const start1 = Date.now();
//   const seq = await fetchUsersSequential(userIds);
//   console.log(`Sequential: ${Date.now() - start1}ms`);
//   
//   const start2 = Date.now();
//   const par = await fetchUsersParallel(userIds);
//   console.log(`Parallel: ${Date.now() - start2}ms`);
// })();


// ==========================================
// EXERCISE 5: Retry Pattern
// Viết function fetchWithRetry(fn, maxRetries)
// - Gọi fn()
// - Nếu fail, retry tối đa maxRetries lần
// - Delay 1 giây giữa mỗi retry
// ==========================================

async function fetchWithRetry(fn, maxRetries = 3) {
    // TODO: Implement retry logic
}

// Test Exercise 5
// (async () => {
//   let attempts = 0;
//   const unreliableFn = () => new Promise((resolve, reject) => {
//     attempts++;
//     if (attempts < 3) reject(new Error(`Attempt ${attempts} failed`));
//     else resolve("Success on attempt " + attempts);
//   });
//   
//   const result = await fetchWithRetry(unreliableFn, 5);
//   console.log("✅ Exercise 5:", result);
// })();


// ==========================================
// SOLUTION
// ==========================================
/*
// Exercise 1
async function loadUserData(userId) {
  const user = await mockApi.getUser(userId);
  const posts = await mockApi.getPosts(user.id);
  const comments = await mockApi.getComments(posts[0].id);
  return { user, posts, comments };
}

// Exercise 2
async function fetchWithErrorHandling() {
  try {
    const result = await unreliableApi.getData();
    return result;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// Exercise 3
async function loadAllSequential() {
  const start = Date.now();
  const user = await mockApi.getUser(1);
  const profile = await mockApi.getProfile();
  const settings = await mockApi.getSettings();
  console.log(`Sequential Time: ${Date.now() - start}ms`);
  return { user, profile, settings };
}

async function loadAllParallel() {
  const start = Date.now();
  const [user, profile, settings] = await Promise.all([
    mockApi.getUser(1),
    mockApi.getProfile(),
    mockApi.getSettings()
  ]);
  console.log(`Parallel Time: ${Date.now() - start}ms`);
  return { user, profile, settings };
}

// Exercise 4
async function fetchUsersSequential(ids) {
  const users = [];
  for (const id of ids) {
    const user = await mockApi.getUser(id);
    users.push(user);
  }
  return users;
}

async function fetchUsersParallel(ids) {
  return Promise.all(ids.map(id => mockApi.getUser(id)));
}

// Exercise 5
async function fetchWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === maxRetries - 1) throw error;
      await delay(1000);
    }
  }
}
*/
