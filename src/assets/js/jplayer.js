import playlist from "./playlist.js";
import swfFile from "../media/jquery.jplayer.swf?url";

class JPlayerManager {
  jPlaylist = null;
  isInitialized = false;

  constructor() {
    this.elements = {
      artist: null,
      poster: null,
      record: null,
      title: null,
    };
  }

  init() {
    this.setupElements();
    this.setupPlayer();
    this.isInitialized = true;
  }

  setupElements() {
    this.elements = {
      artist: document.querySelector(".track-artist"),
      poster: document.querySelector(".track-poster img"),
      record: document.querySelector(".track-record"),
      title: document.querySelector(".track-title"),
    };
  }

  setupPlayer() {
    if (typeof jPlayerPlaylist === "undefined") {
      return;
    }

    this.jPlaylist = new jPlayerPlaylist(
      {
        cssSelectorAncestor: "#jp_container_1",
        jPlayer: "#jquery_jplayer_1",
      },
      playlist,
      {
        autoBlur: false,
        ended: () => this.setupCurrentTrack(),
        error: (event) => JPlayerManager.handlePlayerError(event),
        keyEnabled: true,
        play: () => this.setupCurrentTrack(),
        ready: () => this.setupCurrentTrack(),
        supplied: "oga, mp3",
        swfPath: JPlayerManager.getSwfPath(),
        useStateClassSkin: true,
        wmode: "window",
      },
    );
  }

  static getSwfPath() {
    return swfFile.replace(/\/[^/]*$/, "");
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
      poster.setAttribute("src", track.poster);
      poster.setAttribute("alt", `${track.artist} - ${track.title}`);
    }

    if (record && track.record) {
      record.textContent = track.record;
    }

    if (title && track.title) {
      title.textContent = track.title;
    }
  }

  static handlePlayerError(event) {
    console.error("Player error:", event);
  }

  getPlaylistState() {
    if (!this.jPlaylist) {
      return { isInitialized: false };
    }

    return {
      currentTrack: this.jPlaylist.current,
      currentTrackData: this.jPlaylist.playlist[this.jPlaylist.current] || null,
      isInitialized: this.isInitialized,
      totalTracks: this.jPlaylist.playlist.length,
    };
  }

  getJPlaylist() {
    return this.jPlaylist;
  }
}

const jPlayerManager = new JPlayerManager();

export default jPlayerManager;
