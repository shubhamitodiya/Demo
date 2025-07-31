let z = document.getElementById('a');
console.log(z);
z.textContent = "JavaScript is more tricky!!";


document.querySelector("button").addEventListener("click", function () {
    console.log("Good Morning");
    alert("Good Morning!");
});


function xyz() {
    let y = document.getElementById('b');
    y.style.color = "yellow";
}


function size() {
    let p = document.querySelector("p");
    p.style.fontSize = '30px';
}

let h4 = document.querySelector("h4");
h4.addEventListener("click", function () {
    h4.style.display = "none";
});