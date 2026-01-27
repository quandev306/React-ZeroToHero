# 📚 Resources & Cheatsheets

## 🔗 Tài Liệu Tham Khảo

### CSS
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [CSS Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Game học Flexbox
- [Grid Garden](https://cssgridgarden.com/) - Game học Grid

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [ES6+ Features](https://es6-features.org/)

### React
- [React Official Docs](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)
- [React Router](https://reactrouter.com/)

### Tools
- [Vite](https://vitejs.dev/)
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

## 📝 Quick Cheatsheets

### CSS Flexbox
```css
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | flex-end | space-between | space-around;
  align-items: stretch | flex-start | center | flex-end;
  flex-wrap: nowrap | wrap;
  gap: 20px;
}

.item {
  flex: grow shrink basis;
  align-self: auto | flex-start | center | flex-end;
  order: 0;
}
```

### CSS Grid
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.item {
  grid-column: span 2;
  grid-row: 1 / 3;
}
```

### React Hooks
```jsx
// State
const [state, setState] = useState(initialValue);
setState(newValue);
setState(prev => prev + 1);

// Effect
useEffect(() => {
  // side effect
  return () => { /* cleanup */ };
}, [dependencies]);

// Context
const value = useContext(MyContext);

// Reducer
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'ACTION', payload: data });

// Ref
const ref = useRef(initialValue);
ref.current = newValue;

// Memo
const memoized = useMemo(() => compute(a, b), [a, b]);
const callback = useCallback((x) => doSomething(x), []);
```

### Fetch API
```javascript
// GET
const response = await fetch(url);
const data = await response.json();

// POST
const response = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

---

## 💡 Best Practices

### React
1. **Component nhỏ, single responsibility**
2. **Lift state up khi cần share**
3. **Use Context cho global state**
4. **Memoize expensive computations**
5. **Extract custom hooks cho logic reusable**

### CSS
1. **Mobile-first approach**
2. **Use CSS variables**
3. **BEM naming hoặc CSS Modules**
4. **Avoid !important**
5. **Prefer flexbox/grid over float**

### JavaScript
1. **Use const by default**
2. **Destructure objects/arrays**
3. **Use async/await over .then()**
4. **Handle errors với try/catch**
5. **Use map/filter/reduce over loops**
