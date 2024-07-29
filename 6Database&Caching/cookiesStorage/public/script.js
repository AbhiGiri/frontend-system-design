// function to set User Prefrences and display personalized recommendations
function setPreferences() {
  var preferences = document.getElementById('preferences').value;
  setCookie('userPreferences', preferences, 1); // expires in 1hr
  displayRecommendation(preferences);
  document.getElementById('preferences-container').style.display =  'none';
  document.getElementById('recommendations-container').style.display = 'block';
};

function displayRecommendationOnLoad() {
  var preferences = getCookie('userPreferences');
  if(preferences) {
    displayRecommendation(preferences);
    document.getElementById('preferences-container').style.display = 'none';
    document.getElementById('recommendations-container').style.display = 'block';
  }
};

function displayRecommendation(preferences) {
  var recommendations = getRecommendations(preferences);
  document.getElementById('recommendations').innerHTML = recommendations;
};

// Read the cookie with name
function getCookie(name) {
  var nameEQ = name + '=';
  var cookies = document.cookie.split(';');
  for(var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while(cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if(cookie.indexOf(nameEQ === 0)) {
      return cookie.substring(nameEQ.length, cookie.length)
    }
  }
  return null;
};

function getRecommendations() {
  switch(preferences) {
    case 'movies': 
      return 'Checkout the latest movie in theaters';
    case 'books': 
      return 'Explore these Must_Read books';
    default: 
      return 'No recommendations available';
  }
};

function setCookie(name, value, hours) {
  var expires = '';
  if(hours) {
    var date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = '; expires=', + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/'
};

function logoutUser() {
  eraseCookie('userPreferences');
  document.getElementById('preferences-container').style.display = 'block';
  document.getElementById('recommendations-container').style.display = 'none';
};


function eraseCookie(name) {
  document.cookie = name + '=; Max-age=-99999999;';
};

// Display Recommendations on Page Load
window.onload = displayRecommendation;