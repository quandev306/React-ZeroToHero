# 📐 Bài 02: Layout với Tailwind - Flexbox & Grid

## 🎯 Mục Tiêu

- Áp dụng kiến thức Flexbox (Bài 05 CSS) vào Tailwind
- Áp dụng kiến thức Grid (Bài 06 CSS) vào Tailwind
- Sử dụng Box Model trong Tailwind
- Nắm vững các utility layout

---

## 📚 Lý Thuyết

### 1️⃣ Flexbox trong Tailwind

**Nhớ lại CSS thuần (Bài 05):**
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}
```

**Tailwind tương đương:**
```html
<div class="flex justify-between items-center gap-6">
```

#### Container Properties Mapping

| CSS Property | CSS Value | Tailwind Class |
|--------------|-----------|----------------|
| `display: flex` | | `flex` |
| `display: inline-flex` | | `inline-flex` |
| `flex-direction` | row | `flex-row` (mặc định) |
| | row-reverse | `flex-row-reverse` |
| | column | `flex-col` |
| | column-reverse | `flex-col-reverse` |
| `flex-wrap` | nowrap | `flex-nowrap` (mặc định) |
| | wrap | `flex-wrap` |
| | wrap-reverse | `flex-wrap-reverse` |
| `justify-content` | flex-start | `justify-start` |
| | center | `justify-center` |
| | flex-end | `justify-end` |
| | space-between | `justify-between` |
| | space-around | `justify-around` |
| | space-evenly | `justify-evenly` |
| `align-items` | stretch | `items-stretch` (mặc định) |
| | flex-start | `items-start` |
| | center | `items-center` |
| | flex-end | `items-end` |
| | baseline | `items-baseline` |
| `gap` | 16px | `gap-4` |
| | 24px | `gap-6` |
| | 32px | `gap-8` |

#### Item Properties Mapping

| CSS Property | CSS Value | Tailwind Class |
|--------------|-----------|----------------|
| `flex` | 1 1 0% | `flex-1` |
| | 1 1 auto | `flex-auto` |
| | 0 1 auto | `flex-initial` |
| | none | `flex-none` |
| `flex-grow` | 1 | `grow` |
| | 0 | `grow-0` |
| `flex-shrink` | 1 | `shrink` |
| | 0 | `shrink-0` |
| `align-self` | auto | `self-auto` |
| | start | `self-start` |
| | center | `self-center` |
| | end | `self-end` |
| `order` | -1 | `order-first` |
| | 1 | `order-last` |

---

### 🎯 Flexbox Patterns (Từ Bài 05 CSS)

#### Pattern 1: Căn giữa hoàn hảo

**CSS thuần:**
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**Tailwind:**
```html
<div class="flex justify-center items-center">
  <!-- Nội dung được căn giữa -->
</div>
```

💡 **Shorthand phổ biến:** Bạn sẽ viết `flex items-center justify-center` RẤT NHIỀU!

#### Pattern 2: Navbar (logo trái, menu phải)

**CSS thuần:**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Tailwind:**
```html
<nav class="flex justify-between items-center p-4">
  <div class="logo">Logo</div>
  <ul class="flex gap-6">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg">
    Sign Up
  </button>
</nav>
```

#### Pattern 3: Cards Responsive

**CSS thuần:**
```css
.cards { 
  display: flex; 
  flex-wrap: wrap; 
  gap: 24px; 
}
.card { 
  flex: 1 1 300px; 
}
```

**Tailwind:**
```html
<div class="flex flex-wrap gap-6">
  <div class="flex-1 min-w-[300px] p-6 bg-white rounded-lg shadow">
    Card 1
  </div>
  <div class="flex-1 min-w-[300px] p-6 bg-white rounded-lg shadow">
    Card 2
  </div>
  <div class="flex-1 min-w-[300px] p-6 bg-white rounded-lg shadow">
    Card 3
  </div>
</div>
```

#### Pattern 4: Vertical Stack với Gap

```html
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

### 2️⃣ Grid trong Tailwind

**Nhớ lại CSS thuần (Bài 06):**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

**Tailwind tương đương:**
```html
<div class="grid grid-cols-3 gap-6">
```

#### Grid Mapping

| CSS Property | CSS Value | Tailwind Class |
|--------------|-----------|----------------|
| `display: grid` | | `grid` |
| `display: inline-grid` | | `inline-grid` |
| `grid-template-columns` | 1 col | `grid-cols-1` |
| | 2 cols | `grid-cols-2` |
| | 3 cols | `grid-cols-3` |
| | 4 cols | `grid-cols-4` |
| | 6 cols | `grid-cols-6` |
| | 12 cols | `grid-cols-12` |
| `grid-template-rows` | 1 row | `grid-rows-1` |
| | 3 rows | `grid-rows-3` |
| `grid-column: span 2` | | `col-span-2` |
| `grid-column: span 3` | | `col-span-3` |
| `grid-row: span 2` | | `row-span-2` |

#### Responsive Grid Pattern

**CSS thuần:**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

**Tailwind (dùng breakpoints):**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

Giải thích:
- Mặc định (mobile): 1 cột
- `md:` (≥768px): 2 cột  
- `lg:` (≥1024px): 3 cột

---

### 3️⃣ Width & Height

#### Width

| CSS | Tailwind |
|-----|----------|
| `width: 16px` | `w-4` |
| `width: 64px` | `w-16` |
| `width: 100%` | `w-full` |
| `width: 100vw` | `w-screen` |
| `width: auto` | `w-auto` |
| `width: 50%` | `w-1/2` |
| `width: 33.33%` | `w-1/3` |
| `width: 25%` | `w-1/4` |
| `max-width: 768px` | `max-w-3xl` |
| `max-width: 1280px` | `max-w-7xl` |
| `min-width: 0` | `min-w-0` |

#### Height

| CSS | Tailwind |
|-----|----------|
| `height: 32px` | `h-8` |
| `height: 100%` | `h-full` |
| `height: 100vh` | `h-screen` |
| `min-height: 100vh` | `min-h-screen` |

---

### 4️⃣ Position (Bài 04 CSS)

**Nhớ lại CSS thuần:**
```css
.parent { position: relative; }
.badge { 
  position: absolute; 
  top: 10px; 
  right: 10px; 
}
```

**Tailwind:**
```html
<div class="relative">
  <img src="..." class="w-full">
  <span class="absolute top-2.5 right-2.5 bg-red-500 text-white 
               text-xs px-2 py-1 rounded-full">
    NEW
  </span>
</div>
```

#### Position Mapping

| CSS | Tailwind |
|-----|----------|
| `position: static` | `static` |
| `position: relative` | `relative` |
| `position: absolute` | `absolute` |
| `position: fixed` | `fixed` |
| `position: sticky` | `sticky` |
| `top: 0` | `top-0` |
| `right: 0` | `right-0` |
| `bottom: 0` | `bottom-0` |
| `left: 0` | `left-0` |
| `inset: 0` | `inset-0` |
| `z-index: 10` | `z-10` |
| `z-index: 50` | `z-50` |

#### Pattern: Fixed Header

**CSS thuần:**
```css
header { 
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 50;
}
```

**Tailwind:**
```html
<header class="fixed top-0 left-0 right-0 z-50 bg-white shadow">
  <!-- hoặc ngắn hơn: -->
</header>
<header class="fixed inset-x-0 top-0 z-50 bg-white shadow">
```

#### Pattern: Centered Absolute

**CSS thuần:**
```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

**Tailwind:**
```html
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Centered Content
</div>
```

---

## 💻 Ví Dụ Thực Tế

### Navbar Complete

```html
<nav class="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="#" class="text-xl font-bold text-indigo-600">Brand</a>
      
      <!-- Menu -->
      <ul class="hidden md:flex items-center gap-8">
        <li><a href="#" class="text-gray-600 hover:text-indigo-600">Home</a></li>
        <li><a href="#" class="text-gray-600 hover:text-indigo-600">About</a></li>
        <li><a href="#" class="text-gray-600 hover:text-indigo-600">Services</a></li>
        <li><a href="#" class="text-gray-600 hover:text-indigo-600">Contact</a></li>
      </ul>
      
      <!-- CTA Button -->
      <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg 
                     hover:bg-indigo-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
</nav>
```

### Card Grid Layout

```html
<div class="max-w-7xl mx-auto px-4 py-12">
  <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Card 1 -->
    <div class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <span class="text-2xl">🚀</span>
      </div>
      <h3 class="text-xl font-semibold mb-2">Fast Performance</h3>
      <p class="text-gray-600">Lightning fast load times and smooth interactions.</p>
    </div>
    
    <!-- Card 2 -->
    <div class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <span class="text-2xl">🔒</span>
      </div>
      <h3 class="text-xl font-semibold mb-2">Secure</h3>
      <p class="text-gray-600">Enterprise-grade security for your data.</p>
    </div>
    
    <!-- Card 3 -->
    <div class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
        <span class="text-2xl">⚡</span>
      </div>
      <h3 class="text-xl font-semibold mb-2">Easy Integration</h3>
      <p class="text-gray-600">Seamlessly integrate with your existing tools.</p>
    </div>
  </div>
</div>
```

### Two Column Layout (About Section)

```html
<section class="py-16 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center gap-12">
      <!-- Image -->
      <div class="flex-1">
        <img 
          src="https://picsum.photos/500/400" 
          alt="About Us"
          class="w-full rounded-2xl shadow-lg"
        >
      </div>
      
      <!-- Content -->
      <div class="flex-1">
        <h2 class="text-3xl font-bold mb-4">About Our Company</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          We're a team of passionate developers building the future of web applications.
          Our mission is to create beautiful, performant, and accessible products.
        </p>
        <p class="text-gray-600 mb-6 leading-relaxed">
          Founded in 2020, we've helped hundreds of companies transform their digital presence.
        </p>
        <button class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## 📝 Bài Tập

### Bài 1: Recreate Navbar

Tạo navbar với:
- Logo bên trái
- 4 menu items ở giữa
- 2 buttons bên phải (Login, Sign Up)
- Căn giữa theo chiều dọc
- Max-width container

### Bài 2: Feature Grid

Tạo grid 3 cột (responsive xuống 1 cột trên mobile) với 6 feature cards.

### Bài 3: Hero Section

Tạo hero section với:
- Full height (100vh)
- Content căn giữa cả ngang và dọc
- Heading lớn + paragraph + 2 buttons

<details>
<summary>👀 Xem đáp án Bài 3</summary>

```html
<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
  <div class="text-center text-white px-4">
    <h1 class="text-5xl md:text-6xl font-bold mb-6">
      Build Amazing Products
    </h1>
    <p class="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
      The modern way to create beautiful, responsive websites with TailwindCSS.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg 
                     hover:bg-gray-100 transition-colors">
        Get Started
      </button>
      <button class="px-8 py-4 border-2 border-white text-white font-semibold 
                     rounded-lg hover:bg-white/10 transition-colors">
        Learn More
      </button>
    </div>
  </div>
</section>
```

</details>

---

## ✅ Checklist

- [ ] Biết mapping Flexbox: `flex`, `justify-*`, `items-*`, `gap-*`
- [ ] Biết mapping Grid: `grid`, `grid-cols-*`
- [ ] Thuộc các pattern: center, space-between, responsive grid
- [ ] Biết width/height: `w-*`, `h-*`, `max-w-*`, `min-h-screen`
- [ ] Biết position: `relative`, `absolute`, `fixed`, `top-*`, `z-*`
- [ ] Tạo được navbar responsive
- [ ] Tạo được card grid layout

---

## ➡️ Bài Tiếp Theo

[Bài 03: Responsive & States](../03-responsive/guide.md)
