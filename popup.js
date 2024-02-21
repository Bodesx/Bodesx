//Video Popup
    $('.video-btn').click(function(){
        $('.video-popup').fadeIn();
        $('#iframeHolder').html('');
        var link = $(this).attr("link");
        $('#iframeHolder').html('<iframe src="'+link+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
$('.close-video').click(function(){
        $('.video-popup').fadeOut();
        $('#iframeHolder').html('');
    });



     function Circlle(el) {
            $(el).circleProgress({
                    fill: {
                        color: '#0F4755'
                    }
                })
                .on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
                });
        };

        Circlle('.round');