# 📱 Bài 4: Responsive Design

## 🎯 Mục Tiêu

- Hiểu Mobile-First approach
- Sử dụng Media Queries
- Responsive images và typography
- CSS Units (rem, em, vw, vh)

---

## 📚 Lý Thuyết

### 1. Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 2. CSS Units

```css
/* Absolute */
px      /* pixels - cố định */

/* Relative */
%       /* % của parent */
em      /* relative to font-size của element */
rem     /* relative to font-size của root (html) */
vw      /* 1% viewport width */
vh      /* 1% viewport height */
vmin    /* min(vw, vh) */
vmax    /* max(vw, vh) */
```

### 3. Mobile-First Media Queries

```css
/* Base styles = Mobile (mặc định) */
.container {
  padding: 16px;
  font-size: 14px;
}

/* Tablet (768px trở lên) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    font-size: 16px;
  }
}

/* Desktop (1024px trở lên) */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}
```

### 4. Common Breakpoints

```css
/* Mobile First Approach */
/* Base: 0 - 767px (Mobile) */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large */ }
```

### 5. Responsive Patterns

```css
/* Responsive Typography */
html {
  font-size: 16px;
}
@media (min-width: 768px) {
  html { font-size: 18px; }
}

/* clamp() - fluid typography */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
}

/* Responsive Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Container Pattern */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}
```

---

## 💻 Bài Tập

1. **Responsive Navbar**: Mobile hamburger → Desktop full menu
2. **Responsive Grid**: 1 → 2 → 3 cột theo breakpoint
3. **Fluid Typography**: Sử dụng clamp()

---

## ✅ Checklist

- [ ] Hiểu Mobile-First approach
- [ ] Viết được Media Queries
- [ ] Biết dùng rem thay px
- [ ] Sử dụng clamp() cho typography
