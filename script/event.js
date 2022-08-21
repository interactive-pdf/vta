$(document).ready(function() {
    $("body").css({"height":screen.height/2});
    // $("#magazine").css({"margin-top":screen.height/2});

    $("#magazine").bind('start', function (event, pageObject, corner){
        if (pageObject.page === 24 || pageObject.page === 25 || pageObject.page === 26 || pageObject.page === 27) {
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
                    } else if (page === 4) {
                        $("#index-clear").css({"z-index": 30})
                    } else {
                        $("#index-clear").css({"z-index": 0})
                        $("#magazine").css({"z-index":0});
                        $("#navigate-cover").css({"z-index": 0})
                    }
                // console.log('Current view: ', $(this).turn('view'));
            }
        }
    });

    $("#home").click(function() {
        $('#magazine').turn("page", 1)
    });

    $("#next").on("click", function (e) {
        $('#magazine').turn('next')
        removeNextPrev()
    })

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

    $("#page5").click(function() {
        $('#magazine').turn("page", 5)
        removeNextPrev()
    });

    $("#page6").click(function() {
        $('#magazine').turn("page", 6)
        removeNextPrev()
    });

    $("#page9").click(function() {
        $('#magazine').turn("page", 9)
        removeNextPrev()
    });

    $("#page11").click(function() {
        $('#magazine').turn("page", 11)
        removeNextPrev()
    });

    $("#page14").click(function() {
        $('#magazine').turn("page", 14)
        removeNextPrev()
    });

    $("#page16").click(function() {
        $('#magazine').turn("page", 16)
        removeNextPrev()
    });

    $("#page17").click(function() {
        $('#magazine').turn("page", 17)
        removeNextPrev()
    });

    $("#page19").click(function() {
        $('#magazine').turn("page", 19)
        removeNextPrev()
    });

    $("#page21").click(function() {
        $('#magazine').turn("page", 21)
        removeNextPrev()
    });

    $("#page22").click(function() {
        $('#magazine').turn("page", 22)
        removeNextPrev()
    });

    $("#page23").click(function() {
        $('#magazine').turn("page", 23)
        removeNextPrev()
    });

    $("#page24").click(function() {
        $('#magazine').turn("page", 24)
        removeNextPrev()
    });

    $("#start-clear").on("click", function () {
        $('#magazine').turn("page", 2)
        removeNextPrev()
    })

    $("#clear-tab").on("click", function () {
        $('#magazine').turn("page", 2)
        removeNextPrev()
    })
    
    $("#connected-tab").on("click", function () {
        $('#magazine').turn("page", 25)
        removeNextPrev()
    })

    $("#capable-tab").on("click", function () {
        $('#magazine').turn("page", 26)
        removeNextPrev()
    })

    $("#courageous-tab").on("click", function () {
        $('#magazine').turn("page", 27)
        removeNextPrev()
    })

    $("#navigate-to-home").on("click", function () {
        $('#magazine').turn("page", 1)
        $("#navigate-to-home").css({"z-index":0})
        removeNextPrev()
    })
});

function removeNextPrev() {
    const page = $('#magazine').turn('view')
    if (page[0] === 0 || page[0] === 25 || page[0] === 26 || page[0] === 27) {
        $("#next").css({"display":"none"})
        $("#previous").css({"display":"none"})
        $("#magazine").css({"z-index":20});
        $("#navigate-cover").css({"z-index": 30})
        $("#navigate-to-home").css({"z-index":30})
    } else if (page[0] === 24) {
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