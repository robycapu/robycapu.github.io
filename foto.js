let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let a = document.querySelector("#a");
let canvas = document.querySelector("#canvas");

async function mostra_camera() {
      let stream = await navigator.mediaDevices.getUserMedia({
            video: {
                  width: {
                        min: 1280,
                        ideal: 1920,
                        max: 2560,
                  },
                  height: {
                        min: 720,
                        ideal: 1080,
                        max: 1440
                  },
                  facingMode:  { exact: "environment" }
            }, audio: false
      });
      video.srcObject = stream;
}
mostra_camera()

click_button.addEventListener('click', function () {
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      video.style.display = 'none';
      click_button.dysplay = 'none';
      a.style.display = 'none'

      const contenitore = document.querySelector('#contenitore');
      contenitore.style.display = 'none';

      const contenitore_img = document.querySelector('#contenitore_img');
      contenitore_img.style.display = 'block';


      const selezione = document.querySelector('#selezione');
      selezione.style.display = 'grid';
});


function salva() {
      if(localStorage.getItem('count')){
            count = parseInt(localStorage.getItem('count'));
            console.log('count: ' + count)
      }
      const text = document.querySelector("#descrizione")
      if (text.value === '') {
            alert('Inserisci una piccola descrizione');
      } else {
            localStorage.setItem("img" + count, canvas.toDataURL('image/png'))
            localStorage.setItem("text" + count, text.value)
            localStorage.setItem("count", count + 1);
            window.location.href = 'index.html';
      }

}