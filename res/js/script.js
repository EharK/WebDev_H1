$(function () {

    $.get("https://api.npoint.io/66985d0c9e57529863de", function(json_obj) {
        console.log(json_obj)
        for (let obj of json_obj) {
            console.log(obj)

            let section = $('<section>');
            let div = $('<div class="flex-container">');
            let div_post = $('<div class="post">');
            let div_img = $('<div class="img">');
            let div_comment = $('<div class="comment">');
            let p1 = $('<p>').text(obj.AuthorName);
            let p2 = $('<p>').text(obj.Time);
            let h1 = $('<h1>').text(obj.title);
            let img = $('<img>').attr("src", obj.body);

            div_post.append(p2);
            div_post.append(p1);
            div_post.append(h1);
            div_img.append(img);
            div.append(div_post).append(div_img).append(div_comment);
            section.append(div) 

            $('body').append(section);
        }
    })

});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}