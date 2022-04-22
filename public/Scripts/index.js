M.AutoInit();
setInterval(() => {
    $('.carousel').carousel('next');

}, 2000)

$('a.btn-large').on("click", () => {
    window.location.href = '/home'
});