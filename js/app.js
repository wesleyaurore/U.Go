		
	// 
	// nav
	// 

	var nav = document.querySelector('nav');

	window.addEventListener('scroll', function() {
		if (window.scrollY > 245 ){
			console.log('yup')
			nav.classList.add('active')
		} else {
			nav.classList.remove('active')
		}
	});
		

	// 
	// langue
	// 

	var langue	= document.querySelector('header .langue')
	var anglais = document.querySelector('header .langen')

	langue.addEventListener('click', function() {
		if (anglais.style.display == '') {
			anglais.style.display = 'block';
		} else {
			anglais.style.display = '';
		}
	});

	// 
	// formulaire
	// 
	var affiner = document.querySelector('aside button')
	var form 	= document.querySelector('aside .deroulant')
	var fleche	= document.querySelector('aside button img')

	affiner.addEventListener('click', function() {
		if (form.style.height == '') {
			form.style.height = 'auto';
			fleche.style.transform = 'rotate(540deg)';
		} else {
			form.style.height = '';
			fleche.style.transform = '';
		}
	});

	// 
	// carousel
	// 
	var large =	document.querySelectorAll('ul.max-img li');
	var petit =	document.querySelectorAll('ul.min-img li');

	for( let i = 0; i < petit.length; i++){
		petit[i].addEventListener('click', function() {
			for( let j = 0; j < large.length; j++){
				petit[j].classList.remove('visible');
				large[j].classList.remove('visible');
			}

			large[i].classList.add('visible');
			petit[i].classList.add('visible');
		});

	}

	//
	// Logo link
	//

	var logoLink = document.querySelector('.logo-link');
	var backHome = document.querySelector('.back-home');

	logoLink.style.width = '40px';
	window.setTimeout("logoMin()", 3000);
	window.setTimeout("spanner()", 2000);
	
	function spanner() {
		backHome.style.width = "0";
	}	

	function logoMin() {
		logoLink.style.width = '';	
	}