$(document).ready(function(){
	$('.offerList').hide();

});

function loadOffers(){
	$('.loaderOffer').slideUp(1000);
	setTimeout(function(){$('.offerList').slideDown(1000)}, 1000);
}