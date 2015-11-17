$(document).ready(function() {
	
	/**
	 * General Variables
	 *
	 */
	var skin_loader = $('#skin-loader');
	var skin_wrapper = $('#skin-wrapper');
	var skin_name = skin_wrapper.data('skin-name');
	var skin_credits = $('#credits');
	var skin_uri = 'http://dottobr83.github.io/jplayer-skins/skins/' + skin_name;
	
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
	
});
