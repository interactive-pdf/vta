$(document).ready(function() {
    $("body").css({"height":screen.height/2});
    // $("#magazine").css({"margin-top":screen.height/2});

    $("#magazine").bind('start', function (event, pageObject, corner){
        if (pageObject.page === 8 || pageObject.page === 9 || pageObject.page === 10 || pageObject.page === 11) {
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
                    } else {
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

    $("#page8").click(function() {
        $('#magazine').turn("page", 8)
        removeNextPrev()
    });

    $("#start-clear").on("click", function () {
        $('#magazine').turn("page", 3)
        removeNextPrev()
    })

    $("#clear-tab").on("click", function () {
        $('#magazine').turn("page", 3)
        removeNextPrev()
    })
    
    $("#connected-tab").on("click", function () {
        $('#magazine').turn("page", 9)
        removeNextPrev()
    })

    $("#capable-tab").on("click", function () {
        $('#magazine').turn("page", 10)
        removeNextPrev()
    })

    $("#courageous-tab").on("click", function () {
        $('#magazine').turn("page", 11)
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
    if (page[0] === 0 || page[0] === 9 || page[0] === 10 || page[0] === 11) {
        $("#next").css({"display":"none"})
        $("#previous").css({"display":"none"})
        $("#magazine").css({"z-index":20});
        $("#navigate-cover").css({"z-index": 30})
        $("#navigate-to-home").css({"z-index":30})
    } else if (page[0] === 8) {
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