window.onload = function () {
  fetchMusic();
  fetchPlaylist();
};
let playlistSongs = [];
let rootURL = "http://localhost:3000/api/";
let currentSong;

/* <<<===***--- Search song ---***===>>> */
function searchSong() {
  let title = document.getElementById("search-song").value;
  fetch(`${rootURL}music?search=${title}`, {
    headers: new Headers({
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    }),
  })
    .then((response) => response.json())
    .then((songs) => renderSongs(songs, "song-list", "add"));

  // *** Error handling #1 still bugs !!!
  // .then((response) => {
  //   if (response.ok) {
  //     response.json().then((songs) => renderSongs(songs, "song-list", "add"));
  //   }
  //   throw new Error(response.statusText);
  // })
  // .catch((error) => alert(error));

  // ** Error handling #2 still bugs !!!
  // .then((response) => {
  //   if (response.ok) {
  //     response.json();
  //   }
  //   throw new Error(response.statusText);
  // })
  // .then((songs) => renderSongs(songs, "song-list", "add"))
  // .catch((error) => alert(error));
}

/* <<<===***--- LOG OUT ---***===>>> */
function logOut() {
  localStorage.removeItem("accessToken");
  window.location.reload();
}

/* <<<===***--- ADD/FETCH TO TOP MUSIC TABLE ---***===>>> */
async function fetchMusic() {
  let result = await fetch(`${rootURL}music`, {
    headers: new Headers({
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    }),
  });

  let response = await result.json();
  renderSongs(response, "song-list", "add");
}

/* <<<===***--- ADD/FETCH TO PLAY LIST ---***===>>> */
async function fetchPlaylist() {
  let result = await fetch(`${rootURL}playlist`, {
    headers: new Headers({
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    }),
  });

  let response = await result.json();
  playlistSongs = response; // *** All songs saved in global array ***
  renderSongs(response, "playlist-table", "remove");
}

/* <<<===***--- Render songs depend on which table and type ---***===>>> */
function renderSongs(songs, table, type) {
  const songTable = document.getElementById(table);
  if (type === "add") {
    songTable.innerHTML = `<tr class="table-success">
    <th class="table-success">ID</th>
    <th class="table-success">Title</th>
    <th class="table-success">Release Date</th>
    <th class="table-success">Actions</th>
  </tr>`;
  } else {
    songTable.innerHTML = `<tr class="table-success">
  <th class="table-success">Index</th>
  <th class="table-success">Title</th>
  <th class="table-success" style="text-align: center">Actions</th>
  <th class="table-success"></th>
</tr>`;
  }

  let songList = ""; // later, concat on <th> tag
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    songList += `
      <tr class="table-primary">
          <td class="table-info">${i + 1}</td>
          <td class="table-info">${song.title}</td>`;

    if (type === "add") {
      songList += `<td class="table-info">${song.releaseDate}</td><td class="table-info"><button class="btn-success" onclick="addSong('${song.id}')">+</button></td>`;
    } else if (type === "remove") {
      songList += `<td class="table-info"><button class="btn-danger" onclick="removeSong('${song.songId}')">-</button></td>`;
      songList += `<td class="table-info"><button class="btn-primary" onclick="addToPlayer('${song.id}')">></button></td>`;
    }

    songList += `</tr>`;
  }
  songTable.innerHTML += songList; // new <tr> row added/concat on type of <th> in type of tables
}

/* <<<===***--- ADD SONG INTO PLAYLIST FROM MUSIC TABLE ---***===>>> */
async function addSong(id) {
  let result = await fetch(`${rootURL}playlist/add`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      songId: id, // have to in "" JSON
    }),
  });

  let response = await result.json();
  playlistSongs = response; // *** Only choosen songs in global array ***
  renderSongs(response, "playlist-table", "remove");
}

/* <<<===***--- REMOVE SONG FROM PLAY LIST ---***===>>> */
async function removeSong(id) {
  let result = await fetch(`${rootURL}playlist/remove`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      songId: id, // have to in "" JSON
    }),
  });

  let response = await result.json();
  playlistSongs = response; // *** Updated choosen songs in global array ***
  renderSongs(response, "playlist-table", "remove");
}

/* <<<===***--- ON THE Music Player ---***===>>> */

function addToPlayer(id) {
  currentSong = playlistSongs.find((item) => item.id === id);

  const musicPlayer = document.getElementById("music-player");
  const songTitle = document.getElementById("playing");
  const src = document.getElementById("srcURL");
  const info = document.getElementById("info");

  src.src = "http://localhost:3000/" + currentSong.urlPath;
  songTitle.innerHTML = currentSong.title;
  info.innerHTML = `${currentSong.urlPath}
    ... Title: ${currentSong.title}`;

  musicPlayer.load();
  musicPlayer.play();
  // console.log("currentSong", currentSong);
  // console.log("currentSong.id", currentSong.id);
  // console.log("playlistSongs.id", playlistSongs[0 + 1]);
}

/* <<<===***--- MUSIC PLAYER CONTROLLERS ---***===>>> */
function playNextSong() {
  const musicPlayer = document.getElementById("music-player");
  const songTitle = document.getElementById("playing");
  const src = document.getElementById("srcURL");
  const info = document.getElementById("info");

  fetch(`${rootURL}playlist`, {
    headers: new Headers({
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    }),
  })
    .then((response) => response.json())
    .then((songs) => {
      for (let song = 0; song < songs.length; song++) {
        if (songs[song].id === currentSong.id) {
          console.log(songs[song]);
          currentSong = songs[song + 1];

          src.src = "http://localhost:3000/" + currentSong.urlPath;
          songTitle.innerHTML = currentSong.title;
          info.innerHTML = `${currentSong.urlPath}
                    ... Title: ${currentSong.title}`;
          musicPlayer.load();
          musicPlayer.play();
        }
      }
    });
}
function playPreSong() {
  const musicPlayer = document.getElementById("music-player");
  const songTitle = document.getElementById("playing");
  const src = document.getElementById("srcURL");
  const info = document.getElementById("info");

  fetch(`${rootURL}playlist`, {
    headers: new Headers({
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    }),
  })
    .then((response) => response.json())
    .then((songs) => {
      for (let song = 0; song < songs.length; song++) {
        if (songs[song].id === currentSong.id) {
          console.log(songs[song]);
          currentSong = songs[song - 1];

          src.src = "http://localhost:3000/" + currentSong.urlPath;
          songTitle.innerHTML = currentSong.title;
          info.innerHTML = `${currentSong.urlPath}
                    ... Title: ${currentSong.title}`;
          musicPlayer.load();
          musicPlayer.play();
        }
      }
    });
}

function repeatSongs() {
  const musicPlayer = document.getElementById("music-player");
  musicPlayer.loop = true;
}

// function shuffleSongs() {
//   const musicPlayer = document.getElementById("music-player");
//   const songTitle = document.getElementById("playing");
//   const src = document.getElementById("srcURL");
//   const info = document.getElementById("info");

//   fetch(`${rootURL}playlist`, {
//     headers: new Headers({
//       Authorization: "Bearer " + localStorage.getItem("accessToken"),
//     }),
//   })
//     .then((response) => response.json())
//     .then((songs) => {
//       let currentSong = Math.floor(Math.random() * songs.length + 1);

//       src.src = "http://localhost:3000/" + currentSong.urlPath;
//       songTitle.innerHTML = currentSong.title;
//       info.innerHTML = `${currentSong.urlPath}
//                     ... Title: ${currentSong.title}`;
//       musicPlayer.load();
//       musicPlayer.play();
//     });
// }
