import playlist from './playlist.js';
import swfFile from '../media/jquery.jplayer.swf?url';

class JPlayerManager {
  constructor() {
    this.jPlaylist = null;
    this.isInitialized = false;
    this.elements = {
      artist: null,
      poster: null,
      record: null,
      title: null
    };
  }

  init() {
    this.setupElements();
    this.setupPlayer();
    this.isInitialized = true;
  }

  setupElements() {
    this.elements = {
      artist: document.querySelector('.track-artist'),
      poster: document.querySelector('.track-poster img'),
      record: document.querySelector('.track-record'),
      title: document.querySelector('.track-title')
    };
  }

  setupPlayer() {
    if (typeof jPlayerPlaylist === 'undefined') {
      return;
    }

    this.jPlaylist = new jPlayerPlaylist(
      {
        jPlayer: '#jquery_jplayer_1',
        cssSelectorAncestor: '#jp_container_1'
      },
      playlist,
      {
        autoBlur: false,
        keyEnabled: true,
        supplied: 'oga, mp3',
        swfPath: this.getSwfPath(),
        useStateClassSkin: true,
        wmode: 'window',
        ended: () => this.setupCurrentTrack(),
        error: event => this.handlePlayerError(event),
        play: () => this.setupCurrentTrack(),
        ready: () => this.setupCurrentTrack()
      }
    );
  }

  getSwfPath() {
    return swfFile.replace(/\/[^/]*$/, '');
  }

  setupCurrentTrack() {
    if (!this.jPlaylist || !this.jPlaylist.playlist || this.jPlaylist.current === undefined) {
      return;
    }

    const current = this.jPlaylist.playlist[this.jPlaylist.current];

    if (!current) {
      return;
    }

    this.updateTrackElements(current);
  }

  updateTrackElements(track) {
    const { artist, poster, record, title } = this.elements;

    if (artist && track.artist) {
      artist.textContent = track.artist;
    }

    if (poster && track.poster) {
      poster.setAttribute('src', track.poster);
      poster.setAttribute('alt', `${track.artist} - ${track.title}`);
    }

    if (record && track.record) {
      record.textContent = track.record;
    }

    if (title && track.title) {
      title.textContent = track.title;
    }
  }

  handlePlayerError() {}

  getPlaylistState() {
    if (!this.jPlaylist) {
      return { isInitialized: false };
    }

    return {
      isInitialized: this.isInitialized,
      currentTrack: this.jPlaylist.current,
      totalTracks: this.jPlaylist.playlist.length,
      currentTrackData: this.jPlaylist.playlist[this.jPlaylist.current] || null
    };
  }

  getJPlaylist() {
    return this.jPlaylist;
  }
}

const jPlayerManager = new JPlayerManager();

export default jPlayerManager;
