console.log("welcome");
var pictures = ["#slide-pic-1", "#slide-pic-2", "#slide-pic-3", "#slide-pic-4", "#slide-pic-5"];

$(document).ready(function () {

    $('.slides').hide();
    $('#slide-pic-1').show()

});

function nextButton() {
    for (let i = 0; i < 5; i++) {
        $(pictures[i]).show(500);
        $(pictures[i - 1]).hide(250);
    }

}