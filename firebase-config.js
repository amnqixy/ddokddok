// 똑똑 v1.0 Firebase 설정 파일

const firebaseConfig = {
  apiKey: "AIzaSyBgeZHjGt1BMxCSI2i9jUoGNtMlDbHnk54",
  authDomain: "ddokddok-e0d11.firebaseapp.com",
  databaseURL: "https://ddokddok-e0d11-default-rtdb.firebaseio.com/",
  projectId: "ddokddok-e0d11",
  storageBucket: "ddokddok-e0d11.firebasestorage.app",
  messagingSenderId: "1047940971849",
  appId: "1:1047940971849:web:2e357a23692faa11e26e98"
};

function isFirebaseConfigured() {
  return firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("YOUR_");
}
