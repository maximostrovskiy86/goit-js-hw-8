import  Player  from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function(data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));

const saveData = localStorage.getItem('videoplayer-current-time');

const { seconds } = JSON.parse(saveData)

player.setCurrentTime(seconds).then(function(second) {
  console.log('time', second);
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
      console.log('error.name', error.name);
      break;

    default:
      console.log('error.name', error);
      break;
  }
});