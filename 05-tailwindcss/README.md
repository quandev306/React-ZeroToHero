# 🎨 PHASE 5: TAILWINDCSS

> **Từ CSS thuần → TailwindCSS**: Học Tailwind dựa trên kiến thức CSS bạn đã có!

---

## 🎯 TẠI SAO CẦN HỌC TAILWINDCSS?

| Thực tế | Lý do |
|---------|-------|
| 📈 **Phổ biến nhất** | 70%+ React projects dùng Tailwind |
| 💼 **Job requirement** | Hầu hết JD Frontend đều yêu cầu |
| ⚡ **Tốc độ dev** | Viết UI nhanh hơn 3-5x so với CSS thuần |
| 🧩 **Ecosystem** | shadcn/ui, daisyUI, Headless UI... |
| 🔧 **Framework mặc định** | Next.js, Vite đều có sẵn Tailwind |

---

## 📚 CẤU TRÚC BÀI HỌC

### Bài 01: Basics - Hiểu Tailwind qua CSS đã học
- TailwindCSS là gì? (Utility-first CSS framework)
- So sánh cách viết CSS thuần vs Tailwind
- **Mapping**: Colors, Typography, Spacing → Tailwind utilities

### Bài 02: Layout - Flexbox & Grid trong Tailwind
- **Mapping**: Flexbox CSS → `flex`, `justify-*`, `items-*`
- **Mapping**: Grid CSS → `grid`, `grid-cols-*`, `gap-*`
- Box Model → `p-*`, `m-*`, `border-*`

### Bài 03: Responsive & States
- **Mapping**: Media queries → Breakpoint prefixes (`sm:`, `md:`, `lg:`)
- **Mapping**: Pseudo-classes → State variants (`hover:`, `focus:`)
- Dark mode

### Bài 04: Building Components
- Tái tạo lại các components từ Phase 1 bằng Tailwind
- Card, Button, Navbar, Form...
- Animations & Transitions

### Bài 05: Tailwind + React Integration
- Setup Tailwind trong Vite/Next.js
- clsx/cn utility
- Component patterns
- Customizing với tailwind.config.js

---

## 🔑 KEY INSIGHT

```
TailwindCSS KHÔNG phải là thứ mới!
Nó chỉ là SHORTCUT để viết CSS bạn đã biết.

CSS thuần:           TailwindCSS:
.btn {               class="px-4 py-2 bg-blue-500
  padding: 16px 8px;        text-white rounded-lg
  background: blue;         hover:bg-blue-600"
  color: white;
  border-radius: 8px;
}
.btn:hover {
  background: darkblue;
}
```

**Nếu bạn hiểu CSS → Bạn sẽ hiểu Tailwind rất nhanh!**

---

## ⏱️ THỜI GIAN ĐỀ XUẤT

| Bài | Thời gian | Yêu cầu trước |
|-----|-----------|---------------|
| 01 | 1-2 ngày | CSS Basics, Colors, Typography |
| 02 | 2-3 ngày | Flexbox, Grid, Box Model |
| 03 | 1-2 ngày | Responsive Design, Selectors |
| 04 | 2-3 ngày | Tất cả Phase 1 |
| 05 | 1-2 ngày | React Core basics |

**Tổng: ~7-12 ngày** (tùy tốc độ)

---

## 📖 BẮT ĐẦU

👉 [Bài 01: TailwindCSS Basics](./01-basics/guide.md)
