window.addEventListener('load',function(){
  new pullAndZoom({
    mainPage: document.getElementById('mainpage'),
    backgroundImage: document.getElementById('background_image')
  }).ping();
});
