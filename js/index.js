$(document).ready(function () {
	$('.main__slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: true,
	});
	$('.main__comic--content').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

const sliderItems = document.querySelectorAll('.main__slider--item');
sliderItems.forEach(function (item, i) {
	item.style.background = `url("../asset/slider${
		i + 1
	}.jpg") no-repeat center center / cover`;
	item.innerHTML = `
	<div class="main__slider--item__text">
		<img src="./asset/Welcome.png" alt="">
	</div>
	<button class = "main__slider--item__butt">Buy it now!!!</button>
	`;
});

setTimeout(function () {
	const sliderButts = $('.slick-dots>li>button');
	console.log(sliderButts);
	sliderButts.each(function (i, item) {
		item.style.background = `url("../asset/slider${
			i + 1
		}.jpg") no-repeat center center / cover`;
		item.innerText = '';
	});
}, 100);
