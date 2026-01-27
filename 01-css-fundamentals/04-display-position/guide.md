# 📍 Bài 04: Display & Position

> **Mục tiêu**: Hiểu display types và positioning - nền tảng để đặt elements đúng vị trí

---

## 1. Display Property

### Block Elements
```css
display: block;
```
- Chiếm **toàn bộ chiều ngang** (100% width)
- Luôn bắt đầu **dòng mới**
- Có thể set width, height, margin, padding
- Ví dụ: `<div>`, `<p>`, `<h1>-<h6>`, `<section>`, `<header>`

```
[         Block Element         ]
[       Another Block           ]
```

### Inline Elements
```css
display: inline;
```
- Chỉ chiếm **đủ content**
- **Không** xuống dòng
- **Không thể** set width, height
- Margin/padding chỉ có hiệu lực horizontal
- Ví dụ: `<span>`, `<a>`, `<strong>`, `<em>`

```
[Text][Inline][More text][Inline]
```

### Inline-Block
```css
display: inline-block;
```
- Kết hợp cả hai: **không xuống dòng** + **có thể set width/height**
- Dùng cho buttons, icons kèm text

```
[  Box  ][  Box  ][  Box  ]
```

### None
```css
display: none;
```
- Ẩn hoàn toàn, không chiếm không gian
- Khác với `visibility: hidden` (vẫn chiếm chỗ)

### Flex & Grid
```css
display: flex;    /* Bật Flexbox */
display: grid;    /* Bật Grid */
```

---

## 2. So sánh Display Types

| Property | width/height | margin/padding | New line |
|----------|--------------|----------------|----------|
| `block` | ✅ | ✅ | ✅ |
| `inline` | ❌ | Horizontal only | ❌ |
| `inline-block` | ✅ | ✅ | ❌ |
| `none` | - | - | Ẩn |

---

## 3. Position Property

### static (Mặc định)
```css
position: static;
```
- Theo document flow bình thường
- `top`, `left`, `right`, `bottom` không có tác dụng

### relative
```css
position: relative;
top: 20px;    /* Dịch xuống 20px từ vị trí gốc */
left: 10px;   /* Dịch sang phải 10px */
```
- Vẫn chiếm vị trí gốc trong document flow
- Dịch chuyển **tương đối** so với vị trí ban đầu
- Dùng làm **reference point** cho absolute children

```
┌─────────────────────┐
│ [position gốc]      │
│    ↓ top: 20px      │
│    [hiển thị ở đây] │
└─────────────────────┘
```

### absolute
```css
position: absolute;
top: 0;
right: 0;
```
- Thoát khỏi document flow (không chiếm chỗ)
- Định vị **tương đối với ancestor có position !== static**
- Nếu không có → định vị theo `<body>`

```css
.parent {
  position: relative;  /* Làm reference point */
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

```
┌─────────────────────────┐
│ Parent (relative)  [X]  │ ← Child (absolute, top-right)
│                         │
│   Other content...      │
│                         │
└─────────────────────────┘
```

### fixed
```css
position: fixed;
top: 0;
left: 0;
right: 0;
```
- Thoát khỏi document flow
- Định vị **tương đối với viewport**
- **Không di chuyển** khi scroll
- Dùng cho: navbar cố định, nút chat

```css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
```

### sticky
```css
position: sticky;
top: 0;
```
- Hybrid của relative và fixed
- Hoạt động như relative cho đến khi scroll đến threshold
- Sau đó "dính" như fixed
- Dùng cho: sticky headers, table headers

```css
.sticky-nav {
  position: sticky;
  top: 0;  /* Dính khi chạm top */
}
```

---

## 4. So sánh Position Types

| Property | Document Flow | Reference | Scroll |
|----------|---------------|-----------|--------|
| `static` | ✅ | - | Di chuyển |
| `relative` | ✅ | Vị trí gốc | Di chuyển |
| `absolute` | ❌ | Ancestor relative | Di chuyển |
| `fixed` | ❌ | Viewport | Cố định |
| `sticky` | ✅ → ❌ | Viewport | Hybrid |

---

## 5. Z-Index (Thứ tự xếp chồng)

```css
.modal {
  position: fixed;
  z-index: 100;    /* Lớn hơn = trên cùng */
}

.overlay {
  position: fixed;
  z-index: 99;     /* Nhỏ hơn = phía dưới */
}
```

⚠️ **z-index chỉ hoạt động với `position !== static`**

### Z-Index Scale đề xuất:
```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-tooltip: 400;
}
```

---

## 6. Common Patterns

### Pattern 1: Badge trên góc
```html
<div class="card">
  <span class="badge">NEW</span>
  <img src="..." />
</div>
```

```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}
```

### Pattern 2: Fixed Header
```css
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  z-index: 100;
}

main {
  margin-top: 60px;  /* Offset cho fixed header */
}
```

### Pattern 3: Overlay & Modal
```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
```

### Pattern 4: Absolute Center
```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

## 💻 Thực Hành

Mở `exercise.html` để thực hành display và position!

---

## ✅ Checklist

- [ ] Phân biệt block, inline, inline-block
- [ ] Biết khi nào dùng position: relative
- [ ] Sử dụng absolute với parent relative
- [ ] Tạo fixed header
- [ ] Căn giữa với absolute + transform
- [ ] Hiểu z-index và stacking context

---

**Tiếp theo**: [Bài 05 - Flexbox](../05-flexbox/)
