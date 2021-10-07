 const baseMusic = [
     {
        'name': 'Hopeless',
        'artist': 'Azizi Gibson',
        'path': './src/audio/Hopeless.mp3',
        'album': 'Im Good On People',
        'foto': './src/album/azizi.jpg',
     },

     {
        'name': 'Fredo',
        'artist': 'Freddy',
        'path': './src/audio/Fredo.mp3',
        'album': 'Top Boy',
        'foto': './src/album/topboy.jpg',
     },

     {
        'name': 'Lil Bebe',
        'artist': 'DaniLeigh',
        'path': './src/audio/Lil Bebe.mp3',
        'album': 'Single',
        'foto': './src/album/lilbebe.jpg',
     },

     {
        'name': 'Cruel Intentions',
        'artist': 'Azizi Gibson',
        'path': './src/audio/Cruel Intentions.mp3',
        'album': 'Backward Books 2',
        'foto': './src/album/cruel.jpg',
     },

     {
        'name': 'Sicko Mode',
        'artist': 'Travis Scott  ',
        'path': './src/audio/sicko mode.mp3',
        'album': 'ASTROWORLD',
        'foto': './src/album/sickomode.jpg',
     },

     {
        'name': 'Shade',
        'artist': 'IAMDDB  ',
        'path': './src/audio/Shade.mp3',
        'album': 'Hoodrich',
        'foto': './src/album/shade.jpg',
     },

     {
        'name': 'AUU',
        'artist': 'Kayuá ft. Sain',
        'path': './src/audio/AU.mp3',
        'album': 'Single EP',
        'foto': './src/album/Auu.jpg',
     },

     {
        'name': 'Racks Studio',
        'artist': 'Derek',
        'path': './src/audio/Racks Studio.mp3',
        'album': 'FASHION VISUALIZER',
        'foto': './src/album/Derek.jpg',
     },

     {
        'name': 'Me Perdoa Mãe',
        'artist': 'Froid',
        'path': './src/audio/ME Perdoa Mãe.mp3',
        'album': 'Alaska',
        'foto': './src/album/froid.jpg',
     },
     
     {
        'name': 'What’s Your Pleasure?',
        'artist': 'Jessie Ware',
        'path': './src/audio/Jessie W.mp3',
        'album': 'EP',
        'foto': './src/album/J-Ware.jpg',
     },

     {
        'name': 'WHOOPTY',
        'artist': 'CJ',
        'path': './src/audio/CJ.mp3',
        'album': 'CJ SINGLE',
        'foto': './src/album/cj.jpg',
     },

     {
        'name': 'My Town',
        'artist': 'Baka Not Nice',
        'path': './src/audio/My Town.mp3',
        'album': 'Top Boy',
        'foto': './src/album/topboy.jpg',
     },
     {
        'name': '99999',
        'artist': 'XXX 9999',
        'path': './src/audio/999.mp3',
        'album': 'XXXX',
        'foto': './src/album/999.jpg',
     },


     {
        'name': 'What’s Your Pleasure?',
        'artist': 'Jessie Ware',
        'path': './src/audio/Jessie W.mp3',
        'album': 'EP',
        'foto': './src/album/J-Ware.jpg',
     },
     {
        'name': 'Fredo',
        'artist': 'Freddy',
        'path': './src/audio/Fredo.mp3',
        'album': 'Top Boy',
        'foto': './src/album/topboy.jpg',
     },
     {
        'name': 'Hopeless',
        'artist': 'Azizi Gibson',
        'path': './src/audio/Hopeless.mp3',
        'album': 'Im Good On People',
        'foto': './src/album/azizi.jpg',
     },
     {
        'name': 'AUU',
        'artist': 'Kayuá, ft. Sain',
        'path': './src/audio/AU.mp3',
        'album': 'Single EP',
        'foto': './src/album/Auu.jpg',
     },
     {
        'name': 'Lil Bebe',
        'artist': 'DaniLeigh',
        'path': './src/audio/Lil Bebe.mp3',
        'album': 'Single',
        'foto': './src/album/lilbebe.jpg',
     },

     {
      'name': 'Coming In Hot',
      'artist': 'Andy Mineo, ft. Lecrae',
      'path': './src/audio/Coming In Hot.mp3',
      'album': 'Single',
      'foto': './src/album/CHot.jpg',
   },

 
 ];



const musiclist = document.querySelector('.musiclist');

const music_number = document.querySelector('.music_number');
music_number.innerHTML = `<p>${baseMusic.length} songs`;


const audio = document.getElementById('audio');
const firstMusic = baseMusic[0];
audio.src = firstMusic.path;

atPlay(baseMusic[0].name,baseMusic[0].artist, baseMusic[0].foto)

let playing = 0;


function playlist(music, musicId) {
    const description = document.createElement('li');
    const nameMusic = document.createElement('p');
    const nameArtist = document.createElement('p');
    const nameAlbum = document.createElement('p');

    description.dataset.id = musicId;

    nameMusic.className = 'name-music'
    nameMusic.innerText = music.name
    nameArtist.innerText = music.artist
    nameAlbum.innerText = music.album

    description.appendChild(nameMusic);
    description.appendChild(nameArtist);
    description.appendChild(nameAlbum);

    description.addEventListener('click', startMusic);
    

    musiclist.appendChild(description);

    

}

for(let cont = 0; cont < baseMusic.length; cont++) {
    playlist(baseMusic[cont], cont)
}


//SELECÃO ::: EM BREVE   ////



// BTN PLAY //
const btnPlay = document.getElementById('btn-play')
function startMusic(event) {
    const clickMusic = event.currentTarget

    if(clickMusic.tagName === 'LI'){
        const musicId = clickMusic.dataset.id
        const selectedMusic = baseMusic[musicId]
    
        audio.src = selectedMusic.path
        playing = Number(musicId)
        audio.play()
        btnPlay.classList.add('pause')
        atPlay(baseMusic[musicId].name,baseMusic[musicId].artist,baseMusic[musicId].foto)

    } else{
        if(audio.paused){
            audio.play()
            btnPlay.classList.add('pause')

        } else{
            audio.pause()
            btnPlay.classList.remove('pause')
        }
    }
}

btnPlay.addEventListener('click', startMusic)


// BTN PAUSE //
const btnStop = document.getElementById('btn-pause')
function stopMusic() {
    audio.pause()
    btnPlay.classList.remove('pause')
}

btnStop.addEventListener('click', stopMusic)



// BTN NEXT //
const btnNext = document.getElementById('btn-next')
function nextMusic() {
    if(playing === baseMusic.length - 1) {
        playing = 0
    }else{
        playing++
    }

    audio.src = baseMusic[playing].path
    audio.play()

    let n_music = baseMusic[playing].name
    let n_artist = baseMusic[playing].artist
    let img_cd = baseMusic[playing].foto

    atPlay(n_music, n_artist, img_cd)
}

btnNext.addEventListener('click', nextMusic)


// BTN PREV //
const btnPrev = document.getElementById('btn-prev')
function prevMusic() {
    if(playing === 0) {
        playing = baseMusic.length - 1
    }else{
        playing--
    }

    audio.src = baseMusic[playing].path
    audio.play()
    let n_music = baseMusic[playing].name
    let n_artist = baseMusic[playing].artist
    let img_cd = baseMusic[playing].foto

    atPlay(n_music, n_artist, img_cd)
}

 btnPrev.addEventListener('click', prevMusic)


 //VOLUME CONTROLS//
 const vol = document.querySelector('.vol input')

 vol.addEventListener("event", () => {
    audio.volume = vol.value

 })

// ATUALIZAÇÃO //
 function atPlay(music, name, foto) {
     const n_music = document.getElementById('n_music')
     const n_artist = document.getElementById('n_artist')
     const img_cd = document.getElementById('img_cd')

     n_music.innerText = music
     n_artist.innerText = name
     img_cd.src = foto
     
 }
