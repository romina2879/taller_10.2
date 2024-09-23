addEventListener("DOMContentLoaded", (event) => {
    const savedText = localStorage.getItem("savedText");
    document.getElementById("data").innerHTML = savedText
    });