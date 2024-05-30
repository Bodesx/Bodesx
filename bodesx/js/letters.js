//new letter

var scrambleList = [
  "My expertise lies in designing, developing, and maintaining high-performance systems that meet the evolving needs of businesses. I am adept at problem-solving and thrive on tackling complex technical challenges to deliver efficient and scalable solutions.."
];

function randomChar() {
  return String.fromCharCode(Math.floor(((Math.random() * 1000) % 73) + 49));
};

var el = document.getElementById('scramble');

el.innerText = scrambleList[0];

var orig = el.innerText;
var origChars = orig.split('');

function scramble(el, n) {
  el.innerText = origChars.slice(0, n).join('');
  for(var i = n; i < origChars.length; i++) {
		if (origChars[i] != ' ') {
      el.innerHTML += '<span class="scrambled">' + randomChar() + '</span>';
    } else {
      el.innerHTML += '<span class="scrambled"> </span>';
    }
  }
  setTimeout(function() {
    n++;
    scramble(el, n);
  }, 60);
};

scramble(el, 0);

















const spans = document.querySelectorAll('.word span');//for each letter that will move

spans.forEach((span,idx)=>{
  span.addEventListener('mouseover', (e)=>{
     e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
  // Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
  
});



/*canvas*/


