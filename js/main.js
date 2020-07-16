$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /// click on toggle button

    $toggleCollapse.click(() => {
        $nav.toggleClass('collapse');
    })
})