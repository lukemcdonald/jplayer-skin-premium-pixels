$(document).ready(function() {
	
	/**
	 * General Variables
	 *
	 */
	var skin_loader = $('#skin-loader');
	var skin_wrapper = $('#skin-wrapper');
	var skin_name = skin_wrapper.data('skin-name');
	var skin_credits = $('#credits');
	var skin_uri = 'skins/' + skin_name;
	
	/**
	 * Skin Styles and Display
	 *
	 */ 
	var skin_css_uri = skin_uri + '/' + skin_name + '.css';
	
	/* Dynamically add skin stylesheet */
	$('head').append('<link rel="stylesheet" href="' + skin_css_uri + '" type="text/css" />');
	
	/* Display Skin Wrapper */
	skin_wrapper.fadeIn();
	skin_loader.fadeOut();
	
	
	/**
	 * Credits Display
	 *
	 */ 
	var skin_credits_url = skin_uri + '/credits.html';

	$.ajax({
		url: skin_credits_url,
		crossDomain: true,
		cache: true
	}).done(function( html ) {
		skin_credits.append(html);
	});
	
	
	/**
	 * Banners
	 *
	 */ 
	var banners = [
		{
			label: 'AudioTheme',
			image: 'audiotheme.png',
			link: 'http://audiotheme.com?source=jp-skins-demo'
		},
		{
			label: 'Easy Digital Downloads',
			image: 'easy-digital-downloads.png',
			link: 'http://easydigitaldownloads.com?ref=9&source=jp-skins-demo'
		},
		{ 
			label: 'Press75',
			image: 'press75.png',
			link: 'http://press75.com?source=jp-skins-demo'
		}
	];
	
	var banner = banners[Math.floor(Math.random() * banners.length)];

	$('<a href="' + banner['link'] + '" target="_blank" onClick="_gaq.push(["_trackEvent", "Banners", "Click", "' +  banner['label'] + '"]);"><img src="images/banners/' + banner['image'] + '"></a>').appendTo('#banner');
	 
});