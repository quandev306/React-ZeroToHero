# 🧩 Bài 04: Building Components với Tailwind

## 🎯 Mục Tiêu

- Tái tạo các components từ Phase 1 bằng Tailwind
- Xây dựng component library cơ bản
- Học cách tổ chức classes hiệu quả
- Sử dụng @apply để tái sử dụng styles

---

## 📚 Lý Thuyết

### Component Approach trong Tailwind

Có 2 cách chính để tạo reusable components:

**1. Copy-paste classes** (HTML-based)
- Phù hợp khi dùng React/Vue (component = function)
- Tailwind khuyến khích cách này

**2. @apply directive** (CSS-based)
- Gom classes thành 1 class CSS
- Phù hợp cho base styles

```css
/* styles.css */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-semibold transition-colors;
  }
  
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }
}
```

---

## 💻 Component Gallery

### 1. Buttons

#### Basic Buttons

```html
<!-- Primary -->
<button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg 
               hover:bg-blue-600 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:ring-offset-2 transition-colors">
  Primary
</button>

<!-- Secondary -->
<button class="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg 
               hover:bg-gray-300 focus:outline-none focus:ring-2 
               focus:ring-gray-500 focus:ring-offset-2 transition-colors">
  Secondary
</button>

<!-- Outline -->
<button class="px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold 
               rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:ring-offset-2 transition-colors">
  Outline
</button>

<!-- Ghost -->
<button class="px-4 py-2 text-blue-500 font-semibold rounded-lg 
               hover:bg-blue-50 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:ring-offset-2 transition-colors">
  Ghost
</button>

<!-- Danger -->
<button class="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg 
               hover:bg-red-600 focus:outline-none focus:ring-2 
               focus:ring-red-500 focus:ring-offset-2 transition-colors">
  Delete
</button>
```

#### Button Sizes

```html
<!-- Small -->
<button class="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md">
  Small
</button>

<!-- Medium (default) -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg">
  Medium
</button>

<!-- Large -->
<button class="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg">
  Large
</button>
```

#### Button with Icon

```html
<button class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 
               text-white rounded-lg hover:bg-blue-600 transition-colors">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M12 4v16m8-8H4"></path>
  </svg>
  Add Item
</button>
```

#### Button Loading State

```html
<button class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 
               text-white rounded-lg opacity-75 cursor-not-allowed" disabled>
  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" 
            stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
  Loading...
</button>
```

---

### 2. Cards

#### Basic Card

```html
<div class="p-6 bg-white rounded-xl shadow-md">
  <h3 class="text-xl font-semibold text-gray-800 mb-2">Card Title</h3>
  <p class="text-gray-600">Card description goes here.</p>
</div>
```

#### Card with Image

```html
<div class="bg-white rounded-xl shadow-md overflow-hidden">
  <img 
    src="https://picsum.photos/400/200" 
    alt="Card image"
    class="w-full h-48 object-cover"
  >
  <div class="p-6">
    <span class="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
      Category
    </span>
    <h3 class="text-xl font-semibold text-gray-800 mt-1">
      Amazing Article Title
    </h3>
    <p class="text-gray-600 mt-2 line-clamp-2">
      This is a brief description of the article that gives readers a preview of the content.
    </p>
    <div class="flex items-center gap-3 mt-4">
      <img 
        src="https://i.pravatar.cc/40" 
        alt="Author"
        class="w-10 h-10 rounded-full"
      >
      <div>
        <p class="text-sm font-medium text-gray-800">John Doe</p>
        <p class="text-xs text-gray-500">Jan 15, 2024</p>
      </div>
    </div>
  </div>
</div>
```

#### Horizontal Card

```html
<div class="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
  <img 
    src="https://picsum.photos/300/200" 
    alt="Card image"
    class="w-full md:w-48 h-48 md:h-auto object-cover"
  >
  <div class="p-6 flex flex-col justify-center">
    <h3 class="text-xl font-semibold text-gray-800">Product Name</h3>
    <p class="text-gray-600 mt-2">Short product description.</p>
    <div class="flex items-center gap-4 mt-4">
      <span class="text-2xl font-bold text-indigo-600">$99</span>
      <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg 
                     hover:bg-indigo-700 transition-colors">
        Buy Now
      </button>
    </div>
  </div>
</div>
```

#### Interactive Card (Hover Effects)

```html
<div class="group p-6 bg-white rounded-xl shadow-md 
            hover:shadow-xl hover:-translate-y-1 
            border border-transparent hover:border-indigo-200
            transition-all duration-300 cursor-pointer">
  <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center
              group-hover:bg-indigo-500 transition-colors">
    <span class="text-2xl group-hover:text-white transition-colors">🚀</span>
  </div>
  <h3 class="text-lg font-semibold text-gray-800 mt-4 
             group-hover:text-indigo-600 transition-colors">
    Feature Title
  </h3>
  <p class="text-gray-600 mt-2">
    Feature description with some details about this amazing feature.
  </p>
  <a href="#" class="inline-flex items-center gap-1 text-indigo-600 font-medium mt-4
                     group-hover:gap-2 transition-all">
    Learn more <span>→</span>
  </a>
</div>
```

---

### 3. Forms

#### Text Input

```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    Email Address
  </label>
  <input 
    type="email"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg
           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50
           focus:outline-none transition-colors
           placeholder:text-gray-400"
    placeholder="you@example.com"
  >
</div>
```

#### Input with Icon

```html
<div class="relative">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </div>
  <input 
    type="text"
    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50
           focus:outline-none transition-colors"
    placeholder="Search..."
  >
</div>
```

#### Input with Error

```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    Password
  </label>
  <input 
    type="password"
    class="w-full px-4 py-2 border border-red-500 rounded-lg
           focus:border-red-500 focus:ring-2 focus:ring-red-500/50
           focus:outline-none bg-red-50"
    placeholder="Enter password"
  >
  <p class="text-sm text-red-500 mt-1">
    Password must be at least 8 characters
  </p>
</div>
```

#### Select

```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    Country
  </label>
  <select class="w-full px-4 py-2 border border-gray-300 rounded-lg
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50
                 focus:outline-none bg-white">
    <option value="">Select a country</option>
    <option value="vn">Vietnam</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </select>
</div>
```

#### Checkbox & Radio

```html
<!-- Checkbox -->
<label class="flex items-center gap-3 cursor-pointer">
  <input 
    type="checkbox" 
    class="w-5 h-5 rounded border-gray-300 text-indigo-600 
           focus:ring-indigo-500 focus:ring-offset-0"
  >
  <span class="text-gray-700">Remember me</span>
</label>

<!-- Radio -->
<div class="space-y-2">
  <label class="flex items-center gap-3 cursor-pointer">
    <input 
      type="radio" 
      name="plan"
      class="w-5 h-5 border-gray-300 text-indigo-600 focus:ring-indigo-500"
    >
    <span class="text-gray-700">Free Plan</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input 
      type="radio" 
      name="plan"
      class="w-5 h-5 border-gray-300 text-indigo-600 focus:ring-indigo-500"
    >
    <span class="text-gray-700">Pro Plan</span>
  </label>
</div>
```

#### Toggle Switch

```html
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 rounded-full 
              peer-checked:bg-indigo-600
              peer-focus:ring-4 peer-focus:ring-indigo-500/50
              after:content-[''] after:absolute after:top-0.5 after:left-[2px]
              after:bg-white after:rounded-full after:h-5 after:w-5 
              after:transition-all peer-checked:after:translate-x-full
              transition-colors">
  </div>
  <span class="ml-3 text-gray-700">Enable notifications</span>
</label>
```

---

### 4. Badges & Tags

```html
<!-- Basic Badge -->
<span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
  Default
</span>

<!-- Colored Badges -->
<span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
  Info
</span>
<span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
  Success
</span>
<span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
  Warning
</span>
<span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
  Error
</span>

<!-- Solid Badges -->
<span class="px-2 py-1 text-xs font-medium bg-indigo-500 text-white rounded-full">
  New
</span>

<!-- With Icon -->
<span class="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium 
             bg-green-100 text-green-700 rounded-full">
  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
  </svg>
  Verified
</span>
```

---

### 5. Alerts / Notifications

```html
<!-- Info Alert -->
<div class="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
  </svg>
  <div>
    <h4 class="font-medium text-blue-800">Did you know?</h4>
    <p class="text-sm text-blue-600 mt-1">This is an informational alert message.</p>
  </div>
</div>

<!-- Success Alert -->
<div class="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>
  <div>
    <h4 class="font-medium text-green-800">Success!</h4>
    <p class="text-sm text-green-600 mt-1">Your changes have been saved successfully.</p>
  </div>
</div>

<!-- Warning Alert -->
<div class="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
  <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
  </svg>
  <div>
    <h4 class="font-medium text-yellow-800">Warning</h4>
    <p class="text-sm text-yellow-600 mt-1">Please review your information before continuing.</p>
  </div>
</div>

<!-- Error Alert -->
<div class="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
  <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
  </svg>
  <div>
    <h4 class="font-medium text-red-800">Error</h4>
    <p class="text-sm text-red-600 mt-1">Something went wrong. Please try again.</p>
  </div>
</div>
```

---

### 6. Avatar

```html
<!-- Basic Avatar -->
<img 
  src="https://i.pravatar.cc/100" 
  alt="User"
  class="w-10 h-10 rounded-full"
>

<!-- Avatar with Ring -->
<img 
  src="https://i.pravatar.cc/100" 
  alt="User"
  class="w-10 h-10 rounded-full ring-2 ring-white ring-offset-2"
>

<!-- Avatar with Status -->
<div class="relative">
  <img 
    src="https://i.pravatar.cc/100" 
    alt="User"
    class="w-10 h-10 rounded-full"
  >
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 
               border-2 border-white rounded-full"></span>
</div>

<!-- Avatar Sizes -->
<img src="https://i.pravatar.cc/100" class="w-8 h-8 rounded-full" alt="XS">
<img src="https://i.pravatar.cc/100" class="w-10 h-10 rounded-full" alt="SM">
<img src="https://i.pravatar.cc/100" class="w-12 h-12 rounded-full" alt="MD">
<img src="https://i.pravatar.cc/100" class="w-16 h-16 rounded-full" alt="LG">

<!-- Avatar Group -->
<div class="flex -space-x-2">
  <img src="https://i.pravatar.cc/100?img=1" class="w-10 h-10 rounded-full ring-2 ring-white" alt="">
  <img src="https://i.pravatar.cc/100?img=2" class="w-10 h-10 rounded-full ring-2 ring-white" alt="">
  <img src="https://i.pravatar.cc/100?img=3" class="w-10 h-10 rounded-full ring-2 ring-white" alt="">
  <span class="flex items-center justify-center w-10 h-10 bg-gray-200 
               rounded-full ring-2 ring-white text-sm font-medium text-gray-600">
    +5
  </span>
</div>

<!-- Fallback Avatar -->
<div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
  <span class="text-white font-medium">JD</span>
</div>
```

---

### 7. Navbar

```html
<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2">
        <div class="w-8 h-8 bg-indigo-600 rounded-lg"></div>
        <span class="text-xl font-bold text-gray-900">Brand</span>
      </a>
      
      <!-- Center Menu (hidden on mobile) -->
      <ul class="hidden md:flex items-center gap-1">
        <li>
          <a href="#" class="px-4 py-2 text-gray-600 hover:text-indigo-600 
                            hover:bg-indigo-50 rounded-lg transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="px-4 py-2 text-gray-600 hover:text-indigo-600 
                            hover:bg-indigo-50 rounded-lg transition-colors">
            Products
          </a>
        </li>
        <li>
          <a href="#" class="px-4 py-2 text-gray-600 hover:text-indigo-600 
                            hover:bg-indigo-50 rounded-lg transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#" class="px-4 py-2 text-gray-600 hover:text-indigo-600 
                            hover:bg-indigo-50 rounded-lg transition-colors">
            Contact
          </a>
        </li>
      </ul>
      
      <!-- Right Section -->
      <div class="flex items-center gap-4">
        <button class="hidden md:block px-4 py-2 text-gray-600 hover:text-indigo-600">
          Login
        </button>
        <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg 
                       hover:bg-indigo-700 transition-colors">
          Get Started
        </button>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
```

---

### 8. Footer

```html
<footer class="bg-gray-900 text-gray-300">
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 bg-indigo-500 rounded-lg"></div>
          <span class="text-xl font-bold text-white">Brand</span>
        </div>
        <p class="text-sm">
          Building the future of web development, one component at a time.
        </p>
      </div>
      
      <!-- Links -->
      <div>
        <h4 class="text-white font-semibold mb-4">Product</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-white font-semibold mb-4">Company</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white transition-colors">About</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-white font-semibold mb-4">Legal</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white transition-colors">Privacy</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Terms</a></li>
        </ul>
      </div>
    </div>
    
    <!-- Bottom -->
    <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row 
                justify-between items-center gap-4">
      <p class="text-sm">© 2024 Brand. All rights reserved.</p>
      <div class="flex gap-4">
        <a href="#" class="hover:text-white transition-colors">Twitter</a>
        <a href="#" class="hover:text-white transition-colors">GitHub</a>
        <a href="#" class="hover:text-white transition-colors">Discord</a>
      </div>
    </div>
  </div>
</footer>
```

---

## 📝 Bài Tập

### Bài 1: Login Form

Tạo form đăng nhập hoàn chỉnh với:
- Email & Password inputs
- "Remember me" checkbox
- "Forgot password" link
- Submit button
- "Or continue with" social buttons

### Bài 2: Pricing Cards

Tạo 3 pricing cards (Basic, Pro, Enterprise) với:
- Price và billing period
- List of features
- CTA button
- "Popular" badge cho plan giữa

### Bài 3: Blog Post Card List

Tạo list 3 blog post cards với:
- Image, category badge, title, excerpt
- Author avatar và publish date
- Responsive: stack trên mobile, horizontal trên desktop

---

## ✅ Checklist

- [ ] Tạo được button variants (primary, secondary, outline, ghost)
- [ ] Tạo được button sizes (sm, md, lg)
- [ ] Tạo được card với image và hover effects
- [ ] Tạo được form inputs với focus states
- [ ] Tạo được badges/tags
- [ ] Tạo được alerts/notifications
- [ ] Tạo được avatar với status indicator
- [ ] Tạo được responsive navbar
- [ ] Tạo được footer với grid layout

---

## ➡️ Bài Tiếp Theo

[Bài 05: Tailwind + React Integration](../05-react-integration/guide.md)
