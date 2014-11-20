(function(){
  "use strict";
  function captureBackspace(e) {
    var rx = /INPUT|TEXTAREA/i;

    if( e.which == 8 ){ // 8 == backspace
      if(!rx.test(e.target.tagName) || e.target.disabled || e.target.type === 'checkbox' || e.target.type === 'radio' || 
              e.target.type === 'submit' || e.target.readOnly ){
        e.preventDefault();
      }
    }
  }

  function backspaceBlock() {
    if (window.addEventListener)
      window.addEventListener('keydown', captureBackspace, true)
    else if (document.attachEvent)
      document.attachEvent('onkeydown', captureBackspace)
    else 
      document.addEventListener('keydown', captureBackspace, true)
  }
  backspaceBlock();
})();