# 🎨 Bài 05: Flexbox - Layout Engine #1

> **Mục tiêu**: Master Flexbox - công cụ layout quan trọng nhất trong CSS hiện đại

---

## 1. Flexbox Là Gì?

**Flexbox = Flexible Box Layout**

- Layout **1 chiều** (hàng HOẶC cột)
- Tự động phân chia không gian
- Căn chỉnh dễ dàng
- **Dùng cho 90% layout thông thường**

```css
.container {
  display: flex;  /* ← Bật Flexbox! */
}
```

Khi bật `display: flex`:
- Container trở thành **Flex Container**
- Các children trở thành **Flex Items**

---

## 2. Trục Trong Flexbox

```
Main Axis (Trục chính)
─────────────────────────────────────────→

↑
│  
│  Cross Axis (Trục phụ)
│  
↓
```

- **Main Axis**: Hướng items xếp (mặc định: ngang →)
- **Cross Axis**: Vuông góc với main axis

---

## 3. Flex Container Properties

### flex-direction (Hướng xếp)

```css
.container {
  display: flex;
  flex-direction: row;            /* → Mặc định: trái → phải */
  flex-direction: row-reverse;    /* ← Phải → trái */
  flex-direction: column;         /* ↓ Trên → dưới */
  flex-direction: column-reverse; /* ↑ Dưới → trên */
}
```

```
row:           [1] [2] [3]
row-reverse:   [3] [2] [1]

column:        [1]
               [2]
               [3]
```

### justify-content (Căn Main Axis)

```css
.container {
  display: flex;
  justify-content: flex-start;    /* |[1][2][3]      | Mặc định */
  justify-content: flex-end;      /* |      [1][2][3]| */
  justify-content: center;        /* |   [1][2][3]   | */
  justify-content: space-between; /* |[1]   [2]   [3]| */
  justify-content: space-around;  /* | [1]  [2]  [3] | */
  justify-content: space-evenly;  /* |  [1] [2] [3]  | */
}
```

### align-items (Căn Cross Axis)

```css
.container {
  display: flex;
  height: 200px;
  align-items: stretch;     /* Kéo dãn hết chiều cao (mặc định) */
  align-items: flex-start;  /* Dính trên */
  align-items: flex-end;    /* Dính dưới */
  align-items: center;      /* Căn giữa vertical */
  align-items: baseline;    /* Căn theo baseline của text */
}
```

### 🌟 Căn giữa hoàn hảo (Center Center)

```css
.container {
  display: flex;
  justify-content: center;  /* Căn giữa horizontal */
  align-items: center;      /* Căn giữa vertical */
}
```

### flex-wrap (Xuống dòng)

```css
.container {
  display: flex;
  flex-wrap: nowrap;  /* Không wrap (mặc định) - co lại */
  flex-wrap: wrap;    /* Wrap xuống dòng khi hết chỗ */
}
```

### gap (Khoảng cách) 🌟

```css
.container {
  display: flex;
  gap: 20px;              /* Tất cả */
  gap: 20px 10px;         /* row-gap | column-gap */
  row-gap: 20px;
  column-gap: 10px;
}
```

✅ Dùng `gap` thay vì margin cho flex items!

---

## 4. Flex Item Properties

### flex-grow (Tỉ lệ phình ra)

```css
.item {
  flex-grow: 0;  /* Mặc định: không phình */
  flex-grow: 1;  /* Phình ra chiếm hết khoảng trống */
}
```

```
Container: |-------------------------|
           [1]  [2 flex-grow:1]  [3]
           
Kết quả:   |[1][     2      ][3]|
```

### flex-shrink (Tỉ lệ co lại)

```css
.item {
  flex-shrink: 1;  /* Mặc định: co lại khi cần */
  flex-shrink: 0;  /* Không co lại */
}
```

### flex-basis (Kích thước cơ sở)

```css
.item {
  flex-basis: auto;   /* Mặc định: theo content */
  flex-basis: 200px;  /* Kích thước ban đầu */
  flex-basis: 0;      /* Bắt đầu từ 0 */
}
```

### flex Shorthand 🌟

```css
.item {
  flex: 1;           /* grow:1, shrink:1, basis:0% - Đều nhau */
  flex: 0 0 200px;   /* grow:0, shrink:0, basis:200px - Cố định */
  flex: 1 1 auto;    /* Mặc định */
}
```

### align-self (Căn riêng item)

```css
.item {
  align-self: auto;        /* Theo container */
  align-self: flex-start;
  align-self: center;
  align-self: flex-end;
}
```

### order (Thứ tự)

```css
.item-1 { order: 2; }  /* Hiển thị thứ 2 */
.item-2 { order: 1; }  /* Hiển thị đầu tiên */
.item-3 { order: 3; }  /* Hiển thị cuối */
```

---

## 5. Common Patterns

### Pattern 1: Navbar

```html
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-menu">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;  /* Logo trái, Menu phải */
  align-items: center;
  padding: 16px 24px;
}

.nav-menu {
  display: flex;
  gap: 24px;
  list-style: none;
}
```

### Pattern 2: Card Grid (Responsive)

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card {
  flex: 1 1 300px;  /* Min 300px, grow đều, wrap khi cần */
}
```

### Pattern 3: Sidebar + Main

```css
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px;  /* Cố định 250px */
}

.main {
  flex: 1;  /* Chiếm phần còn lại */
}
```

### Pattern 4: Footer Stick Bottom

```css
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;  /* Đẩy footer xuống dưới */
}

footer {
  /* Tự động ở dưới */
}
```

### Pattern 5: Center Everything

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

## 6. Flexbox Cheatsheet

```css
/* Container */
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;
  align-items: stretch | flex-start | center | flex-end;
  flex-wrap: nowrap | wrap;
  gap: 20px;
}

/* Items */
.item {
  flex: 1;              /* Đều nhau */
  flex: 0 0 200px;      /* Cố định */
  align-self: center;   /* Căn riêng */
  order: 1;             /* Thứ tự */
}
```

---

## 💻 Bài Tập

Mở `exercise.html` để thực hành các layout patterns phổ biến!

---

## ✅ Checklist

- [ ] Biết `display: flex` bật flexbox
- [ ] Phân biệt justify-content vs align-items
- [ ] Sử dụng `gap` cho spacing
- [ ] Căn giữa hoàn hảo với flex
- [ ] Tạo responsive card grid với flex-wrap
- [ ] Tạo navbar với space-between

---

**Tiếp theo**: [Bài 06 - CSS Grid](../06-grid/)
