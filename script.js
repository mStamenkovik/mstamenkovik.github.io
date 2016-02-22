$(document).ready(function () {
    // Handler for .ready() called.
    $('#hrefSkills').click(function () {
        
        $('html, body').animate({
            scrollTop: $('#divSkills').offset().top
        }, 'slow');
    });

    $('#hrefProjects').click(function () {
        
        $('html, body').animate({
            scrollTop: $('#divProjects').offset().top
        }, 'slow');
    });

    $('#hrefInternship').click(function () {
        
        $('html, body').animate({
            scrollTop: $('#divIntern').offset().top
        }, 'slow');
    });

    $('#hrefEducation').click(function () {
        
        $('html, body').animate({
            scrollTop: $('#divEdu').offset().top
        }, 'slow');
    });

});