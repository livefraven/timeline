// 사이드 화면 사용하기
const toggleSideContentLinks = document.querySelectorAll(".Goside");
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

// 최종 수정일 자동 업데이트
const columnHandles = document.querySelectorAll(".column-handle");
let isResizing = false;
let lastX = 0;

columnHandles.forEach((handle) => {
  handle.addEventListener("mousedown", (e) => {
    isResizing = true;
    lastX = e.clientX;
  });
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  const offset = e.clientX - lastX;
  const mainArticle = document.getElementById("mainArticle");
  const siteAds = document.getElementById("siteAds");
  const newLeftWidth = mainArticle.offsetWidth + offset;
  const newRightWidth = siteAds.offsetWidth - offset;

  mainArticle.style.width = newLeftWidth + "px";
  siteAds.style.width = newRightWidth + "px";

  lastX = e.clientX;
});

document.addEventListener("mouseup", () => {
  isResizing = false;
});

// 최종 수정일을 표시하는 함수
function displayLastModified() {
  const lastModifiedElement = document.getElementById("last-modified");
  const lastModifiedDate = new Date(document.lastModified);
  lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
}

// 페이지 로드 후 최종 수정일 표시
window.addEventListener("load", displayLastModified);

// 메일주소 복사하기
var textToCopy = document.getElementById("text-to-copy");

textToCopy.style.cursor = "pointer"; // 커서를 포인터로 변경하여 클릭 가능한 것처럼 표시

textToCopy.addEventListener("click", function () {
  var text = textToCopy.innerText;
  var textArea = document.createElement("textarea");

  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  alert("메일주소가 복사되었습니다.");
});

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

// 숫자 지우기
// DOMContentLoaded 이벤트가 발생했을 때 스크립트 실행
document.addEventListener("DOMContentLoaded", function () {
  // "numberHide" ID를 가진 링크 요소를 가져옴
  const numberHideButton = document.querySelector("#numberHide");
  // ".years" 클래스를 가진 span 요소를 가져옴
  const yearsSpan = document.querySelector(".years");
  // 숨김 상태를 추적하는 변수를 초기화
  let isHidden = false;

  // "numberHide" 링크가 클릭되면 이벤트 처리
  numberHideButton.addEventListener("click", function (e) {
    e.preventDefault(); // 링크의 기본 동작 방지

    // 만약 숨겨져 있다면
    if (isHidden) {
      yearsSpan.style.display = "block"; // 요소를 나타나게 함
      numberHideButton.textContent = "연도 숨기기"; // 링크 텍스트 변경
    } else {
      yearsSpan.style.display = "none"; // 요소를 숨김
      numberHideButton.textContent = "연도 보이기"; // 링크 텍스트 변경
    }

    // 숨김/나타남 상태를 토글
    isHidden = !isHidden;
  });
});
