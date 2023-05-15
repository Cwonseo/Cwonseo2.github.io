const content = "Hi, I'm Wonseo!";
const text = document.querySelector(".text");

let textIdx = 0;
function typing(){
    let txt = content[textIdx++];
    text.innerHTML += txt;

    if (textIdx > content.length) {
        text.textContent = "";
        textIdx = 0;
    }
}
setInterval(typing, 200)