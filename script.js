function doc(name){
    return document.querySelector(name);
}
var up = 0,
    down = 0,
    press = 0;

doc('textarea').oninput = function(){
    doc('.length').value = this.value.length;
};

doc('textarea').onkeypress = function(e){
    doc('.press').value = press = press + 1;
};

doc('textarea').onkeyup = function(e){
    doc('.up').value = up = up + 1;
};

doc('textarea').onkeydown = function(e){
    doc('.down').value = down = down + 1;
    doc('.key').value = e.key;
    doc('.code').value = e.keyCode;
};