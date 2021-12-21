const text = document.querySelectorAll('.thePaths');
 
for(let i = 0; i< text.length; i++){
     console.log(text[i].getTotalLength())
}

const lestword = document.querySelector('#fifteen');

const animation = document.querySelector('div.animation');
lestword.addEventListener("animationend", () => {
    animation.style="transition: all 1s ease; opacity: 0; pointer-events: none;";
})