# 📱 CSS Complete Cheatsheet

> Tất cả những gì bạn cần nhớ trong 1 file!

---

## 🔷 Reset CSS Chuẩn

```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}
```

---

## 🔷 CSS Variables

```css
:root {
  /* Colors */
  --primary: #667eea;
  --secondary: #764ba2;
  --success: #27ae60;
  --warning: #f39c12;
  --danger: #e74c3c;
  
  /* Neutrals */
  --white: #ffffff;
  --black: #000000;
  --gray-100: #f5f5f5;
  --gray-300: #e0e0e0;
  --gray-500: #888888;
  --gray-700: #333333;
  
  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
}
```

---

## 🔷 Box Model

```css
/* Content + Padding + Border = Total Width */
.box {
  width: 300px;
  height: 200px;
  padding: 20px;                /* all sides */
  padding: 10px 20px;           /* vertical | horizontal */
  padding: 10px 20px 30px 40px; /* top right bottom left */
  margin: 0 auto;               /* center horizontally */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;       /* ALWAYS USE THIS */
}
```

---

## 🔷 Flexbox

```css
/* Container */
.flex-container {
  display: flex;
  flex-direction: row;              /* row | column */
  justify-content: space-between;   /* main axis */
  align-items: center;              /* cross axis */
  flex-wrap: wrap;                  /* wrap items */
  gap: 20px;                        /* spacing */
}

/* Items */
.flex-item {
  flex: 1;                      /* grow equally */
  flex: 0 0 200px;              /* fixed width */
  align-self: flex-start;       /* individual alignment */
}

/* COMMON PATTERNS */

/* Center everything */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navbar: logo left, menu right */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Responsive cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.card {
  flex: 1 1 300px;  /* min 300px, grow equally */
}
```

---

## 🔷 Grid

```css
/* Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-columns: 200px 1fr 200px; /* sidebar | main | sidebar */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* responsive */
  gap: 20px;
}

/* Items */
.grid-item {
  grid-column: span 2;    /* take 2 columns */
  grid-row: span 2;       /* take 2 rows */
}

/* Named areas */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
```

---

## 🔷 Position

```css
/* Relative - dịch từ vị trí gốc */
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute - định vị theo parent relative */
.parent { position: relative; }
.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed - cố định theo viewport */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* Sticky - dính khi scroll */
.sticky {
  position: sticky;
  top: 0;
}

/* Center absolute */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

## 🔷 Typography

```css
.text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;              /* 400=normal, 700=bold */
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #333;
}

/* Truncate single line */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## 🔷 Buttons

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: #5a6fd6;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}
```

---

## 🔷 Cards

```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
```

---

## 🔷 Forms

```css
.input {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}
```

---

## 🔷 Responsive

```css
/* Mobile First */
.container {
  padding: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Fluid typography */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

---

## 🔷 Transitions & Animations

```css
/* Transition */
.element {
  transition: all 0.3s ease;
  transition: transform 0.3s, opacity 0.3s;
}

/* Keyframe Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate {
  animation: fadeIn 0.5s ease forwards;
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-5px);
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

---

## 🔷 Utility Classes

```css
/* Display */
.hidden { display: none; }
.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }

/* Text */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.font-bold { font-weight: 700; }

/* Spacing */
.mt-4 { margin-top: 16px; }
.mb-4 { margin-bottom: 16px; }
.p-4 { padding: 16px; }

/* Width */
.w-full { width: 100%; }
.max-w-lg { max-width: 1024px; }

/* Border Radius */  
.rounded { border-radius: 8px; }
.rounded-full { border-radius: 9999px; }
```

---

## 🔷 Quick Reference

| Muốn làm gì | CSS |
|-------------|-----|
| Căn giữa hoàn hảo | `display: flex; justify-content: center; align-items: center;` |
| Căn giữa block | `margin: 0 auto;` |
| Grid responsive | `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));` |
| Fixed header | `position: fixed; top: 0; left: 0; right: 0;` |
| Overlay | `position: fixed; inset: 0; background: rgba(0,0,0,0.5);` |
| Button hover | `transform: translateY(-2px); box-shadow: ...` |
| Card hover | `transform: translateY(-5px); box-shadow: ...` |
| Hide scrollbar | `-ms-overflow-style: none; scrollbar-width: none;` |
| Aspect ratio | `aspect-ratio: 16/9;` |
| Smooth scroll | `scroll-behavior: smooth;` |

---

**Bookmark trang này để tra cứu nhanh! 🚀**
