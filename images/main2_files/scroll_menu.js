var itdcScroll = {
    ulPadding : 30,
    liHeight : 82,
    init : function()
    {
        itdcScroll.div = $('div.itdcScroll');
        itdcScroll.ul  = $('ul.ajax_sub');
        itdcScroll.divHeight = itdcScroll.div.height();
        itdcScroll.lastLi = itdcScroll.ul.find('li:last-child');
        itdcScroll.liCouount = itdcScroll.ul.find('li').length;
        itdcScroll.div.mousemove(function(e){
            itdcScroll.move(e);
        });
    },
    move : function(e)
    {
        itdcScroll.ulHeight = itdcScroll.lastLi[0].offsetTop + itdcScroll.lastLi.outerHeight() + itdcScroll.ulPadding;
        itdcScroll.top = (e.pageY - itdcScroll.div.offset().top) * (itdcScroll.ulHeight-itdcScroll.divHeight) / itdcScroll.divHeight;
        itdcScroll.ul.scrollTop(itdcScroll.top);
    }
}


function getTextPage(lang){
	$('.ajax_sub li').live('click',function(e){
		var el  =  $(this);
		var attr = el.attr('rel');
		e.preventDefault();
		$.post('http://ttc.com.ge/ajax.php?action=text&lang='+lang+'&info_id='+attr, function(data) {
	
			//$('.ajax_txt').jScrollPane();

			$('.itdcScroll_inner').animate({
				left : -708
			},800);
			 
				$('.ajax_txt').show();
				$('.ajax_txt').html(data);	
			
			
		});  
    });
	
	$('.ajax_txt #back').live('click',function(e){
		$('.itdcScroll_inner').animate({ left : 0 },800, function(){
			$('.ajax_txt').html('');
		});
		
	});
}



