# 🎯 Bài 01: CSS Selectors & Specificity

> **Mục tiêu**: Hiểu cách CSS chọn elements và quy tắc ưu tiên

---

## 1. Tại Sao Phải Học Selectors?

```css
/* Bạn muốn style CHỈ button này thôi, không phải tất cả buttons */
<button class="btn primary large">Submit</button>
<button class="btn">Cancel</button>
```

Selectors giúp bạn **chọn đúng element** cần style.

---

## 2. Các Loại Selectors

### 🔴 Element Selector (Ít dùng cho styling cụ thể)
```css
p { color: blue; }     /* TẤT CẢ <p> */
h1 { font-size: 32px; } /* TẤT CẢ <h1> */
```

### 🟢 Class Selector (DÙNG NHIỀU NHẤT!)
```css
.btn { padding: 10px; }
.primary { background: blue; }
.card { border-radius: 8px; }
```

```html
<button class="btn primary">Click</button>
```

### 🟡 ID Selector (Dùng rất ít)
```css
#header { background: navy; }
#main-content { padding: 20px; }
```
⚠️ ID phải unique, nên hạn chế dùng cho CSS

### 🔵 Universal Selector
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## 3. Combinators (Kết hợp Selectors)

### Descendant (Con cháu) - SPACE
```css
/* Tất cả <a> BÊN TRONG .nav */
.nav a {
  color: white;
}
```

```html
<nav class="nav">
  <a href="#">Link 1</a>  ✅ Được style
  <div>
    <a href="#">Link 2</a>  ✅ Cũng được (con cháu)
  </div>
</nav>
<a href="#">Link 3</a>  ❌ Không được (ngoài .nav)
```

### Child (Con trực tiếp) - `>`
```css
/* Chỉ <li> là CON TRỰC TIẾP của .menu */
.menu > li {
  display: inline-block;
}
```

```html
<ul class="menu">
  <li>Item 1</li>  ✅
  <li>
    Item 2
    <ul>
      <li>Sub item</li>  ❌ Không được (cháu, không phải con)
    </ul>
  </li>
</ul>
```

### Adjacent Sibling (Anh em kề) - `+`
```css
/* <p> ngay sau <h2> */
h2 + p {
  font-size: 18px;
  color: #666;
}
```

### General Sibling (Tất cả anh em) - `~`
```css
/* Tất cả <p> sau <h2> (cùng parent) */
h2 ~ p {
  margin-left: 20px;
}
```

---

## 4. Pseudo-classes (Trạng thái)

### Interaction States
```css
/* Khi hover (di chuột vào) */
.btn:hover {
  background: #5a6fd6;
}

/* Khi click giữ */
.btn:active {
  transform: scale(0.98);
}

/* Khi focus (tab vào) */
input:focus {
  border-color: blue;
  outline: none;
}
```

### Position in Parent
```css
/* Phần tử đầu tiên */
li:first-child {
  font-weight: bold;
}

/* Phần tử cuối */
li:last-child {
  border-bottom: none;
}

/* Phần tử thứ n */
li:nth-child(2) {
  color: red;
}

/* Số lẻ (1, 3, 5...) */
tr:nth-child(odd) {
  background: #f5f5f5;
}

/* Số chẵn (2, 4, 6...) */
tr:nth-child(even) {
  background: white;
}

/* Mỗi 3 phần tử */
.item:nth-child(3n) {
  margin-right: 0;
}
```

### Form States
```css
input:disabled {
  opacity: 0.5;
}

input:checked + label {
  color: green;
}

input:required {
  border-color: red;
}
```

### Negation
```css
/* Tất cả p NGOẠI TRỪ .intro */
p:not(.intro) {
  color: gray;
}
```

---

## 5. Pseudo-elements (Phần tử giả)

```css
/* Chữ cái đầu tiên */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
}

/* Dòng đầu tiên */
p::first-line {
  color: navy;
}

/* Thêm content trước */
.required::before {
  content: "* ";
  color: red;
}

/* Thêm content sau */
a[href^="http"]::after {
  content: " ↗";
}

/* Selection (khi user bôi đen) */
::selection {
  background: #667eea;
  color: white;
}
```

---

## 6. Attribute Selectors

```css
/* Có attribute */
[disabled] {
  opacity: 0.5;
}

/* Attribute = value */
[type="submit"] {
  background: blue;
}

/* Attribute bắt đầu bằng */
[href^="https"] {
  color: green;
}

/* Attribute kết thúc bằng */
[href$=".pdf"] {
  color: red;
}

/* Attribute chứa */
[class*="btn"] {
  cursor: pointer;
}
```

---

## 7. Specificity (Độ Ưu Tiên) ⭐

### Quy tắc tính điểm:

| Selector | Điểm | Ví dụ |
|----------|------|-------|
| Inline style | 1000 | `style="..."` |
| ID | 100 | `#header` |
| Class, Pseudo-class, Attribute | 10 | `.btn`, `:hover`, `[type]` |
| Element, Pseudo-element | 1 | `div`, `::before` |

### Ví dụ tính điểm:

```css
p { }                    /* 0-0-1 = 1 */
.intro { }               /* 0-1-0 = 10 */
p.intro { }              /* 0-1-1 = 11 */
#header { }              /* 1-0-0 = 100 */
#header .nav a { }       /* 1-1-1 = 111 */
#header .nav a:hover { } /* 1-2-1 = 121 */
```

### Ai thắng?

```css
/* Điểm: 1 */
p {
  color: blue;
}

/* Điểm: 10 - THẮNG! */
.intro {
  color: red;
}
```

```html
<p class="intro">Chữ này màu ĐỎ vì .intro có specificity cao hơn</p>
```

### !important (HẠN CHẾ DÙNG!)

```css
p {
  color: blue !important; /* Luôn thắng, nhưng KHÔNG NÊN DÙNG */
}
```

❌ Tránh dùng `!important` vì khó override sau này

---

## 8. Best Practices

### ✅ Nên:
```css
/* Dùng class có ý nghĩa */
.btn-primary { }
.card-header { }
.nav-link { }

/* BEM naming convention */
.card { }
.card__title { }
.card__body { }
.card--featured { }
```

### ❌ Tránh:
```css
/* Quá cụ thể */
div.container > ul.nav > li > a.link { }

/* Dùng ID cho styling */
#submit-button { }

/* !important */
.btn { color: red !important; }
```

---

## 💻 Thực Hành

Mở `exercise.html` và hoàn thành các bài tập selector!

---

## ✅ Checklist

- [ ] Biết dùng class selector (`.class`)
- [ ] Hiểu descendant selector (`.parent .child`)
- [ ] Sử dụng :hover, :focus
- [ ] Sử dụng :first-child, :nth-child
- [ ] Hiểu cách tính specificity
- [ ] Biết tránh !important

---

**Tiếp theo**: [Bài 02 - Box Model](../02-box-model/)
