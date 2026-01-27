# 💪 Bài 2: Flexbox Layout

## 🎯 Mục Tiêu

- Hiểu Flexbox container vs items
- Nắm vững các thuộc tính chính
- Tạo layout phổ biến với Flexbox

---

## 📚 Lý Thuyết

### 1. Flex Container

```css
.container {
  display: flex;
  
  /* Hướng sắp xếp */
  flex-direction: row;        /* → mặc định */
  flex-direction: column;     /* ↓ */
  flex-direction: row-reverse;    /* ← */
  flex-direction: column-reverse; /* ↑ */
  
  /* Wrap khi hết chỗ */
  flex-wrap: nowrap;    /* mặc định - không wrap */
  flex-wrap: wrap;      /* wrap xuống dòng */
  
  /* Căn chỉnh MAIN AXIS (theo flex-direction) */
  justify-content: flex-start;    /* đầu */
  justify-content: flex-end;      /* cuối */
  justify-content: center;        /* giữa */
  justify-content: space-between; /* đều, không gap đầu cuối */
  justify-content: space-around;  /* đều, có gap đầu cuối */
  justify-content: space-evenly;  /* đều hoàn toàn */
  
  /* Căn chỉnh CROSS AXIS (vuông góc flex-direction) */
  align-items: stretch;    /* mặc định - kéo dãn */
  align-items: flex-start; /* đầu */
  align-items: flex-end;   /* cuối */
  align-items: center;     /* giữa */
  
  /* Khoảng cách giữa items */
  gap: 20px;
}
```

### 2. Flex Items

```css
.item {
  /* Tỉ lệ tăng khi có khoảng trống */
  flex-grow: 1;
  
  /* Tỉ lệ co lại khi thiếu chỗ */
  flex-shrink: 1;
  
  /* Kích thước cơ sở */
  flex-basis: 200px;
  
  /* Shorthand */
  flex: 1;           /* grow: 1, shrink: 1, basis: 0 */
  flex: 0 0 200px;   /* không grow, không shrink, 200px */
  
  /* Căn chỉnh riêng item này */
  align-self: center;
  
  /* Thứ tự hiển thị */
  order: 1;
}
```

### 3. Common Patterns

```css
/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Căn giữa hoàn hảo */
.center-perfect {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Cards đều nhau */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 300px; /* min 300px, grow đều */
}

/* Footer stick bottom */
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content { flex: 1; }
```

---

## 💻 Bài Tập

Mở `exercise.html` và hoàn thành:

1. **Navbar**: Logo trái, menu phải
2. **Hero Section**: Căn giữa hoàn hảo
3. **Card Grid**: 3 cards đều nhau, responsive
4. **Footer**: 3 cột thông tin

---

## ✅ Checklist

- [ ] Phân biệt justify-content vs align-items
- [ ] Biết khi nào dùng flex-wrap
- [ ] Sử dụng gap thay vì margin
- [ ] Tạo được layout navbar responsive
