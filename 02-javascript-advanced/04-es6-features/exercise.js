/**
 * 🎯 Bài Tập: ES6+ Features
 * 
 * Chạy: node exercise.js
 */

console.log("=== ES6+ EXERCISES ===\n");

// Sample data
const users = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com", role: "admin" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com", role: "user" },
    { id: 3, name: "Bob Wilson", age: 35, email: "bob@example.com", role: "user" },
    { id: 4, name: "Alice Brown", age: 28, email: "alice@example.com", role: "moderator" },
    { id: 5, name: "Charlie Davis", age: 22, email: "charlie@example.com", role: "user" }
];

const products = [
    { id: 1, name: "Laptop", price: 1200, category: "electronics", inStock: true },
    { id: 2, name: "Phone", price: 800, category: "electronics", inStock: true },
    { id: 3, name: "Headphones", price: 150, category: "electronics", inStock: false },
    { id: 4, name: "Desk", price: 300, category: "furniture", inStock: true },
    { id: 5, name: "Chair", price: 200, category: "furniture", inStock: true }
];

// ==========================================
// EXERCISE 1: Destructuring
// ==========================================

// 1a. Extract name và email từ user đầu tiên
const firstUser = users[0];
// TODO: const { name, email } = ...
// console.log("1a:", name, email);

// 1b. Extract với rename: name → userName, age → userAge
// TODO: const { name: userName, age: userAge } = ...

// 1c. Nested destructuring
const company = {
    name: "TechCorp",
    address: {
        city: "Ho Chi Minh",
        country: "Vietnam"
    },
    employees: [
        { name: "John", department: "Engineering" }
    ]
};
// TODO: Extract city và country từ company
// const { address: { city, country } } = ...

// 1d. Function với destructured params
function displayUser({ name, email, role = "guest" }) {
    return `${name} (${email}) - ${role}`;
}
// console.log("1d:", displayUser(users[0]));


// ==========================================
// EXERCISE 2: Spread & Rest
// ==========================================

// 2a. Clone users array
// TODO: const usersCopy = ...

// 2b. Merge 2 objects
const defaultSettings = { theme: "light", language: "en", notifications: true };
const userSettings = { theme: "dark", fontSize: 14 };
// TODO: const mergedSettings = ...
// console.log("2b:", mergedSettings);

// 2c. Add new user to array (immutable)
const newUser = { id: 6, name: "Dave", age: 29, email: "dave@example.com", role: "user" };
// TODO: const updatedUsers = ...

// 2d. Update user by id (immutable)
function updateUser(users, id, updates) {
    // TODO: Return new array với user được update
    // Hint: map + spread
}
// console.log("2d:", updateUser(users, 1, { name: "John Updated" }));

// 2e. Rest operator trong function
function logFirst(first, ...rest) {
    console.log("First:", first);
    console.log("Rest:", rest);
}
// logFirst(1, 2, 3, 4, 5);


// ==========================================
// EXERCISE 3: Array Methods
// ==========================================

// 3a. Lấy tất cả tên users (map)
// TODO: const names = users.map(...)
// console.log("3a:", names);

// 3b. Lọc users có age >= 28 (filter)
// TODO: const adults = users.filter(...)

// 3c. Tìm user có role = "admin" (find)
// TODO: const admin = users.find(...)

// 3d. Tính tổng tuổi tất cả users (reduce)
// TODO: const totalAge = users.reduce(...)

// 3e. Kiểm tra có user nào dưới 25 tuổi không (some)
// TODO: const hasYoung = users.some(...)

// 3f. Lọc products electronics còn hàng, lấy tên, sắp xếp theo giá
// TODO: Chaining filter → filter → map → sort
// const availableElectronics = products
//   .filter(p => ...)
//   .filter(p => ...)
//   .map(p => ...)
//   .sort((a, b) => ...);


// ==========================================
// EXERCISE 4: Transform Data
// ==========================================

// 4a. Tạo object lookup từ array (id → user)
// Input: users array
// Output: { 1: {...}, 2: {...}, ... }
function createLookup(items) {
    // TODO: Dùng reduce
    return items.reduce((acc, item) => {
        // ...
        return acc;
    }, {});
}
// console.log("4a:", createLookup(users));

// 4b. Group products by category
// Output: { electronics: [...], furniture: [...] }
function groupByCategory(products) {
    // TODO: Dùng reduce
}
// console.log("4b:", groupByCategory(products));

// 4c. Tính tổng giá trị inventory (price * inStock ? 1 : 0)
function calculateInventoryValue(products) {
    // TODO
}


// ==========================================
// EXERCISE 5: Real-World Scenarios
// ==========================================

// 5a. Filter và transform cho UI
// Lấy users không phải admin, tạo options cho dropdown
// Output: [{ value: 2, label: "Jane Smith" }, ...]
function getUserOptions(users) {
    // TODO
}

// 5b. Pagination helper
function paginate(items, page = 1, perPage = 10) {
    // TODO: Return { data: [...], total, totalPages, currentPage }
}

// 5c. Search/Filter helper
function searchUsers(users, query) {
    // TODO: Tìm trong name hoặc email (case insensitive)
}


// ==========================================
// SOLUTION
// ==========================================
/*
// 1a
const { name, email } = firstUser;

// 1b
const { name: userName, age: userAge } = firstUser;

// 1c
const { address: { city, country } } = company;

// 2a
const usersCopy = [...users];

// 2b
const mergedSettings = { ...defaultSettings, ...userSettings };

// 2c
const updatedUsers = [...users, newUser];

// 2d
function updateUser(users, id, updates) {
  return users.map(user => 
    user.id === id ? { ...user, ...updates } : user
  );
}

// 3a
const names = users.map(u => u.name);

// 3b
const adults = users.filter(u => u.age >= 28);

// 3c
const admin = users.find(u => u.role === "admin");

// 3d
const totalAge = users.reduce((sum, u) => sum + u.age, 0);

// 3e
const hasYoung = users.some(u => u.age < 25);

// 3f
const availableElectronics = products
  .filter(p => p.category === "electronics")
  .filter(p => p.inStock)
  .map(p => ({ name: p.name, price: p.price }))
  .sort((a, b) => a.price - b.price);

// 4a
function createLookup(items) {
  return items.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

// 4b
function groupByCategory(products) {
  return products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});
}

// 5a
function getUserOptions(users) {
  return users
    .filter(u => u.role !== "admin")
    .map(u => ({ value: u.id, label: u.name }));
}

// 5b
function paginate(items, page = 1, perPage = 10) {
  const start = (page - 1) * perPage;
  const data = items.slice(start, start + perPage);
  return {
    data,
    total: items.length,
    totalPages: Math.ceil(items.length / perPage),
    currentPage: page
  };
}

// 5c
function searchUsers(users, query) {
  const q = query.toLowerCase();
  return users.filter(u => 
    u.name.toLowerCase().includes(q) || 
    u.email.toLowerCase().includes(q)
  );
}
*/
