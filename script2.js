document.getElementById("recommendBtn").addEventListener("click", function() {
    const mood = document.getElementById("mood").value;
    const genre = document.getElementById("genre").value;
    const weather = document.getElementById("weather").value;

    const recommendation = getRecommendation(mood, genre, weather);

    // 추천된 노래와 앨범 표지 표시
    const songList = document.getElementById("songList");
    const albumCover = document.getElementById("albumCover");
    const spotifyLink = document.getElementById("spotifyLink");
    const melonLink = document.getElementById("melonLink");
    
    songList.innerHTML = ""; // 기존 추천 리스트를 지웁니다.

    // 하나의 곡만 추천
    const songItem = document.createElement("li");
    songItem.textContent = recommendation.song;
    songList.appendChild(songItem);

    // 앨범 표지 설정
    albumCover.src = recommendation.albumCover;

    // 링크 설정
    spotifyLink.href = recommendation.spotifyLink;
    melonLink.href = recommendation.melonLink;

    // 링크를 보이게 설정
    spotifyLink.style.display = "block";
    melonLink.style.display = "block";
});

function getRecommendation(mood, genre, weather) {
    // 곡 추천 데이터
    const recommendations = {
        "happy": {
            "pop": {
                song: "Happy - Pharrell Williams",
                albumCover: "https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg",
                spotifyLink: "https://open.spotify.com/track/your_track_id",
                melonLink: "https://www.melon.com/album/detail.htm?albumId=2223220#"
            },
            "rock": {
                song: "Don't Stop Believin' - Journey",
                albumCover: "https://link-to-dont-stop-believin-album-cover.com/rock.jpg",
                spotifyLink: "https://open.spotify.com/track/your_track_id",
                melonLink: "https://www.melon.com/song/detail.htm?songId=your_song_id"
            },
            // 다른 장르에 대한 추천 추가
        },
        "sad": {
            "pop": {
                song: "Someone Like You - Adele",
                albumCover: "https://link-to-someone-like-you-album-cover.com/sad-pop.jpg",
                spotifyLink: "https://open.spotify.com/track/your_track_id",
                melonLink: "https://www.melon.com/song/detail.htm?songId=your_song_id"
            },
            "rock": {
                song: "The Sound of Silence - Simon & Garfunkel",
                albumCover: "https://link-to-sound-of-silence-album-cover.com/rock-sad.jpg",
                spotifyLink: "https://open.spotify.com/track/your_track_id",
                melonLink: "https://www.melon.com/song/detail.htm?songId=your_song_id"
            },
            // 다른 장르에 대한 추천 추가
        },
        // 다른 기분, 장르, 날씨에 대한 추천 추가
    };

    const weatherSongs = {
        "sunny": {
            song: "Here Comes the Sun - The Beatles",
            albumCover: "https://link-to-here-comes-the-sun-album-cover.com/sunny.jpg",
            spotifyLink: "https://open.spotify.com/track/your_track_id",
            melonLink: "https://www.melon.com/song/detail.htm?songId=your_song_id"
        },
        "rainy": {
            song: "Rainy Days and Mondays - The Carpenters",
            albumCover: "https://link-to-rainy-days-album-cover.com/rainy.jpg",
            spotifyLink: "https://open.spotify.com/track/your_track_id",
            melonLink: "https://www.melon.com/song/detail.htm?songId=your_song_id"
        },
        // 다른 날씨에 대한 추천 추가
    };

    // 감정, 장르, 날씨에 맞는 추천을 반환
    const moodSong = recommendations[mood] ? recommendations[mood][genre] : null;
    const weatherSong = weatherSongs[weather] || null;

    // 두 가지 조건을 고려하여 곡을 선택
    return moodSong || weatherSong;
}
