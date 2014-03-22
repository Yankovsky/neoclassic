$.fn.slider = (slides, slideShowSpeed, animationSpeed) ->
  that = this
  slidesCount = slides.length
  uploadedSlidesCount = 0
  currentSlideNumber = undefined
  timeout = undefined
  slideShowPaused = false
  $slides = undefined
  $bullets = undefined
  $details = undefined
  animationInProgress = false

  init = ->
    slideShowPaused = that.is(":hover")
    that.mouseenter(->
      slideShowPaused = true
      clearSlideShowTimeout()
      return
    ).mouseleave ->
      slideShowPaused = false
      slideShow()
      return

    $slidesContainer = that.find(".slides")
    _.each slides, (slide) ->
      $slidesContainer.append "<img src=\"" + slide.src + "\" alt=\"" + slide.alt + "\">"
      return

    $slides = $slidesContainer.children()
    $bulletsContainer = that.find(".bullets")
    _.times slidesCount, ->
      $bulletsContainer.append "<a class=\"bullet\" href=\"#\"></a>"
      return

    $bullets = $bulletsContainer.children()
    $bullets.click (e) ->
      e.preventDefault()
      index = $bullets.index(this)
      setSlide $bullets.index(this)  if index isnt currentSlideNumber and not animationInProgress
      return

    $details = that.find(".details")
    setSlide 0
    that.find(".left-arrow").click (e) ->
      e.preventDefault()
      nextSlide -1  unless animationInProgress
      return

    that.find(".right-arrow").click (e) ->
      e.preventDefault()
      nextSlide 1  unless animationInProgress
      return

    return
  clearSlideShowTimeout = ->
    clearTimeout timeout  if timeout
    return
  slideShow = ->
    clearSlideShowTimeout()
    timeout = setTimeout(->
      nextSlide 1
      return
    , slideShowSpeed)
    return
  setSlide = (slideNumber) ->
    slideShow()  unless slideShowPaused
    animationInProgress = true
    $slides.eq(currentSlideNumber).fadeOut(animationSpeed).css zIndex: 0
    currentSlideNumber = slideNumber
    $bullets.removeClass "current"
    $bullets.eq(currentSlideNumber).addClass "current"
    $details.attr "href", slides[currentSlideNumber].url
    $slides.eq(currentSlideNumber).css("zIndex", 51).fadeIn(animationSpeed,->
      animationInProgress = false
      return
    ).css "zIndex", 50
    return

  nextSlide = (direction) ->
    setSlide (currentSlideNumber + direction + slidesCount) % slidesCount
    return

  _.each slides, (slide) ->
    img = new Image()
    img.onload = ->
      uploadedSlidesCount++
      init()  if uploadedSlidesCount >= slidesCount
      return
    img.src = slide.src
    return
  return