var li_w1=$('.ban_3 ul li').width();
console.log(li_w1);
var img3_len=$('.ban_3 ul li').length;

var num=0;
$('.ban_3 p span').eq(num).addClass('p_sp_act');


function mov3(){
	 $('.ban_3 ul').animate({
	 	left: -(num+1)*li_w1+'px'},
	 	500, function() {
	 	if($('.ban_3 ul').css('left')=='-'+(img3_len-1)*li_w1+'px'){
         $('.ban_3 ul').css('left','-'+li_w1+'px');
         
    }
	 if($('.ban_3 ul').css('left')=='0px'){
	 	   $('.ban_3 ul').css('left','-'+li_w1*(img3_len-2)+'px');
	 	   
		}
	});
	if(num==(img3_len-2)){
			num=0;
		}
		if(num==-1){
			num=(img3_len-3);
		}
}

function movBtn(){
		$('.ban_3 p span').eq(num).addClass('p_sp_act').siblings().removeClass('p_sp_act');
}

$('#pert2').click(function() {
	  num--;
	  mov3();
	  movBtn() 
	});
$('#next2').click(function() {
	  num++;
	  mov3(); 
	  movBtn();
	});
$('.ban_3 p span').click(function() {
	num=$(this).index();
  movBtn();
	mov3();
});
var t3='';
$('.ban_3_ul').hover(function() {
		clearInterval(t3);
}, function() {
		t3=setInterval("$('#next2').click()",8000);
});
$('.ban_3_ul').mouseout();