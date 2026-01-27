/**
 * 🌤️ Weather App
 * 
 * TODO: Hoàn thành các functions bên dưới
 * 
 * API: OpenWeatherMap
 * Docs: https://openweathermap.org/current
 */

// ⚠️ Thay bằng API key của bạn (đăng ký free tại openweathermap.org)
const API_KEY = 'YOUR_API_KEY_HERE';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const elements = {
    form: document.getElementById('searchForm'),
    input: document.getElementById('cityInput'),
    searchBtn: document.getElementById('searchBtn'),
    btnText: document.querySelector('.btn-text'),
    btnLoading: document.querySelector('.btn-loading'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    weatherCard: document.getElementById('weatherCard'),
    cityName: document.getElementById('cityName'),
    temperature: document.getElementById('temperature'),
    description: document.getElementById('description'),
    weatherIcon: document.getElementById('weatherIcon'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    feelsLike: document.getElementById('feelsLike'),
    recentSearches: document.getElementById('recentSearches'),
    recentList: document.getElementById('recentList'),
};

// ==========================================
// TODO 1: Fetch Weather Data
// Gọi API và trả về data
// Xử lý HTTP errors (city not found, etc.)
// ==========================================
async function fetchWeather(city) {
    // TODO: Implement
    // 1. Tạo URL với city và API_KEY
    // 2. Fetch data
    // 3. Check response.ok
    // 4. Return JSON data

    const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric&lang=vi`;

    // Uncomment và hoàn thành:
    // try {
    //   const response = await fetch(url);
    //   
    //   if (!response.ok) {
    //     if (response.status === 404) {
    //       throw new Error('Không tìm thấy thành phố');
    //     }
    //     throw new Error('Có lỗi xảy ra');
    //   }
    //   
    //   return await response.json();
    // } catch (error) {
    //   throw error;
    // }
}

// ==========================================
// TODO 2: Display Weather
// Render data lên UI
// ==========================================
function displayWeather(data) {
    // TODO: Implement
    // Sử dụng destructuring để lấy data
    // Update các elements với data

    // const { name, main, weather, wind } = data;
    // const { temp, humidity, feels_like } = main;
    // const { description, icon } = weather[0];
    // 
    // elements.cityName.textContent = name;
    // elements.temperature.textContent = Math.round(temp);
    // elements.description.textContent = description;
    // elements.humidity.textContent = `${humidity}%`;
    // elements.windSpeed.textContent = `${wind.speed} m/s`;
    // elements.feelsLike.textContent = `${Math.round(feels_like)}°C`;
    // elements.weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    // 
    // elements.weatherCard.hidden = false;
    // elements.errorMessage.hidden = true;
}

// ==========================================
// TODO 3: Handle Errors
// Hiển thị error message
// ==========================================
function showError(message) {
    // TODO: Implement
    // elements.errorText.textContent = message;
    // elements.errorMessage.hidden = false;
    // elements.weatherCard.hidden = true;
}

// ==========================================
// TODO 4: Loading State
// Toggle loading state
// ==========================================
function setLoading(isLoading) {
    // TODO: Implement
    // if (isLoading) {
    //   elements.btnText.hidden = true;
    //   elements.btnLoading.hidden = false;
    //   elements.searchBtn.disabled = true;
    // } else {
    //   elements.btnText.hidden = false;
    //   elements.btnLoading.hidden = true;
    //   elements.searchBtn.disabled = false;
    // }
}

// ==========================================
// TODO 5: Recent Searches
// Lưu và hiển thị recent searches từ localStorage
// ==========================================
function saveToRecent(city) {
    // TODO: Implement
    // 1. Lấy array từ localStorage (hoặc [])
    // 2. Thêm city vào đầu, remove duplicate
    // 3. Giới hạn 5 items
    // 4. Lưu lại localStorage

    // let recent = JSON.parse(localStorage.getItem('recentCities') || '[]');
    // recent = recent.filter(c => c.toLowerCase() !== city.toLowerCase());
    // recent.unshift(city);
    // recent = recent.slice(0, 5);
    // localStorage.setItem('recentCities', JSON.stringify(recent));
    // displayRecentSearches();
}

function displayRecentSearches() {
    // TODO: Implement
    // Render recent searches từ localStorage

    // const recent = JSON.parse(localStorage.getItem('recentCities') || '[]');
    // if (recent.length === 0) {
    //   elements.recentSearches.hidden = true;
    //   return;
    // }
    // 
    // elements.recentSearches.hidden = false;
    // elements.recentList.innerHTML = recent
    //   .map(city => `<button class="recent-item" data-city="${city}">${city}</button>`)
    //   .join('');
}

// ==========================================
// TODO 6: Main Search Handler
// Xử lý form submit
// ==========================================
async function handleSearch(e) {
    e.preventDefault();

    const city = elements.input.value.trim();
    if (!city) return;

    // TODO: Implement
    // 1. Set loading
    // 2. Try fetch weather
    // 3. Display weather
    // 4. Save to recent
    // 5. Catch errors
    // 6. Finally: stop loading

    // setLoading(true);
    // 
    // try {
    //   const data = await fetchWeather(city);
    //   displayWeather(data);
    //   saveToRecent(city);
    //   elements.input.value = '';
    // } catch (error) {
    //   showError(error.message);
    // } finally {
    //   setLoading(false);
    // }
}

// ==========================================
// Event Listeners
// ==========================================
elements.form.addEventListener('submit', handleSearch);

// Recent search click
elements.recentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('recent-item')) {
        const city = e.target.dataset.city;
        elements.input.value = city;
        elements.form.dispatchEvent(new Event('submit'));
    }
});

// Initialize
displayRecentSearches();

// ==========================================
// BONUS: Geolocation
// Lấy weather theo vị trí hiện tại
// ==========================================
async function getWeatherByLocation() {
    // TODO: Implement (optional)
    // 1. navigator.geolocation.getCurrentPosition
    // 2. Fetch với lat, lon thay vì city
}

// ==========================================
// SOLUTION
// ==========================================
/*
async function fetchWeather(city) {
  const url = `${API_BASE}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=vi`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Không tìm thấy thành phố');
    }
    if (response.status === 401) {
      throw new Error('API Key không hợp lệ');
    }
    throw new Error('Có lỗi xảy ra');
  }
  
  return response.json();
}

function displayWeather(data) {
  const { name, main, weather, wind } = data;
  const { temp, humidity, feels_like } = main;
  const { description, icon } = weather[0];
  
  elements.cityName.textContent = name;
  elements.temperature.textContent = Math.round(temp);
  elements.description.textContent = description;
  elements.humidity.textContent = `${humidity}%`;
  elements.windSpeed.textContent = `${wind.speed} m/s`;
  elements.feelsLike.textContent = `${Math.round(feels_like)}°C`;
  elements.weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
  elements.weatherCard.hidden = false;
  elements.errorMessage.hidden = true;
}

function showError(message) {
  elements.errorText.textContent = message;
  elements.errorMessage.hidden = false;
  elements.weatherCard.hidden = true;
}

function setLoading(isLoading) {
  elements.btnText.hidden = isLoading;
  elements.btnLoading.hidden = !isLoading;
  elements.searchBtn.disabled = isLoading;
}

function saveToRecent(city) {
  let recent = JSON.parse(localStorage.getItem('recentCities') || '[]');
  recent = recent.filter(c => c.toLowerCase() !== city.toLowerCase());
  recent.unshift(city);
  recent = recent.slice(0, 5);
  localStorage.setItem('recentCities', JSON.stringify(recent));
  displayRecentSearches();
}

function displayRecentSearches() {
  const recent = JSON.parse(localStorage.getItem('recentCities') || '[]');
  if (recent.length === 0) {
    elements.recentSearches.hidden = true;
    return;
  }
  
  elements.recentSearches.hidden = false;
  elements.recentList.innerHTML = recent
    .map(city => `<button class="recent-item" data-city="${city}">${city}</button>`)
    .join('');
}

async function handleSearch(e) {
  e.preventDefault();
  
  const city = elements.input.value.trim();
  if (!city) return;
  
  setLoading(true);
  
  try {
    const data = await fetchWeather(city);
    displayWeather(data);
    saveToRecent(city);
    elements.input.value = '';
  } catch (error) {
    showError(error.message);
  } finally {
    setLoading(false);
  }
}
*/
