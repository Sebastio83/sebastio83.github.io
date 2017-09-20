/*jshint esversion: 6 */
const vid = document.getElementsByTagName('video')[0];
const transcript = document.getElementById('transcriptWrapper');
const span = transcript.getElementsByTagName('span');

let reset;
let set;
let time;

function resetColor() {
  for(i = 1; i <= span.length; i++) {
    reset = document.getElementById('s' + i);
    reset.style.color = '#000060';
  }
}

function setColor(i) {
  resetColor();
  set = document.getElementById('s'+ i);
  set.style.color = '#22A7F0';
}

vid.addEventListener('timeupdate', () => {
    time = vid.currentTime;
    if (time >= 0.240) {
      setColor(1);
    }
    if (time >= 4.130) {
      setColor(2);
    }
    if (time >= 7.535) {
      setColor(3);
    }
    if (time >= 11.270) {
      setColor(4);
    }
    if (time >= 13.960) {
      setColor(5);
    }
    if (time >= 17.940) {
      setColor(6);
    }
    if (time >= 22.370) {
      setColor(7);
    }
    if (time >= 26.880) {
      setColor(8);
    }
    if (time >= 32.100) {
      setColor(9);
    }
    if (time >= 34.730) {
      setColor(10);
    }
    if (time >= 39.430) {
      setColor(11);
    }
    if (time >= 42.350) {
      setColor(12);
    }
    if (time >= 46.300) {
      setColor(13);
    }
    if (time >= 49.270) {
      setColor(14);
    }
    if (time >= 53.760) {
      setColor(15);
    }
    if (time >= 57.780) {
      setColor(16);
    }
    if(time >= 59.500) {
      resetColor();
    }
});

transcript.addEventListener('click', (e) => {
	let targ;
  let id;
	if (!e) var e = window.event;
	if (e.target) targ = e.target;
	else if (e.srcElement) targ = e.srcElement;
	if (targ.nodeType == 3) targ = targ.parentNode;
  id = targ.getAttribute('id');
  
    if(id == 's1') video.currentTime = 0.000;
    if(id == 's2') video.currentTime = 4.130;
    if(id == 's3') video.currentTime = 7.535;
    if(id == 's4') video.currentTime = 11.270;
    if(id == 's5') video.currentTime = 13.960;
    if(id == 's6') video.currentTime = 17.940;
    if(id == 's7') video.currentTime = 22.370;
    if(id == 's8') video.currentTime = 26.880;
    if(id == 's9') video.currentTime = 32.100;
    if(id == 's10') video.currentTime = 34.730;
    if(id == 's11') video.currentTime = 39.430;
    if(id == 's12') video.currentTime = 42.350;
    if(id == 's13') video.currentTime = 46.300;
    if(id == 's14') video.currentTime = 49.270;
    if(id == 's15') video.currentTime = 53.760;
    if(id == 's16') video.currentTime = 57.780;
});
