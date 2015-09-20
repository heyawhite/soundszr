$('#openmenu').on('click', function(){
    if( $('nav').is(':visible') ) {
        $('nav').animate({ 'width': '0px' }, 'slow', function(){
            $('nav').hide();
        });
        $('#pagewrapper').animate({ 'margin-left': '0px' }, 'slow');
    }
    else {
        $('nav').show();
        $('nav').animate({ 'width': '210px' }, 'slow');
        $('#pagewrapper').animate({ 'margin-left': '210px' }, 'slow');
    }
});