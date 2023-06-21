
const SongsManager = function () {

    let _link = "https://www.youtube.com/watch?v="
    const songs = {
    }

    const addSong = (songName, wholeLink) => {songs[songName] = wholeLink.replace(_link, '')}
    const getSong = (songName) => console.log(_link + songs[songName]);

    return {
        addSong: addSong,
        getSong: getSong    
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax")
