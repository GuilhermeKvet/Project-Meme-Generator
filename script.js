function textMeme() {

    let text = document.getElementById('text-input');
    let paragraph = document.getElementById('meme-text');

    text.addEventListener('input', function () {
        paragraph.innerText = text.value;
    })
}
textMeme();

function uploadImg() {
    const leitor = new FileReader(),
        imageActual = document.getElementById('meme-image'),
        image = document.getElementById('meme-insert'),
        button = document.getElementById('update');

    function updateImg() {

        let imageSelected = image.files[0];

        leitor.readAsDataURL(imageSelected);

        leitor.addEventListener('loadend', function (load) {
            imageActual.src = load.target.result

        })
    }
    button.addEventListener('click', function () {
        updateImg();
    })
}
uploadImg();