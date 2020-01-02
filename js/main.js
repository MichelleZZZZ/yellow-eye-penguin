$(document).ready(function(){

	var $loader = $('body  #loader'),
		$ham = $('header .hamburger'),
		$nav = $('header nav'),
		navOpen = false,
		$navClose = $('nav .close-img'),
		$logo = $('.wrapper .logo'),
		duration = 300,
		$bar = $('#bars li .bar'),
		$questionMark = $('.pedator-animal .question .question-mark'),
		$dataContainer = $('.data-container'),
		$donateBtn = $('.form-container .donate-now-btn button'),
		$closeDonationBtn = $('.confirmation .close'),
		$bookingForm = $('.booking-form'),
		$donateForm = $('.donate-form'),
		$closeBookingBtn = $('.booking-confirmation .close');

	//Navigation

	// toggle nav
	function toggleNav(){

		if(navOpen){
			// close the nav
			$nav.fadeOut(duration);
			$ham.removeClass('open');

		}else{
			$nav.fadeIn(duration);
			$ham.addClass('open');
		}

		navOpen = !navOpen;
	}

	$ham.click(toggleNav);

	/* shrink and enlarge the header on scroll*/

	var lastScrollTop = 0,
		logoIsSmall = false;

		//$menu = $('header .menu ');

	$(document).scroll(function(e){

		var st = $(this).scrollTop();

		if (st > lastScrollTop && !logoIsSmall){
		   // downscroll code
		   $logo.stop(true, true).animate({height: "40px"}, duration);
		   $ham.stop(true, true).animate({height: "35px", width: "35px"}, duration);
	
		   logoIsSmall = true;


		} else if(st < lastScrollTop && logoIsSmall){
		  // upscroll code
		  $logo.stop(true, true).animate({height: "50px"}, duration);
		  $ham.stop(true, true).animate({height: "40px", width: "40px"}, duration);

		  logoIsSmall = false;
		  menuSmall = false;
		}

		lastScrollTop = st;

	});


	//Home Page

	// Visual data animation
	function barAnimation(direction){
		var height = 0,
			delay = 0;
		$bar.each(function(){
			if(direction==="down"){
				height = $(this).data('percentage')+"%";
			}else{
				height = 0;
			}
			
			$(this).css({
				'height': height,
				'transition-delay': delay+'s'
			});

			if(direction==="down"){
				delay += .15;
			}

		});
	}

	//Waypoint triggers
	$dataContainer.waypoint(function(direction){
		barAnimation(direction);
	},{
		offset: "50%"
	})

	//  Gsap Animations

	// waves-bg

	var $wave1 = $('.wave-1');
		$wave2 = $('.wave-2');
		wavebg =  new TimelineMax({repeat: -1, delay: 1,yoyo: true});
		
	// lighter wave
	var wave1 =  new TimelineMax({repeat: -1});
		wave1.add( TweenLite.to($wave1, 2.2, {x: 0,  y: -30}) );
		wave1.add( TweenLite.to($wave1, 2.2, {x: 0,  y: 0 }) );

	// light wave
	var wave2 =  new TimelineMax({repeat: -1, delay: 0});
		wave2.add( TweenLite.to($wave2 , 2, {x: 0,  y: -15}) );
		wave2.add( TweenLite.to($wave2 , 2, {x: 0,  y: 0 }) );

	
	// index penguin-1
	var $penguin1 =$('.penguin-1');
		$penguin3 =$('.penguin-3');

		penguinJump = new TimelineMax({delay: .2});
		penguinJump.add( TweenLite.to($penguin1, 3, {rotation: -50, x: "-600%", y: "1300%"}) );
	

	// index penguin-2
	var $talkIcon =$('.talk-icon');
		$name = $('.name');
		$maoriName = $('.maori-name-container');
		$maoriText = $('.name-container p');
		penguinJump = new TimelineMax({delay: .7});
		penguinJump.add( TweenLite.to($penguin3, 2, {rotation: -10, x: "-500%", y: "500%" },"-=0.25") );

	$talkIcon .waypoint(function(direction){
		$name.css({opacity: 0});

		if(direction=="down"){
			$name.css({opacity: 1});
			var maoriname = new TimelineMax();
				maoriname.add( TweenLite.to($talkIcon, 0.3, { opacity: 1,scale: 10 ,transformOrigin:"bottom left"}) );
				maoriname.add( TweenLite.fromTo($maoriName, 0.3, {x: 0, y: 100, opacity: 0}, {x:0, y:0, opacity: 1}) );
				maoriname.add( TweenLite.fromTo($maoriText, 0.3, {opacity: 0},{opacity: 1}) );
		
		}

	},{offset: "90%"});

	// Adult penguin

	var $adultPenguinContainer = $('.adult-penguin-container');
		$adultPenguinText =$('.adult-penguin h1');
		$adultBg = $('.adult-penguin-container .penguin-bg');
		$bodyInfo = $('.bodyinfo');
		$centerPenguin = ('.centered-penguin');

	$adultPenguinContainer.waypoint(function(direction){
		$adultPenguinContainer.css({opacity: 0});

		if(direction=="down"){
			$adultPenguinContainer.css({opacity: 1});

			var adultpenguin = new TimelineMax();
				adultpenguin.add(TweenLite.fromTo( $adultPenguinText, 0.5 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				// Circle and penguin
				adultpenguin.add( TweenLite.fromTo( $adultBg, 0.3, { scale: 0.2 ,transformOrigin:"center", opacity: 0}, {scale: 1, opacity: 1}) );
				adultpenguin.add(TweenLite.fromTo( $bodyInfo, 0.3, {x: 0, y: 30, opacity: 0}, {x:0, y:0, opacity: 1}))
				adultpenguin.add( TweenLite.to( $centerPenguin, 0.2, { rotation: -10}) );
				adultpenguin.add( TweenLite.to( $centerPenguin, 0.2, { rotation: 10}) );
				adultpenguin.add( TweenLite.to( $centerPenguin, 0.2, { rotation: 0}) );
		
		}

	},{offset: "50%"});

	

	// Ling Map
	var $mapContainer = $('.map-container');
	    $mapText = $('.map-container .map-text-container');
	    $mapNz = $('.map-nz');

	$mapContainer .waypoint(function(direction){

		$mapContainer .css({opacity: 0});

		if(direction=="down"){

			$mapContainer .css({opacity: 1});
			var livingmap = new TimelineMax();
				livingmap.add(TweenLite.fromTo( $mapText, 0.3, {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				livingmap.add(TweenLite.fromTo( $mapNz, 0.3, { opacity: 0}, {opacity: 1}));
	
		}

	},{offset: "50%"});
	

	// visual-data
	var $visualData = $('.visual-data');
		$visualDataHeader = $('.visual-data h2');

	$visualData.waypoint(function(direction){
		$visualData .css({opacity: 0});

		if(direction=="down"){
			$visualData .css({opacity: 1});
			var data = new TimelineMax();
				data.add(TweenLite.fromTo( $visualDataHeader, 0.5, {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
	
		}

	},{offset: "60%"});


	// Question-mark

	var $question = $('.question');
		$questionPenguin = $('.question .question-penguin');
		$quetionMark = $('.question .question-mark');
		$quetionHeader = $('.question h2');


	$question .waypoint(function(direction){
		$question .css({opacity: 0});

		if(direction=="down"){
			$question .css({opacity: 1});
			var quetionMark = new TimelineMax();
				quetionMark.add( TweenLite.fromTo( $questionPenguin, 0.3 ,{x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				quetionMark.add( TweenLite.fromTo( $quetionMark, 0.3 , {x: 0, y: 50, opacity: 0}, {x: 0, y: 0,opacity: 1}));
				quetionMark.add( TweenLite.fromTo( $quetionHeader, 0.3 , {x: 0, y: 50, opacity: 0}, {x: 0, y: 0,opacity: 1}));
				quetionMark.add( TweenLite.to( $quetionMark, 0.3, { rotation: -10}) );
				quetionMark.add( TweenLite.to( $quetionMark, 0.3, { rotation: 10}) );
				quetionMark.add( TweenLite.to( $quetionMark, 0.3, { rotation: 0}) );
				
		}

	},{offset: "60%"});

	

	// Penguin death
	var $pedatorAnimals = $('.pedator-animals');
		$pedatorH1 = $('.pedator-animals h1');
		$pedatorH2 = $('.pedator-animals h2');
		$pedatorAim = $('.pedators-container .aim');
		$pedatorCircle1 = $('.pedators-container .circle-1');
		$pedatorPenguin = $('.pedators-container .penguin');

	$pedatorAnimals.css({opacity: 0});
	$pedatorAnimals.waypoint(function(direction){
		$pedatorAnimals.css({opacity: 0});

		if(direction=="down"){
			$pedatorAnimals.css({opacity: 1});
			var pedator = new TimelineMax();
				pedator.add( TweenLite.fromTo( $pedatorH1, 0.3 , {x: 0, y: 50, opacity: 0}, {x: 0, y: 0,opacity: 1}));
				pedator.add( TweenLite.fromTo($pedatorCircle1, $pedatorPenguin, 0.3 ,{x: 0, y: 0, opacity: 0}, {x: 0, y: 0,opacity: 1}));
				pedator.add( TweenLite.fromTo( $pedatorAim, 0.3 ,{x: 0, y: 0, opacity: 0}, {x: 0, y: 0,opacity: 1}));
				pedator.add( TweenLite.fromTo( $pedatorH2, 0.3 ,{x: 0, y: 50, opacity: 0}, {x: 0, y: 0, opacity: 1, delay: -0.5} ));
				// aim
				pedator.add( TweenLite.to( $pedatorAim, 0.3 ,{x: 20, y: 10}));
				pedator.add( TweenLite.to( $pedatorAim, 0.3 ,{x: -60, y: 0}));
				pedator.add( TweenLite.to( $pedatorAim, 0.3 ,{x: 0, y: 0}));
				

		}

	},{offset: "50%"});

	

	// Fishing
	var $fishingNet = $('.fishing-net');
		$plus = $('.plus');
		$fishingImg = $('.fishing-net .fishing');

	$fishingNet.waypoint(function(direction){
		$fishingNet.css({opacity: 0});

		if(direction=="down"){
			$fishingNet.css({opacity: 1});
			
			var fishing = new TimelineMax();
				fishing.add( TweenLite.fromTo( $plus, 0.3 ,{x: 0, y: 50, opacity: 0}, {x: 0, y: 0, opacity: 1}));

			var fishingBoat = new TimelineMax({repeat: -1, yoyo: true})	;
				fishingBoat.add( TweenLite.to( $fishingImg, 0.4 , {rotation: 5, x: -15, y: 15}));
				fishingBoat.add( TweenLite.to( $fishingImg, 0.8 , {rotation: 2, x: -8, y: 8}));
				fishingBoat.add( TweenLite.to( $fishingImg, 1 , {rotation: 0,x: 0, y: 0}));

		}

	},{offset: "40%"});


	// Penguin Decline
	var $declineImg = $('.decline-image');
		$declineAnimate = $('.decline-animate');
		$declineHeader = $('.decline-image h1');
		$decline4 = $('#decline-4');
		$decline2 = $('#decline-2');

	$declineImg.waypoint(function(direction){
		$declineImg.css({opacity: 0});

		if(direction=="down"){
			$declineImg.css({opacity: 1});
			$declineAnimate.css({opacity: 1});

			var penguinDecline = new TimelineMax();
				penguinDecline.add(TweenLite.to( $decline4, 0.3 , { opacity: 0}));
				penguinDecline.add(TweenLite.to( $decline2, 0.3 , { opacity: 0}));
				penguinDecline.add(TweenLite.fromTo( $declineHeader, 0.3, {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));

		}

	},{offset: "40%"});

	// Home Yellow Eyed Trust
	var $homeTrust = $('.home-trust');
		$homeTrustLogo = $('.home-trust-logo');
		$toWorkBtn = $('.to-work-btn');

	$homeTrust.waypoint(function(direction){
		$homeTrust.css({opacity: 0});

		if(direction=="down"){
			$homeTrust.css({opacity: 1});

			var trustLogo = new TimelineMax();
				trustLogo.add(TweenLite.fromTo( $homeTrustLogo, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				trustLogo.add(TweenLite.fromTo( $toWorkBtn, 0.2 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));

		}

	},{offset: "50%"});




	//Work Page

	// Map hids 

	var $mapPenguins = $('.hids'),
		$penquinInfo = $('.hids-info'),
		penquinIndex = -1;

	function showPenquinInfo(){
		penquinIndex = $mapPenguins.index($(this));	
		$penquinInfo.eq(penquinIndex).velocity('fadeIn', 100);
	}

	function hidePenquinInfo(){
		$penquinInfo.eq(penquinIndex).velocity('fadeOut', 100);
	}

	$mapPenguins.hover(showPenquinInfo,hidePenquinInfo);

	


	// Work page animation

	var $trustHome = $('.trust-home');
		$trustLogo = $('.trust-logo');
		$trustText = $('.trust-texts');
		$smallPenguin = $('.small-penguin');
		$bigPenguin = $('.big-penguin');
		$trustScroll = $('.scroll-down');

	$trustHome.waypoint(function(direction){
		$trustHome.css({opacity: 0});

		if(direction=="down"){
			$trustHome.css({opacity: 1});

			var workTrustLogo = new TimelineMax();
				workTrustLogo.add(TweenLite.fromTo( $trustLogo, 0.3, {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				workTrustLogo.add(TweenLite.fromTo( $trustText, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				workTrustLogo.add(TweenLite.fromTo( $smallPenguin, 0.3 , {x: 50, y: 0, opacity: 0}, {x:0, y:0, opacity: 1}));
				workTrustLogo.add(TweenLite.fromTo( $bigPenguin, 0.3 , {x: 50, y: 0, opacity: 0}, {x:0, y:0, opacity: 1}));
				workTrustLogo.add(TweenLite.fromTo( $trustScroll, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
		}

	},{offset: "90%"});


	// To the work info page
	var $workInfo = $('.trust-work-info');

	$trustHome.waypoint(function(direction){

		if(direction==="down"){
			$workInfo.velocity('scroll', {duration: 400,ease:Ease.easeInOutQuint})
		}
	},{
		offset: '-1'
	});

	// Info text
	var $workPenguinBg = $('.work-info-bg .penguin-bg');
		$workInfoText = $('.work-info-texts');
		$workInfoP = $('.work-info-texts p');


	$workInfo.waypoint(function(direction){
		$workInfo.css({opacity: 0});

		if(direction=="down"){
			$workInfo.css({opacity: 1});

			var workInfo = new TimelineMax({delay: 0.2});
				workInfo.add(TweenLite.fromTo( $workPenguinBg, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				workInfo.add(TweenLite.fromTo( $workInfoText, 0.3 , {opacity: 0}, {opacity: 1}));
				workInfo.add(TweenLite.fromTo( ".work-info-texts h1, .work-info-texts h3", 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				workInfo.add(TweenLite.fromTo( $workInfoP , 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
		}

	},{offset: "1%"});

	// restoration

	var $restorationContainer = $('.restoration-container');
		$hids = $('.hids');
		$workMapNz = $('.work-map-nz');
		$restorationText= $('.restoration-texts');
		$restorationTextContainer = $('.restoration-texts-container');

	$restorationContainer.waypoint(function(direction){
		$restorationContainer.css({opacity: 0});

		if(direction=="down"){
			$restorationContainer.css({opacity: 1});

			var restoration = new TimelineMax();
				restoration.add(TweenLite.fromTo( $workMapNz, 0.3, {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				restoration.add(TweenLite.fromTo( $hids , 0.3 , {scale:0, opacity: 0}, {scale: 1, opacity: 1}));
				restoration.add(TweenLite.fromTo( $restorationText, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				restoration.add(TweenLite.fromTo( $restorationTextContainer, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
	
				// hids

			var hids =  new TimelineMax({repeat: 30});

				hids.add(TweenLite.to( $hids,1, {rotation: 8, transformOrigin: '50% bottom'}));
				hids.add(TweenLite.to( $hids, 1.4, {rotation: -5, transformOrigin: '50% bottom'}));

		}

	},{offset: "40%"});


	// Viewing

	var $viewingTesxt = $('.view-text-container');
		$viewingH1 = $('.viewing .view-texts h1');
		$viewingP = $('.viewing .view-texts p');
		$viewingBtn = $('.viewing .view-texts a');

	$(".viewing").waypoint(function(direction){
		$viewingTesxt.css({opacity: 0});

		if(direction=="down"){
			$viewingTesxt.css({opacity: 1});

			var viewing = new TimelineMax();
				viewing.add(TweenLite.to( $viewingTesxt , 0.3, { opacity: 1}));
				viewing.add(TweenLite.fromTo( $viewingH1, 0.3 , {x: 0, y: 50, opacity: 0},{x: 0, y: 0, opacity: 1}));
				viewing.add(TweenLite.fromTo( $viewingP, 0.3 ,{x: 0, y: 50, opacity: 0},{x: 0, y: 0, opacity: 1}));
				viewing.add(TweenLite.fromTo( $viewingBtn, 0.3 ,{opacity: 0}, {opacity: 1}));		
		
		}

	},{offset: "60%"});

	// Pedator control

	var $pedatorContainer = $('.pedator-control-container ');
		$pedatorBg = $('.control-bg');
		$pedatorCircle = $('.control-circle-2');
		$pedatorCircleAnimals = $('.control-circle-animals');
		$yellowBar = $('.control-yellow');
		$pedatorText = $('.pedator-control-texts');
		$pedatorTextContainer = $('.pedator-control-texts-container');

	$pedatorContainer.waypoint(function(direction){
		$pedatorContainer.css({opacity: 0});

		if(direction=="down"){

			var pedatorControl = new TimelineMax();
				pedatorControl.add(TweenLite.to($pedatorContainer, 0.3 ,{opacity: 1}));
				pedatorControl.add(TweenLite.fromTo( $pedatorBg, 0.3,{ opacity: 0},{ opacity: 1}));
				pedatorControl.add(TweenLite.fromTo( $pedatorCircle , 0.3 , { opacity: 0},{opacity: 1}));
				pedatorControl.add(TweenLite.fromTo( $pedatorCircleAnimals, 0.3 ,{ opacity: 0}, {opacity: 1}));
				pedatorControl.add(TweenLite.fromTo( $yellowBar, 0.3 , {opacity: 0}, {opacity: 1}));		
				pedatorControl.add(TweenLite.fromTo( $pedatorText, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				pedatorControl.add(TweenLite.fromTo( $pedatorTextContainer, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));

		}

	},{offset: "40%"});


	// Marine 
	var $marineContainer = $('.marine-container');
		$marineH1 = $('.marine h1');
		$marineImg = $('.marine img');

	$marineContainer.waypoint(function(direction){
		$marineContainer.css({opacity: 0});

		if(direction=="down"){
			$marineContainer.css({opacity: 1});

			var marineControl = new TimelineMax();
				marineControl.add(TweenLite.fromTo( $marineH1, 0.3,{x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				marineControl.add(TweenLite.fromTo( $marineImg, 0.3,{x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
		}

	},{offset: "60%"});


	// Booking Page

	//Confirm booking 
	var $bookConfirm = $('.booking-confirmation');
		$bookingOverlay = $('#booking-overlay');
	function showBookingConfirmation(formData){
		console.log(formData);
		$bookingOverlay.velocity('fadeIn', 100);
		$bookConfirm.find('.name').html(formData[3].value);
		$bookConfirm.find('.places').html(formData[0].value);
		$bookConfirm.find('.date').html(formData[1].value);
		$bookConfirm.find('.email').html(formData[4].value);
		$bookConfirm.velocity('fadeIn', 200);

	};

	$bookingForm.submit(function(e){
		e.preventDefault();
		formData = $(this).serializeArray()
		showBookingConfirmation(formData);
	});

	// Close the booking confirmation form
	function bookingConfirmationClose(){

		$bookingOverlay.velocity('fadeOut', 100);
		$bookConfirm.velocity('fadeOut', 200);

	};

	$closeBookingBtn.click(bookingConfirmationClose);


	// Booking a viewing
	var $booking = $('.booking-a-view');
		$bookingForm = $('.booking-a-view .form');
		$bookingPenguin = $('.booking-a-view .booking-penguin');

	$booking.waypoint(function(direction){
		$booking.css({opacity: 0});
		
		if(direction=="down"){
			$booking.css({opacity: 1});

			var booking = new TimelineMax({delay: 0.2});
				booking.add(TweenLite.fromTo( $bookingForm, 0.3 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				booking.add(TweenLite.fromTo( $bookingPenguin, 0.3 , {x: -100, y: 0, opacity: 0}, {x:0, y:0, opacity: 1}));
				
		}

	},{offset: "90%"});

	// Support page

	var $donate = $('.support');
		$donateForm = $('.donate-form-container ');
		$donatePenguin = $('.donate-penguin');

	$donate.waypoint(function(direction){
		$donate.css({opacity: 0});

		if(direction=="down"){
			$donate.css({opacity: 1});

			var donate = new TimelineMax({delay: 0.2});
				donate.add(TweenLite.fromTo( $donateForm , 0.4 , {x: 0, y: 50, opacity: 0}, {x:0, y:0, opacity: 1}));
				donate.add(TweenLite.fromTo( $donatePenguin, 0.3 , {x: -100, y: 0, opacity: 0}, {x:0, y:0, opacity: 1}));

		}

	},{offset: "90%"});



	// Donation Page

	//Confirm donating

	var $supportOverlay = $('#support-overlay');
		$confirmation = $('.confirmation');

	function showDonateConfirmation(){
		$donateForm.submit(function(e){
			e.preventDefault();
			$supportOverlay.velocity('fadeIn', 100);
			$confirmation.velocity('fadeIn', 200);

		})

	} 

	$donateBtn.click(showDonateConfirmation);

	// Close the donation confirmation form
	function HideDonateConfirmationClose(){

		$supportOverlay.velocity('fadeOut', 100);
		$confirmation.velocity('fadeOut', 200);

	};

	$closeDonationBtn.click(HideDonateConfirmationClose);



});








