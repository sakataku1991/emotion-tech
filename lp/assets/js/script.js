// ハンバーガーメニュー
$(function() {
	var state = false;
	$('#js_GNav__buttonHamburger').on('click', function () {
		$(this).toggleClass('is-open');
		$(this).toggleClass('is-close');
		if (state == false) {
			$('body').css('overflow', 'hidden');
			state = true;
		} else {
			$('body').css('overflow', 'auto');
			state = false;
		}
	});
});

$(function() {
	$(document).on('click',function(e) {
		if(!$(e.target).closest('#js_GNav__buttonHamburger').length) {
			$('#js_GNav__buttonHamburger').removeClass('is-open').addClass('is-close');
			$('body').css('overflow', 'auto');
		} else {
		}
	});
});

// スライダー「POINTS（選ばれる3つのポイント）」
$(function() {
	$('.slider').slick({
		// 要素を中央に寄せる
		centerMode: true,
		// スライダーの下のページャー
		dots: true,
		// スライダーのループ
		infinite: false,
		// 一度にスクロールするスライドの枚数
		slidesToScroll: 1,
		// 一度に表示するスライドの枚数
		slidesToShow: 1,
		// スクロールの速度
		speed: 264,
		// スライダーアイテムの横幅をcssで制御
		// variableWidth: true,
	});
});

// コピーライト
$(function() {
	var todayData = new Date();
	var thisYear = todayData.getFullYear();
	$('#js_Footer__copyrightText').text('©' + ' ' + thisYear + ' EmotionTech, Inc.');
});
