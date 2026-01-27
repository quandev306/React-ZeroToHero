# 📦 Bài 1: Box Model & CSS Selectors

## 🎯 Mục Tiêu

- Hiểu Box Model trong CSS
- Nắm vững các loại selectors
- Phân biệt `margin` vs `padding`
- Hiểu `box-sizing: border-box`

---

## 📚 Lý Thuyết

### 1. Box Model

Mọi element HTML đều là một "hộp" với 4 lớp:

```
┌─────────────────────────────────────┐
│            MARGIN                   │
│   ┌─────────────────────────────┐   │
│   │         BORDER              │   │
│   │   ┌─────────────────────┐   │   │
│   │   │      PADDING        │   │   │
│   │   │   ┌─────────────┐   │   │   │
│   │   │   │   CONTENT   │   │   │   │
│   │   │   └─────────────┘   │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### 2. Các thuộc tính cơ bản

```css
/* Content */
width: 200px;
height: 100px;

/* Padding - khoảng cách bên trong */
padding: 20px;           /* tất cả các phía */
padding: 10px 20px;      /* trên-dưới | trái-phải */
padding: 10px 20px 30px 40px; /* trên | phải | dưới | trái */

/* Border */
border: 1px solid #333;
border-radius: 8px;      /* bo góc */

/* Margin - khoảng cách bên ngoài */
margin: 20px;
margin: 0 auto;          /* căn giữa horizontal */
```

### 3. Box Sizing

```css
/* Mặc định: width = content only */
box-sizing: content-box;

/* Recommended: width = content + padding + border */
box-sizing: border-box;

/* Best practice: áp dụng cho tất cả */
*, *::before, *::after {
  box-sizing: border-box;
}
```

### 4. CSS Selectors

```css
/* Element selector */
div { }

/* Class selector */
.card { }

/* ID selector */
#header { }

/* Descendant - con cháu */
.container p { }

/* Direct child - con trực tiếp */
.container > p { }

/* Adjacent sibling - anh em kề */
h2 + p { }

/* Attribute selector */
input[type="text"] { }

/* Pseudo-classes */
a:hover { }
li:first-child { }
li:nth-child(2n) { }  /* số chẵn */

/* Pseudo-elements */
p::first-line { }
div::before { content: "→ "; }
```

---

## 💻 Bài Tập

Mở file `exercise.html` và hoàn thành các yêu cầu:

1. **Card Component**: Tạo card với padding, border, margin
2. **Centering**: Căn giữa một element
3. **Spacing**: Sử dụng margin collapse đúng cách
4. **Selectors**: Style theo yêu cầu cụ thể

---

## ✅ Checklist

Hoàn thành phase này khi bạn có thể:
- [ ] Giải thích Box Model bằng lời
- [ ] Biết khi nào dùng margin vs padding
- [ ] Sử dụng `box-sizing: border-box`
- [ ] Viết được 5 loại selectors khác nhau

---

## 📎 Tài Liệu Tham Khảo

- [MDN - Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [CSS Tricks - Box Sizing](https://css-tricks.com/box-sizing/)
