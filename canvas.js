//tv noise//
(function () {
  'use strict'

  var canvas = document.querySelector('#tv'),
    context = canvas.getContext('gl') || canvas.getContext('2d'),
    scaleFactor = 2.5, // Noise size
    samples = [],
    sampleIndex = 0,
    scanOffsetY = 0,
    scanSize = 0,
    FPS = 50,
    scanSpeed = FPS * 15, // 15 seconds from top to bottom
    SAMPLE_COUNT = 10

  window.onresize = function () {
    canvas.width = canvas.offsetWidth / scaleFactor
    canvas.height = canvas.width / (canvas.offsetWidth / canvas.offsetHeight)
    scanSize = canvas.offsetHeight / scaleFactor / 3

    samples = []
    for (var i = 0; i < SAMPLE_COUNT; i++)
      samples.push(generateRandomSample(context, canvas.width, canvas.height))
  }

  function interpolate(x, x0, y0, x1, y1) {
    return y0 + (y1 - y0) * ((x - x0) / (x1 - x0))
  }

  function generateRandomSample(context, w, h) {
    var intensity = []
    var random = 0
    var factor = h / 50
    var trans = 1 - Math.random() * 0.05

    var intensityCurve = []
    for (var i = 0; i < Math.floor(h / factor) + factor; i++)
      intensityCurve.push(Math.floor(Math.random() * 15))

    for (var i = 0; i < h; i++) {
      var value = interpolate(
        i / factor,
        Math.floor(i / factor),
        intensityCurve[Math.floor(i / factor)],
        Math.floor(i / factor) + 1,
        intensityCurve[Math.floor(i / factor) + 1]
      )
      intensity.push(value)
    }

    var imageData = context.createImageData(w, h)
    for (var i = 0; i < w * h; i++) {
      var k = i * 4
      var color = Math.floor(36 * Math.random())
      // Optional: add an intensity curve to try to simulate scan lines
      color += intensity[Math.floor(i / w)]
      imageData.data[k] = imageData.data[k + 1] = imageData.data[k + 2] = color
      imageData.data[k + 3] = Math.round(255 * trans)
    }
    return imageData
  }

  function render() {
    context.putImageData(samples[Math.floor(sampleIndex)], 0, 0)

    sampleIndex += 20 / FPS // 1/FPS == 1 second
    if (sampleIndex >= samples.length) sampleIndex = 0

    var grd = context.createLinearGradient(
      0,
      scanOffsetY,
      0,
      scanSize + scanOffsetY
    )

    grd.addColorStop(0, 'rgba(255,255,255,0)')
    grd.addColorStop(0.1, 'rgba(255,255,255,0)')
    grd.addColorStop(0.2, 'rgba(255,255,255,0.2)')
    grd.addColorStop(0.3, 'rgba(255,255,255,0.0)')
    grd.addColorStop(0.45, 'rgba(255,255,255,0.1)')
    grd.addColorStop(0.5, 'rgba(255,255,255,1.0)')
    grd.addColorStop(0.55, 'rgba(255,255,255,0.55)')
    grd.addColorStop(0.6, 'rgba(255,255,255,0.25)')
    //grd.addColorStop(0.8, 'rgba(255,255,255,0.15)');
    grd.addColorStop(1, 'rgba(255,255,255,0)')

    context.fillStyle = grd
    context.fillRect(0, scanOffsetY, canvas.width, scanSize + scanOffsetY)
    context.globalCompositeOperation = 'lighter'

    scanOffsetY += canvas.height / scanSpeed
    if (scanOffsetY > canvas.height) scanOffsetY = -(scanSize / 2)

    window.requestAnimationFrame(render)
  }
  window.onresize()
  window.requestAnimationFrame(render)
})()







//graph
var $container = jQuery('#graph')
var barcolors = [
    '#008B8B',
    '#66CCCC',
    '#61B329',
    '#BCED91',
    '#9932CC',
    '#7D26CD',
  ],
  highlightcolor = '#FFF68F',
  lengendlabels = [
    'P.management',
    'Adaptability',
    'Creativity',
    'Communication',
    ' Critical thinking',
    'Analytics',
  ],
  data = [15, 10, 20, 15, 20, 15]

var pheight = parseInt($container.css('height')),
  pwidth = parseInt($container.css('width')),
  radius = pwidth < pheight ? pwidth / 3 : pheight / 3
bgcolor = jQuery('body').css('background-color')

var paper = new Raphael($container[0], pwidth, pheight)

// draw the piechart
var pie = paper.piechart(pwidth / 2, pheight / 2, radius, data, {
  legend: lengendlabels,
  legendpos: 'east',
  legendcolor: '#eaeaea',
  stroke: bgcolor,
  strokewidth: 1,
  colors: barcolors,
})

// assign the hover in/out functions
pie.hover(
  function () {
    this.sector.stop()
    this.sector.scale(1.1, 1.1, this.cx, this.cy)
    this.sector.animate({ stroke: highlightcolor }, 400)
    this.sector.animate({ 'stroke-width': 1 }, 500, 'bounce')

    if (this.label) {
      this.label[0].stop()
      this.label[0].attr({ r: 8.5 })
      this.label[1].attr({ 'font-weight': 800 })
      center_label.attr('text', this.value.value + '%')
      center_label.animate({ opacity: 1.0 }, 200)
    }
  },
  function () {
    this.sector.animate(
      { transform: 's1 1 ' + this.cx + ' ' + this.cy },
      500,
      'bounce'
    )
    this.sector.animate({ stroke: bgcolor }, 400)
    if (this.label) {
      this.label[0].animate({ r: 5 }, 500, 'bounce')
      this.label[1].attr({ 'font-weight': 400 })
      //center_label.attr('text','');
      center_label.animate({ opacity: 0.0 }, 500)
    }
  }
)

// blank circle in center to create donut hole effect
paper
  .circle(pwidth / 2, pheight / 2, radius * 0.6)
  .attr({ fill: bgcolor, stroke: bgcolor })

var center_label = paper
  .text(pwidth / 2, pheight / 2, '')
  .attr({
    fill: '#eaeaea',
    'font-size': '18',
    'font-weight': 800,
    opacity: 0.0,
  })




  
  //testimonia//

'use strict'
var testim = document.getElementById('testim'),
  testimDots = Array.prototype.slice.call(
    document.getElementById('testim-dots').children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById('testim-content').children
  ),
  testimLeftArrow = document.getElementById('left-arrow'),
  testimRightArrow = document.getElementById('right-arrow'),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove('active')
      testimContent[k].classList.remove('inactive')
      testimDots[k].classList.remove('active')
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add('inactive')
    }
    testimContent[slide].classList.add('active')
    testimDots[slide].classList.add('active')

    currentActive = currentSlide

    clearTimeout(testimTimer)
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1))
    }, testimSpeed)
  }

  testimLeftArrow.addEventListener('click', function () {
    playSlide((currentSlide -= 1))
  })

  testimRightArrow.addEventListener('click', function () {
    playSlide((currentSlide += 1))
  })

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener('click', function () {
      playSlide((currentSlide = testimDots.indexOf(this)))
    })
  }

  playSlide(currentSlide)

  // keyboard shortcuts
  document.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click()
        break

      case 39:
        testimRightArrow.click()
        break

      case 39:
        testimRightArrow.click()
        break

      default:
        break
    }
  })

  testim.addEventListener('touchstart', function (e) {
    touchStartPos = e.changedTouches[0].clientX
  })

  testim.addEventListener('touchend', function (e) {
    touchEndPos = e.changedTouches[0].clientX

    touchPosDiff = touchStartPos - touchEndPos

    console.log(touchPosDiff)
    console.log(touchStartPos)
    console.log(touchEndPos)

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click()
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click()
    } else {
      return
    }
  })
}

//signin//


function signatureAni() {
  var path = $('.signature svg path')
  var signatureAniTimeline = new TimelineMax({ repeat: -1 })
  signatureAniTimeline
    .to($('.dot'), 0, { scale: 0, y: '-200%', x: '-200%' })
    .staggerTo(
      $('.dot'),
      0.75,
      {
        delay: 1,
        scale: 1,
        opacity: 1,
        y: '0%',
        x: '0%',
        ease: Back.easeOut.config(10),
      },
      0.15
    )
    .to($('.dot1'), 0.5, { delay: 1, opacity: 0, scale: 10 })
    .to(
      path,
      0.75,
      { css: { strokeDashoffset: 3200 }, ease: Power0.easeNone },
      '-=0.5'
    )
    .to(path, 0, { css: { stroke: '#fffe88' } })
    .to($('.dot2'), 0.5, { opacity: 0, scale: 10 })
    .to(
      path,
      0.75,
      { css: { strokeDashoffset: 2400 }, ease: Power0.easeNone },
      '-=0.5'
    )
    .to(path, 0, { css: { stroke: '#99ff88' } })
    .to($('.dot3'), 0.5, { opacity: 0, scale: 10 })
    .to(
      path,
      0.75,
      { css: { strokeDashoffset: 1600 }, ease: Power0.easeNone },
      '-=0.5'
    )
    .to(path, 0, { css: { stroke: '#88f0ff' } })
    .to($('.dot4'), 0.5, { opacity: 0, scale: 10 })
    .to(
      path,
      0.75,
      { css: { strokeDashoffset: 800 }, ease: Power0.easeNone },
      '-=0.5'
    )
    .to(path, 0, { css: { stroke: '#c688ff' } })
    .to($('.dot5'), 0.5, { opacity: 0, scale: 10 })
    .to(
      path,
      0.75,
      { css: { strokeDashoffset: 0 }, ease: Power0.easeNone },
      '-=0.5'
    )
    .to(path, 2, {
      delay: 1.5,
      css: { strokeDashoffset: 4000, stroke: '#ff8888' },
      ease: Power0.easeNone,
    })
}
signatureAni()



