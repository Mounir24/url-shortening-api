let scrollBtn = document.querySelector('.scrollBtn');

scrollBtn.addEventListener('click', function() {
    //window.scrollTo(0, 0);

    $("html, body").animate({scrollTop: 0} , "slow");

});

/*--------------End for ScrollBtn-------------*/