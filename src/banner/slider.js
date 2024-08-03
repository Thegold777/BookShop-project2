function initSlider() {
    let images = [{
        url: './imgs/png/banner.png'
    }, {
        url: './imgs/png/banner 2.png'
    }, {
        url: './imgs/png/banner 3.png'
    }
    ]
    let i = 0;
    const dot1 = document.querySelector('.main__slider_dots_1')
    const dot2 = document.querySelector('.main__slider_dots_2')
    const dot3 = document.querySelector('.main__slider_dots_3')

    function dotClick1() {
        i = 0
        document.querySelector('.main__slider_img').src = images[i].url;
        dot1.style.background = '#9E98DC'
        dot2.style.background ='#EFEEF6'
        dot3.style.background ='#EFEEF6'
    }

    function dotClick2() {
        i = 1
        document.querySelector('.main__slider_img').src = images[i].url;
        dot2.style.background ='#9E98DC'
        dot1.style.background ='#EFEEF6'
        dot3.style.background ='#EFEEF6'
    }

    function dotClick3() {
        i = 2
        document.querySelector('.main__slider_img').src = images[i].url;
        dot3.style.background ='#9E98DC'
        dot1.style.background ='#EFEEF6'
        dot2.style.background ='#EFEEF6'
    }

    dot1.addEventListener('click', dotClick1)
    dot2.addEventListener('click', dotClick2)
    dot3.addEventListener('click', dotClick3)

    function switchImages() {
        if (i === 0) {
            dotClick2()
        }
        else if (i === 1) {
            dotClick3()
        }
        else if (i === 2) {
            dotClick1()
        }

    }
    setInterval(switchImages,5000 )
}
//initSlider()
export {initSlider}