var view = (function() {
	return new function(options) {
		var _settings
		var _initialized = false;
		var __init__ = function(options) {
			if(_initialized) {
				console.warn("Ummi: View has already been initalized.");
				return;
			}
			else {
				if(!options.canvas) {
					console.error("Ummi: No canvas was passed in options object, aborting.")
					return;
				}
				else {
					_settings.canvas = options.canvas;
					_settings.canvas.height = options.height || options.canvas.height || 600;
					_settings.canvas.width = options.width || options.canvas.width || 400;
					_settings.theme = options.theme || {
						'pln': '#CCC',
						'kwd': '#6C6',
						'pun': '#66C',
					};
					_settings.fontSize = options.fontSize || '11px';

				}
			}
		}

		var posToPixels = function (pos) {
			if(!(pos instanceof Pos)) {
				console.error("Ummi: Cannot call posToPixels on a non-Pos object,"pos)
				return null;
			}
			return {
				x: pos.ch * charWidth - scrollY,
				y: (pos.line - 1) * lineHeight - scrollY
			}
		}

		var pixelsToPos = function (x, y) {
			var doc {
				x: this.scrollX + x,
				y: this.scrollY + y
			};
			var line = ~~(doc.y/lineHeight) + 1;
			var ch = ~~(doc.y/charWidth);
			return new Pos(line, ch);
		}

		this.setFontSize = function (size) {
			var size = Number(size);
			if(isNaN(size))
				console.error("Ummi: setFontSize cannot be passed the non-number argument",size);
			}
			else {
				_settings.fontSize = Number(size) + 'px';
				this.draw()
			}
		}

		/* Returns true or false if the pos is contained by the current view */
		this.contains = function (pos) {
			if(!(pos instanceof Pos)) {
				console.error("Ummi: Cannot call contains on a non-Pos object",pos)
			}
			else {
				var px = posToPixels(pos);
				if(px.y > this.height || py.y < -this.lineHeight) {
					return false;
				}
				else if(px.x > this.width || px.x < -this.charWidth) {
					return false;
				}
				else {
					return true;
				}
			}
		}

		/* Clears and redraws the entire screen */
		this.draw = function () {
		}

		/* Clears and draws a single line */
		this.drawLine = function (lineNum) {

			var drawCursors = function (lineNum) {

			}

			var drawSelections = function (lineNum) {

			}

			var drawText = function (lineNum) {

			}

			var clearLine = function (lineNum) {

			}

			clearLine(lineNum);
			drawSelections(lineNum);
			drawCursors(lineNum);
			drawText(lineNum);
		}


		var _scrollY = 0;
		Object.defineProperty(this, 'scrollY', {
			value: 0,
			enumerable: false,
			get: function() {
				return _scrollY;
			}
			set: function(val) {
				//make sure val is in range of file
				_scrollY = val;
				this.draw();
			}
		});

		var _scrollX = 0;
		Object.defineProperty(this, 'scrollX', {
			enumerable: false,
			get: function() {
				return _scrollX;
			}
			set: function(val) {
				//make sure val is in range
				_scrollX = val;
				this.draw();
			}
		});

		Object.defineProperty(this, 'height', {
			enumerable: false,
			get: function() {
				return options.canvas.height;
			}
			set: function(val) {
				if(isNaN(Number(val))) {
					console.error("Ummi: cannot set height to a non-numeric value",val)
					return;
				}
				options.canvas.height = val;
				this.draw();
			}
		});

		Object.defineProperty(this, 'width', {
			enumerable: false,
			get: function() {
				return options.canvas.width;
			}
			set: function(val) {
				if(isNaN(Number(val))) {
					console.error("Ummi: cannot set width to a non-numeric value",val)
					return;
				}
				options.canvas.width = val;
				this.draw();
			}
		});

		var _theme;
		Object.defineProperty(this, 'theme', {
			enumerable: false,
			get: function() {
				return _theme;
			}
			set: function(val) {
				for(prop in _theme) {
					_theme[prop] = val[prop]
				}
				_theme = val;
				this.draw();
			}
		});

		Object.defineProperty(this, 'lineHeight', {
			enumerable: false,
			get: function() {
				//get height of a line in pixels
			},
			set: function() {
				console.warn("Ummi: Cannot set 'lineHeight', use 'fontSize' instead.");
			}
		});

		Object.defineProperty(this, 'charWidth', {
			enumerable: false,
			get: function() {
				//get height of a line in pixels
			},
			set: function() {
				console.warn("Ummi: Cannot set 'charWidth', use 'fontSize' instead.");
			}
		});

		var __init__();
	}
})(options);