const searchSongs = async () => {
    const searchText = document.getElementById('searchBox').value;
   const url = `https://api.lyrics.ovh/suggest/:${searchText}`
//    load data
//   fetch(url)
//   .then(res => res.json())
//   .then(data => displaySongs(data.data));
    const res = await fetch(url);
    const data = await res.json();
    displaySongs(data.data);
}

const displaySongs = songs => {

    const songContainer = document.getElementById("songContainer");
    songContainer.innerHTML = '';
    songs.forEach(song => {
       const songDiv = document.createElement("div");
       songDiv.className= 'single-result row align-items-center my-3 p-3';
      songDiv.innerHTML =`
      <div class="col-md-9">
      <h3 class="lyrics-name">${song.title}</h3>
      <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
            <audio controls>
            <source src="${song.preview}" type="audio/mpeg">
            </audio>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>

      
      `;
       songContainer.appendChild(songDiv);
        
        
    });
}

    // const getLyric= (artist, title) =>
    // fetch(url)
      // .then(res => res.json())
      // .then(data =>displayLyrics(data.lyrics));
    //   displayLyrics(data.lyrics);
    // }

        const getLyric= async (artist, title) =>{
        const url = ` https://api.lyrics.ovh/v1/:${artist}/:${title}`;
        const res = await fetch(url)
  
        const data = await res.json()
    
    displayLyrics(data.lyrics);
}

// load lyrics
const displayLyrics = lyrics =>{
    const lyricsDiv = document.getElementById("lyrics");
    lyricsDiv.innerText = lyrics;
}