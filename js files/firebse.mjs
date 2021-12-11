import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyCkSFQNiq3ZCJRh-T5ceqKZbDHQyaoJnao",
  authDomain: "farmer-portal-4e1e2.firebaseapp.com",
  databaseURL: "https://farmer-portal-4e1e2-default-rtdb.firebaseio.com",
  projectId: "farmer-portal-4e1e2",
  storageBucket: "farmer-portal-4e1e2.appspot.com",
  messagingSenderId: "857958003228",
  appId: "1:857958003228:web:a64c06dd2fd89e1500e5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);