// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require summernote/summernote-bs4.min
//= require summernote-init
//= require activestorage
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(function() {
	var headNav = $(".header2");
	//scrollだけだと読み込み時困るのでloadも追加
	$(window).on('load scroll', function () {
		//現在の位置が500px以上かつ、クラスfixedが付与されていない時
		if($(this).scrollTop() > 200 && headNav.hasClass('fixed') == false) {
		    headNav.css({"display": 'inline-block'});
			//headerの高さ分上に設定
			headNav.css({"top": '-100px'});
			//クラスfixedを付与
			headNav.addClass('fixed');
			//位置を0に設定し、アニメーションのスピードを指定
			headNav.animate({"top": 10},600);
			headNav.css({"right": '10px'});
		}
		//現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
		else if($(this).scrollTop() < 300 && headNav.hasClass('fixed') == true){
		    headNav.css({"display": 'none'});
			headNav.removeClass('fixed');
		}
	});
});