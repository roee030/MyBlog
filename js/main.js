$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /// click on toggle button

    $toggleCollapse.click(() => {
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel(
        {
            loop:true,
            autoplay:false,
            autoplayTimeout:2000,
            dots:false,
            nav:true,
            navText:[$('.owl-nav-prev') ,$('.owl-nav-next')]
        }
    );
})