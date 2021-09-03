setInterval(() => {
  d = new Date();
  hourTime = d.getHours();
  minTime = d.getMinutes();
  secTime = d.getSeconds();
  hourRotaion = 30 * hourTime + minTime / 2;
  minRoation = 6 * minTime;
  secRotaion = 6 * secTime;

  hour.style.transform = `rotate(${hourRotaion}deg)`;
  minute.style.transform = `rotate(${minRoation}deg)`;
  second.style.transform = `rotate(${secRotaion}deg)`;
}, 1000);
