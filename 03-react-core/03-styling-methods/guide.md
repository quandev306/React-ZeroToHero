# 🎨 Bài 3: Styling Methods trong React

## 🎯 Mục Tiêu

- So sánh các phương pháp styling
- CSS Modules
- Styled Components
- Inline Styles
- Biết khi nào dùng phương pháp nào

---

## 📚 So Sánh Tổng Quan

| Method | Scoped | Dynamic | Setup | Khi nào dùng |
|--------|--------|---------|-------|--------------|
| CSS Modules | ✅ | ❌ | Có sẵn | Dự án vừa/lớn |
| Styled Components | ✅ | ✅ | npm install | Component library, theming |
| Inline Styles | ✅ | ✅ | Không cần | Dynamic styles đơn giản |
| Global CSS | ❌ | ❌ | Không cần | Reset, global styles |

---

## 📚 Lý Thuyết

### 1. CSS Modules

CSS Modules tự động scope CSS theo component, tránh conflict.

```css
/* Button.module.css */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.primary {
  background: #667eea;
  color: white;
}

.secondary {
  background: #f0f0f0;
  color: #333;
}

.large {
  font-size: 18px;
  padding: 16px 32px;
}
```

```jsx
// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', size, children, onClick }) {
  // Combine classes
  const className = `${styles.button} ${styles[variant]} ${size ? styles[size] : ''}`;
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// Hoặc dùng thư viện classnames
import cn from 'classnames';

function Button({ variant = 'primary', size, children }) {
  return (
    <button 
      className={cn(
        styles.button,
        styles[variant],
        { [styles.large]: size === 'large' }
      )}
    >
      {children}
    </button>
  );
}
```

### 2. Styled Components

CSS-in-JS với full power của JavaScript.

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

// Basic
const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #667eea;
  color: white;
  
  &:hover {
    background: #5a6fd6;
  }
`;

// With props
const Button = styled.button`
  padding: ${props => props.size === 'large' ? '16px 32px' : '12px 24px'};
  background: ${props => props.variant === 'primary' ? '#667eea' : '#f0f0f0'};
  color: ${props => props.variant === 'primary' ? 'white' : '#333'};
`;

// Usage
<Button variant="primary" size="large">Click me</Button>

// Extending
const PrimaryButton = styled(Button)`
  background: #667eea;
`;

// Themed
const theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2'
  }
};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>

const ThemedButton = styled.button`
  background: ${props => props.theme.colors.primary};
`;
```

### 3. Inline Styles

Dùng cho dynamic styles đơn giản.

```jsx
function ProgressBar({ progress, color = '#667eea' }) {
  // Inline styles là JavaScript object
  const containerStyle = {
    width: '100%',
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden'
  };
  
  const fillStyle = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: color,
    transition: 'width 0.3s ease'
  };
  
  return (
    <div style={containerStyle}>
      <div style={fillStyle} />
    </div>
  );
}

// ⚠️ Lưu ý:
// - Không hỗ trợ pseudo-classes (:hover, :focus)
// - Không hỗ trợ media queries
// - camelCase thay vì kebab-case (backgroundColor vs background-color)
```

### 4. Kết Hợp Các Phương Pháp

```jsx
import styles from './Card.module.css';

function Card({ children, highlighted, style }) {
  return (
    <div 
      className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}
      style={style} // Allow custom inline styles
    >
      {children}
    </div>
  );
}

// Usage
<Card 
  highlighted 
  style={{ marginTop: '20px' }}
>
  Content
</Card>
```

### 5. CSS Variables với React

```css
/* index.css */
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}
```

```jsx
function ThemedComponent() {
  // Thay đổi CSS variable với JavaScript
  const setTheme = (color) => {
    document.documentElement.style.setProperty('--primary', color);
  };
  
  return (
    <button 
      style={{ background: 'var(--primary)' }}
      onClick={() => setTheme('#e74c3c')}
    >
      Change Theme
    </button>
  );
}
```

---

## 💻 Bài Tập

### Tạo cùng 1 component với 3 cách:

**Button Component:**
- Variants: primary, secondary, danger
- Sizes: small, medium, large
- States: hover, disabled

1. `css-modules/Button.jsx` + `Button.module.css`
2. `styled-components/Button.jsx`
3. `inline-styles/Button.jsx`

Sau đó so sánh:
- Code readability
- Flexibility
- Bundle size
- Developer experience

---

## ✅ Checklist

- [ ] Tạo component với CSS Modules
- [ ] Tạo component với Styled Components
- [ ] Sử dụng inline styles đúng cách
- [ ] Kết hợp nhiều class với conditions
- [ ] Biết khi nào dùng phương pháp nào
