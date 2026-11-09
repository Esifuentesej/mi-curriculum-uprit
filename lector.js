function previewImage(objeto) {
    if (objeto && objeto.files && objeto.files[0]) {
        var lector = new FileReader();
        lector.onload = function(e) {
            document.getElementById('imgPreview').src = e.target.result;
            document.getElementById('imgPreview').style.display = 'block';
            document.getElementById('placeholderText').style.display = 'none';
        };
        lector.readAsDataURL(objeto.files[0]);
    }
}

function clearFotoPreview() {
    document.getElementById('imgPreview').src = '';
    document.getElementById('imgPreview').style.display = 'none';
    document.getElementById('placeholderText').style.display = 'block';
}
