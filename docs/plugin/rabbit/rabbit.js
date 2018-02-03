(function() {
    var start_time = null;

    var img_rabbit = document.createElement('img');
    img_rabbit.setAttribute('id', 'rabbit-rabbit');
    img_rabbit.setAttribute('style', 'position:fixed; bottom:0px; left: 0px; visibility:hidden');

    var img_turtle = document.createElement('img');
    img_turtle.setAttribute('id', 'rabbit-turtle');
    img_turtle.setAttribute('style', 'position:fixed; bottom:0px; left: 0px; visibility:hidden');

    document.body.appendChild(img_turtle);
    document.body.appendChild(img_rabbit);

    // CSS background-image の URL を src に設定して background-image を削除
    var set_image_src = function(img) {
        var bg_image_url = window.getComputedStyle(img).backgroundImage.match(/^url\(\"([^\"]*)\"\)/);
        if (bg_image_url) {
            img.src = bg_image_url[1];
            img.style.backgroundImage = 'none';
        }
    }

    set_image_src(img_rabbit);
    set_image_src(img_turtle);

    setInterval(function(){
        if (start_time) {
            var alloted_time = Reveal.getConfig().alloted_time;
            if (alloted_time) {
                var left = (window.innerWidth - img_turtle.width) * ((Date.now()-start_time) / 1000 / alloted_time) * 100 / window.innerWidth;
                if (left > 100) {
                    img_turtle.style.visibility = 'hidden';
                } else {
                    img_turtle.style.visibility = 'visible';
                    img_turtle.style.left = left + '%';
                }
            } else {
                img_turtle.style.visibility = 'visible';
            }
        }
    }, 500);

    var display_rabbit = function(current_page) {
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
        var left = (window.innerWidth - img_rabbit.width) * (current_page / (total_page - 1)) * 100 / window.innerWidth;
        img_rabbit.style.visibility = 'visible';
        img_rabbit.style.left = left + '%';
    }
    var current_page = Reveal.getIndices().h
    if (current_page == 0) {
        if (!start_time) {
            document.cookie = 'rabbit_start_time=';
        }
    } else {
        setTimeout(function(){display_rabbit(current_page)}, 0);
    }
    Reveal.addEventListener('slidechanged', function(event){display_rabbit(event.indexh)});
}());
