  document.getElementById(`imahe`).addEventListener(`click`, function() {
    var audio = new Audio();
    audio.src = `ms.mp3`;
    audio.play();
    document.getElementById(`ikot`).innerHTML = `<img id="imahe" class="img-fluid rounded-circle d-block mx-auto ikot" src="https://e7.pngegg.com/pngimages/498/444/png-clipart-itachi-uchiha-sharingan-uchiha-clan-naruto-sharingan-manga-video-game.png" alt="Farrow's Picture" style="width: 400px;">`;
  });
