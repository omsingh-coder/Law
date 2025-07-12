// app.js

// 1. Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 2. Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT70w5hwEZqELdgoFYGyAuGqP9AQsAqu4",
  authDomain: "mylaw-c3414.firebaseapp.com",
  databaseURL: "https://mylaw-c3414-default-rtdb.firebaseio.com",
  projectId: "mylaw-c3414",
  storageBucket: "mylaw-c3414.appspot.com",
  messagingSenderId: "449744223319",
  appId: "1:449744223319:web:31fc05890044526f927712",
  measurementId: "G-PLGN9SCN0P"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 4. Form Submit Handler
const form = document.getElementById("entryForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    const userRef = ref(db, "users");
    const newUser = push(userRef);
    set(newUser, {
      name,
      email,
      timestamp: Date.now()
    }).then(() => {
      localStorage.setItem("user", name);
      window.location.href = "main.html";
    }).catch((error) => {
      alert("Error saving data: " + error);
    });
  } else {
    alert("Please enter your name and email.");
  }
});

