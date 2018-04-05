<<<<<<< HEAD
var playlist = {artistName: 'songTitle'};
=======
var playlist = {};
>>>>>>> b34568a2a15df3714ef884eef551a9f7c258c256

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
<<<<<<< HEAD
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
=======
>>>>>>> b34568a2a15df3714ef884eef551a9f7c258c256
}