$(document).ready(function () {

    $('.bunny-pic').hide();


});

function showPic(id) {

    hideAll();
    $(id).fadeIn();

}

function hideAll() {
    $('.bunny-pic').fadeOut();
}