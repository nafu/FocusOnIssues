document.body.onkeyup = function(e) {
  e = e || window.event;
  var keycode = e.charCode || e.keyCode;
  // KeyCodes http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
  if (keycode === 191) {
    document.getElementById("js-issues-search").focus();
  }
}
