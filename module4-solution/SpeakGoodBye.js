
(function () {
(function speak (window) {
  var speakWord = "Good Bye";
  byeSpeaker = speak;
  byeSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
  window.byeSpeaker.spea = byeSpeaker.spea;
})(window);
})();
