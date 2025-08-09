import playlist from './playlist.js';
import swfFile from '../media/jquery.jplayer.swf?url';

const demo = window.demo || {};
let jPlaylist;

function getSwfPath () {
  return swfFile.replace(/\/[^/]*$/, '');
}

jQuery.extend(demo, {
  setupPlayer: () => {
    jPlaylist = new jPlayerPlaylist(
      {
        jPlayer: '#jquery_jplayer_1',
        cssSelectorAncestor: '#jp_container_1'
      },
      playlist,
      {
        swfPath: getSwfPath(),
        supplied: 'oga, mp3',
        wmode: 'window',
        useStateClassSkin: true,
        autoBlur: false,
        keyEnabled: true
      }
    );
  },
  getPlaylist: () => jPlaylist
});

demo.setupPlayer();
