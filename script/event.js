$(document).ready(function() {
    $("body").css({"height":screen.height/2});
    // $("#magazine").css({"margin-top":screen.height/2});
    // removeNextPrev()

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
                    console.log(page)
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

    $("#next").on("click", function () {
        $('#magazine').turn('next')
    })

    $("#previous").on("click", function () {
        const page = $('#magazine').turn('page')
        if (page === 2) {
            $("#magazine").css({"z-index":20});
            $("#navigate-cover").css({"z-index": 30})
            $('#magazine').turn('previous')
        } else {
            $("#magazine").css({"z-index":0});
            $("#navigate-cover").css({"z-index": 0})
            $('#magazine').turn('previous')
        }
    })

    $("#page5").click(function() {
        $('#magazine').turn("page", 5)
    });

    $("#page8").click(function() {
        $('#magazine').turn("page", 8)
    });

    $("#start-clear").on("click", function () {
        $('#magazine').turn("page", 3)
    })

    $("#clear-tab").on("click", function () {
        $('#magazine').turn("page", 3)
    })
    
    $("#connected-tab").on("click", function () {
        $('#magazine').turn("page", 9)
    })
    $("#capable-tab").on("click", function () {
        $('#magazine').turn("page", 10)
    })
    $("#courageous-tab").on("click", function () {
        $('#magazine').turn("page", 11)
    })

});

function removeNextPrev() {
    const page = $('#magazine').turn('view')
        if (page[0] === 0) {
            $("#magazine").css({"z-index":20});
            $("#navigate-cover").css({"z-index": 30})
        } 
}

$(document).bind('keydown', function(e){
    if (e.keyCode==37){
        const page = $('#magazine').turn('page')
        if (page === 2) {
            $("#magazine").css({"z-index":20});
            $("#navigate-cover").css({"z-index": 30})
            $('#magazine').turn('previous')
        } else {
            $("#magazine").css({"z-index":0});
            $("#navigate-cover").css({"z-index": 0})
            $('#magazine').turn('previous')
        }
	}else if (e.keyCode==39){
        $("#magazine").css({"z-index":0});
        $("#navigate-cover").css({"z-index": 0})
		$('#magazine').turn('next');			
	}
});