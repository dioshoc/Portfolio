var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slider__items__item");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length){
		slideIndex = 1
	}
	if(n < 1 ){ 
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("slider__active");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " slider__active";
};




let tab = function() {
	let tabNav = document.querySelectorAll('.tabs-nav__item'),
		tabContent = document.querySelectorAll('.tab'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach( item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}

	function selectTabContent(tabName){
		tabContent.forEach(item => {
			item.classList.contains(tabName)? item.classList.add('is-active'):item.classList.remove('is-active');
		})
	}
};

tab();

		let popupToggle = document.querySelector('.open-nav'),
			popup = document.getElementById('mainNav'),
			popupclose = document.querySelector('.close');



			popupToggle.onclick = function() {

				popupToggle.preventDefault
				popup.style.display = 'block';
			};

			popupclose.onclick = function() {
				popup.style.display = 'none';
			}
			window.onclick = function(e) {
				if(e.target === popup) {
					popup.style.display = 'none';
				}
			}