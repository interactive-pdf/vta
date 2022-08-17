$(document).ready(function() {
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
        $('#magazine').turn('previous')
    })
});

$(document).bind('keydown', function(e){
	if (e.keyCode==37){
		$('#magazine').turn('previous')
	}else if (e.keyCode==39){
		$('#magazine').turn('next');			
	}
});