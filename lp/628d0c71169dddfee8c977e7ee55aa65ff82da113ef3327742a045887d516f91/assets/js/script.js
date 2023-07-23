// ハンバーガーメニュー
$(function() {
  var state = false;
  $('#js_GNav__buttonHamburger').on('click', function () {
    $(this).toggleClass('is-open');
    $(this).toggleClass('is-close');
  });
});

$(function() {
  $(document).on('click',function(e) {
    if(!$(e.target).closest('#js_GNav__buttonHamburger').length) {
      $('#js_GNav__buttonHamburger').removeClass('is-open').addClass('is-close');
    } else {
    }
  });
});

// スライダー「CASE（NPSを導入して事業成長をした事例）」
$(function() {
  w = $(window).width();
  if (w <= 767) {
    // スマホ向け（767px以下のとき）
    $('.sliderCase').slick({
      // 要素を中央に寄せる
      centerMode: true,
      // スライダーの下のページャー
      dots: true,
      // スライダーのループ
      infinite: false,
      // 「＞」ボタン
      nextArrow: false,
      // 「＜」ボタン
      prevArrow: false,
      // 一度にスクロールするスライドの枚数
      slidesToScroll: 1,
      // 一度に表示するスライドの枚数
      slidesToShow: 1,
      // スクロールの速度
      speed: 264,
      // スライダーアイテムの横幅をcssで制御
      variableWidth: true,
    });
  } else {
    // PC向け
    $('.sliderCase').slick('unslick');
  }
});

// スライダー「POINTS（選ばれる3つのポイント）」
$(function() {
  w = $(window).width();
  if (w <= 767) {
    // スマホ向け（767px以下のとき）
    $('.sliderPoint').slick('unslick');
  } else {
    // PC向け
    $('.sliderPoint').slick({
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
      variableWidth: true,
    });
  }
});

// 「UP」ボタン
$(function() {
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    if (scrollTop > docHeight / 2){
      $('.Footer__buttonUp').addClass('is-active');
    } else {
      $('.Footer__buttonUp').removeClass('is-active');
    }
  });
});

// コピーライト
$(function() {
  var todayData = new Date();
  var thisYear = todayData.getFullYear();
  $('#js_Footer__copyrightText').text('©' + ' ' + thisYear + ' EmotionTech, Inc.');
});
