//feedback

let popup = document.querySelector('.feedback__inner');
let	popupToogele = document.querySelector('.header-communication_btn');
let	popupClose = document.querySelector('.feedback-close');

	popupToogele.onclick = function(){
		popup.style.display = 'block';
	};
	popupClose.onclick = function(){
		popup.style.display = 'none';
	};
	window.onclick = function(e) {
		if(e.target == popup) {
			popup.style.display = 'none';
		}
	};

let inputs = document.querySelectorAll('[name="required"]');
let form_btn = document.querySelector('.feedback-button');

	form_btn.onclick = function(){
		for (var i = 0; i < inputs.length; i++) {
			if(inputs[i].value === '') {
				inputs[i].style.borderColor = '#dc7f7f'
				inputs[i].style.boxShadow = "inset 1px 1px 15px 1px #dc7f7f"
				inputs[i].placeholder = 'Поле обязательно для заполнения';
			}  else {
				inputs[i].style.borderColor = '#39E639'
				inputs[i].style.boxShadow = "inset 1px 1px 10px 1px #39E639";
			}
		}
	};


//slider
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

prev.onclick = function() {
	plusSlides(-1);
}

next.onclick = function() {
	plusSlides(1);
}

let time = setInterval(() => plusSlides(1), 4000);

function showSlides(n){
	var r;
	var slides = document.querySelectorAll('.slide');

	if (n < 1){
		slideIndex = slides.length
	}
	if (n > slides.length) {
		slideIndex = 1
	};

	for ( var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	};

	slides[slideIndex - 1].style.display = 'block';
};


// SideBar
// let tab = function() {
// 	let tabNav = document.querySelectorAll('.content-sidebar__item-title'),
// 		tabContent = document.querySelectorAll('.tab'),
// 		tabName;


// 	tabNav.forEach(item => {
// 		item.addEventListener('click', selectTabNav)
// 	});

// 	function selectTabNav() {
// 		tabNav.forEach( item => {
// 			item.classList.remove('is-active');
// 		});
// 		this.classList.add('is-active');
// 		tabName = this.getAttribute('data-tab-name');
// 		selectTabContent(tabName);
// 	}

// 	function selectTabContent(tabName){
// 		tabContent.forEach(item => {
// 			item.classList.contains(tabName)? item.classList.add('is-active'):item.classList.remove('is-active');
// 		})
// 	}
// 	tabContent.onclick = function() {
// 		tabContent.classList.remove('is-active');
// 	}
// };

// tab();

let side_toggle = document.querySelectorAll('.content-sidebar__item-title'),
	side_saved = document.querySelectorAll('.saved');

	for (var i = 0; i < side_toggle.length; i++) {
		side_toggle[i].addEventListener('click', function(){
			this.nextElementSibling.classList.toggle('is-active');
		})
	}

// menu

let menu_btn = document.querySelector('.menu-btn');
let	menu_nav = document.querySelector('.menu-items');
let	menu_span = document.querySelector('.menu-btn_span');

	menu_btn.onclick = function() {
		menu_span.classList.toggle('menu-btn_active');
		menu_nav.classList.toggle('menu-active');
	}

