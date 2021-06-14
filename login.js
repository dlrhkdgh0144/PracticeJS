/*document.title = "Pastel*Palettes";
const titles = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    titles.classList.toggle("active");
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
titles.addEventListener("click",handleTitleClick);

window.addEventListener("resize",handleWindowResize);*/
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function handleSubmit(e){
    e.preventDefault();
    //loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value
    localStorage.setItem("username",username);
    printGreeting(username);
}
function printGreeting(username){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleSubmit);
}
else{
    printGreeting(savedUserName);
}