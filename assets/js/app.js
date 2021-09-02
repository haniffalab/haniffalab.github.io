(function ($) {
	$(document).ready(function() {
		// Enable popovers everywhere.
		$('[data-toggle="popover"]').popover();
	
		// Enable tooltips everywhere.
		$('[data-toggle="tooltip"]').tooltip();
	
		// Hook the "Learn More" button event to scroll to content.
		$('#scroll-to-content').click(function(ev) {
			ev.preventDefault();
			if (typeof ev.target.dataset.scrollTo === 'undefined') {
			return;
			}
	
			$('html, body').animate({
			scrollTop: $(ev.target.dataset.scrollTo).offset().top - 100
			}, 1000)
		});
	});
  })(jQuery);
  