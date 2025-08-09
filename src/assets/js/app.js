import posterAudiotheme from '../media/poster-audiotheme.jpg';

class AudioPlayerApp {
  constructor() {
    this.isInitialized = false;
    this.elements = {
      posterImg: null,
      player: null,
      toggles: null,
      jpAudio: null
    };
  }

  init() {
    this.setupTouchDetection();
    this.setupElements();
    this.setInitialPoster();
    this.setupPlaylistDisplay();
    this.isInitialized = true;
  }

  setupTouchDetection() {
    const isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
    document.body.classList.add(isTouchDevice ? 'touch' : 'no-touch');
  }

  setupElements() {
    this.elements = {
      posterImg: document.getElementById('track-poster-img'),
      player: document.querySelector('.audio-player'),
      toggles: document.querySelectorAll('.playlist-toggles button'),
      jpAudio: document.querySelector('.jp-audio')
    };
  }

  setInitialPoster() {
    if (this.elements.posterImg) {
      this.elements.posterImg.src = posterAudiotheme;
      this.elements.posterImg.alt = 'Track poster';
    }
  }

  setupPlaylistDisplay() {
    if (!this.elements.player || !this.elements.toggles.length || !this.elements.jpAudio) {
      return;
    }

    this.elements.toggles.forEach(toggle => {
      toggle.addEventListener('click', this.handlePlaylistToggle.bind(this), false);
    });
  }

  handlePlaylistToggle(event) {
    const currentToggle = Array.from(this.elements.toggles).find(toggle =>
      toggle.classList.contains('selected')
    );
    const selectedToggle = event.target;

    if (!currentToggle || !selectedToggle) {
      return;
    }

    this.elements.jpAudio.scrollTop = 0;

    currentToggle.classList.remove('selected');
    selectedToggle.classList.add('selected');

    const currentDisplay = currentToggle.getAttribute('data-display');
    const newDisplay = selectedToggle.getAttribute('data-display');

    this.elements.player.classList.remove(`playlist-${currentDisplay}`);
    this.elements.player.classList.add(`playlist-${newDisplay}`);
  }

  getState() {
    return {
      isInitialized: this.isInitialized,
      elements: Object.keys(this.elements).reduce((acc, key) => {
        acc[key] = this.elements[key] !== null;
        return acc;
      }, {})
    };
  }
}

const app = new AudioPlayerApp();

export default app;
