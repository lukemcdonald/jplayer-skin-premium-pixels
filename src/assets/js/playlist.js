import mixkitArcadeBonusAlert from "../media/audio/mixkit-arcade-bonus-alert.mp3?url";
import mixkitGameRewardSting from "../media/audio/mixkit-game-reward.mp3?url";
import mixkitSoftInterfacePing from "../media/audio/mixkit-soft-ping.mp3?url";
import posterAudiotheme from "../media/poster-audiotheme.jpg";
import trexRoar from "../media/audio/t-rex-roar.mp3?url";

/** Demo tracks use bundled MP3s; www.jplayer.org no longer serves the old Miaow samples. */
const playlist = [
  {
    artist: "MDN",
    free: true,
    mp3: trexRoar,
    poster: posterAudiotheme,
    record: "Interactive examples (CC0)",
    title: "T-Rex Roar",
  },
  {
    artist: "Mixkit",
    mp3: mixkitArcadeBonusAlert,
    poster: posterAudiotheme,
    record: "Mixkit Sound Effects Free License",
    title: "Arcade bonus alert",
  },
  {
    artist: "Mixkit",
    mp3: mixkitSoftInterfacePing,
    poster: posterAudiotheme,
    record: "Mixkit Sound Effects Free License",
    title: "Soft interface ping",
  },
  {
    artist: "Mixkit",
    mp3: mixkitGameRewardSting,
    poster: posterAudiotheme,
    record: "Mixkit Sound Effects Free License",
    title: "Game reward sting",
  },
];

const getPlaylistStats = () => ({
  artists: [...new Set(playlist.map((track) => track.artist))],
  freeTracks: playlist.filter((track) => track.free).length,
  records: [...new Set(playlist.map((track) => track.record))],
  totalTracks: playlist.length,
});
const getTracksByArtist = (artist) => playlist.filter((track) => track.artist === artist);
const getFreeTracks = () => playlist.filter((track) => track.free);

export default playlist;
export { getPlaylistStats, getTracksByArtist, getFreeTracks };
