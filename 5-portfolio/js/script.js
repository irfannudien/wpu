// event pada saat link di klik
// (e) didalam function bertugas supaya href tidak berjalan saat di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// mencari nilai jarak
	// console.log(elemenTujuan.offset().top);


	// menggunakan scrollTop -- HTML harus ditulis sebelum body
	// $('html, body').scrollTop(elemenTujuan.offset().top);

	// -50 agar scroll tidak terlalu atas jadi about port contact tidak ngumpet
	// 1200 untuk kecepatan scroll (satuan ms)

	// swing, linear untuk efek scroll

	$('html, body').animate({
		scrollTop:elemenTujuan.offset().top - 50
	}, 1100, 'easeInOutExpo');

	e.preventDefault();
});


// jqueryeasing.com untuk efek transisi scroll


// parallax
// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
})


$(window).scroll(function() {
	var wScroll = $(this).scrollTop();


	// jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});



	// portfolio

	if( wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));


		});
			 


		
	}
});