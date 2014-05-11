var pullAndZoom = function(opts){
  opts = opts || {};
  this.mainPage = opts.mainPage;
  this.background = opts.background;
  this.backgroundImage = opts.backgroundImage;
  this.isIos = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

  this.pingBinded = this.ping.bind(this);
  this.setScrollBinded = this.setScroll.bind(this);
  this.adjustScrollBinded = this.adjustScroll.bind(this);
  this.enableEffectBinded = this.enableEffect.bind(this);
  this.lastRefreshBinded = this.lastRefresh.bind(this);

  if(!this.isIos){
    this.iScroll = new IScroll(this.mainPage);
  }else{
    this.adjustScroll();
    this.events();
  }
  this.pingEvents();
};

pullAndZoom.prototype.events = function(){
  this.mainPage.addEventListener('touchmove', function(e){
    e.stopPropagation();
  }, false);

  this.mainPage.addEventListener('scroll', this.setScrollBinded, false);
  document.addEventListener('touchmove', function(e){
    e.preventDefault();
  }, false);
};

pullAndZoom.prototype.pingEvents = function(){
  this.mainPage.addEventListener('touchstart', this.enableEffectBinded, false);
  this.mainPage.addEventListener('touchend', this.lastRefreshBinded, false);
  this.mainPage.addEventListener('touchcancel', this.lastRefreshBinded, false);
}

pullAndZoom.prototype.setScroll = function(){
  setTimeout(this.adjustScrollBinded, 0);
};

pullAndZoom.prototype.adjustScroll = function(){
  if(this.mainPage.scrollTop === 0){
    this.mainPage.scrollTop = 1;
  }
};

pullAndZoom.prototype.ping = function(){
  webkitRequestAnimationFrame(this.pingBinded);
  this.refresh();
};

pullAndZoom.prototype.enableEffect = function(){
  this.doEffect = true;
};

pullAndZoom.prototype.lastRefresh = function(){
  this.refresh({forcedScrollTop: 1});
  this.doEffect = false;
};

pullAndZoom.prototype.refresh = function(opts){
  opts = opts || {};
  if(this.doEffect){
    var scrollTop = opts.forcedScrollTop || (this.iScroll ? this.iScroll.y * -1 : this.mainPage.scrollTop);
    var scaleFactor = 1;
    var translateFactor = 0;
    var transition = "-webkit-transform 0.5s";
    if(scrollTop < 0){
      scaleFactor = (scrollTop * -0.005) + 1;
      translateFactor = Math.ceil(scrollTop * 1.1);
      transition = "-webkit-transform 0.1s linear";
    }
    this.backgroundImage.style.webkitTransition = transition;
    this.backgroundImage.style.webkitTransform = "translateZ(0) translateY(" + translateFactor + "px) scale(" + scaleFactor + ")";
  }
};
