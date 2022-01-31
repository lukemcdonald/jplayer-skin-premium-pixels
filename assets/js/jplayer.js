/*global jQuery:false jPlayerPlaylist:false */
import playlist from './playlist.js'

const demo = window.demo || {}
let jPlaylist

jQuery.extend(demo, {
  /**
   * Initialize the jPlayer and playlist.
   */


  setupPlayer: () => {
    jPlaylist = new jPlayerPlaylist(
      {
        jPlayer: '#jquery_jplayer_1',
        cssSelectorAncestor: '#jp_container_1'
      },
      playlist,
      {
				swfPath: 'assets/media',
				supplied: 'oga, mp3',
				wmode: 'window',
				useStateClassSkin: true,
				autoBlur: false,
				keyEnabled: true
			}
    )
  },

})

demo.setupPlayer()
