import posterAudiotheme from "../media/poster-audiotheme.jpg";

class AudioPlayerApp {
  isInitialized = false;

  constructor() {
    this.elements = {
      jpAudio: null,
      player: null,
      posterImg: null,
      toggles: null,
    };
  }

  init() {
    AudioPlayerApp.setupTouchDetection();

    this.setupElements();
    this.setInitialPoster();
    this.setupPlaylistDisplay();
    this.isInitialized = true;
  }

  static setupTouchDetection() {
    const isTouchDevice = "ontouchstart" in window || "onmsgesturechange" in window;
    document.body.classList.add(isTouchDevice ? "touch" : "no-touch");
  }

  setupElements() {
    this.elements = {
      jpAudio: document.querySelector(".jp-audio"),
      player: document.querySelector(".audio-player"),
      posterImg: document.querySelector("#track-poster-img"),
      toggles: document.querySelectorAll(".playlist-toggles button"),
    };
  }

  setInitialPoster() {
    if (this.elements.posterImg) {
      this.elements.posterImg.src = posterAudiotheme;
      this.elements.posterImg.alt = "Track poster";
    }
  }

  setupPlaylistDisplay() {
    if (!this.elements.player || !this.elements.toggles.length || !this.elements.jpAudio) {
      return;
    }

    for (const toggle of this.elements.toggles) {
      toggle.addEventListener("click", this.handlePlaylistToggle.bind(this), false);
    }
  }

  handlePlaylistToggle(event) {
    const currentToggle = [...this.elements.toggles].find((toggle) =>
      toggle.classList.contains("selected"),
    );
    const selectedToggle = event.target;

    if (!currentToggle || !selectedToggle) {
      return;
    }

    this.elements.jpAudio.scrollTop = 0;

    currentToggle.classList.remove("selected");
    selectedToggle.classList.add("selected");

    const currentDisplay = currentToggle.dataset.display;
    const newDisplay = selectedToggle.dataset.display;

    this.elements.player.classList.remove(`playlist-${currentDisplay}`);
    this.elements.player.classList.add(`playlist-${newDisplay}`);
  }

  getState() {
    const elements = {};
    for (const key of Object.keys(this.elements)) {
      elements[key] = this.elements[key] !== null;
    }
    return { elements, isInitialized: this.isInitialized };
  }
}

const app = new AudioPlayerApp();

export default app;
