console.log("welcome");
var pictures = ["#slide-pic-1", "#slide-pic-2", "#slide-pic-3", "#slide-pic-4", "#slide-pic-5", "slide-pic-6"];
var currentPictureIndex = 0;


$(document).ready(function () {

    $('.slides').hide();
    $('#slide-pic-1').show();


});

function nextButton() {
    currentPictureIndex++;

    if (currentPictureIndex == 6) {
        $(pictures[5]).hide();
        $(pictures[0]).show();
        currentPictureIndex = 0
    }

    if (currentPictureIndex == 5) {
        $('#slide-pic-6').show(500);
    } else {
        $('#slide-pic-6').hide();
    }

    $(pictures[currentPictureIndex]).show(500);
    $(pictures[currentPictureIndex - 1]).hide();
    console.log("curr pic ind" + currentPictureIndex);
}

function previousButton() {
    $(pictures[currentPictureIndex - 1]).show(500);
    $(pictures[currentPictureIndex]).hide();

    if (currentPictureIndex < 1) {
        currentPictureIndex = 5;
    }

    currentPictureIndex -= 1;
}