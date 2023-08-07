const listImg = [...document.querySelectorAll('.slider__item')]
const nextArrow = document.querySelector('.slider__arrow_next')
const prevArrow = document.querySelector('.slider__arrow_prev')

const points = [...document.querySelectorAll('.slider__dot')]

function getActivPosition() {
    return listImg.findIndex(element => element.classList.contains('slider__item_active'))
}

function changePosition(Position) {
    let activId = getActivPosition()
    listImg[activId].classList.remove('slider__item_active')
    listImg[Position].classList.add('slider__item_active')
    
}

nextArrow.onclick = () => {
    let activId = getActivPosition()
    if (activId >= listImg.length - 1) {
        activId = -1
    }
    changePosition(activId+1)
}

prevArrow.onclick = () => {
    let activId = getActivPosition()
    if (activId <= 0) {
        activId = listImg.length
    }
    changePosition(activId-1)
}

points.forEach((point) => {
    point.addEventListener('click', () => {
        let clickPosition = points.findIndex(value => value == point)
        changePosition(clickPosition)
    })
})