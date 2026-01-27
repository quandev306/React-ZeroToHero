# 🔲 Bài 3: CSS Grid

## 🎯 Mục Tiêu

- Hiểu khi nào dùng Grid vs Flexbox
- Tạo layout 2 chiều (hàng + cột)
- Nắm vững grid-template và grid-area

---

## 📚 Lý Thuyết

### 1. Grid vs Flexbox

| Flexbox | Grid |
|---------|------|
| 1 chiều (hàng HOẶC cột) | 2 chiều (hàng VÀ cột) |
| Content-first | Layout-first |
| Navigation, Cards | Full page layout |

### 2. Grid Container

```css
.container {
  display: grid;
  
  /* Định nghĩa cột */
  grid-template-columns: 200px 1fr 200px;  /* 3 cột */
  grid-template-columns: repeat(3, 1fr);    /* 3 cột đều */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* responsive */
  
  /* Định nghĩa hàng */
  grid-template-rows: 100px auto 60px;
  
  /* Gap */
  gap: 20px;
  column-gap: 20px;
  row-gap: 10px;
  
  /* Căn chỉnh tất cả items */
  justify-items: center; /* horizontal */
  align-items: center;   /* vertical */
}
```

### 3. Grid Items

```css
.item {
  /* Vị trí theo line numbers */
  grid-column: 1 / 3;     /* từ line 1 đến 3 (span 2 cột) */
  grid-row: 1 / 2;
  
  /* Shorthand */
  grid-column: span 2;    /* chiếm 2 cột */
  grid-row: span 3;       /* chiếm 3 hàng */
  
  /* Căn chỉnh riêng item */
  justify-self: end;
  align-self: start;
}
```

### 4. Grid Areas (Named)

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 20px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

### 5. Common Patterns

```css
/* Responsive Grid (tự động điều chỉnh số cột) */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Holy Grail Layout */
.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

---

## 💻 Bài Tập

1. **Photo Gallery**: Grid responsive với auto-fit
2. **Dashboard Layout**: Sidebar + Main + Header
3. **Magazine Layout**: Các article kích thước khác nhau

---

## ✅ Checklist

- [ ] Biết khi nào dùng Grid vs Flexbox
- [ ] Sử dụng được grid-template-columns
- [ ] Hiểu minmax() và auto-fit
- [ ] Tạo layout với grid-template-areas
