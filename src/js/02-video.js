import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(event => {
    const currentTime = event.seconds;
    //console.log(currentTime);
    localStorage.setItem('videoplayer-current-time', currentTime);
  }),
  1000
);

const saveTime = localStorage.getItem('videoplayer-current-time');

if (saveTime !== null) {
  player.setCurrentTime(saveTime);
}
