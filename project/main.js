window.onload = function () {
  fetchMusic();
  fetchPlaylist();
};
let playlistSongs = [];
let rootURL = "http://localhost:3000/api/";

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
  playlistSongs = response; // *** saved in global array ***
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

  let songList = ""; // it will contain
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
  songTable.innerHTML += songList;
}

/* <<<===***--- ADD SONG FROM MUSIC TABLE ---***===>>> */
async function addSong(id) {
  let result = await fetch(`${rootURL}playlist/add`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      songId: id,
    }),
  });

  let response = await result.json();
  playlistSongs = response; // *** saved in global array ***
  renderSongs(response, "playlist-table", "remove");
}

/* <<<===***--- REMOVE SONGS FROM PLAY LIST ---***===>>> */
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
  playlistSongs = response; // *** updated in global array ***
  renderSongs(response, "playlist-table", "remove");
}

/* <<<===***--- On the Music Player ---***===>>> */
function addToPlayer(id) {
  const song = playlistSongs.find((item) => item.id === id);

  const musicPlayer = document.getElementById("music-player");
  const songTitle = document.getElementById("playing");
  const src = document.getElementById("srcURL");
  const info = document.getElementById("info");

  src.src = "http://localhost:3000/" + song.urlPath;
  songTitle.innerHTML = song.title;
  info.innerHTML = `${song.urlPath}
    ... Title: ${song.title}`;

  musicPlayer.load();
  musicPlayer.play(); //if I want to auto play
}
