var RadioPlayer = function() {
  var audio = new Audio('http://94.25.53.133:80/ultra-128.mp3');

  var visualize = function() {
    var canvas = document.querySelector('#visualization canvas');
    var parent = canvas.parentNode;

    canvas.width  = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    (new visualization(canvas, audio)).run();
  }

  return {
    namespace: 'RadioPlayer',
    visualize: visualize,
    audio: audio
  };
};

window.onload = function() {
  // var radio = (new RadioPlayer());
  // radio.visualize();
  // radio.audio.play()
}
