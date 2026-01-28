# ⚛️ Bài 05: TailwindCSS + React Integration

## 🎯 Mục Tiêu

- Setup TailwindCSS trong React project (Vite)
- Sử dụng clsx/tailwind-merge để quản lý classes
- Xây dựng reusable React components với Tailwind
- Tổ chức code và best practices
- Tùy chỉnh Tailwind config

---

## 📚 Lý Thuyết

### 1️⃣ Setup Tailwind với Vite + React

#### Bước 1: Tạo project mới

```bash
npm create vite@latest my-tailwind-app -- --template react
cd my-tailwind-app
npm install
```

#### Bước 2: Install Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Bước 3: Config tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Bước 4: Thêm Tailwind directives vào CSS

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Bước 5: Test

```jsx
// src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-indigo-600">
        Hello Tailwind + React! 🎉
      </h1>
    </div>
  )
}

export default App
```

```bash
npm run dev
```

---

### 2️⃣ Quản lý Classes với clsx & tailwind-merge

Khi làm React components, bạn thường cần:
- Merge conditional classes
- Override classes từ props
- Combine multiple class strings

#### Install

```bash
npm install clsx tailwind-merge
```

#### Tạo cn utility function

```jsx
// src/lib/utils.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

#### Sử dụng cn()

```jsx
import { cn } from '@/lib/utils';

function Button({ variant = 'primary', size = 'md', className, children }) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-semibold rounded-lg transition-colors',
        // Variants
        {
          'bg-indigo-600 text-white hover:bg-indigo-700': variant === 'primary',
          'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
          'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50': variant === 'outline',
        },
        // Sizes
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        // Allow custom classes to override
        className
      )}
    >
      {children}
    </button>
  );
}

// Usage:
<Button>Default</Button>
<Button variant="secondary" size="lg">Large Secondary</Button>
<Button className="w-full">Full Width</Button>
```

---

### 3️⃣ Component Patterns

#### Pattern 1: Simple Component

```jsx
// src/components/Badge.jsx
import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-indigo-100 text-indigo-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
};

export function Badge({ variant = 'default', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 text-xs font-medium rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
```

#### Pattern 2: Compound Component (Card)

```jsx
// src/components/Card.jsx
import { cn } from '@/lib/utils';

export function Card({ className, children }) {
  return (
    <div className={cn('bg-white rounded-xl shadow-md overflow-hidden', className)}>
      {children}
    </div>
  );
}

Card.Image = function CardImage({ src, alt, className }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={cn('w-full h-48 object-cover', className)} 
    />
  );
};

Card.Body = function CardBody({ className, children }) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ className, children }) {
  return (
    <h3 className={cn('text-xl font-semibold text-gray-800', className)}>
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({ className, children }) {
  return (
    <p className={cn('text-gray-600 mt-2', className)}>
      {children}
    </p>
  );
};

// Usage:
<Card>
  <Card.Image src="https://picsum.photos/400/200" alt="..." />
  <Card.Body>
    <Card.Title>Amazing Title</Card.Title>
    <Card.Description>This is a description.</Card.Description>
  </Card.Body>
</Card>
```

#### Pattern 3: Button với forwardRef

```jsx
// src/components/Button.jsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
  outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef(
  ({ variant = 'primary', size = 'md', className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg',
          'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

#### Pattern 4: Input Component

```jsx
// src/components/Input.jsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-2 border rounded-lg',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'placeholder:text-gray-400 transition-colors',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50 bg-red-50'
              : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/50',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Usage:
<Input label="Email" placeholder="you@example.com" />
<Input label="Password" type="password" error="Password is required" />
```

---

### 4️⃣ Tùy Chỉnh Tailwind Config

#### Mở rộng Theme

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom colors
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Custom spacing
      spacing: {
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
      },
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

#### Sử dụng custom values

```jsx
<div className="bg-brand-500 text-white">Brand color</div>
<div className="font-sans">Using Inter font</div>
<div className="p-18">Custom padding 72px</div>
<div className="rounded-4xl">Extra rounded</div>
<div className="animate-fade-in">Fading in...</div>
```

---

### 5️⃣ Tổ Chức File Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── index.js     # Export all
│   ├── layout/          # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Container.jsx
│   └── features/        # Feature-specific components
│       ├── auth/
│       └── dashboard/
├── lib/
│   └── utils.js         # cn() function
├── styles/
│   └── index.css        # Tailwind directives
├── App.jsx
└── main.jsx
```

#### Export barrel file

```js
// src/components/ui/index.js
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';
export { Badge } from './Badge';
```

```jsx
// Usage in other files
import { Button, Card, Badge } from '@/components/ui';
```

---

### 6️⃣ Path Aliases Setup (Vite)

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

```json
// jsconfig.json (for IDE support)
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## 💻 Ví Dụ Hoàn Chỉnh: Mini App

### Component: Container

```jsx
// src/components/layout/Container.jsx
import { cn } from '@/lib/utils';

export function Container({ className, children }) {
  return (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
```

### Component: Navbar

```jsx
// src/components/layout/Navbar.jsx
import { Container } from './Container';
import { Button } from '@/components/ui';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold text-indigo-600">
            MyApp
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Login</Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
```

### Component: Hero Section

```jsx
// src/components/features/home/Hero.jsx
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui';

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Build Beautiful Apps
            <span className="block mt-2">with React & Tailwind</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-slide-up">
            Learn how to create stunning user interfaces by combining 
            the power of React with the utility-first CSS framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### App.jsx

```jsx
// src/App.jsx
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/features/home/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        {/* Other sections */}
      </main>
    </div>
  );
}

export default App;
```

---

## 🔧 Best Practices

### ✅ DO

1. **Sử dụng cn() cho conditional classes**
2. **Extract reusable components**
3. **Dùng path aliases (@/components)**
4. **Customize theme thay vì arbitrary values**
5. **Mobile-first responsive design**

### ❌ DON'T

1. **Không viết @apply quá nhiều** - Nó defeat purpose của Tailwind
2. **Không dùng !important** 
3. **Không nested selectors phức tạp**
4. **Không copy-paste long class strings** - Extract to component

---

## 📝 Bài Tập

### Bài 1: Setup Project

1. Tạo Vite + React project mới
2. Install & config TailwindCSS
3. Setup path aliases
4. Tạo cn() utility

### Bài 2: Component Library

Tạo các components:
- Button (4 variants, 3 sizes)
- Input (with label, error state)
- Card (compound component)
- Badge (5 variants)

### Bài 3: Landing Page

Xây dựng landing page hoàn chỉnh với:
- Navbar responsive
- Hero section
- Features grid
- Testimonials
- Footer

---

## ✅ Checklist

- [ ] Setup Tailwind trong Vite + React
- [ ] Hiểu và sử dụng clsx + tailwind-merge
- [ ] Tạo cn() utility function
- [ ] Tạo reusable Button component với variants
- [ ] Tạo Input component với error state
- [ ] Tạo compound Card component
- [ ] Customize tailwind.config.js (colors, fonts, animations)
- [ ] Setup path aliases
- [ ] Tổ chức file structure hợp lý
- [ ] Build landing page hoàn chỉnh

---

## 🎉 Hoàn Thành Phase 5!

Bạn đã học xong TailwindCSS từ cơ bản đến nâng cao:

✅ **Basics**: Mapping CSS → Tailwind utilities  
✅ **Layout**: Flexbox, Grid trong Tailwind  
✅ **Responsive**: Breakpoints, States, Dark mode  
✅ **Components**: Building reusable UI components  
✅ **React Integration**: Setup, patterns, best practices  

### Tiếp theo?

- Explore [shadcn/ui](https://ui.shadcn.com/) - Component library dựa trên Tailwind
- Tìm hiểu [Headless UI](https://headlessui.dev/) - Accessible components
- Xây dựng project thực tế!

---

## 🔗 Tài Liệu Tham Khảo

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind + Vite Setup](https://tailwindcss.com/docs/guides/vite)
- [clsx](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [shadcn/ui](https://ui.shadcn.com/)
