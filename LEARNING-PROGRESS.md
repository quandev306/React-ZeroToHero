# 📚 MỤC LỤC & TIẾN TRÌNH HỌC TẬP

> Tài liệu này giúp bạn theo dõi tiến độ học tập và hệ thống hóa kiến thức

---

## 🎯 TỔNG QUAN KHÓA HỌC

| Phase | Nội dung | Thời gian | Tiến độ |
|-------|----------|-----------|---------|
| 1 | CSS Fundamentals | 3-4 tuần | ⬜ 0% |
| 2 | JavaScript Advanced | 2 tuần | ⬜ 0% |
| 3 | React Core | 3 tuần | ⬜ 0% |
| 4 | Final Project | 2-3 tuần | ⬜ 0% |
| 5 | TailwindCSS | 1-2 tuần | ⬜ 0% |

---

# 📖 PHASE 1: CSS FUNDAMENTALS

## Bài 00: CSS Basics
**Mục tiêu**: Hiểu CSS là gì và cách nó hoạt động

### Kiến thức cần nắm:
- [ ] CSS là gì, vai trò trong web development
- [ ] 3 cách viết CSS: Inline, Internal, External
- [ ] Cú pháp CSS: `selector { property: value; }`
- [ ] Các loại selector cơ bản: element, class (`.`), id (`#`)
- [ ] Đơn vị: `px`, `%`, `rem`, `em`, `vw`, `vh`
- [ ] Color formats: named, hex, rgb, rgba, hsl

### Thực hành:
- [ ] Tạo file HTML và link với file CSS
- [ ] Style một heading và paragraph
- [ ] Thay đổi màu sắc và font-size
- [ ] Sử dụng class để style nhiều elements

### Ghi chú của bạn:
```
(Viết những gì bạn học được, khó khăn gặp phải, tips cần nhớ...)



```

---

## Bài 01: Selectors & Specificity
**Mục tiêu**: Chọn đúng element cần style và hiểu thứ tự ưu tiên

### Kiến thức cần nắm:
- [ ] **Element selector**: `p { }`, `h1 { }`
- [ ] **Class selector**: `.btn { }`, `.card { }`
- [ ] **ID selector**: `#header { }`
- [ ] **Descendant**: `.nav a { }` (tất cả a trong .nav)
- [ ] **Child**: `.menu > li { }` (li con trực tiếp)
- [ ] **Pseudo-classes**: `:hover`, `:focus`, `:first-child`, `:nth-child()`
- [ ] **Pseudo-elements**: `::before`, `::after`
- [ ] **Specificity**: ID (100) > Class (10) > Element (1)

### Thực hành:
- [ ] Style buttons với nhiều class
- [ ] Tạo hover effects
- [ ] Style table với alternating colors (nth-child)
- [ ] Hiểu tại sao một style override style khác

### Ghi chú của bạn:
```



```

---

## Bài 02: Box Model ⭐
**Mục tiêu**: Hiểu cấu trúc của mọi element HTML

### Kiến thức cần nắm:
- [ ] 4 thành phần: Content → Padding → Border → Margin
- [ ] **Padding**: Khoảng đệm bên trong (có background)
- [ ] **Border**: Đường viền (width, style, color, radius)
- [ ] **Margin**: Khoảng cách bên ngoài (không có background)
- [ ] **box-sizing: border-box** - QUAN TRỌNG!
- [ ] Margin collapse (margin dọc gộp lại)
- [ ] `margin: 0 auto` để căn giữa block

### Thực hành:
- [ ] Tạo card component với padding và margin
- [ ] Sử dụng border-radius để bo góc
- [ ] Căn giữa một container với margin: 0 auto
- [ ] Debug box model với DevTools

### Công thức nhớ:
```
Với box-sizing: content-box (mặc định):
  Total width = width + padding-left + padding-right + border-left + border-right

Với box-sizing: border-box (NÊN DÙNG):
  Total width = width (đã bao gồm cả padding và border)

Sự khác biệt:
- content-box: Kích thước thực tế = width + padding + border (bị phình to)
- border-box: Kích thước thực tế = width (không đổi, padding/border lấn vào trong)
```

### Ghi chú của bạn:
```



```

---

## Bài 03: Colors & Typography
**Mục tiêu**: Làm chủ màu sắc và chữ

### Kiến thức cần nắm:
- [ ] **Color formats**: hex (#fff), rgb(), rgba(), hsl()
- [ ] **Background**: color, image, gradient
- [ ] **Font-family**: sans-serif, serif, monospace
- [ ] **Font-size**: px, rem (1rem = 16px)
- [ ] **Font-weight**: 400 (normal), 700 (bold)
- [ ] **Line-height**: 1.5 (tốt cho body text)
- [ ] **Text-align**: left, center, right
- [ ] **Text-decoration**: none, underline

### Color Palette gợi ý:
```css
--primary: #667eea;    /* Xanh tím - CTA buttons */
--success: #27ae60;    /* Xanh lá - Thành công */
--warning: #f39c12;    /* Vàng - Cảnh báo */
--danger: #e74c3c;     /* Đỏ - Lỗi */
--dark: #333;          /* Text chính */
--gray: #666;          /* Text phụ */
--light: #f5f5f5;      /* Background */
```

### Ghi chú của bạn:
```



```

---

## Bài 04: Display & Position
**Mục tiêu**: Kiểm soát cách element hiển thị và vị trí

### Kiến thức cần nắm:

**Display:**
- [ ] `block`: Chiếm full width, xuống dòng
- [ ] `inline`: Đủ content, không xuống dòng, không set width/height
- [ ] `inline-block`: Không xuống dòng + set được width/height
- [ ] `none`: Ẩn hoàn toàn
- [ ] `flex`: Bật Flexbox
- [ ] `grid`: Bật Grid

**Position:**
- [ ] `static`: Mặc định, theo document flow
- [ ] `relative`: Dịch từ vị trí gốc, vẫn chiếm chỗ
- [ ] `absolute`: Thoát flow, định vị theo parent relative
- [ ] `fixed`: Cố định theo viewport (header sticky)
- [ ] `sticky`: Dính khi scroll đến threshold
- [ ] `z-index`: Thứ tự xếp chồng (lớn = trên)

### Patterns cần nhớ:
```css
/* Badge góc phải trên */
.parent { position: relative; }
.badge { position: absolute; top: 10px; right: 10px; }

/* Fixed header */
header { position: fixed; top: 0; left: 0; right: 0; }

/* Center absolute */
.centered {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
```

### Ghi chú của bạn:
```



```

---

## Bài 05: Flexbox ⭐⭐⭐
**Mục tiêu**: Master layout 1 chiều - QUAN TRỌNG NHẤT!

### Kiến thức cần nắm:

**Container properties:**
- [ ] `display: flex` - Bật flexbox
- [ ] `flex-direction`: row (→) | column (↓)
- [ ] `justify-content`: căn theo **main axis**
  - flex-start | center | flex-end | space-between | space-around | space-evenly
- [ ] `align-items`: căn theo **cross axis**
  - stretch | flex-start | center | flex-end
- [ ] `flex-wrap`: wrap (xuống dòng khi hết chỗ)
- [ ] `gap`: khoảng cách giữa items

**Item properties:**
- [ ] `flex: 1` - Phát triển đều nhau
- [ ] `flex: 0 0 200px` - Cố định 200px
- [ ] `align-self` - Căn riêng item

### Patterns BẮT BUỘC THUỘC:
```css
/* Căn giữa hoàn hảo */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navbar: logo trái, menu phải */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Cards responsive */
.cards { display: flex; flex-wrap: wrap; gap: 24px; }
.card { flex: 1 1 300px; }
```

### Ghi chú của bạn:
```



```

---

## Bài 06: CSS Grid
**Mục tiêu**: Layout 2 chiều cho layout phức tạp

### Kiến thức cần nắm:
- [ ] `display: grid`
- [ ] `grid-template-columns`: định nghĩa cột
- [ ] `grid-template-rows`: định nghĩa hàng
- [ ] `gap`: khoảng cách
- [ ] `fr` unit: fraction (phần)
- [ ] `repeat()`: lặp lại
- [ ] `minmax()`: min và max
- [ ] `auto-fit`: tự động điều chỉnh số cột
- [ ] `grid-column: span 2`: chiếm 2 cột
- [ ] `grid-template-areas`: đặt tên vùng

### Pattern quan trọng:
```css
/* Responsive grid tự động */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

### Khi nào dùng Grid vs Flexbox?
| Flexbox | Grid |
|---------|------|
| Layout 1 chiều | Layout 2 chiều |
| Navbar, buttons | Full page layout |
| Cards cùng hàng | Dashboard |

### Ghi chú của bạn:
```



```

---

## Bài 07: Responsive Design
**Mục tiêu**: Tạo website đẹp trên mọi thiết bị

### Kiến thức cần nắm:
- [ ] Viewport meta tag
- [ ] **Mobile-first approach**: Viết CSS mobile trước
- [ ] Media queries: `@media (min-width: 768px) { }`
- [ ] Breakpoints: 768px (tablet), 1024px (desktop)
- [ ] Đơn vị responsive: %, vw, vh, rem
- [ ] `clamp()`: fluid typography
- [ ] Images responsive: `max-width: 100%`

### Breakpoints chuẩn:
```css
/* Mobile first (default) */
.container { padding: 16px; }

/* Tablet */
@media (min-width: 768px) {
  .container { padding: 24px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
}
```

### Ghi chú của bạn:
```



```

---

## Bài 08: Transitions & Animations
**Mục tiêu**: Thêm hiệu ứng sinh động

### Kiến thức cần nắm:
- [ ] `transition`: property duration timing-function
- [ ] Timing functions: ease, linear, ease-in-out
- [ ] `@keyframes`: định nghĩa animation
- [ ] `animation`: name duration timing-function iteration
- [ ] Transform: translate, scale, rotate
- [ ] Best practices: chỉ animate transform và opacity

### Effects thường dùng:
```css
/* Hover lift */
.card { transition: transform 0.3s, box-shadow 0.3s; }
.card:hover { 
  transform: translateY(-5px); 
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate { animation: fadeIn 0.5s ease forwards; }
```

### Ghi chú của bạn:
```



```

---

## Bài 09: Modern CSS
**Mục tiêu**: Các tính năng CSS hiện đại

### Kiến thức cần nắm:
- [ ] CSS Variables (Custom Properties)
- [ ] `calc()`: tính toán
- [ ] `clamp()`: responsive values
- [ ] `aspect-ratio`: tỉ lệ
- [ ] `scroll-behavior: smooth`
- [ ] `gap` trong flexbox

### CSS Variables:
```css
:root {
  --primary: #667eea;
  --spacing: 16px;
}

.btn { 
  background: var(--primary);
  padding: var(--spacing);
}
```

### Ghi chú của bạn:
```



```

---

## 🏆 Mini Projects

### Project 1: Card Component
- [ ] Tạo card với image, title, description, button
- [ ] Hover effect
- [ ] Responsive

### Project 2: Navigation Bar
- [ ] Logo + Menu + CTA button
- [ ] Flexbox layout
- [ ] Responsive (hamburger menu)

### Project 3: Landing Page
- [ ] Hero section với CTA
- [ ] Features grid
- [ ] About section (2 columns)
- [ ] Footer
- [ ] Fully responsive

---

# 📊 SELF-ASSESSMENT

## Sau khi hoàn thành Phase 1, bạn có thể:

| Kỹ năng | Tự đánh giá (1-5) |
|---------|-------------------|
| Viết CSS cơ bản (colors, fonts, spacing) | ⬜ |
| Sử dụng Flexbox để tạo layout | ⬜ |
| Tạo responsive design với media queries | ⬜ |
| Tạo hover effects và transitions | ⬜ |
| Debug CSS với DevTools | ⬜ |
| Xây dựng một landing page hoàn chỉnh | ⬜ |

## Những điểm cần cải thiện:
```
1.
2.
3.
```

## Những điểm đã làm tốt:
```
1.
2.
3.
```

---

# 📅 LEARNING LOG

| Ngày | Bài học | Thời gian | Ghi chú |
|------|---------|-----------|---------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

---

## 💡 TIPS HỌC TẬP

1. **Thực hành > Đọc lý thuyết**: Viết code nhiều hơn đọc
2. **DevTools là bạn**: F12 → Inspect element
3. **Clone websites**: Thử tái tạo lại giao diện thật
4. **Build projects**: Đừng chỉ làm exercises
5. **Hỏi khi không hiểu**: Đừng bỏ qua phần khó

---

**Cập nhật lần cuối**: _______________

**Ngày bắt đầu học**: _______________

**Mục tiêu hoàn thành Phase 1**: _______________
