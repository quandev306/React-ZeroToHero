# 🎨 Bài 03: Colors & Typography

> **Mục tiêu**: Làm chủ màu sắc và typography để tạo giao diện đẹp

---

## 1. Color Formats

### Named Colors
```css
color: red;
color: blue;
color: white;
color: black;
color: transparent;
```

### Hexadecimal (Phổ biến nhất)
```css
color: #ff0000;     /* Đỏ: RR GG BB */
color: #00ff00;     /* Xanh lá */
color: #0000ff;     /* Xanh dương */
color: #000;        /* Đen (shorthand) */
color: #fff;        /* Trắng */
color: #333;        /* Xám đậm */
color: #666;        /* Xám vừa */
color: #999;        /* Xám nhạt */
color: #f5f5f5;     /* Xám rất nhạt */
```

### RGB / RGBA
```css
color: rgb(255, 0, 0);        /* Đỏ */
color: rgb(0, 0, 0);          /* Đen */
color: rgba(0, 0, 0, 0.5);    /* Đen 50% transparent */
color: rgba(255, 255, 255, 0.8);  /* Trắng 80% */
```

### HSL / HSLA
```css
/* Hue (0-360), Saturation (0-100%), Lightness (0-100%) */
color: hsl(0, 100%, 50%);      /* Đỏ */
color: hsl(120, 100%, 50%);    /* Xanh lá */
color: hsl(240, 100%, 50%);    /* Xanh dương */
color: hsla(0, 100%, 50%, 0.5); /* Đỏ 50% */
```

---

## 2. Color Properties

```css
/* Màu chữ */
color: #333;

/* Màu nền */
background-color: #f5f5f5;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Màu border */
border-color: #ddd;

/* Màu outline */
outline-color: blue;

/* Màu box-shadow */
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
```

---

## 3. Color Palette Recommendation

### Neutral Colors (Dùng cho text, background)
```css
:root {
  --white: #ffffff;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --black: #000000;
}
```

### Brand Colors
```css
:root {
  --primary: #667eea;
  --primary-dark: #5a6fd6;
  --secondary: #764ba2;
  
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
}
```

---

## 4. Typography

### Font Family
```css
/* Sans-serif (không chân) - Dùng cho web */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Serif (có chân) - Dùng cho heading, blogs */
font-family: 'Georgia', 'Times New Roman', serif;

/* Monospace - Dùng cho code */
font-family: 'Monaco', 'Consolas', monospace;
```

### Font Size
```css
/* Absolute */
font-size: 16px;

/* Relative (RECOMMENDED) */
font-size: 1rem;      /* = 16px (1 x root font-size) */
font-size: 1.5rem;    /* = 24px */
font-size: 0.875rem;  /* = 14px */

/* Responsive */
font-size: clamp(1rem, 2vw, 1.5rem);
```

### Font Size Scale
```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
}
```

### Font Weight
```css
font-weight: 100;  /* Thin */
font-weight: 300;  /* Light */
font-weight: 400;  /* Normal (mặc định) */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semibold */
font-weight: 700;  /* Bold */
font-weight: 900;  /* Black */

/* Keywords */
font-weight: normal;  /* 400 */
font-weight: bold;    /* 700 */
```

### Line Height
```css
line-height: 1;      /* = font-size */
line-height: 1.5;    /* 1.5x font-size (tốt cho body) */
line-height: 1.25;   /* Tốt cho headings */
line-height: 2;      /* Thông thoáng hơn */
line-height: 24px;   /* Giá trị cố định */
```

### Text Alignment
```css
text-align: left;       /* Mặc định */
text-align: center;
text-align: right;
text-align: justify;    /* Căn đều 2 bên */
```

### Text Decoration
```css
text-decoration: none;           /* Không có */
text-decoration: underline;      /* Gạch chân */
text-decoration: line-through;   /* Gạch ngang */
text-decoration: overline;       /* Gạch trên */
```

### Text Transform
```css
text-transform: none;        /* Giữ nguyên */
text-transform: uppercase;   /* CHỮ HOA */
text-transform: lowercase;   /* chữ thường */
text-transform: capitalize;  /* Viết Hoa Đầu */
```

### Letter & Word Spacing
```css
letter-spacing: 0.05em;   /* Giãn chữ cái */
letter-spacing: -0.02em;  /* Thu hẹp */
word-spacing: 4px;        /* Giãn từ */
```

---

## 5. Text Effects

### Text Shadow
```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

/* Multiple shadows */
text-shadow: 
  1px 1px 2px black,
  0 0 25px blue,
  0 0 5px darkblue;
```

### Text Truncation
```css
/* Single line truncate */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multi-line truncate */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## 6. Typography System

```css
/* Base */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

/* Headings */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
}

/* Paragraph */
p {
  margin-bottom: 1rem;
}

/* Links */
a {
  color: #667eea;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Small text */
small, .text-sm {
  font-size: 0.875rem;
}

/* Muted text */
.text-muted {
  color: #6b7280;
}
```

---

## 💻 Thực Hành

Mở `exercise.html` để áp dụng colors và typography vào thực tế!

---

## ✅ Checklist

- [ ] Biết các format màu: hex, rgb, hsl
- [ ] Sử dụng rgba cho transparency
- [ ] Thiết lập font-family đúng cách
- [ ] Dùng rem cho font-size
- [ ] Biết các giá trị font-weight
- [ ] Tạo được color palette

---

**Tiếp theo**: [Bài 04 - Display & Position](../04-display-position/)
