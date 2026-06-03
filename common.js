// 똑똑 v1.0 공통 데이터/함수

const APP_VERSION = "v1.0";
const OFFICE_NAME = "3학년 교무실";
const OFFICE_LOCATION = "동국관 4층";

const TEACHERS = [
  { name: "김건우", subject: "국어" },
  { name: "김영민", subject: "사회" },
  { name: "노여진", subject: "국어" },
  { name: "박기만", subject: "윤리" },
  { name: "이의진", subject: "체육" },
  { name: "이필권", subject: "미술" },
  { name: "이주영", subject: "화학" },
  { name: "홍지연", subject: "영어" },
  { name: "강만규", subject: "물리학" },
  { name: "최아현", subject: "지구과학" },
  { name: "채정태", subject: "수학" }
];

function safe(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fullTimeText(ms) {
  if (!ms) return "-";

  const d = new Date(ms);
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = String(d.getHours()).padStart(2, "0");
  const minute = String(d.getMinutes()).padStart(2, "0");

  return `${month}/${date} ${hour}:${minute}`;
}

function todayStartMs() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function statusLabel(status) {
  if (status === "pending") return "대기 중";
  if (status === "confirmed") return "확인함";
  if (status === "completed") return "처리 완료";
  return status || "-";
}

function statusClass(status) {
  if (status === "pending") return "pending";
  if (status === "confirmed") return "confirmed";
  if (status === "completed") return "completed";
  return "";
}

function fillClassSelect(selectId) {
  const el = document.getElementById(selectId);
  if (!el) return;

  el.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `${i}반`;
    el.appendChild(opt);
  }
}

function fillTeacherSelect(selectId) {
  const el = document.getElementById(selectId);
  if (!el) return;

  el.innerHTML = "";

  TEACHERS.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.name;
    opt.textContent = `${t.name} 선생님 (${t.subject})`;
    el.appendChild(opt);
  });
}

function makeAnnouncement(call) {
  return `똑똑! ${call.teacherName} 선생님, 3학년 ${call.classNo}반 ${call.studentName} 학생이 ${call.reason} 요청으로 호출했습니다.`;
}

function showFirebaseWarning() {
  const box = document.getElementById("firebaseWarning");
  if (box) box.classList.remove("hidden");
}

let app = null;
let db = null;

function initFirebaseApp() {
  if (!isFirebaseConfigured()) {
    showFirebaseWarning();
    return false;
  }

  try {
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    return true;
  } catch (e) {
    console.error(e);
    showFirebaseWarning();
    return false;
  }
}
