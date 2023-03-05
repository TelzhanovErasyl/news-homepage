let menuButton = document.querySelector('#menu-button')
let navs = document.querySelector('#hidden')
let isOpened = false

menuButton.addEventListener('click', function () {
    if (navs.className == 'nav__links') {
        navs.className += ' mobile'
    }
    else {
        navs.className = 'nav__links'
    }
})


// menuButton.addEventListener('click', function () {
//     if (window.innerWidth <= 673) {
//         if (isOpened == false) {
//             navs.style.display = 'flex'
//             menuButton.innerHTML = '\n        <img src="./assets/images/icon-menu-close.svg" alt="menu icon">\n      '
//             isOpened = true
//         }

//         else {
//             navs.style.display = 'none'
//             menuButton.innerHTML = '\n        <img src="./assets/images/icon-menu.svg" alt="menu icon">\n      '
//             isOpened = false
//         }
//     }
// })