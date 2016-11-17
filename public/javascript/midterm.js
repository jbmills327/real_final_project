/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function openNestedNav() {
    document.getElementById("myNestedSidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function closeNestedNav() {
    document.getElementById("myNestedSidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}


//This is all for the parralax effect

// This is the fix for the scrolling issue
var containerHeight = $("#main").height();

// This is the Jquery for the parallax effect
$(window).scroll(function() {

    var upScroll = $(this).scrollTop();

    if (upScroll <= containerHeight) {

        $(".dragon").css({
            "transform": "translate(0px, " + upScroll / 10 + "vh)"
        });
        $(".large-dragon").css({
            "transform": "translate(0px, -" + upScroll / 3 + "vh)"
        });
    }


});
