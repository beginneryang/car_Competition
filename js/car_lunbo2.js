
var img_w=$('#ban_2_imgs li img').width();

var li_len=$('#ban_2_imgs li').length;
$('#ban_2_imgs').width(img_w*(li_len+1)).css('left',-img_w*(li_len-4)+'px');

function mov2(dir){
	$('#ban_2_imgs').animate({
		left: dir+'='+img_w+'px'},
		500, function() {
		if($('#ban_2_imgs').css('left')=='-'+img_w*(li_len-2)+'px'){
			$('#ban_2_imgs').css('left',-img_w*(li_len-4)+'px');
		}
		if($('#ban_2_imgs').css('left')=='-'+img_w+'px'){
			$('#ban_2_imgs').css('left','-'+img_w*(li_len-2)+'px');
		}
	});
}

$('#pert').click(function() {
	mov2('+');
});
$('#next').click(function() {
	mov2('-');
});

var t='';

$('.ban_2').hover(function() {
	clearInterval(t);
}, function() {
	t=setInterval("$('#next').click()",5000)
});

$('.ban_2').mouseout();















