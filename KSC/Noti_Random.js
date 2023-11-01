// 우클릭 안되게 하기
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// 이모티콘 랜덤 표기
// 사용 가능한 이모티콘 배열
const emojis = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥥",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶️",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🧅",
  "🥜",
  "🌰",
  "🍞",
  "🥐",
  "🥖",
  "🥨",
  "🥯",
  "🥞",
  "🧇",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🌮",
  "🌯",
  "🥙",
  "🧆",
  "🥚",
  "🍳",
  "🥘",
  "🍲",
  "🥣",
  "🥗",
  "🍿",
  "🧈",
  "🧂",
  "🥫",
  "🍱",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍠",
  "🍤",
  "🥠",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🥛",
  "☕",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🥂",
  "🥃",
  "🧃",
  "🧊",
];

// HTML 요소를 선택합니다.
const outputElements = document.querySelectorAll(".emoticon");

// 무작위 이모티콘을 선택하는 함수
function getRandomEmoji(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// 페이지 로드 시 각 .output 클래스를 가진 요소에 무작위 이모티콘을 출력
function displayRandomEmoji(element) {
  const randomEmoji = getRandomEmoji(emojis);
  element.innerHTML = randomEmoji;
}

outputElements.forEach(displayRandomEmoji);
