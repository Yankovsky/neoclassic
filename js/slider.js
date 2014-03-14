var slides = [
        {src: 'images/slides/slide1.png', url: '/about'},
        {src: 'images/slides/slide2.png', url: '/contacts'}
    ],
    slidesCount = slides.length,
    uploadedSlidesCount = 0,
    currentSlideNumber = 0

var delay = 2000

var timeout
var $slider, $slides, $bullets, $details
var mouseInsideSlider = false

_.each(slides, function(slide) {
    var img = new Image()
    img.onload = function() {
        uploadedSlidesCount++
        if (uploadedSlidesCount >= slidesCount) {
            startSlider()
        }
    }
    img.src = slide.src
})

function startSlider() {
    $slider = $('#slider')

    var $slidesContainer = $slider.find('.slides');
    _.each(slides, function(slide) {
        $slidesContainer.append('<img src="' + slide.src + '">')
    })

    var $bulletsContainer = $slider.find('.bullets');
    _.times(slidesCount, function() {
        $bulletsContainer.append('<a class="bullet" href="#"></a>')
    })

    $slides = $slidesContainer.children()
    $bullets = $bulletsContainer.children()
    $details = $slider.find('.details')

    changeSlide()


    $slider.mouseenter(function() {
        mouseInsideSlider = true
    }).mouseleave(function() {
        mouseInsideSlider = false
    })
    $('.left-arrow').click(function() {
        clearTimeout(timeout)
        extracted(-1)
    })
    $('.right-arrow').click(function() {
        clearTimeout(timeout)
        extracted(1)
    })
}

function changeSlide() {
    $slides.removeClass('current')
    $slides.eq(currentSlideNumber).addClass('current')
    $bullets.removeClass('current')
    $bullets.eq(currentSlideNumber).addClass('current')
    $details.attr('href', slides[currentSlideNumber].url)

    timeout = setTimeout(function() {
        extracted(1)
    }, delay)
}

function extracted(direction) {
    currentSlideNumber = (currentSlideNumber + direction + slidesCount) % slidesCount
    changeSlide()
}