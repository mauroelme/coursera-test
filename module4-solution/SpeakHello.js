
(function () {
(function speak (window) {
  var speakWord = "Hello";
  helloSpeaker = speak;
  helloSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
  window.helloSpeaker = helloSpeaker;
})(window);

})();
