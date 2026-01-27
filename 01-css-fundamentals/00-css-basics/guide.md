# 🌟 Bài 00: CSS Basics - Nền Tảng

> **Mục tiêu**: Hiểu CSS là gì, hoạt động như thế nào, và cú pháp cơ bản

---

## 1. CSS Là Gì?

**CSS = Cascading Style Sheets**

- **HTML** = Cấu trúc (xương)
- **CSS** = Giao diện (da, quần áo)
- **JavaScript** = Hành vi (cử động)

```
Không có CSS → Trang web trắng, chữ đen, xấu
Có CSS → Màu sắc, layout đẹp, chuyên nghiệp
```

---

## 2. Ba Cách Viết CSS

### Cách 1: Inline CSS (Viết trực tiếp trong HTML)
```html
<p style="color: red; font-size: 20px;">Chữ đỏ</p>
```
❌ **Không nên dùng** - Khó maintain, lặp code

### Cách 2: Internal CSS (Trong thẻ `<style>`)
```html
<head>
  <style>
    p {
      color: red;
      font-size: 20px;
    }
  </style>
</head>
```
⚠️ **Dùng khi**: Trang đơn lẻ, demo nhanh

### Cách 3: External CSS (File riêng) ✅
```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
p {
  color: red;
  font-size: 20px;
}
```
✅ **Luôn dùng cách này** - Clean, tái sử dụng được

---

## 3. Cú Pháp CSS

```css
selector {
  property: value;
  property: value;
}
```

### Ví dụ:
```css
h1 {
  color: blue;           /* Màu chữ */
  font-size: 32px;       /* Cỡ chữ */
  text-align: center;    /* Căn giữa */
  margin-bottom: 20px;   /* Khoảng cách dưới */
}
```

### Giải thích:
- `h1` → **Selector**: Chọn element nào
- `color` → **Property**: Thuộc tính muốn thay đổi
- `blue` → **Value**: Giá trị mới
- `;` → Kết thúc mỗi dòng
- `/* */` → Comment

---

## 4. Các Selector Cơ Bản

### Element Selector (theo thẻ)
```css
p { color: blue; }        /* Tất cả thẻ <p> */
h1 { font-size: 32px; }   /* Tất cả thẻ <h1> */
div { background: gray; } /* Tất cả thẻ <div> */
```

### Class Selector (theo class) - **DÙNG NHIỀU NHẤT**
```html
<p class="intro">Giới thiệu</p>
<p class="highlight">Nổi bật</p>
```
```css
.intro { font-size: 18px; }
.highlight { background: yellow; }
```

### ID Selector (theo id)
```html
<header id="main-header">Header</header>
```
```css
#main-header { background: navy; }
```
⚠️ **ID chỉ dùng 1 lần** trong trang, nên hạn chế dùng cho CSS

### Kết hợp nhiều class
```html
<button class="btn btn-primary btn-large">Click</button>
```
```css
.btn { padding: 10px 20px; border: none; }
.btn-primary { background: blue; color: white; }
.btn-large { font-size: 18px; }
```

---

## 5. Các Thuộc Tính Hay Dùng Nhất

### Text & Font
```css
color: #333;              /* Màu chữ */
font-size: 16px;          /* Cỡ chữ */
font-weight: bold;        /* Độ đậm: normal, bold, 100-900 */
font-family: Arial, sans-serif;
text-align: left;         /* left, center, right, justify */
text-decoration: none;    /* none, underline, line-through */
line-height: 1.5;         /* Chiều cao dòng */
```

### Background
```css
background-color: #f5f5f5;
background-image: url('image.jpg');
background-size: cover; /* co giãn hình ảnh */
background-position: center; /* căn giữa hình ảnh */

/* Shorthand */
background: #f5f5f5 url('image.jpg') center/cover no-repeat;
```

### Border
```css
border: 1px solid #ddd;   /* width style color */
border-radius: 8px;       /* Bo góc */

/* Từng phía */
border-top: 2px solid red;
border-bottom: none;
```

### Size
```css
width: 100%;
max-width: 1200px;
min-width: 300px;

height: 100px;
min-height: 50vh;         /* 50% viewport height */
```

---

## 6. Đơn Vị Trong CSS

### Absolute (Cố định)
| Đơn vị | Ý nghĩa |
|--------|---------|
| `px` | Pixel - cố định |
| `pt` | Point (in ấn) |

### Relative (Tương đối) - **NÊN DÙNG**
| Đơn vị | Ý nghĩa | Ví dụ |
|--------|---------|-------|
| `%` | % của parent | `width: 50%` |
| `em` | Nhân với font-size của element | `padding: 1em` |
| `rem` | Nhân với font-size của root (html) | `font-size: 1.5rem` |
| `vw` | % của viewport width | `width: 100vw` |
| `vh` | % của viewport height | `height: 100vh` |

### Quy tắc:
- **Font-size**: Dùng `rem` (dễ scale)
- **Spacing (padding, margin)**: Dùng `rem` hoặc `px`
- **Width**: Dùng `%` hoặc `px`
- **Full screen**: Dùng `vw`, `vh`

---

## 7. Color Formats

```css
/* Named colors */
color: red;
color: blue;
color: transparent;

/* Hex */
color: #ff0000;        /* Đỏ */
color: #000;           /* Đen (shorthand) */
color: #fff;           /* Trắng */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (có độ trong suốt) */
color: rgba(255, 0, 0, 0.5);  /* 50% opacity */

/* HSL (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);     /* Đỏ */
color: hsl(240, 100%, 50%);   /* Xanh dương */
```

### Color Tips:
- **Trắng**: `#fff` hoặc `#ffffff`
- **Đen**: `#000` hoặc `#000000`
- **Xám nhạt**: `#f5f5f5`
- **Xám đậm**: `#333` hoặ `#666`

---

## 💻 Thực Hành Ngay

Mở file `demo.html` trong browser và quan sát kết quả!

### Bài tập:
1. Thay đổi màu heading
2. Thêm background cho container
3. Thêm border-radius cho card
4. Thay đổi font-size

---

## ✅ Checklist Hoàn Thành

- [ ] Biết 3 cách viết CSS
- [ ] Hiểu cú pháp: selector { property: value; }
- [ ] Phân biệt class (.) và id (#)
- [ ] Biết các đơn vị: px, %, rem, vh, vw
- [ ] Hiểu các format màu sắc

---

**Tiếp theo**: [Bài 01 - Selectors & Specificity](../01-selectors/)
