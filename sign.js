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



