var Pos = (function() {
	var Pos = function (line, ch) {
		this.line = line;
		this.ch = ch;
	}
	
	//Keeping this on the prototype to save memory
	Pos.prototype.isBefore = function (pos2) {
	}
	Pos.prototype.isAfter = function (pos2) {
	}
	
	return Pos;
})();