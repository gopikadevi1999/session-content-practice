//!Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.
const element = document.querySelector("h1");
element.addEventListener("click", (e) => {
    document.querySelector("span").innerText = `coordinates of X = ${e.pageX} and Y = ${e.pageY}`;

});

//write a javascript code for  character counts in the textarea
const textarea = document.getElementById("textarea");
textarea.addEventListener("input", (ele) => {
    document.querySelector("span").innerText = `character in the textarea ${ele.target.value.length}`;
})