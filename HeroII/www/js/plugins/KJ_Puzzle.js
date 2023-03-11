/*:
 * @plugindesc 小游戏：拼图.
 * @author Kong Jing
 *
 * @param CancelText
 * @desc the name display. if none, will no command to give up.
 * @default 放弃
 *
 * @param CancelEnable
 * @desc allow cancel or not.
 * @default true
 *
 * @param SwitchId
 * @desc after win, the switch will onLine
 * @default 1
 *
 * @param ColNumber
 * @desc how much cols
 * @default 3
 *
 * @param TotalNumber
 * @desc how many picture
 * @default 9
 *
 * @param PicName
 * @desc the picture for puzzle game
 * @default Pic1
 *
 * @param PicWidth
 * @desc the picture's width
 * @default 816
 *
 * @param PicHeight
 * @desc the picture's height
 * @default 624
 *
 * @help
 * CancelText参数是，放弃拼图的选项的显示文字。
 * CancelEnable参数是，是否允许放弃。
 * SwitchId参数是，成功拼图后，该开关会被打开。
 * ColNumber参数是，拼图的列数。
 * TotalNumber参数是，拼图的总数量。
 * PicWidth和PicHeight是拼图的像素宽和高。
 * PicName参数是，拼图的文件名。
 *
 * 使用方法，插件命令
 * Puzzle PicName SwitchID ColNumber TotalNumber CancelEnable
 * 比如Puzzle Pic1 1 3 9 true
 * 就会进入拼图界面，使用以Pic的文件，一行3个，总共9张拼图，可以放弃。
 */

// Imported
var Imported = Imported || {};
Imported.KJ_Puzzle = true;

// Parameter Variables
var KJ = KJ || {};
KJ.Puzzle = KJ.Puzzle || {};

KJ.Puzzle.Parameters = PluginManager.parameters('KJ_Puzzle');
KJ.Puzzle.Param = KJ.Puzzle.Param || {};

KJ.Puzzle.Param.CancelText = String(KJ.Puzzle.Parameters['CancelText']);
KJ.Puzzle.Param.CancelEnable = KJ.Puzzle.Parameters['CancelEnable'].toLowerCase() === 'true';
KJ.Puzzle.Param.SwitchId = parseInt(KJ.Puzzle.Parameters['SwitchId']);
KJ.Puzzle.Param.ColNumber = parseInt(KJ.Puzzle.Parameters['ColNumber']);
KJ.Puzzle.Param.TotalNumber = parseInt(KJ.Puzzle.Parameters['TotalNumber']);
KJ.Puzzle.Param.PicName = String(KJ.Puzzle.Parameters['PicName']);
KJ.Puzzle.Param.PicWidth = parseInt(KJ.Puzzle.Parameters['PicWidth']);
KJ.Puzzle.Param.PicHeight = parseInt(KJ.Puzzle.Parameters['PicHeight']);
// Interpreter
KJ.Puzzle.Game_Interpreter_pluginCommand =
		Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args){
	KJ.Puzzle.Game_Interpreter_pluginCommand.call(this, command, args);
	if (command === 'Puzzle') {
		KJ.Puzzle.Param.PicName = args[0];
		KJ.Puzzle.Param.SwitchId = parseInt(args[1]);
		KJ.Puzzle.Param.ColNumber = parseInt(args[2]);
		KJ.Puzzle.Param.TotalNumber = parseInt(args[3]);
		KJ.Puzzle.Param.CancelEnable = args[4].toLowerCase() === 'true';
		SceneManager.push(Scene_Puzzle);
	}
};

ImageManager.loadPuzzle = function(filename, hue) {
	return this.loadBitmap('img/puzzle/', filename, hue, true);
};
function Scene_Puzzle() {
    this.initialize.apply(this, arguments);
}

Scene_Puzzle.prototype = Object.create(Scene_Base.prototype);
Scene_Puzzle.prototype.constructor = Scene_Puzzle;

Scene_Puzzle.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	this._picName = KJ.Puzzle.Param.PicName;
	this._picBitmap = ImageManager.loadPuzzle(KJ.Puzzle.Param.PicName);
	this._picPosition = [];
	this._colNumber = KJ.Puzzle.Param.ColNumber;
	this._totalNumber = KJ.Puzzle.Param.TotalNumber;
	this._rowNumber = Math.floor(this._totalNumber / this._colNumber);
	if(this._rowNumber * this._colNumber != this._totalNumber)
		this._rowNumber++;
	this._totalNumber = this._rowNumber * this._colNumber;
	this._judge = true;
};

Scene_Puzzle.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createWindowLayer();
	if(KJ.Puzzle.Param.CancelEnable)
		this.createCommandWindow();
	this.randomChange();
	this.createPuzzleWindow();
	this.createPosition();
	this.createPBG();
};

Scene_Puzzle.prototype.createPBG = function() {
	this._BGSprite = new Sprite(ImageManager.loadPuzzle('UIBG'));
	this._BGSprite.x = 480;
	this._BGSprite.y = 270;
	this.adBGSprite(this._BGSprite);
	this.addChild(this._BGSprite);
};

Scene_Puzzle.prototype.adBGSprite = function(sprite) {
	sprite.scale.x = this._scale*1.155;
	sprite.scale.y = this._scale*1.155;
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
};

Scene_Puzzle.prototype.createPosition = function() {
	this._width = KJ.Puzzle.Param.PicWidth / this._colNumber;
	this._height = KJ.Puzzle.Param.PicHeight / this._rowNumber;
	var width = this._PuzzleWindow.width - this._PuzzleWindow.padding * 2;
	var height = this._PuzzleWindow.height - this._PuzzleWindow.padding;
	var x = width / KJ.Puzzle.Param.PicWidth;
	var y = height / KJ.Puzzle.Param.PicHeight;
	if(x > y){
		this._picHeight = height / this._rowNumber + 1;//this._picHeight = height * 0.9 / this._rowNumber + 1;xiaoruis
		this._scale = y;
		this._picWidth = this._scale * this._width + 1;
	}
	else {
		this._picWidth = width / this._colNumber + 1;
		this._scale = x;
		this._picHeight = this._scale * this._height + 1;
	}
	this._picX = (width - this._picWidth * this._colNumber) * 0.5;
	this._picY = (height - this._picHeight * this._rowNumber) * 0.5;
};
Scene_Puzzle.prototype.createCommandWindow = function() {
	var width = 150;
	var x = (Graphics.boxWidth - width) * 0.5;
	var y = Graphics.boxHeight * 0.9;
	this._commandWindow = new Window_CancelCommand(x, y);
	this._commandWindow.setBackgroundType(2);
	this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
	this.addWindow(this._commandWindow);
};
Scene_Puzzle.prototype.createPuzzleWindow = function(){
	this._PuzzleWindow = new Window_Base(0, 0, Graphics.boxWidth, Graphics.boxHeight * 0.9);
	this._PuzzleWindow.setBackgroundType(2);
	this.addWindow(this._PuzzleWindow);
};
Scene_Puzzle.prototype.randomChange = function(){
	for(var i = 0; i < this._totalNumber; i++)
		this._picPosition.push(i);
	this._currentPic = this._totalNumber - 1;
	var name2 = '_PicSprite';
	var random = 0;
	var delta = 0;
	var position = 0;
	for(var i = 0; i < 1000; i++){
		random = Math.floor(Math.random() * 4);
		delta = 0;
		switch(random){
			case(0):
				if(this._currentPic % this._colNumber)
					delta = - 1;
				break;
			case(1): 
				if((this._currentPic + 1) % this._colNumber)
					delta = 1;
				break;
			case(2):
				if(this._currentPic > (this._colNumber - 1))
					delta = 0 - this._colNumber;
				break;
			case(3):
				if(this._currentPic < (this._totalNumber - this._colNumber))
					delta = this._colNumber;
				break;
		}
		if(delta != 0){
			this._picPosition[this._currentPic] = this._picPosition[this._currentPic + delta];
			this._currentPic += delta;
			this._picPosition[this._currentPic] = this._totalNumber - 1;
		}
	}
	var aim = this._totalNumber - 1;
	while(this._currentPic != aim){
		random = Math.floor(Math.random() * 2) * 2 + 1;
		delta = 0;
		switch(random){
			case(1): 
				if((this._currentPic + 1) % this._colNumber)
					delta = 1;
				break;
			case(3):
				if(this._currentPic < (this._totalNumber - this._colNumber))
					delta = this._colNumber;
				break;
		}
		if(delta != 0){
			this._picPosition[this._currentPic] = this._picPosition[this._currentPic + delta];
			this._currentPic += delta;
			this._picPosition[this._currentPic] = this._totalNumber - 1;
		}
	}
};

Scene_Puzzle.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
	if(this._judge){
		this.updateControl();
		this.updatePicture();
		if(this.updateWin()){
			this.drawPicture(this._currentPic, this._totalNumber - 1, true);
			this._judge = false;
			this._waitTime = 60;
			$gameSwitches.setValue(KJ.Puzzle.Param.SwitchId, true);
		}
	}
	else{
		this._waitTime--;
		if(this._waitTime < 0)
			this.popScene();
	}
};
Scene_Puzzle.prototype.updateWin = function() {
    for(var i = 0; i < this._totalNumber - 1; i++){
		if(this._picPosition[i] != i)
			return false;
	}
	return true;
};
Scene_Puzzle.prototype.updatePicture = function(){
	for(var i = 0; i < this._totalNumber; i++){
		var aim = this._picPosition[i];
		var flag = (i != this._currentPic);
		this.drawPicture(i, aim, flag);
	}
}
Scene_Puzzle.prototype.updateControl = function() {
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var delta = 0;
	if(TouchInput.isTriggered()){
		var x = Math.floor((TouchInput.x - this._picX) / this._picWidth);
		var y = Math.floor((TouchInput.y - this._picY) / this._picHeight);
		var i = x + y * this._colNumber;
		if(x >= 0 && x < this._colNumber && y >= 0 && y < this._rowNumber){
			if(i === this._currentPic - 1)
				left = true;
			else if(i === this._currentPic + 1)
				right = true;
			else if(i === this._currentPic - this._colNumber)
				up = true;
			else if(i === this._currentPic + this._colNumber)
				down = true;
		}
	}
	var name2 = '_PicSprite';
	if((left || Input.isTriggered('left')) && (this._currentPic % this._colNumber)){
		delta = -1;
	}
	else if((right || Input.isTriggered('right')) && (this._currentPic + 1) % this._colNumber){
		delta = 1;
	}
	else if((up || Input.isTriggered('up')) && this._currentPic >= this._colNumber){
		delta = 0 - this._colNumber;
	}
	else if((down || Input.isTriggered('down')) && this._currentPic < (this._totalNumber - this._colNumber)){
		delta = this._colNumber;
	}
	if(delta != 0){
		this._picPosition[this._currentPic] = this._picPosition[this._currentPic + delta];
		this._currentPic += delta;
		this._picPosition[this._currentPic] = this._totalNumber - 1;
	}
};
Scene_Puzzle.prototype.drawPicture = function(i, aim, flag){
	var col = this._colNumber;
	var source = this._picBitmap;
	var sx = (aim % col) * this._width;
	var sy = Math.floor(aim / col) * this._height;
	var sw = this._width;
	var sh = this._height;
	var dx = (i % col) * this._picWidth + this._picX;
	var dy = Math.floor(i / col) * this._picHeight + this._picY;
	var dw = sw * this._scale;
	var dh = sh * this._scale;
	if(flag)
		this._PuzzleWindow.contents.blt(source, sx, sy, sw, sh, dx, dy, dw, dh);
	else this._PuzzleWindow.contents.clearRect(dx, dy, dw, dh);
	dx = this._picX;
	dy = this._rowNumber * this._picHeight + this._picY;
	dw = this._PuzzleWindow.width;
	dh = this._PuzzleWindow.height - dy;
	this._PuzzleWindow.contents.clearRect(dx, dy, dw, dh);	
};

function Window_CancelCommand() {
	this.initialize.apply(this, arguments);
}
Window_CancelCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_CancelCommand.prototype.constructor = Window_CancelCommand;
Window_CancelCommand.prototype.initialize = function (x, y) {
	Window_HorzCommand.prototype.initialize.call(this, x, y);
};
Window_CancelCommand.prototype.maxCols = function () {
	return 1;
};
Window_CancelCommand.prototype.makeCommandList = function () {
	this.addCommand(KJ.Puzzle.Param.CancelText, 'cancel');
};
Window_CancelCommand.prototype.windowWidth = function() {
    return 150;
};
Window_CancelCommand.prototype.redrawItem = function(index, name) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
	this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
    this.drawText(name, rect.x, rect.y, rect.width, align);
	this.activate();
};