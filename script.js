console.log("script 태그 동작 확인")

let elInputUsername = document.querySelector("#username")
console.log(elInputUsername)

elInputUsername.value = "김코딩"
elInputUsername.value = ""
elInputUsername.value = "박해커"

// 아이디에 유요하지 않은 값을 넣었을때 로직을 구현해보자.
// 콘솔로만 뜨면 모르니까 시각적 피드백을 html안쪽에 뿌려야한다.

// 안보이게 하려면 css 에서 dispaly : none; 한다.
// 이 과정을 js에서 해보자.
let elFailtureMessage = document.querySelector(".failure-message")
console.log(elFailtureMessage)

// elFailtureMessage.style.display = 'none'

// 다시 보이게 하려면 다음과 같이 한다.
// elFailtureMessage.style.display = 'block'

// 하지만 실제로 현업에서 쓰이는 방법이 있다..
// css 파일과 클래스를 조합..해보자.
// css에 .hide 클래스에 display : none을 달고 html에서 가릴 태그에 hide 클래스 넣어주기
