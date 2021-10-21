$(function () {

    $.get("res/json/posts.json", function(json_obj) {
        console.log(json_obj)
        for (let obj of json_obj) {
            console.log(obj)
            let div = $('<div class="post">');
            let h1 = $('<h1>').text(obj.title);
            let p = $('<p>').text(obj.body);

            div.append(h1);
            div.append(p);

            $('body').append(div);
        }
    })

});