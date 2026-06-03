// 똑똑 v1.0 Firebase 설정 파일
// 나중에 Firebase에서 받은 설정값을 아래 YOUR_... 부분에 넣으면 됩니다.
// 지금은 그대로 두면 "Firebase 설정 필요"라고 뜨는 게 정상입니다.

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

function isFirebaseConfigured() {
  return firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("YOUR_");
}
