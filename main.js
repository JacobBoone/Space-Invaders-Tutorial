// helper functions








//Screen

function Screen(width, height){
	this.canvas = document.createElement("canvas");
	this.canvas.width = this.width = width;
	this.canvas.height= this.height = height;
	this.ctx = this.canvas.getContext('2d');

	document.body.appendChild(this.canvas);

};

Screen.prototype.drawSprite = function(sp, x, y){
	this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp,h)
};




// Sprite
function Sprite (img, x, y, w, h) {
	this.image = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
};




// Inputhandler
function InputHandler (argument) {
	// body...
}
Inputhandler.prototype.isDown = function(code){

};
Inputhandler.prototype.isPressed = function(code){

};






$(document).on('ready', function() {
  
});