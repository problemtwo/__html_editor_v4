window.onload = function(){
  function id(i){return document.getElementById(i);}
  function cls(c){return document.getElementsByClassName(c);}
  function tag(t){return document.getElementsByTagName(t);}
  
  let ctrl = false;
  window.onkeydown = function(e){
    if(e.keyCode === 17){ctrl = true;}
    else if(ctrl && e.keyCode === 13){
      id('output').innerHTML = id('html-code').value + '<style>' + id('css-code').value + '</style>';
      eval(id('js-code').value);
    }
  }
  
  window.onkeyup = function(e){if(e.keyCode === 17){ctrl = false;}}
};
