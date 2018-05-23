
var img_w1=$('.ban_1 ul li img').width();
var index=0;
var sp1_len=$('.ban_1_bt p span').length;
$('.ban_1_bt p').children('span').eq(index).addClass('p_sp_act');

function move1(){
	index++;
	$('.ban_1 ul').animate({
		left: -(index+1)*img_w1+'px'},
		500, function() {
		
	  if($('.ban_1 ul').css('left')>='-'+(sp1_len+1)*img_w1+'px'){
	  	$('.ban_1 ul').css('left','-'+img_w1+'px');
	  	index=0;
	  }
	 movBtns();
	});
}
function movBtns(){
		 $('.ban_1_bt p').children('span').eq(index).addClass('p_sp_act').siblings().removeClass('p_sp_act');
}

$('.ban_1_bt p').children('span').click(function() {
	 index=$(this).index();
	 $('.ban_1 ul').animate({left: -(index+1)*img_w1+'px'}, 500);
	 movBtns();
});

var t1='';
$('.ban_1').hover(function() {
	clearInterval(t1);
}, function() {
		t1=setInterval(move1,3000);
});

$('.ban_1').mouseout();
