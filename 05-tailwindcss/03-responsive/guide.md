# 📱 Bài 03: Responsive Design & States

## 🎯 Mục Tiêu

- Áp dụng kiến thức Responsive (Bài 07 CSS) vào Tailwind
- Học cách dùng breakpoint prefixes
- Áp dụng pseudo-classes (Bài 01 Selectors) vào Tailwind
- Sử dụng state variants: hover, focus, active...
- Thiết lập Dark Mode

---

## 📚 Lý Thuyết

### 1️⃣ Responsive với Breakpoint Prefixes

**Nhớ lại CSS thuần (Bài 07):**
```css
/* Mobile first */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

**Tailwind tương đương:**
```html
<div class="p-4 md:p-6 lg:p-8 lg:max-w-7xl lg:mx-auto">
```

🔑 **Key Insight:** Trong Tailwind, bạn thêm **prefix** trước class để áp dụng tại breakpoint đó!

#### Tailwind Breakpoints (Mobile First)

| Prefix | Min-Width | Ý nghĩa |
|--------|-----------|---------|
| (none) | 0px | Mobile mặc định |
| `sm:` | 640px | Điện thoại ngang, tablet nhỏ |
| `md:` | 768px | Tablet đứng |
| `lg:` | 1024px | Laptop, tablet ngang |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Desktop lớn |

#### Cách đọc Tailwind Responsive

```html
<div class="text-sm md:text-base lg:text-lg">
```

Đọc là:
- Mặc định (mobile): `text-sm` (font-size: 14px)
- Từ 768px trở lên: `text-base` (font-size: 16px)
- Từ 1024px trở lên: `text-lg` (font-size: 18px)

#### So sánh CSS vs Tailwind

```css
/* CSS: Viết 3 khối media queries */
.title {
  font-size: 24px;
}
@media (min-width: 768px) {
  .title {
    font-size: 36px;
  }
}
@media (min-width: 1024px) {
  .title {
    font-size: 48px;
  }
}
```

```html
<!-- Tailwind: 1 dòng, cùng element -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">
```

---

### 2️⃣ Responsive Patterns Phổ Biến

#### Pattern 1: Grid Responsive

```html
<!-- 1 cột mobile → 2 cột tablet → 3 cột desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card</div>
  <div>Card</div>
  <div>Card</div>
</div>
```

#### Pattern 2: Stack to Row

```html
<!-- Column trên mobile, Row trên desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Left content</div>
  <div class="flex-1">Right content</div>
</div>
```

#### Pattern 3: Hide/Show Elements

```html
<!-- Ẩn trên mobile, hiện từ md trở lên -->
<nav class="hidden md:flex">
  Desktop Menu
</nav>

<!-- Hiện trên mobile, ẩn từ md trở lên -->
<button class="md:hidden">
  ☰ Mobile Menu
</button>
```

#### Pattern 4: Responsive Typography

```html
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Big Heading
</h1>

<p class="text-sm md:text-base lg:text-lg">
  Paragraph text
</p>
```

#### Pattern 5: Responsive Spacing

```html
<!-- Padding tăng dần theo screen size -->
<section class="py-12 md:py-16 lg:py-24 px-4 md:px-8">
  Content
</section>

<!-- Container với max-width responsive -->
<div class="max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto">
  Centered content
</div>
```

---

### 3️⃣ State Variants (Pseudo-classes)

**Nhớ lại CSS thuần (Bài 01 Selectors):**
```css
.btn {
  background: #3b82f6;
}
.btn:hover {
  background: #2563eb;
}
.btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
.btn:active {
  transform: scale(0.98);
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Tailwind tương đương:**
```html
<button class="bg-blue-500 hover:bg-blue-600 focus:outline-none 
               focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
               active:scale-[0.98] disabled:opacity-50 
               disabled:cursor-not-allowed">
  Click me
</button>
```

#### State Variants Mapping

| CSS Pseudo-class | Tailwind Prefix |
|-----------------|-----------------|
| `:hover` | `hover:` |
| `:focus` | `focus:` |
| `:active` | `active:` |
| `:disabled` | `disabled:` |
| `:first-child` | `first:` |
| `:last-child` | `last:` |
| `:odd` | `odd:` |
| `:even` | `even:` |
| `:focus-visible` | `focus-visible:` |
| `:focus-within` | `focus-within:` |
| `::placeholder` | `placeholder:` |
| `::before` | `before:` |
| `::after` | `after:` |

#### Hover Effects

```html
<!-- Đổi màu nền -->
<button class="bg-blue-500 hover:bg-blue-600">Hover me</button>

<!-- Đổi màu chữ -->
<a class="text-gray-600 hover:text-blue-600">Link</a>

<!-- Scale effect -->
<div class="hover:scale-105 transition-transform">Zoom on hover</div>

<!-- Shadow effect -->
<div class="shadow-md hover:shadow-xl transition-shadow">Card</div>

<!-- Translate effect (lift) -->
<div class="hover:-translate-y-1 transition-transform">Lift up</div>

<!-- Opacity -->
<img class="opacity-80 hover:opacity-100 transition-opacity" src="...">
```

#### Focus States (quan trọng cho accessibility)

```html
<!-- Input focus -->
<input class="border border-gray-300 focus:border-blue-500 
              focus:ring-2 focus:ring-blue-500/50 focus:outline-none
              rounded-lg px-4 py-2">

<!-- Button focus -->
<button class="focus:outline-none focus:ring-2 focus:ring-offset-2 
               focus:ring-blue-500">
  Button
</button>
```

#### Group Hover (Parent hover → Child changes)

**CSS thuần:**
```css
.card:hover .card-title {
  color: blue;
}
```

**Tailwind:**
```html
<div class="group p-6 bg-white rounded-lg hover:bg-blue-500 transition-colors">
  <h3 class="text-gray-800 group-hover:text-white">Title</h3>
  <p class="text-gray-600 group-hover:text-blue-100">Description</p>
</div>
```

---

### 4️⃣ Transitions & Animations (Bài 08 CSS)

**CSS thuần:**
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
```

**Tailwind:**
```html
<div class="transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:shadow-lg">
  Card
</div>
```

#### Transition Classes

| CSS Property | Tailwind |
|--------------|----------|
| `transition: all` | `transition-all` |
| `transition: colors` | `transition-colors` |
| `transition: transform` | `transition-transform` |
| `transition: opacity` | `transition-opacity` |
| `transition: shadow` | `transition-shadow` |
| `transition-duration: 150ms` | `duration-150` |
| `transition-duration: 300ms` | `duration-300` |
| `transition-duration: 500ms` | `duration-500` |
| `transition-timing: ease-in` | `ease-in` |
| `transition-timing: ease-out` | `ease-out` |
| `transition-timing: ease-in-out` | `ease-in-out` |

#### Built-in Animations

```html
<!-- Spin -->
<svg class="animate-spin h-5 w-5">...</svg>

<!-- Ping (notification dot) -->
<span class="animate-ping absolute h-3 w-3 rounded-full bg-red-400"></span>

<!-- Pulse -->
<div class="animate-pulse bg-gray-300 h-4 rounded"></div>

<!-- Bounce -->
<div class="animate-bounce">↓ Scroll down</div>
```

---

### 5️⃣ Dark Mode

Tailwind có built-in dark mode support!

#### Cách 1: Dựa vào OS setting (media query)

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  This adapts to system preference
</div>
```

#### Cách 2: Class-based (toggle bằng JS)

```html
<!-- Thêm class 'dark' vào html element để bật dark mode -->
<html class="dark">
  <body class="bg-white dark:bg-gray-900">
    ...
  </body>
</html>
```

#### Dark Mode Pattern

```html
<div class="bg-white dark:bg-gray-800 
            text-gray-900 dark:text-white
            border-gray-200 dark:border-gray-700
            shadow-md dark:shadow-gray-900/50">
  <h2 class="text-gray-800 dark:text-gray-100">Title</h2>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
  <button class="bg-blue-500 dark:bg-blue-600 
                 hover:bg-blue-600 dark:hover:bg-blue-700">
    Button
  </button>
</div>
```

---

## 💻 Ví Dụ Thực Tế

### Responsive Navbar với Mobile Menu

```html
<nav class="bg-white dark:bg-gray-900 shadow-sm">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="#" class="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        Brand
      </a>
      
      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <a href="#" class="text-gray-600 dark:text-gray-300 
                            hover:text-indigo-600 dark:hover:text-indigo-400
                            transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="text-gray-600 dark:text-gray-300 
                            hover:text-indigo-600 dark:hover:text-indigo-400
                            transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#" class="text-gray-600 dark:text-gray-300 
                            hover:text-indigo-600 dark:hover:text-indigo-400
                            transition-colors">
            Services
          </a>
        </li>
      </ul>
      
      <!-- CTA (hidden on mobile) -->
      <button class="hidden md:block px-4 py-2 bg-indigo-600 text-white 
                     rounded-lg hover:bg-indigo-700 transition-colors">
        Get Started
      </button>
      
      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2 text-gray-600 dark:text-gray-300
                     hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
        ☰
      </button>
    </div>
  </div>
</nav>
```

### Interactive Card

```html
<div class="group relative p-6 bg-white dark:bg-gray-800 rounded-xl 
            shadow-md hover:shadow-xl transition-all duration-300
            border border-gray-200 dark:border-gray-700
            hover:border-indigo-500 dark:hover:border-indigo-400">
  
  <!-- Badge -->
  <span class="absolute -top-2 -right-2 px-2 py-1 bg-indigo-500 
               text-white text-xs font-medium rounded-full">
    NEW
  </span>
  
  <!-- Icon -->
  <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg 
              flex items-center justify-center mb-4
              group-hover:bg-indigo-500 transition-colors">
    <span class="text-2xl group-hover:scale-110 transition-transform">🚀</span>
  </div>
  
  <!-- Content -->
  <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2
             group-hover:text-indigo-600 dark:group-hover:text-indigo-400
             transition-colors">
    Fast Performance
  </h3>
  <p class="text-gray-600 dark:text-gray-400">
    Lightning fast load times and smooth interactions for the best user experience.
  </p>
  
  <!-- Link -->
  <a href="#" class="inline-flex items-center gap-1 mt-4 text-indigo-600 
                     dark:text-indigo-400 font-medium
                     hover:gap-2 transition-all">
    Learn more 
    <span>→</span>
  </a>
</div>
```

### Form with Focus States

```html
<form class="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
  <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
    Contact Us
  </h2>
  
  <div class="space-y-4">
    <!-- Name Input -->
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Name
      </label>
      <input 
        type="text"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600
               rounded-lg bg-white dark:bg-gray-700
               text-gray-900 dark:text-white
               placeholder:text-gray-400 dark:placeholder:text-gray-500
               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50
               focus:outline-none transition-colors"
        placeholder="Your name"
      >
    </div>
    
    <!-- Email Input -->
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Email
      </label>
      <input 
        type="email"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600
               rounded-lg bg-white dark:bg-gray-700
               text-gray-900 dark:text-white
               placeholder:text-gray-400 dark:placeholder:text-gray-500
               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50
               focus:outline-none transition-colors"
        placeholder="you@example.com"
      >
    </div>
    
    <!-- Message -->
    <div>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Message
      </label>
      <textarea 
        rows="4"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600
               rounded-lg bg-white dark:bg-gray-700
               text-gray-900 dark:text-white
               placeholder:text-gray-400 dark:placeholder:text-gray-500
               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50
               focus:outline-none transition-colors resize-none"
        placeholder="Your message..."
      ></textarea>
    </div>
    
    <!-- Submit -->
    <button 
      type="submit"
      class="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg
             hover:bg-indigo-700 focus:outline-none focus:ring-2 
             focus:ring-indigo-500 focus:ring-offset-2
             active:scale-[0.98] transition-all
             disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Send Message
    </button>
  </div>
</form>
```

---

## 📝 Bài Tập

### Bài 1: Responsive Hero Section

Tạo hero section hoàn chỉnh:
- Full height trên mobile, 80vh trên desktop
- Text căn giữa trên mobile, căn trái trên desktop
- 2 buttons (stack dọc trên mobile, ngang trên desktop)
- Hỗ trợ dark mode

### Bài 2: Interactive Pricing Cards

Tạo 3 pricing cards:
- Hover effects: scale, shadow, border color
- Middle card "popular" được highlight
- Responsive: 1 cột → 3 cột
- Dark mode support

### Bài 3: Animated Feature Grid

Tạo grid 4 features với:
- Group hover: icon changes color, link arrow moves
- Transitions mượt mà
- Responsive grid

---

## ✅ Checklist

- [ ] Hiểu breakpoint prefixes: `sm:`, `md:`, `lg:`, `xl:`
- [ ] Biết responsive patterns: grid-cols, hidden/flex, stack-to-row
- [ ] Biết state variants: `hover:`, `focus:`, `active:`, `disabled:`
- [ ] Biết `group` và `group-hover:`
- [ ] Biết transition classes: `transition-*`, `duration-*`
- [ ] Biết built-in animations: `animate-spin`, `animate-pulse`
- [ ] Biết dark mode: `dark:` prefix
- [ ] Tạo được responsive navbar
- [ ] Tạo được interactive cards với hover effects

---

## ➡️ Bài Tiếp Theo

[Bài 04: Building Components](../04-components/guide.md)
