// 똑똑 v1.0 Firebase 설정 파일
// 나중에 Firebase에서 받은 설정값을 아래 YOUR_... 부분에 넣으면 됩니다.
// 지금은 그대로 두면 "Firebase 설정 필요"라고 뜨는 게 정상입니다.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgeZHjGt1BMxCSI2i9jUoGNtMlDbHnk54",
  authDomain: "ddokddok-e0d11.firebaseapp.com",
  projectId: "ddokddok-e0d11",
  storageBucket: "ddokddok-e0d11.firebasestorage.app",
  messagingSenderId: "1047940971849",
  appId: "1:1047940971849:web:2e357a23692faa11e26e98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function isFirebaseConfigured() {
  return firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("YOUR_");
}
