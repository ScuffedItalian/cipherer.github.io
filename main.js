const textBoxComp = document.getElementById("textBox");
const mainButtonComp = document.getElementById("mainButton");
const outBoxComp = document.getElementById("outtextBox");
function cipherFunc() {
    const key = "bcdefghijklmnopqrstuvwxyza";
    let finishedText = "";

    for(let i = 0; i < textBoxComp.value.length; i++) {
        const indx = textBoxComp.value.charCodeAt(i) - 97;
        const encryptedChar = key.charAt(indx);
        finishedText += encryptedChar
    }
    outBoxComp.innerHTML = finishedText;
}


mainButtonComp.addEventListener("click", cipherFunc);



