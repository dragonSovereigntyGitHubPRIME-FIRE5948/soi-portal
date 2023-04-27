$(document).ready(function () {

    // 1. autocomplete
    var searchTags = [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Python",
        "Java",
        "iOS",
        "Swift",
        "React",
        "Web Design",
        "Web Development"
    ];

    $("#searchbar").autocomplete({
        source: searchTags
    });

    // 2. icon dropdown
    function dropdown() {
        document.getElementById("noti-drop-content").classList.toggle("show");
    }

    // 3. avatar toggle
    $(".nav-user").click(function () {
        $(".nav-user").toggleClass("nav-user-toggle");
    });

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    //   4. tooltip
    $(".fa-bookmark").tooltip();


    // 5. carousel cards
    var multipleCardCarousel = document.querySelector(
        "#carouselExampleControls"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });

        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }

    // 6. offcanvas
    $("#success-alert").hide();

    $(".fa-bookmark").click(function () {
        var bookmark_index = $(".fa-bookmark").index(this);
        $(".fa-bookmark").eq(bookmark_index).toggleClass("fa-bookmark-toggle");

        if ($(this).hasClass("fa-bookmark-toggle")) {
            // alert("Bookmark Added");
            $(".ass-card").eq(bookmark_index).clone().appendTo(".bookmark-box");
            $(".alert strong").html("Bookmark Added!")
        } else {
            $(".bookmark-box .ass-card").eq(bookmark_index).remove(".ass-card");
            // alert("Bookmark Removed");
            $(".alert strong").html("Bookmark Removed!")
        }
    });

    $(".fa-bookmark").click(function showAlert() {
        $("#success-alert").fadeTo(800, 500).slideUp(500, function () {
            $("#success-alert").slideUp(500);
        });
    });

    // $(".fa-bookmark").click(function () {

    //     var bookmark_index = $(".fa-bookmark").index(this);

    // });

});
