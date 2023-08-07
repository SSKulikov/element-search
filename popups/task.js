const listClassBtn = [...document.querySelectorAll('.btn')]
const listAllClose = [...document.querySelectorAll('.modal__close_times')]

listClassBtn[0].parentElement.parentElement.classList.add('modal_active')
listClassBtn[0].onclick = () => {
    listClassBtn[0].parentElement.parentElement.classList.remove('modal_active')
    listClassBtn[1].parentElement.parentElement.classList.add('modal_active')
    listClassBtn[1].onclick = () => {
        listClassBtn[1].parentElement.parentElement.classList.remove('modal_active')
    }
}

for(let value of listAllClose) {
    value.onclick = (el) => {
        let targetElement = el.target
        console.log(targetElement.parentElement.parentElement.classList.remove('modal_active'))
    }
}