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

function buttonFire(){
    let button = document.getElementById('fire');
    let container = document.getElementById('meme-image-container');

    button.addEventListener('click', function(){
        container.className = 'fire';
    })
}
buttonFire();

function buttonWater(){
    let button = document.getElementById('water');
    let container = document.getElementById('meme-image-container');

    button.addEventListener('click', function(){
        container.className = 'water';
    })
}
buttonWater();

function buttonEarth(){
    let button = document.getElementById('earth');
    let container = document.getElementById('meme-image-container');

    button.addEventListener('click', function(){
        container.className = 'earth';
    })
}
buttonEarth();

function buttonBlack(){
    let button = document.getElementById('black');
    let container = document.getElementById('meme-image-container');

    button.addEventListener('click', function(){
        container.className = 'black';
    })
}
buttonBlack();

function meme1 (){
    let meme = document.getElementById('meme-1');
    let image = document.getElementById('meme-image');

    meme.addEventListener('click', function(){
        image.src = meme.src
    })
}
meme1();

function meme2 (){
    let meme = document.getElementById('meme-2');
    let image = document.getElementById('meme-image');

    meme.addEventListener('click', function(){
        image.src = meme.src
    })
}
meme2();

function meme3 (){
    let meme = document.getElementById('meme-3');
    let image = document.getElementById('meme-image');

    meme.addEventListener('click', function(){
        image.src = meme.src
    })
}
meme3();

function meme4 (){
    let meme = document.getElementById('meme-4');
    let image = document.getElementById('meme-image');

    meme.addEventListener('click', function(){
        image.src = meme.src
    })
}
meme4();