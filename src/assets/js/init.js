import app from './app.js';
import jPlayerManager from './jplayer.js';

function init() {
  app.init();
  jPlayerManager.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
