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

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);

  lastModifiedElement.textContent = formattedDate;
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
  expandAllButton.textContent = isExpanded ? "모두 접기" : "모두 펼치기";
});

// 연도 보이기/가리기
var showNumLink = document.getElementById("showNumLink");
var numElements = document.querySelectorAll(".hideYears");
var originalText = "연도 가리기";
var altText = "연도 보기";

// 링크를 클릭할 때 이벤트 처리
showNumLink.addEventListener("click", function (event) {
  event.preventDefault(); // 링크의 기본 동작(페이지 새로고침)을 막음

  // 모든 클래스명 "num"을 가진 요소의 현재 상태 확인
  var isHidden =
    numElements[0].style.display === "none" ||
    numElements[0].style.display === "";

  // "num" 클래스를 토글하여 보이기 또는 숨기기
  numElements.forEach(function (element) {
    element.style.display = isHidden ? "inline" : "none";
  });

  // 링크 텍스트 변경
  showNumLink.textContent = isHidden ? originalText : altText;
});
