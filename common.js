// 똑똑 v1.2 공통 데이터/함수

const APP_VERSION = "v1.2";

const OFFICES = [
  { id: "grade1", name: "1학년 교무실", location: "본관 3층" },
  { id: "grade2", name: "2학년 교무실", location: "본관 2층" },
  { id: "grade3", name: "3학년 교무실", location: "동국관 4층" },
  { id: "main", name: "본교무실", location: "본관 1층" },
  { id: "student", name: "학생부실", location: "동국관 2층" },
  { id: "counsel", name: "상담실", location: "동국관 2층" },
  { id: "career", name: "진로상담실", location: "본관 1층" },
  { id: "gyohak", name: "교학실", location: "동국관 1층" },
  { id: "health", name: "보건실", location: "본관 1층" },
  { id: "library", name: "도서관", location: "" }
];

const TEACHERS = [
  // 1학년 교무실
  { officeId: "grade1", name: "전진호", title: "전진호 선생님", subject: "국어" },
  { officeId: "grade1", name: "홍선희", title: "홍선희 선생님", subject: "통합사회" },
  { officeId: "grade1", name: "서정숙", title: "서정숙 선생님", subject: "통합과학" },
  { officeId: "grade1", name: "이재영", title: "이재영 선생님", subject: "수학" },
  { officeId: "grade1", name: "안병근", title: "안병근 선생님", subject: "역사" },
  { officeId: "grade1", name: "서신애", title: "서신애 선생님", subject: "수학" },
  { officeId: "grade1", name: "손유민", title: "손유민 선생님", subject: "영어" },
  { officeId: "grade1", name: "고혜숙", title: "고혜숙 선생님", subject: "과학" },
  { officeId: "grade1", name: "신지나", title: "신지나 선생님", subject: "통합사회" },
  { officeId: "grade1", name: "원치승", title: "원치승 선생님", subject: "국어" },

  // 2학년 교무실
  { officeId: "grade2", name: "이재현", title: "이재현 선생님", subject: "수학" },
  { officeId: "grade2", name: "최소연", title: "최소연 선생님", subject: "영어" },
  { officeId: "grade2", name: "이병철", title: "이병철 선생님", subject: "지리" },
  { officeId: "grade2", name: "신주하", title: "신주하 선생님", subject: "국어" },
  { officeId: "grade2", name: "김지은", title: "김지은 선생님", subject: "영어" },
  { officeId: "grade2", name: "민준한", title: "민준한 선생님", subject: "국어" },
  { officeId: "grade2", name: "김동주", title: "김동주 선생님", subject: "역사" },
  { officeId: "grade2", name: "이서영", title: "이서영 선생님", subject: "사회" },
  { officeId: "grade2", name: "신국용", title: "신국용 선생님", subject: "체육" },
  { officeId: "grade2", name: "선은호", title: "선은호 선생님", subject: "화학" },

  // 3학년 교무실
  { officeId: "grade3", name: "김건우", title: "김건우 선생님", subject: "국어" },
  { officeId: "grade3", name: "김영민", title: "김영민 선생님", subject: "사회" },
  { officeId: "grade3", name: "노여진", title: "노여진 선생님", subject: "국어" },
  { officeId: "grade3", name: "박기만", title: "박기만 선생님", subject: "윤리" },
  { officeId: "grade3", name: "이의진", title: "이의진 선생님", subject: "체육" },
  { officeId: "grade3", name: "이필권", title: "이필권 선생님", subject: "미술" },
  { officeId: "grade3", name: "이주영", title: "이주영 선생님", subject: "화학" },
  { officeId: "grade3", name: "홍지연", title: "홍지연 선생님", subject: "영어" },
  { officeId: "grade3", name: "강만규", title: "강만규 선생님", subject: "물리학" },
  { officeId: "grade3", name: "최아현", title: "최아현 선생님", subject: "지구과학" },
  { officeId: "grade3", name: "채정태", title: "채정태 선생님", subject: "수학" },

  // 기타 교무실/부서
  { officeId: "main", name: "송자선", title: "송자선 교감선생님", subject: "" },
  { officeId: "main", name: "윤용민", title: "윤용민 선생님", subject: "지리" },
  { officeId: "main", name: "김용진", title: "김용진 선생님", subject: "국어" },
  { officeId: "main", name: "한은정", title: "한은정 선생님", subject: "윤리" },
  { officeId: "main", name: "장연지", title: "장연지 선생님", subject: "영어" },
  { officeId: "main", name: "조미화", title: "조미화 선생님", subject: "음악" },
  { officeId: "main", name: "김은경", title: "김은경 선생님", subject: "" },

  { officeId: "student", name: "김병무", title: "김병무 선생님", subject: "체육" },
  { officeId: "student", name: "성은비", title: "성은비 선생님", subject: "물리학" },
  { officeId: "student", name: "정하나", title: "정하나 선생님", subject: "음악" },
  { officeId: "student", name: "서기수", title: "서기수 선생님", subject: "체육" },

  { officeId: "counsel", name: "여운호", title: "여운호 선생님", subject: "상담" },
  { officeId: "career", name: "황유현", title: "황유현 선생님", subject: "진로" },
  { officeId: "career", name: "지호영", title: "지호영 선생님", subject: "일본어" },
  { officeId: "gyohak", name: "우수형", title: "우수형 법사님", subject: "종교" },
  { officeId: "gyohak", name: "정성준", title: "정성준 선생님", subject: "역사" },
  { officeId: "health", name: "이혜정", title: "이혜정 선생님", subject: "보건" },
  { officeId: "library", name: "최정이", title: "최정이 선생님", subject: "사서" }
];

function safe(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getOffice(officeId) {
  return OFFICES.find(o => o.id === officeId) || OFFICES[2];
}

function getTeacherByName(name, officeId) {
  return TEACHERS.find(t => t.name === name && (!officeId || t.officeId === officeId))
    || TEACHERS.find(t => t.name === name)
    || null;
}

function teacherOptionText(t) {
  const detail = [t.subject].filter(Boolean).join(" · ");
  return detail ? `${t.title} (${detail})` : t.title;
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

function urgencyClass(urgency) {
  if (urgency === "긴급") return "urgent";
  if (urgency === "빠른 확인 필요") return "fast";
  return "";
}

function fillGradeSelect(selectId, defaultGrade = "3") {
  const el = document.getElementById(selectId);
  if (!el) return;

  el.innerHTML = "";

  ["1", "2", "3"].forEach(g => {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = `${g}학년`;
    el.appendChild(opt);
  });

  el.value = defaultGrade;
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

function fillOfficeSelect(selectId, defaultOfficeId = "grade3") {
  const el = document.getElementById(selectId);
  if (!el) return;

  el.innerHTML = "";

  OFFICES.forEach(o => {
    const opt = document.createElement("option");
    opt.value = o.id;
    opt.textContent = o.location ? `${o.name} (${o.location})` : o.name;
    el.appendChild(opt);
  });

  el.value = defaultOfficeId;
}

function fillTeacherSelect(selectId, officeId) {
  const el = document.getElementById(selectId);
  if (!el) return;

  el.innerHTML = "";

  const list = TEACHERS.filter(t => t.officeId === officeId);

  if (!list.length) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "등록된 선생님 없음";
    opt.disabled = true;
    opt.selected = true;
    el.appendChild(opt);
    return;
  }

  list.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.name;
    opt.textContent = teacherOptionText(t);
    el.appendChild(opt);
  });
}

function makeAnnouncement(call) {
  const title = call.teacherTitle || `${call.teacherName} 선생님`;
  return `똑똑! ${title}, ${call.grade}학년 ${call.classNo}반 ${call.studentName} 학생이 ${call.reason} 요청으로 호출했습니다.`;
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
