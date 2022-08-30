$(document).ready(function() {
    $("body").css({"height":screen.height/2});
    // $("#magazine").css({"margin-top":screen.height/2});

    $("#magazine").bind('start', function (event, pageObject, corner){
        if (pageObject.page === 18 || pageObject.page === 19 || pageObject.page === 20 || pageObject.page === 21) {
            if (corner == 'tl' || corner == 'tr' || corner == 'bl' || corner == 'br'){
                event.preventDefault();
            }
        }
    });

    $('#magazine').turn({
        display: 'single',
        acceleration: true,
        gradients: !$.isTouch,
        elevation:50,
        autoCenter:true,
        when: {
            turned: function(e, page) {
                    var audio = new Audio('assets/sound1.mp3');
                    audio.play();
                    if (page === 1) {
                        $("#magazine").css({"z-index":20});
                        $("#navigate-cover").css({"z-index": 30})
                        $("#index-clear").css({"z-index": 0})
                        clearLinkReference()
                    } else if (page === 5) {
                        $("#index-clear").css({"z-index": 30})
                       clearLinkReference()
                    } else if (page === 8) {
                        clearLinkReference()
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                        $("#link-page-8").css({"z-index":30})
                        $("#link-page-8-container").css({"z-index":30})
                    } else if (page === 9) {
                        clearLinkReference()
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                        $("#link-page-9").css({"z-index":30})
                        $("#link-page-9-container").css({"z-index":30})
                    } else if (page === 10) {
                        clearLinkReference()
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                        $("#link-page-10").css({"z-index":30})
                        $("#link-page-10-container").css({"z-index":30})
                    } else if (page === 11) {
                        clearLinkReference()
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                        $("#link-page-11").css({"z-index":30})
                        $("#link-page-11-container").css({"z-index":30})
                    } else if (page === 15) {
                        clearLinkReference()
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                        $("#link-page-15").css({"z-index":30})
                        $("#link-page-15-container").css({"z-index":30})
                    } else if (page === 18) {
                        clearLinkReference()
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                        $("#link-page-18").css({"z-index":30})
                        $("#link-page-18-container").css({"z-index":30})
                    } else {
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                        clearLinkReference()
                    }

                // console.log('Current view: ', $(this).turn('view'));
            }
        }
    });

    $("#home-icon").click(function() {
        $('#magazine').turn("page", 1)
    });

    $("#clear-icon").on("click", function () {
        $('#magazine').turn("page", 5)
        removeNextPrev()
    })

    $("#yammer-icon").on("click", function () {
        window.open('https://web.yammer.com/main/org/optus.com.au/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxODc3MzMxOTY4MCJ9', '_blank');
    })

    $("#email-icon").on("click", function () {
        window.location.href = "mailto:Steve.Reynolds@optus.com.au";
    })

    $('#next').css('cursor','pointer');
    $(document).on('click', '#next',  function(event) {
        event.preventDefault();
        $('#magazine').turn('next')
        removeNextPrev()
    });

    // $("#next").on("click", function (e) {
    //     $('#magazine').turn('next')
    //     removeNextPrev()
    // })

    $("#previous").on("click", function () {
        const page = $('#magazine').turn('page')
        if (page === 2) {
            $("#magazine").css({"z-index":20});
            $("#navigate-cover").css({"z-index": 30})
            $('#magazine').turn('previous')
            removeNextPrev()
        } else {
            $("#magazine").css({"z-index":0});
            $("#navigate-cover").css({"z-index": 0})
            $('#magazine').turn('previous')
            removeNextPrev()
        }
    })

    $("#page6").click(function() {
        $('#magazine').turn("page", 6)
        removeNextPrev()
    });

    $("#page7").click(function() {
        $('#magazine').turn("page", 7)
        removeNextPrev()
    });

    $("#page8").click(function() {
        $('#magazine').turn("page", 8)
        removeNextPrev()
    });

    $("#page9").click(function() {
        $('#magazine').turn("page", 9)
        removeNextPrev()
    });

    $("#page10").click(function() {
        $('#magazine').turn("page", 10)
        removeNextPrev()
    });

    $("#page12").click(function() {
        $('#magazine').turn("page", 12)
        removeNextPrev()
    });

    $("#page13").click(function() {
        $('#magazine').turn("page", 13)
        removeNextPrev()
    });

    $("#page14").click(function() {
        $('#magazine').turn("page", 14)
        removeNextPrev()
    });

    $("#page15").click(function() {
        $('#magazine').turn("page", 15)
        removeNextPrev()
    });

    $("#page16").click(function() {
        $('#magazine').turn("page", 16)
        removeNextPrev()
    });

    $("#page18").click(function() {
        $('#magazine').turn("page", 18)
        removeNextPrev()
    });

    $("#start-clear").on("click", function () {
        $('#magazine').turn("page", 2)
        // removeNextPrev()
    })

    $("#clear-tab").on("click", function () {
        $('#magazine').turn("page", 2)
        removeNextPrev()
    })

    $("#connected-tab").on("click", function () {
        $('#magazine').turn("page", 19)
        removeNextPrev()
    })

    $("#capable-tab").on("click", function () {
        $('#magazine').turn("page", 20)
        removeNextPrev()
    })

    $("#courageous-tab").on("click", function () {
        $('#magazine').turn("page", 21)
        removeNextPrev()
    })

    $("#navigate-to-home").on("click", function () {
        $('#magazine').turn("page", 1)
        $("#navigate-to-home").css({"z-index":0})
        removeNextPrev()
    })
});

function clearLinkReference() {
    $("#link-page-8").css({"z-index":0})
    $("#link-page-8-container").css({"z-index":0})
    $("#link-page-9").css({"z-index":0})
    $("#link-page-9-container").css({"z-index":0})
    $("#link-page-10").css({"z-index":0})
    $("#link-page-10-container").css({"z-index":0})
    $("#link-page-11").css({"z-index":0})
    $("#link-page-11-container").css({"z-index":0})
    $("#link-page-15").css({"z-index":0})
    $("#link-page-15-container").css({"z-index":0})
    $("#link-page-18").css({"z-index":0})
    $("#link-page-18-container").css({"z-index":0})
}

function removeNextPrev() {
    const page = $('#magazine').turn('view')
    if (page[0] === 0 || page[0] === 19 || page[0] === 20 || page[0] === 21) {
        $("#next").css({"display":"none"})
        $("#previous").css({"display":"none"})
        $("#magazine").css({"z-index":20});
        $("#navigate-cover").css({"z-index": 30})
        $("#navigate-to-home").css({"z-index":30})
    } else if (page[0] === 18) {
        $("#next").css({"display":"none"})
        $("#previous").css({"display":"block"})
        $("#navigate-to-home").css({"z-index":0})
    } else {
        $("#next").css({"display":"block"})
        $("#previous").css({"display":"block"})
        $("#navigate-to-home").css({"z-index":0})
    }
}

// $(document).bind('keydown', function(e){
//     if (e.keyCode==37){
//         const page = $('#magazine').turn('page')
//         if (page === 2) {
//             $("#magazine").css({"z-index":20});
//             $("#navigate-cover").css({"z-index": 30})
//             $('#magazine').turn('previous')
//         } else {
//             $("#magazine").css({"z-index":0});
//             $("#navigate-cover").css({"z-index": 0})
//             $('#magazine').turn('previous')
//         }
// 	}else if (e.keyCode==39){
//         $("#magazine").css({"z-index":0});
//         $("#navigate-cover").css({"z-index": 0})
// 		$('#magazine').turn('next');			
// 	}
// });