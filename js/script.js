jQuery(document).ready(function() {
    jQuery('#openmenu').click(function(e) {
        jQuery('#pagewrapper').toggleClass('opennav');
        jQuery('#leftnav').toggleClass('active');
 
        e.preventDefault();
    });
});