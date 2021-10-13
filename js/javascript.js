//alert("Let's learn some javascript");
$(function () {
    $("#navigation").load("navigation.html");
});
$(function () {
    $("#footer").load("footer.html");
});

// DrowpDown Menu

function dropFunction(){
    // here we will use the pre-built toggle effect
    document.getElementById("myDropdown").classList.toggle("show");
}

/* JavaScript is also great for giving more control to the user, in this example we are going
to create an image gallery where the user can change the layout by clicking a button.
What we should take from this is how to create a proper click event.
 */

// Let's start by getting the elements with the class name 'gallery-column'

var elements = document.getElementsByClassName("gallery-column");
// next declare the loop variable
var i;
// Create the full width layout (1 image row)
function one(){
    for(i = 0; i < elements.length; i++){
        elements[i].style.gridTemplateColumns = "repeat(1, 100%)";
    }
}
function two(){
    for(i = 0; i < elements.length; i++){
        elements[i].style.gridTemplateColumns = "repeat(2, 50%)";
    }
}
function four(){
    for(i = 0; i < elements.length; i++){
        elements[i].style.gridTemplateColumns = "repeat(4, 25%)";
    }
}

// Scroll Function

$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 100){
            $(".menu-row").addClass("scrolled-menu");
        }
        else{
            $(".menu-row").removeClass("scrolled-menu");
        }
    })
})