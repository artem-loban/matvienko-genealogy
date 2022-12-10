import React from 'react';
import './App.css';
import { PersonalCard } from './molecules/personal-card';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf36JNNkmO2f3QWwWeNhI6aOF4RUIpUmo",
  authDomain: "genealogie-1ece8.firebaseapp.com",
  projectId: "genealogie-1ece8",
  storageBucket: "genealogie-1ece8.appspot.com",
  messagingSenderId: "315391574149",
  appId: "1:315391574149:web:eac6f34daa06322572a9ec",
  measurementId: "G-FFKJ5WS5Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics.logEvent('test');

function App() {
  return (
    <div className="App">
      <PersonalCard />
    </div>
  );
}

export default App;
