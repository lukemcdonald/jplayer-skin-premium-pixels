import posterAudiotheme from '../media/poster-audiotheme.jpg';

const playlist = [
  {
    title: 'Bubble',
    artist: 'Miaow',
    record: 'Record Name',
    free: true,
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Tempered Song',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Lismore',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg',
    poster: posterAudiotheme
  },
  {
    title: 'Stirring of a Fool',
    artist: 'Miaow',
    record: 'Record Name',
    mp3: 'https://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3',
    oga: 'https://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg',
    poster: posterAudiotheme
  }
];

function getPlaylistStats() {
  return {
    totalTracks: playlist.length,
    freeTracks: playlist.filter(track => track.free).length,
    artists: [...new Set(playlist.map(track => track.artist))],
    records: [...new Set(playlist.map(track => track.record))]
  };
}

function getTracksByArtist(artist) {
  return playlist.filter(track => track.artist === artist);
}

function getFreeTracks() {
  return playlist.filter(track => track.free);
}

export default playlist;
export { getPlaylistStats, getTracksByArtist, getFreeTracks };
