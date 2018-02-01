(function() {
    var start_time = null;

    var img_rabbit = document.createElement('img');
    img_rabbit.setAttribute('src', 'images/rabbit/rabbit.png');
    img_rabbit.setAttribute('style', 'position:fixed; bottom:0px; left: 0px; height:15%; display:none');
    var img_turtle = document.createElement('img');
    img_turtle.setAttribute('src', 'images/rabbit/turtle.png');
    img_turtle.setAttribute('style', 'position:fixed; bottom:0px; left: 0px; height:15%; display:none');
    document.body.appendChild(img_turtle);
    document.body.appendChild(img_rabbit);

    setInterval(function(){
        if (start_time) {
            var alloted_time = Reveal.getConfig().alloted_time;
            if (alloted_time) {
                img_turtle.style.display = '';
                img_turtle.style.left = (window.innerWidth - img_turtle.width) * ((Date.now()-start_time) / 1000 / alloted_time) + "px";
            } else {
                img_turtle.style.display = 'none';
            }
        }
    }, 500);

    var rabbit = function(current_page) {
        if (!start_time) {
            var re = /rabbit_start_time=(\d+)/;
            if (current_page > 0 && document.cookie.match(re)) {
                start_time = parseInt(document.cookie.match(re)[1]);
            } else {
                start_time = Date.now();
                document.cookie = 'rabbit_start_time='+start_time;
            }
        }
        var total_page = Reveal.getTotalSlides();
        img_rabbit.style.display = '';
        img_rabbit.style.left = (window.innerWidth - img_rabbit.width) * (current_page / (total_page - 1)) + "px";
    }
    var current_page = Reveal.getIndices().h
    if (current_page == 0) {
        if (!start_time) {
            document.cookie = 'rabbit_start_time=';
        }
    } else {
        setTimeout(function(){rabbit(current_page)}, 0);
    }
    Reveal.addEventListener('slidechanged', function(event){rabbit(event.indexh)});
}());

