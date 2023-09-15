
//script for canvas//
 var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var W = window.innerWidth;
    var H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    var fontSize = 26;
    var columns = Math.floor(W / fontSize);
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops.push(0);
    }
    var str = "JavaScript Hacking Effect";
    function draw() {
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        context.fontSize = "700" + fontSize + "px";
        context.fillStyle = "#ADD8E6";
        for (var i = 0; i < columns; i++) {
            var index = Math.floor(Math.random() * str.length);
            var x = i * fontSize;
            var y = drops[i] * fontSize;
            context.fillText(str[index], x, y);
            if (y >= canvas.height && Math.random() > 0.99) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    draw();
    setInterval(draw, 35);





    //script for contact form//

   var vue = new Vue({
  el: '#app',
  data: {
    formOpen: false,
   name: {
      name: '',
      email: '',
     mobileNumber : '',
      emailSubject: '',
      is_featured: false
    }
  },
  methods: {
    resetForm: function () {
      this.productData = {
        title: '',
        rating: '',
        price: '',
        list_price: '',
        is_featured: false
      }
    },
    cancel: function() {
      this.formOpen = false;
      this.resetForm();
    }
  }
})


/*toggle icon*/
let menuIcon=document.querySelector('#menu-icon')
let navbar=document.querySelector('.navbar')
menuIcon.onclick=()=>{
menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active')
}


/*===Scroll section active navbar links=== */

let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
  sections.forEach(sec=>{
    let top=window.scrollY
    let offset=sec.offsetTop-150
    let height=sec.offsetHeight
    let id=sec.getAttribute('id')
    
if(top>=offset && top<offset+height){
  navLinks.forEach(links=>{
    links.classList.remove('active')
    document.querySelectorAll('header nav a [href*='+id+']').classlist.add('active')
  })
}

  })


/*sticky navbar*/

let header= document.querySelector('header')
header.classList.toggle('sticky', window.scrollY>100)

/*remove navbar icon when click*/

menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

}

/*scroll reveal*/
ScrollReveal({
//reset:true,
distant:'60px',
duration:2000,
delay:250

})

ScrollReveal().reveal('.home-content, .heading',{origin:'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'})
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'})
ScrollReveal().reveal('.skills, heading',{origin:'bottom'})




/*multiple text writing from type js */
const typed =new Typed('.multiple-text', {
  strings:['As a Bioinformatics specialist i use computational tools to analyze and interpret biological data, i am able to use my skills to study large amounts of biological and genetic data to identify patterns and make predictions about how these patterns may affect biological processes.i can use statistical and mathematical techniques to analyze large datasets to identify trends, patterns, and insights that can be used to inform business decisions. manipulate and analyze data and visualize their findings using charts, graphs, and other data visualizations, My skills in programming languages such as HTML, CSS, JavaScript, and php, as well as experience working with a range of web development tools and platforms able to create websites that are optimized, accessible, and responsive across different devices. My strong technical aptitude and a passion for solving technical issues, with a deep understanding of computer systems, networks, and system-security, i am able to troubleshoot problems quickly and efficiently.', ''],
  typeSpeed:50,
  backSpeed:1,
  backDelay:1000,
  loop:true
})



   //circle//
    const circles = document.querySelectorAll('.circle')
    circles.forEach(elem=>{
      var dots = elem.getAttribute("data-dots")
      var marked = elem.getAttribute("data-percent")
      var percent = Math.floor(dots*marked/100)
      var points = ""
      var rotate = 360 / dots

      for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
      }
elem.innerHTML = points;
const pointsMarked = elem.querySelectorAll('.points')
for(let i = 0; i<percent; i++){
  pointsMarked[i].classList.add('marked');
}
    })
















// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'FullStack webDev',
  'Biotechnology',
  'Bio-informatics',
  'Computer-science',
  'web-development',
  'I.T technician',
  'Graphic designer',
  'Data-analytics',
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()




/*water effect*/
try {

  $(".about").ripples({
    resolution: 1080,
    perturbance: 0.08,
    interactive: true
  });
} catch (e) {
  $(".error")
    .show()
    .text(e);
}

setInterval(function() {
  var $el = $(".about");
  var x = Math.random() * $el.outerWidth();
  var y = Math.random() * $el.outerHeight();
  var dropRadius = 30;
  var strength = 0.08 + Math.random() * 0.08;

  $el.ripples("drop", x, y, dropRadius, strength);
}, 4000);


var parallax=document.getElementById('parallax')
var parallaxInstance=new Parallax(parallax)


(function($){
        new WOW().init();
    })(jQuery);




