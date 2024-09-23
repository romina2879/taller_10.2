addEventListener("DOMContentLoaded", (event) => {
document.getElementById("buttonText").addEventListener("click", function(){
    const inputText = document.getElementById("inputText").value;
    localStorage.setItem("savedText", inputText);
})
});