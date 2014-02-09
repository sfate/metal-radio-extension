var visualization = function(canvas, audio) {
  var context,
      analyser,
      source,
      stage;

  var init = function() {
    stage    = canvas.getContext('2d');
    context  = new webkitAudioContext();
    analyser = context.createAnalyser();
    source   = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
  };

  var bars = function(data) {
    stage.fillStyle="rgba(90, 0, 0, 0.2)";
    stage.fillRect(0, 0, canvas.width, canvas.height);
    stage.fillStyle = "rgba(255, 255, 255, 1)";
    var numBars = 20;
    var skip = 12;
    var length = canvas.width/numBars;
    for (var i=0; i<numBars*skip; i+=skip) {
      var magnitude = Math.abs((data[i]/255)*(canvas.height*0.9));
      stage.fillRect((i/skip)*length, canvas.height-magnitude, length*0.8, magnitude);
    }
  };

  var run = function() {
    webkitRequestAnimationFrame(run, canvas);

    if (!audio.paused) {
      var freqByteData = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(freqByteData);
      bars(freqByteData);
    }
  };

  init();

  return {
    namespace: 'visualization',
    run: run
  }
};
