let percent = document.querySelector(".percent")
let i = 0;
let interval = setInterval(function a () {percent.textContent=i++ + "%"; if (i==101) {
    clearInterval(interval)
};}, 100);  

