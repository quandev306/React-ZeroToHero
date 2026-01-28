# 🎨 Bài 01: TailwindCSS Basics

## 🎯 Mục Tiêu

- Hiểu TailwindCSS là gì và tại sao nó phổ biến
- Học cách "dịch" CSS thuần sang Tailwind utilities
- Nắm vững các utility classes cơ bản

---

## 📚 TailwindCSS là gì?

### Định nghĩa đơn giản

> **TailwindCSS là tập hợp các class CSS có sẵn**, mỗi class làm một việc nhỏ (utility), thay vì viết CSS thì bạn ghép các class lại với nhau.

### So sánh cách tiếp cận

```
┌─────────────────────────────────────────────────────────────┐
│  CSS TRUYỀN THỐNG (Semantic)                                │
├─────────────────────────────────────────────────────────────┤
│  HTML: <button class="btn-primary">Click</button>           │
│                                                             │
│  CSS:  .btn-primary {                                       │
│          padding: 12px 24px;                                │
│          background-color: #3b82f6;                         │
│          color: white;                                      │
│          border-radius: 8px;                                │
│        }                                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  TAILWINDCSS (Utility-first)                                │
├─────────────────────────────────────────────────────────────┤
│  HTML: <button class="px-6 py-3 bg-blue-500                 │
│                       text-white rounded-lg">               │
│          Click                                              │
│        </button>                                            │
│                                                             │
│  CSS:  Không cần viết! Tailwind đã có sẵn.                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 MAPPING: CSS đã học → Tailwind

### 1. Colors (Bài 03 CSS)

**Bạn đã học:**
```css
.element {
  color: #333;
  background-color: #667eea;
}
```

**Tailwind tương đương:**
```html
<div class="text-gray-800 bg-indigo-500">
```

#### Bảng màu Tailwind

| CSS Color | Tailwind Class | Ví dụ |
|-----------|----------------|-------|
| `color: ...` | `text-{color}-{shade}` | `text-blue-500` |
| `background-color: ...` | `bg-{color}-{shade}` | `bg-red-600` |
| `border-color: ...` | `border-{color}-{shade}` | `border-gray-300` |

#### Shade levels (độ đậm nhạt)

```
50  ████ Rất nhạt (backgrounds)
100 ████ 
200 ████ Nhạt
300 ████
400 ████ Trung bình nhạt
500 ████ ← Mặc định (base)
600 ████ Trung bình đậm
700 ████ Đậm
800 ████
900 ████ Rất đậm (text)
950 ████ Tối nhất
```

#### So sánh với Color Palette bạn đã học:

```css
/* CSS thuần (Bài 03) */        /* Tailwind */
--primary: #667eea;         →   bg-indigo-500, text-indigo-500
--success: #27ae60;         →   bg-green-600, text-green-600
--warning: #f39c12;         →   bg-amber-500, text-amber-500
--danger: #e74c3c;          →   bg-red-500, text-red-500
--dark: #333;               →   text-gray-800
--gray: #666;               →   text-gray-600
--light: #f5f5f5;           →   bg-gray-100
```

---

### 2. Typography (Bài 03 CSS)

**Bạn đã học:**
```css
.heading {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}
```

**Tailwind tương đương:**
```html
<h1 class="text-2xl font-bold leading-relaxed text-center">
```

#### Mapping chi tiết

| CSS Property | CSS Value | Tailwind Class |
|--------------|-----------|----------------|
| `font-size` | 12px | `text-xs` |
| | 14px | `text-sm` |
| | 16px | `text-base` |
| | 18px | `text-lg` |
| | 20px | `text-xl` |
| | 24px | `text-2xl` |
| | 30px | `text-3xl` |
| | 36px | `text-4xl` |
| `font-weight` | 400 (normal) | `font-normal` |
| | 500 | `font-medium` |
| | 600 | `font-semibold` |
| | 700 (bold) | `font-bold` |
| `line-height` | 1 | `leading-none` |
| | 1.25 | `leading-tight` |
| | 1.5 | `leading-normal` |
| | 1.75 | `leading-relaxed` |
| | 2 | `leading-loose` |
| `text-align` | left | `text-left` |
| | center | `text-center` |
| | right | `text-right` |

---

### 3. Spacing - Padding & Margin (Bài 02 Box Model)

**Bạn đã học:**
```css
.card {
  padding: 16px;
  margin: 24px;
  margin-bottom: 8px;
}
```

**Tailwind tương đương:**
```html
<div class="p-4 m-6 mb-2">
```

#### Spacing Scale (quan trọng!)

Tailwind dùng **scale số**, mỗi đơn vị = 4px:

| Class | Giá trị | Tính toán |
|-------|---------|-----------|
| `p-0` | 0px | 0 × 4px |
| `p-1` | 4px | 1 × 4px |
| `p-2` | 8px | 2 × 4px |
| `p-3` | 12px | 3 × 4px |
| `p-4` | 16px | 4 × 4px ← phổ biến |
| `p-5` | 20px | 5 × 4px |
| `p-6` | 24px | 6 × 4px ← phổ biến |
| `p-8` | 32px | 8 × 4px |
| `p-10` | 40px | 10 × 4px |
| `p-12` | 48px | 12 × 4px |
| `p-16` | 64px | 16 × 4px |
| `p-20` | 80px | 20 × 4px |

#### Hướng (Direction)

```
         pt (padding-top)
              ▲
              │
pl ◄─────────┼─────────► pr
(left)       │         (right)
              │
              ▼
         pb (padding-bottom)

px = padding-left + padding-right (trục X)
py = padding-top + padding-bottom (trục Y)
p  = tất cả 4 hướng
```

| CSS | Tailwind |
|-----|----------|
| `padding: 16px;` | `p-4` |
| `padding: 16px 32px;` | `py-4 px-8` |
| `padding-left: 8px;` | `pl-2` |
| `margin: 0 auto;` | `mx-auto` |
| `margin-top: 24px;` | `mt-6` |

---

### 4. Border (Bài 02 Box Model)

**Bạn đã học:**
```css
.card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
}
```

**Tailwind tương đương:**
```html
<div class="border border-gray-300 rounded-lg">
```

#### Mapping

| CSS | Tailwind |
|-----|----------|
| `border: 1px solid` | `border` |
| `border: 2px solid` | `border-2` |
| `border-bottom: 1px` | `border-b` |
| `border-radius: 4px` | `rounded` |
| `border-radius: 8px` | `rounded-lg` |
| `border-radius: 16px` | `rounded-2xl` |
| `border-radius: 50%` | `rounded-full` |

---

### 5. Box Shadow (Effects)

**CSS thuần:**
```css
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

**Tailwind:**
```html
<div class="shadow-md">
```

| Mức độ | Tailwind |
|--------|----------|
| Nhẹ | `shadow-sm` |
| Bình thường | `shadow` |
| Vừa | `shadow-md` |
| Lớn | `shadow-lg` |
| Rất lớn | `shadow-xl` |
| Khổng lồ | `shadow-2xl` |

---

## 💻 Ví Dụ Thực Tế: Card Component

### CSS Thuần (cách bạn đã học):

```html
<div class="card">
  <h3 class="card-title">Hello World</h3>
  <p class="card-text">This is a card component.</p>
  <button class="btn">Learn More</button>
</div>

<style>
.card {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #333;
}

.card-text {
  color: #666;
  margin-bottom: 16px;
}

.btn {
  padding: 8px 16px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn:hover {
  background: #5a67d8;
}
</style>
```

### TailwindCSS:

```html
<div class="p-6 bg-white rounded-xl shadow-md">
  <h3 class="text-xl font-bold mb-2 text-gray-800">Hello World</h3>
  <p class="text-gray-600 mb-4">This is a card component.</p>
  <button class="px-4 py-2 bg-indigo-500 text-white rounded-lg 
                 hover:bg-indigo-600">
    Learn More
  </button>
</div>
```

### So sánh:

| Tiêu chí | CSS Thuần | TailwindCSS |
|----------|-----------|-------------|
| Dòng code | ~30 dòng | ~6 dòng |
| File riêng | Cần file .css | Không cần |
| Đặt tên class | Phải nghĩ | Không cần |
| Reusable | Copy cả CSS | Copy HTML |

---

## 🛠️ Setup Thử Nghiệm Nhanh

### Cách 1: Dùng CDN (chỉ để học)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Tailwind Practice</title>
</head>
<body class="bg-gray-100 min-h-screen p-8">
  
  <!-- Thử code ở đây -->
  <div class="p-6 bg-white rounded-xl shadow-md max-w-sm mx-auto">
    <h3 class="text-xl font-bold mb-2 text-gray-800">Hello Tailwind!</h3>
    <p class="text-gray-600">Đây là card đầu tiên của bạn.</p>
  </div>
  
</body>
</html>
```

### Cách 2: Tailwind Play (online)

Truy cập: **https://play.tailwindcss.com**

---

## 📝 Bài Tập

### Bài 1: Dịch CSS sang Tailwind

Chuyển đổi CSS sau sang Tailwind classes:

```css
.box {
  width: 200px;
  height: 200px;
  background-color: #3b82f6;
  padding: 16px;
  margin: 24px auto;
  border-radius: 8px;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}
```

<details>
<summary>👀 Xem đáp án</summary>

```html
<div class="w-48 h-48 bg-blue-500 p-4 mx-auto my-6 
            rounded-lg text-white text-center text-lg font-semibold">
  Content
</div>
```

**Giải thích:**
- `w-48` = width: 192px (48 × 4px ≈ 200px)
- `h-48` = height: 192px
- `bg-blue-500` = background-color: #3b82f6
- `p-4` = padding: 16px
- `mx-auto my-6` = margin: 24px auto
- `rounded-lg` = border-radius: 8px
- `text-white` = color: white
- `text-center` = text-align: center
- `text-lg` = font-size: 18px
- `font-semibold` = font-weight: 600

</details>

### Bài 2: Tạo Button Variants

Tạo 3 buttons với các styles:
1. **Primary**: Nền xanh, chữ trắng
2. **Secondary**: Nền xám nhạt, chữ đen
3. **Danger**: Nền đỏ, chữ trắng

Yêu cầu:
- Padding: 12px 24px
- Border-radius: 8px
- Font-weight: 600

<details>
<summary>👀 Xem đáp án</summary>

```html
<button class="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold">
  Primary
</button>

<button class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold">
  Secondary
</button>

<button class="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold">
  Danger
</button>
```

</details>

### Bài 3: Profile Card

Tạo profile card với:
- Avatar tròn (rounded-full)
- Tên (bold, size lớn)
- Bio (màu xám, nhỏ hơn)
- Nền trắng, shadow, padding

<details>
<summary>👀 Xem đáp án</summary>

```html
<div class="p-6 bg-white rounded-xl shadow-lg max-w-xs mx-auto text-center">
  <img 
    src="https://i.pravatar.cc/100" 
    alt="Avatar"
    class="w-20 h-20 rounded-full mx-auto mb-4"
  >
  <h2 class="text-xl font-bold text-gray-800">Nguyễn Văn A</h2>
  <p class="text-gray-500 text-sm mt-1">Frontend Developer</p>
</div>
```

</details>

---

## ✅ Checklist

- [ ] Hiểu TailwindCSS là gì (utility-first)
- [ ] Biết mapping: `color` → `text-*`, `background-color` → `bg-*`
- [ ] Biết spacing scale: 1 = 4px, 4 = 16px
- [ ] Biết sử dụng: `p-*`, `m-*`, `px-*`, `py-*`, `pt-*`...
- [ ] Biết các class typography: `text-*`, `font-*`, `leading-*`
- [ ] Biết border và rounded: `border`, `rounded-*`
- [ ] Tạo được card component cơ bản

---

## 🔗 Tài Liệu Tham Khảo

- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind Play](https://play.tailwindcss.com)

---

## ➡️ Bài Tiếp Theo

[Bài 02: Layout - Flexbox & Grid trong Tailwind](../02-layout/guide.md)
