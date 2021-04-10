const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-grettings");
const USER_LS = "currentUser", 
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName(); // 유저가 없는 경우
    }   else {
        paintGretting(currentUser);  // 유저가 있는 경우
    }
}

function init() {
    loadName();
}

init();