(function($) {
    $.fn.slider = function(slides, slideShowSpeed, animationSpeed) {
        var that = this,
            slidesCount = slides.length,
            uploadedSlidesCount = 0,
            currentSlideNumber,
            timeout,
            slideShowPaused = false,
            $slides, $bullets, $details

        _.each(slides, function(slide) {
            var img = new Image()
            img.onload = function() {
                uploadedSlidesCount++
                if (uploadedSlidesCount >= slidesCount)
                    init()
            }
            img.src = slide.src
        })

        function init() {
            slideShowPaused = that.is(':hover')
            that.mouseenter(function() {
                slideShowPaused = true
                clearSlideShowTimeout()
            }).mouseleave(function() {
                slideShowPaused = false
                slideShow()
            })

            var $slidesContainer = that.find('.slides')
            _.each(slides, function(slide) {
                $slidesContainer.append('<img src="' + slide.src + '" alt="' + slide.alt + '">')
            })
            $slides = $slidesContainer.children()

            var $bulletsContainer = that.find('.bullets')
            _.times(slidesCount, function() {
                $bulletsContainer.append('<a class="bullet" href="#"></a>')
            })
            $bullets = $bulletsContainer.children()
            $bullets.click(function(e) {
                e.preventDefault()
                var index = $bullets.index(this)
                if (index != currentSlideNumber)
                    setSlide($bullets.index(this))
            })

            $details = that.find('.details')

            setSlide(0)

            that.find('.left-arrow').click(function(e) {
                e.preventDefault()
                nextSlide(-1)
            })
            that.find('.right-arrow').click(function(e) {
                e.preventDefault()
                nextSlide(1)
            })
        }

        function clearSlideShowTimeout() {
            if (timeout)
                clearTimeout(timeout)
        }

        function slideShow() {
            clearSlideShowTimeout()
            timeout = setTimeout(function() {
                nextSlide(1)
            }, slideShowSpeed)
        }

        function setSlide(slideNumber) {
            if (!slideShowPaused)
                slideShow()
            $slides.eq(currentSlideNumber).fadeOut(animationSpeed).css({zIndex: 0})
            currentSlideNumber = slideNumber
            $slides.eq(currentSlideNumber).css('zIndex', 51).fadeIn(animationSpeed).css('zIndex', 50)

            $bullets.removeClass('current')
            $bullets.eq(currentSlideNumber).addClass('current')

            $details.attr('href', slides[currentSlideNumber].url)
        }

        function nextSlide(direction) {
            setSlide((currentSlideNumber + direction + slidesCount) % slidesCount)
        }
    }
}(jQuery))