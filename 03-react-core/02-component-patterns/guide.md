# 🧩 Bài 2: Component Patterns & Props

## 🎯 Mục Tiêu

- Hiểu Props và cách truyền data
- Component composition
- Children props
- Conditional rendering
- Lists and keys

---

## 📚 Lý Thuyết

### 1. Props Cơ Bản

```jsx
// Parent component
function App() {
  return (
    <UserCard 
      name="John Doe"
      email="john@example.com"
      age={30}
      isAdmin={true}
      onClick={() => console.log('Clicked')}
    />
  );
}

// Child component
function UserCard({ name, email, age, isAdmin, onClick }) {
  return (
    <div onClick={onClick}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Age: {age}</p>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}

// Với default props
function UserCard({ name, email, role = 'user' }) {
  // role sẽ là 'user' nếu không được truyền
}

// Với prop types (optional nhưng recommended)
import PropTypes from 'prop-types';

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool
};
```

### 2. Children Props

```jsx
// Wrapper component
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card title="User Info">
      <p>This is the content</p>
      <button>Click me</button>
    </Card>
  );
}

// Multiple children slots
function Layout({ header, sidebar, children, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

// Usage
<Layout
  header={<NavBar />}
  sidebar={<SideMenu />}
  footer={<Footer />}
>
  <MainContent />
</Layout>
```

### 3. Conditional Rendering

```jsx
function UserStatus({ user, isLoading, error }) {
  // If/else
  if (isLoading) {
    return <Loading />;
  }
  
  if (error) {
    return <Error message={error} />;
  }
  
  if (!user) {
    return <p>No user found</p>;
  }
  
  return <UserCard user={user} />;
}

// Inline conditions
function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {/* && operator */}
      {isLoggedIn && <p>Welcome back!</p>}
      
      {/* Ternary */}
      {isLoggedIn ? (
        <p>Hello, {username}</p>
      ) : (
        <p>Please login</p>
      )}
      
      {/* Nullish */}
      <p>{username ?? 'Guest'}</p>
    </div>
  );
}
```

### 4. Lists and Keys

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        // Key phải unique và stable
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

// ❌ Không dùng index làm key (trừ khi list không thay đổi)
{items.map((item, index) => (
  <li key={index}>{item}</li> // Tránh!
))}

// ✅ Dùng unique id
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}

// Extract component
function UserItem({ user, onDelete }) {
  return (
    <li>
      {user.name}
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
}

function UserList({ users, onDeleteUser }) {
  return (
    <ul>
      {users.map(user => (
        <UserItem 
          key={user.id} 
          user={user} 
          onDelete={onDeleteUser}
        />
      ))}
    </ul>
  );
}
```

### 5. Component Composition

```jsx
// Thay vì:
function Dialog({ title, message, type, onConfirm, onCancel }) {
  // Quá nhiều props!
}

// Composition:
function Dialog({ children }) {
  return <div className="dialog">{children}</div>;
}

function DialogTitle({ children }) {
  return <h2 className="dialog-title">{children}</h2>;
}

function DialogContent({ children }) {
  return <div className="dialog-content">{children}</div>;
}

function DialogActions({ children }) {
  return <div className="dialog-actions">{children}</div>;
}

// Usage - Linh hoạt hơn
function ConfirmDialog({ onConfirm, onCancel }) {
  return (
    <Dialog>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to proceed?</p>
      </DialogContent>
      <DialogActions>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </DialogActions>
    </Dialog>
  );
}
```

### 6. Lifting State Up

```jsx
// Khi 2 components cần share state
function App() {
  // State được "lift up" lên parent
  const [temperature, setTemperature] = useState(25);
  
  return (
    <div>
      <TemperatureInput 
        scale="celsius" 
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <TemperatureInput 
        scale="fahrenheit" 
        temperature={temperature * 9/5 + 32}
        onTemperatureChange={(f) => setTemperature((f - 32) * 5/9)}
      />
    </div>
  );
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <input 
      type="number"
      value={temperature}
      onChange={(e) => onTemperatureChange(Number(e.target.value))}
    />
  );
}
```

---

## 💻 Bài Tập

1. **Card Component**: Với children và variants
2. **Product List**: Map qua array, delete item
3. **Tabs Component**: Composition pattern
4. **Form với Validation**: Lifting state up

---

## ✅ Checklist

- [ ] Truyền props xuống children
- [ ] Sử dụng children prop
- [ ] Conditional rendering
- [ ] Render lists với unique keys
- [ ] Lift state up khi cần share state
