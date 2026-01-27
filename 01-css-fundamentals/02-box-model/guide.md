# 📦 Bài 02: Box Model - Nền Tảng Layout

> **Mục tiêu**: Hiểu rõ Box Model - nền tảng quan trọng nhất của CSS Layout

---

## 1. Mọi Element Đều Là Một Hộp!

Trong CSS, mỗi element HTML được coi là một **hộp (box)** với 4 lớp:

```
┌─────────────────────────────────────────────────┐
│                    MARGIN                       │
│    ┌────────────────────────────────────────┐   │
│    │               BORDER                   │   │
│    │    ┌──────────────────────────────┐    │   │
│    │    │          PADDING             │    │   │
│    │    │    ┌────────────────────┐    │    │   │
│    │    │    │                    │    │    │   │
│    │    │    │      CONTENT       │    │    │   │
│    │    │    │                    │    │    │   │
│    │    │    └────────────────────┘    │    │   │
│    │    └──────────────────────────────┘    │   │
│    └────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

### Giải thích:
| Thành phần | Ý nghĩa | Ví dụ |
|------------|---------|-------|
| **Content** | Nội dung thực (text, image) | width, height |
| **Padding** | Khoảng đệm bên trong | Không gian giữa content và border |
| **Border** | Đường viền | Có thể thấy được |
| **Margin** | Khoảng cách bên ngoài | Đẩy elements khác ra xa |

---

## 2. Content (Nội dung)

```css
.box {
  width: 300px;      /* Chiều rộng */
  height: 200px;     /* Chiều cao */
  
  /* Giới hạn */
  max-width: 100%;   /* Không vượt quá parent */
  min-width: 200px;  /* Tối thiểu 200px */
  
  max-height: 500px;
  min-height: 100px;
}
```

### Auto width/height:
```css
.box {
  width: auto;   /* Mặc định: chiếm hết horizontal space */
  height: auto;  /* Mặc định: vừa đủ content */
}
```

---

## 3. Padding (Đệm bên trong)

Padding tạo **khoảng trống giữa content và border**.

```css
.box {
  /* Tất cả 4 phía */
  padding: 20px;
  
  /* Trên-dưới | Trái-phải */
  padding: 20px 40px;
  
  /* Trên | Trái-phải | Dưới */
  padding: 10px 20px 30px;
  
  /* Trên | Phải | Dưới | Trái (theo chiều kim đồng hồ) */
  padding: 10px 20px 30px 40px;
  
  /* Từng phía riêng */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

### Khi nào dùng padding?
- ✅ Tạo khoảng cách giữa text và border của button
- ✅ Tạo khoảng trống bên trong card
- ✅ Căn lề cho container

---

## 4. Border (Đường viền)

```css
.box {
  /* Shorthand: width style color */
  border: 2px solid #333;
  
  /* Từng phía */
  border-top: 3px dashed red;
  border-right: 1px solid blue;
  border-bottom: 2px dotted green;
  border-left: none;
  
  /* Chi tiết */
  border-width: 2px;
  border-style: solid;  /* solid, dashed, dotted, double, none */
  border-color: #333;
  
  /* Bo góc */
  border-radius: 8px;           /* Tất cả góc */
  border-radius: 8px 0 8px 0;   /* Góc chéo */
  border-radius: 50%;           /* Hình tròn */
}
```

### Border Styles:
```
solid   ───────────
dashed  - - - - - -
dotted  . . . . . .
double  ═══════════
none    (không có)
```

---

## 5. Margin (Khoảng cách bên ngoài)

Margin đẩy các elements **khác ra xa**.

```css
.box {
  /* Giống padding về syntax */
  margin: 20px;
  margin: 20px 40px;
  margin: 10px 20px 30px 40px;
  
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
  
  /* Căn giữa horizontal (block element) */
  margin: 0 auto;
  
  /* Margin âm (đặc biệt) */
  margin-top: -20px;  /* Kéo lên trên */
}
```

### Margin Collapse ⚠️

Khi 2 margins đứng cạnh nhau theo chiều dọc, chúng **gộp lại thành 1**:

```css
.box1 { margin-bottom: 30px; }
.box2 { margin-top: 20px; }
/* Khoảng cách thực tế = 30px (lớn hơn thắng), KHÔNG PHẢI 50px */
```

### Khi nào dùng margin?
- ✅ Tạo khoảng cách giữa các elements
- ✅ Căn giữa element với `margin: 0 auto`
- ✅ Đẩy element ra khỏi vị trí

---

## 6. Box Sizing ⭐ QUAN TRỌNG!

### Vấn đề:

```css
.box {
  width: 300px;
  padding: 20px;
  border: 10px solid black;
}
/* Chiều rộng THỰC TẾ = 300 + 20*2 + 10*2 = 360px */
/* Không phải 300px như mong đợi! */
```

### Giải pháp: `box-sizing: border-box`

```css
.box {
  box-sizing: border-box;  /* ← Magic! */
  width: 300px;
  padding: 20px;
  border: 10px solid black;
}
/* Chiều rộng THỰC TẾ = 300px (bao gồm padding và border) */
```

### Best Practice: Áp dụng cho TẤT CẢ elements

```css
/* ĐẶT Ở ĐẦU FILE CSS */
*, *::before, *::after {
  box-sizing: border-box;
}
```

---

## 7. So sánh Padding vs Margin

| Padding | Margin |
|---------|--------|
| Bên trong border | Bên ngoài border |
| Có background | Không có background |
| Không thể âm | Có thể âm |
| Không collapse | Collapse theo chiều dọc |
| Click được (phần của element) | Không click được |

### Ví dụ thực tế:

```css
/* Button */
.btn {
  padding: 12px 24px;  /* Padding: khoảng cách text ↔ border */
  margin: 8px;         /* Margin: khoảng cách giữa các buttons */
}

/* Card */
.card {
  padding: 24px;        /* Padding: nội dung cách viền */
  margin-bottom: 20px;  /* Margin: khoảng cách giữa các cards */
}
```

---

## 8. Ví dụ Thực Tế: Card Component

```html
<div class="card">
  <img src="image.jpg" alt="Product">
  <div class="card-body">
    <h3>Product Name</h3>
    <p>Description here...</p>
    <button class="btn">Buy Now</button>
  </div>
</div>
```

```css
.card {
  width: 300px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;        /* Ẩn phần thừa */
  margin-bottom: 24px;     /* Khoảng cách giữa cards */
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;           /* Padding cho nội dung */
}

.card-body h3 {
  margin-bottom: 8px;      /* Margin dưới tiêu đề */
}

.card-body p {
  margin-bottom: 16px;     /* Margin dưới description */
  color: #666;
}

.btn {
  padding: 10px 20px;      /* Padding trong button */
  border: none;
  border-radius: 6px;
  background: #667eea;
  color: white;
}
```

---

## 9. Debug Box Model

### Cách 1: DevTools
1. Click chuột phải → Inspect
2. Chọn element
3. Xem tab "Computed" → Box Model diagram

### Cách 2: Outline tạm thời
```css
/* Thêm vào để debug */
* {
  outline: 1px solid red;
}
```

---

## 💻 Bài Tập

Mở `exercise.html` và hoàn thành các bài tập về Box Model!

---

## ✅ Checklist

- [ ] Hiểu 4 thành phần: Content, Padding, Border, Margin
- [ ] Phân biệt padding vs margin
- [ ] Biết dùng `box-sizing: border-box`
- [ ] Hiểu margin collapse
- [ ] Căn giữa element với `margin: 0 auto`

---

**Tiếp theo**: [Bài 03 - Colors & Typography](../03-colors-typography/)
