<!-- Google Analytics javascript -->
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-32210031-1']);
	_gaq.push(['_trackPageview']);
	
	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	
	var currentTime = '<?=date("H:i")?>';
		$(function() {
			/* IE Z-index Fix */
			if ($.browser.msie) {
				var zIndexNumber = 100000;
				$('div').each(function() {
					$(this).css('zIndex', zIndexNumber);
					zIndexNumber -= 10;
				});
			}
		});		
		
			
		function MM_openBrWindow(theURL,winName,features) { //v2.0
			window.open(theURL,winName,features);
		}
		
		jQuery().ready(function($){
			$("#fdb_form").validate({
			rules: {				
					'17[value]': {
						required: true,
						email: true,
						minlength: 8                                  
					},
					'16[value]': {
						required: true,
						minlength: 2                                
					},	
							
					'18[value]': {
						required: true,
						minlength: 10                                  
					},	
					
					'20[value]': {
						required: true,
						minlength: 2                                  
					},	
					
					'19[value]': {
						required: true,
						minlength: 2                                  
					},
					'21[value]': {
						required: true,
						minlength: 10                                  
					}
						
				}			
			});
		});
		
		$(document).ready(function () {

			$('.box').hover(function(){
				$(this).find('.opacity').fadeIn(300);
			},function(){
				$(this).find('.opacity').fadeOut(300);
			});
		//$(".gallery-element .the_imaget:nth-child(4n)").css("clear", "both");
		$('.menu ul li:first-child').removeClass("selected");

		 
		//PRETTY PHOTO
		$("a.lightbox").prettyPhoto();
		$("a[rel^='prettyPhoto']").prettyPhoto();
		$(".metro_map area").prettyPhoto({
			default_width: 590,
            default_height: 920
		});
		
		
		
		if ( $('.blocks_left')[0] && $('.blocks_right')[0] ) { 
			$(".txt_page, .list_cascad, .gallery-element ").css("width","468px");
			$(".pageTitle").css("width","458px");
		}
		else if ( !$('.blocks_left')[0] && !$('.blocks_right')[0] ) { 
			$(".txt_page, .list_cascad, ").css("width","970px");
			$(".pageTitle").css("width","970px");
		}
		
				
		
		//ToopTip
		$("#Map2 area").each(function(){
			var tip = $('.metro_tip');
			var text = $(this).attr('alt');
			
			$(this).hover(function(){
				tip.html(text);
				tip.show();
			}, function() {
				tip.hide();   
			}).mousemove(function(e) {
				var coords = ($(this).attr('coords')).split(',');
				var coordx = parseInt(coords[1]) + 35 ;
				var coordy = parseInt(coords[0]) + 20 ; 
				
				//console.log(coords[0]);
	
				tip.css({  top: coordx+'px', left: coordy+'px' });
			});
		});
		$(".content .ajax_sub li").each(function(){
			var tip = $(this).find('.timeline_tip');
			var tipWidth = tip.width();
			
			$(this).hover(function(){
				//console.log(tipWidth);
				tip.show();
			}, function() {
				tip.hide();   
			}).mousemove(function(e) {
				var parentOffset = $(this).closest('div.itdcScroll').offset(); 
				var mousex =  e.pageX - parentOffset.left - tipWidth / 2 - 10;
				var mousey = e.pageY - parentOffset.top - 40;

				//console.log(mousex,mousey );
				tip.css({  top: mousey, left: mousex });
			});
		});
		
		
		$("#Map2 area").click(function(){
			var camera_cont = $(this).attr('href');
			var camera_cont = camera_cont.replace('#','');
			var size = $('div#'+camera_cont).find(".video_cont > div").size();

			if(size > 1) {
			//$('#select_camera option:selected').removeAttr('selected');
				$('div#'+camera_cont).find(".video_cont > div").not('div:first').addClass('hide_video');
				$('#select_camera').live('change',function(){
					var parent = $(this).parent('.video_cont');
					var camera_id = $(this).find("option:selected").attr('value');
					var camera = $(this).find("option:selected").html();
					parent.children('.video_cont  div').addClass('hide_video');
					parent.children('div#player_' + camera_id).removeClass('hide_video');
					parent.children('#select').html(camera);
				
				});
			
			}
		
		});
		
		$('.by_personal_no').hide();
		$('.personal_no_input').hide();
		
		$('.idNum').on('click',function(e) {
			e.preventDefault();
			$('.by_personal_no').show();
			$('.by_code').hide();
			$('.idNum').addClass('active');
			$('.recordNum').removeClass('active');
			$('.personal_no_input').show();
			$('.by_code_input').hide();
			
		});
		
	
			$(".no-result").insertAfter("#pay_fine");
		

	});


	