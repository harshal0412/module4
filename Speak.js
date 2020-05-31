
(function(window){
var hellospeaker = new Object();

var speakWord = "Hello";

	 hellospeaker.speak=function(names){
  console.log(speakWord + " " + names);
			};

			window.hellospeaker=hellospeaker;
})(window);

