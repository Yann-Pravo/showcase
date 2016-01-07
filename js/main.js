$(document).ready(function($) {
    var instagramImgs = []
    instagram();

    function instagram() {
        data = $.extend({}, {
            access_token: "1145537800.45f327a.3d2e2d61ca0748d8b10e12044246d94c",
            client_id: "1145537800"
        });

        $.ajax({
            dataType: "jsonp",
            url: "https://api.instagram.com/v1/users/" + data.client_id + "/media/recent",
            data: data,
            success: function(response) {
                if (response) {
                    for (var i=0;i<response.data.length;i++) { 
                        instagramImgs.push(response.data[i])
                        if (i == 8) {
                            break;
                        }
                    }
                }
                writeInTable()
            }
        });
        return this;
    };

    function writeInTable() {
        j = 0
        var x=document.getElementById('table_instagram').insertRow(0);
        for (var i=0;i<instagramImgs.length;i++) {
            if(i == 4) {
                x=document.getElementById('table_instagram').insertRow(1);
                j = 0;
            }
            var y = x.insertCell(j);
            textCaption = ''
            if(instagramImgs[i].caption) {
                textCaption = instagramImgs[i].caption.text;
                if(textCaption.length > 150) {
                    textCaption = textCaption.slice(0,150)+"...";
                }
            }
            y.innerHTML = "<a href="+instagramImgs[i].link+"><div class='img_instagram' title=\""+textCaption+"\"><img src="+instagramImgs[i].images.low_resolution.url+"></div></a>";
            j++;
        }
    }
}(jQuery));

