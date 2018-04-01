$("#save_data").click(function() {

});

$("#file_add").click(function() {
    $("#file_add_area").append(
        '<div class="form-group">'+
            '<div class="col-md-11">'+
                '<div class="form-group">'+
                    '<label>File</label>'+
                    '<input name="file[]" type="file" class="form-control border-input">'+
                '</div>'+
            '</div>'+
            '<div class="col-md-1">'+
                '<div class="form-group text-center">'+
                    '<label>Del</label>'+
                    '<a class="text-danger file_delete" href="#" onclick="$(this).parent().parent().parent().remove();" style="font-size: 20px;"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
});

$("#image_add").click(function() {
    $("#image_add_area").append(
        '<div class="form-group">'+
            '<div class="col-md-8">'+
                '<div class="form-group">'+
                    '<label>File</label>'+
                    '<input name="imageFile[]" type="file" onchange="imageFileOnChange(this);" class="form-control border-input" accept="image/jpeg,image/jpg,image/gif,image/png">'+
                '</div>'+
            '</div>'+
            '<div class="col-md-3 preview">'+
                '<div class="form-group preview">'+
                    '<img class="image_preview" width="100%" />'+
                '</div>'+
            '</div>'+
            '<div class="col-md-1">'+
                '<div class="form-group text-center">'+
                    '<label>Del</label>'+
                    '<a class="text-danger image_delete" href="#" onclick="$(this).parent().parent().parent().remove();" style="font-size: 20px;"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
});

function imageFileOnChange(input){
    if(input.value == ""){
        $(input).parent().parent().parent().children('.preview').children('.preview').children('.image_preview').attr('src', '');
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        $(input).parent().parent().parent().children('.preview').children('.preview').children('.image_preview').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
}

function sendComment(){
    var message = '<div class="form-group">'+
                    '<p class="category">神の領域 says:</p>'+
                    '<p class="description">'+$('#comment').val()+'</p>'+
                  '</div>';
    $('#messageBoard').append(message);
    $('#comment').val("");
}

function initMap() {
    if($('input[name="address"]').val() != ""){
        marking();
    } else {
        var uluru = {lat: 23.4857501, lng: 120.0843006};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: uluru
        });
    }
}

function marking(){
    var htmlAddress = "https://maps.googleapis.com/maps/api/geocode/json?address="+$('input[name="address"]').val()+"&key=AIzaSyDU1RvYVezuY1WPX5lqX__InSPPGRTRH9w";
    $.ajax({
        url: htmlAddress,
        processData: false,
        contentType: false,
        type: "POST",
        success: function(msg) {
            console.log(msg);
            if(msg['status'] == "OK"){
                var pos = msg['results'][0]["geometry"]["location"];
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                    center: pos
                });
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
                console.log("success");
            } else {
                console.log("error");
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log("error");
        }
    });
}