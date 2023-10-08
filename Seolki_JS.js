// 모두 펼치기, 모두 접기 기능
// HTML에서 'expandAllButton' id를 가진 요소를 가져옵니다.
const expandAllButton = document.getElementById("expandAllButton");

// 페이지 내의 모든 'details' 요소를 선택합니다.
const detailsElements = document.querySelectorAll("details");

// 'isExpanded' 변수를 사용하여 현재 토글 상태를 추적합니다.
let isExpanded = false; // 초기에는 닫혀있음

// 'expandAllButton' 버튼에 클릭 이벤트 리스너를 추가합니다.
expandAllButton.addEventListener("click", () => {
  // 'detailsElements'에 대한 반복문을 통해 각 'details' 요소를 조작합니다.
  detailsElements.forEach((details) => {
    // 'details.open' 속성을 사용하여 상태를 토글합니다. (열려있으면 닫히고, 닫혀있으면 열립니다.)
    details.open = !isExpanded;
  });

  // 'isExpanded' 상태를 업데이트하여 다음 토글에 대비합니다.
  isExpanded = !isExpanded;

  // 'expandAllButton'의 텍스트를 업데이트하여 현재 토글 상태를 표시합니다.
  expandAllButton.textContent = isExpanded ? "모두 닫기" : "모두 펼치기";
});

// 폰트 변경 기능
// DOMContentLoaded 이벤트를 대기하고, 페이지가 준비되면 실행
document.addEventListener("DOMContentLoaded", function () {
  const fontSelector = document.getElementById("font-selector");

  // 폰트 선택 메뉴에서 변경 사항을 감지하고 처리하는 함수
  fontSelector.addEventListener("change", function () {
    const selectedFont = fontSelector.value;

    // 선택한 폰트를 페이지의 폰트로 설정
    document.body.style.fontFamily = selectedFont;
  });
});

// 사이드 화면 사용하기
const toggleSideContentLinks = document.querySelectorAll(
  ".toggle-side-content"
);
const gridContainer = document.querySelector(".grid-container");
const sideContent = document.querySelector(".side-content");
const closeSideButton = document.querySelector(".close-side-button");

toggleSideContentLinks.forEach((link) => {
  link.addEventListener("click", () => {
    gridContainer.style.gridTemplateColumns =
      "1.618fr 1fr"; /* 사이드 컨텐츠 표시 */
    sideContent.style.display = "block"; /* 사이드 컨텐츠 표시 */
  });
});

closeSideButton.addEventListener("click", () => {
  gridContainer.style.gridTemplateColumns =
    "1.618fr 0"; /* 사이드 컨텐츠 숨김 */
  sideContent.style.display = "none"; /* 사이드 컨텐츠 숨김 */
});
