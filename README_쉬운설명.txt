똑똑 v1.0 사용 설명서

1. 파일 구성

index.html
- 처음 들어갔을 때 학생용/교무실용 화면을 선택하는 입구 화면입니다.

student.html
- 학생용 프로그램입니다.
- 학생이 반, 이름, 선생님, 요청 내용, 긴급도를 선택하고 “똑똑!” 버튼을 누릅니다.

office.html
- 교무실용 프로그램입니다.
- 학생 호출을 실시간으로 확인합니다.
- 새 호출이 들어오면 “똑똑!”으로 시작하는 안내가 표시됩니다.
- 선생님은 “지금 오세요 / 쉬는 시간에 / 수업 후에 / 잠시 기다려요 / 처리 완료” 버튼으로 응답할 수 있습니다.

style.css
- 화면 디자인을 담당하는 파일입니다.

common.js
- 학생용과 교무실용에서 같이 쓰는 공통 기능 파일입니다.

firebase-config.js
- Firebase 연결 설정 파일입니다.
- 나중에 Firebase에서 받은 설정값을 넣어야 합니다.


2. GitHub에 올릴 파일

아래 파일들을 모두 GitHub 저장소에 올리면 됩니다.

index.html
student.html
office.html
style.css
common.js
firebase-config.js
README_쉬운설명.txt


3. 주소 예시

GitHub Pages 주소가

https://아이디.github.io/저장소이름/

이라면 학생용 주소는

https://아이디.github.io/저장소이름/student.html

교무실용 주소는

https://아이디.github.io/저장소이름/office.html

입니다.


4. Firebase가 필요한 이유

학생용 프로그램과 교무실용 프로그램은 서로 다른 화면입니다.

학생이 “똑똑!” 버튼을 눌렀을 때
그 정보가 교무실 화면에 바로 뜨게 하려면
중간에 실시간으로 정보를 전달하는 공간이 필요합니다.

그 역할을 Firebase가 합니다.

학생용 프로그램 → Firebase → 교무실용 프로그램

이런 구조입니다.


5. 아직 Firebase 설정을 안 했을 때

화면에 “Firebase 설정 필요”라고 뜨는 것이 정상입니다.

나중에 Firebase 프로젝트를 만들고
firebase-config.js 파일의 YOUR_... 부분을 바꾸면
실시간 연결이 작동합니다.
