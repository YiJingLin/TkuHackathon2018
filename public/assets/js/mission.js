$("#save_data").click(function() {

});

$("#file_add").click(function() {
    $("#file_add_area").append(
        '<div class="form-group">'+
            '<div class="col-md-12">'+
                '<div class="form-group">'+
                    '<label>File</label>'+
                    '<div class="input-group mb-3">'+
                        '<input name="file[]" type="file" class="form-control border-input">'+
                        '<div class="input-group-append">'+
                            '<button class="form-control text-danger image_delete" href="#" onclick="$(this).parent().parent().parent().parent().parent().remove();" style="font-size: 20px;">Delete</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
});

$("#image_add").click(function() {
    $("#image_add_area").append(
        '<div class="form-group">'+
            '<div class="col-md-12">'+
                '<div class="form-group">'+
                    '<label>File</label>'+
                    '<div class="input-group mb-3">'+
                        '<input name="imageFile[]" type="file" onchange="imageFileOnChange(this);" class="form-control border-input" accept="image/jpeg,image/jpg,image/gif,image/png">'+
                        '<div class="input-group-append">'+
                            '<button class="form-control text-danger image_delete" href="#" onclick="$(this).parent().parent().parent().parent().parent().remove();" style="font-size: 20px;">Delete</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="col-md-4 preview">'+
                '<div class="form-group preview">'+
                    '<img class="image_preview" width="100%" />'+
                '</div>'+
            '</div>'+
        '</div>'
    );
});

function imageFileOnChange(input){
    if(input.value == ""){
        $(input).parent().parent().parent().parent().children('.preview').children('.preview').children('.image_preview').attr('src', '');
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        $(input).parent().parent().parent().parent().children('.preview').children('.preview').children('.image_preview').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
}
