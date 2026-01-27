# 🚀 Bài 4: ES6+ Features

## 🎯 Mục Tiêu

- Nắm vững các tính năng ES6+ quan trọng cho React
- Destructuring, Spread, Rest
- Arrow Functions
- Template Literals
- Modules (import/export)
- Array Methods

---

## 📚 Lý Thuyết

### 1. Arrow Functions

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Với body
const greet = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};

// Một param - không cần ()
const double = n => n * 2;

// Không param
const sayHi = () => console.log("Hi!");

// Return object - cần ()
const createUser = (name, age) => ({ name, age });

// ⚠️ Arrow functions không có 'this' riêng
const obj = {
  name: "John",
  // ❌ Arrow function lấy 'this' từ scope bên ngoài
  sayName: () => console.log(this.name), // undefined
  // ✅ Regular function có 'this' riêng
  sayNameCorrect() { console.log(this.name); } // "John"
};
```

### 2. Destructuring

```javascript
// Object Destructuring
const user = { name: "John", age: 30, email: "john@example.com" };

const { name, age } = user;
console.log(name); // "John"

// Rename
const { name: userName, age: userAge } = user;

// Default value
const { name, country = "Vietnam" } = user;

// Nested
const data = { 
  user: { 
    profile: { name: "John" } 
  } 
};
const { user: { profile: { name } } } = data;

// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

// Skip items
const [, , blue] = colors;

// Rest
const [primary, ...others] = colors;

// Swap
let a = 1, b = 2;
[a, b] = [b, a];

// Function parameters
function createUser({ name, age = 18, email }) {
  return { name, age, email };
}
createUser({ name: "John", email: "john@example.com" });
```

### 3. Spread & Rest Operators

```javascript
// Spread (...) - Mở rộng
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Copy array/object (shallow)
const arrCopy = [...arr1];
const objCopy = { ...obj1 };

// Merge
const merged = { ...obj1, ...obj2 };

// Function arguments
const numbers = [1, 2, 3];
Math.max(...numbers);

// Rest (...) - Thu gọn
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Rest với destructuring
const { a, ...rest } = { a: 1, b: 2, c: 3 };
// a = 1, rest = { b: 2, c: 3 }
```

### 4. Template Literals

```javascript
const name = "John";
const age = 30;

// String interpolation
const message = `Hello, my name is ${name} and I'm ${age} years old.`;

// Multi-line strings
const html = `
  <div class="card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
  </div>
`;

// Expressions
const total = `Total: ${10 * 5}`;

// Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<mark>${values[i]}</mark>` : '');
  }, '');
}
const highlighted = highlight`Hello ${name}, you are ${age}`;
```

### 5. Array Methods (Quan trọng cho React!)

```javascript
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 }
];

// map - Transform mỗi item (DÙNG NHIỀU NHẤT trong React)
const names = users.map(user => user.name);
// ["John", "Jane", "Bob"]

// filter - Lọc theo điều kiện
const adults = users.filter(user => user.age >= 30);

// find - Tìm item đầu tiên match
const john = users.find(user => user.name === "John");

// findIndex - Tìm index
const johnIndex = users.findIndex(user => user.name === "John");

// some - Có ít nhất 1 item match?
const hasAdult = users.some(user => user.age >= 18); // true

// every - Tất cả match?
const allAdults = users.every(user => user.age >= 18); // true

// reduce - Gộp thành 1 giá trị
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// includes
const numbers = [1, 2, 3];
numbers.includes(2); // true

// Chaining
const result = users
  .filter(u => u.age >= 25)
  .map(u => u.name)
  .join(", ");
// "John, Jane, Bob"
```

### 6. Modules (Import/Export)

```javascript
// Named exports (utils.js)
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export const multiply = (a, b) => a * b;

// Named imports
import { PI, add, multiply } from './utils.js';

// Rename on import
import { add as sum } from './utils.js';

// Import all
import * as utils from './utils.js';
utils.add(1, 2);

// Default export (Một file chỉ có 1 default)
// Button.js
export default function Button() { return <button>Click</button>; }

// Default import (tên tùy ý)
import Button from './Button.js';
import MyButton from './Button.js'; // cũng ok

// Mixed
export default function App() {}
export const version = "1.0";

import App, { version } from './App.js';
```

### 7. Optional Chaining & Nullish Coalescing

```javascript
// Optional Chaining (?.)
const user = { profile: { name: "John" } };
const name = user?.profile?.name; // "John"
const city = user?.address?.city; // undefined (không error)

// Với array
const first = users?.[0]?.name;

// Với function
const result = obj?.method?.();

// Nullish Coalescing (??)
const value = null ?? "default"; // "default"
const zero = 0 ?? "default"; // 0 (khác với ||)

// So sánh với ||
const a = 0 || "default"; // "default" (0 là falsy)
const b = 0 ?? "default"; // 0 (chỉ null/undefined mới dùng default)
```

---

## 💻 Bài Tập

1. **Destructuring** - Extract data từ objects phức tạp
2. **Array Methods** - Xử lý data với map, filter, reduce
3. **Spread/Rest** - Clone và merge objects

---

## ✅ Checklist

- [ ] Viết arrow functions thành thạo
- [ ] Destructure objects và arrays
- [ ] Sử dụng spread/rest operators
- [ ] map, filter, reduce với arrays
- [ ] import/export modules
