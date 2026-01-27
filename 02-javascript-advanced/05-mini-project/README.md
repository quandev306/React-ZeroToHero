# 🌤️ Mini Project: Weather App

## 🎯 Mục Tiêu

Xây dựng ứng dụng Weather sử dụng Vanilla JavaScript để áp dụng tất cả kiến thức đã học:
- Promises & Async/Await
- Fetch API
- ES6+ Features
- Error Handling

---

## 📋 Yêu Cầu

### Features

1. **Search City**
   - Input để nhập tên thành phố
   - Gọi API khi submit

2. **Display Weather**
   - Tên thành phố
   - Nhiệt độ hiện tại
   - Mô tả thời tiết
   - Icon thời tiết
   - Độ ẩm, Tốc độ gió

3. **Error Handling**
   - Hiển thị lỗi khi không tìm thấy thành phố
   - Loading state

4. **Recent Searches** (Optional)
   - Lưu vào localStorage
   - Click để search lại

---

## 🔑 API: OpenWeatherMap

### Đăng ký (Free)
1. Vào https://openweathermap.org/api
2. Tạo account
3. Lấy API Key

### Endpoint
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### Response Example
```json
{
  "name": "Ho Chi Minh City",
  "main": {
    "temp": 32,
    "humidity": 70
  },
  "weather": [
    {
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "wind": {
    "speed": 3.5
  }
}
```

### Icon URL
```
https://openweathermap.org/img/wn/{icon}@2x.png
```

---

## 📁 Files

```
05-mini-project/
├── index.html
├── styles.css
├── app.js
└── README.md
```

---

## 💡 Implementation Steps

### Step 1: HTML Structure
- Form với input và button
- Container cho weather data
- Error message area
- Loading spinner

### Step 2: CSS Styling
- Responsive card design
- Weather icon display
- Loading animation
- Error styling

### Step 3: JavaScript
1. **fetchWeather(city)** - Gọi API
2. **displayWeather(data)** - Render UI
3. **handleError(error)** - Xử lý lỗi
4. **Event listeners** - Form submit

### Step 4: Enhancement
- LocalStorage cho recent searches
- Geolocation (lấy vị trí hiện tại)
- Unit toggle (C/F)

---

## ✅ Checklist

- [ ] Fetch weather data từ API
- [ ] Display weather info
- [ ] Error handling cho invalid city
- [ ] Loading state
- [ ] Responsive design
- [ ] (Bonus) Recent searches
- [ ] (Bonus) Geolocation

---

## 📝 Starter Code

Xem file `app.js` để bắt đầu.

**Thời gian ước tính: 4-6 giờ**
