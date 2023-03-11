//=============================================================================
// Drill_CoreOfWindowAuxiliary.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        ww
 * @author Drill_up
 * 
 * @help  
 * ww
 *
 */
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_CoreOfWindowAuxiliary = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_CoreOfWindowAuxiliary');

//==============================
Window_Base.prototype.drill_COWA_drawTextListEx = function( context_list, options ){
	// > 默认值
	options = this.drill_COWA_DTLE_checkOptions(options);
	
	// > 表达式 - 转义字符
	if( options['convertEnabled'] == true ){
		context_list = this.drill_COWA_convertEscapeCharacterInList( context_list );
	}
	
	// > 计算字符高宽
	this.drill_COWA_DTLE_calculateHeightAndWidth( context_list, options );
	
	// > 画布重建
    this.createContents();
    this.contents.clear();
	
	// > 开始绘制
	this.drill_COWA_DTLE_startDraw( context_list, options );
};
//==============================
// * DTLE - 默认值处理
//==============================
Window_Base.prototype.drill_COWA_DTLE_checkOptions = function( options ){
	if( options == undefined ){ options = {}; };
	if( options['convertEnabled'] == undefined ){ options['convertEnabled'] = true };		//表达式开关
	if( options['autoLineheight'] == undefined ){ options['autoLineheight'] = true };		//是否自适应行间距
	if( options['lineheight'] == undefined ){ options['lineheight'] = 28 };					//行间距
	if( options['align'] == undefined ){ options['align'] = "左对齐" };						//对齐方式
	return options;
};
//==============================
Window_Base.prototype.drill_COWA_DTLE_calculateHeightAndWidth = function( context_list, options ){
	var height_list = [];
	var width_list = [];
	for (var i=0; i < context_list.length; i++) {
		var temp_text = context_list[i];
		var textState = { 'index': 0, 'x': 0, 'y': 0, 'left': 0 };
		textState.text = this.convertEscapeCharacters( temp_text );
		var hh = this.calcTextHeight(textState, false);									//计算字符高度
		var ww = this.drawTextEx(textState.text,0,0) + this.standardPadding() * 2 ;		//计算字符宽度（只有画出来了才有值）
		height_list.push(hh);
		width_list.push(ww);
	}
	this.drill_COWA_heightList = height_list;
	this.drill_COWA_widthList = width_list;
};
//==============================
Window_Base.prototype.drill_COWA_DTLE_startDraw = function( context_list, options ){
	var xx = 0 ;
	var yy = 0 ;
	for (var i=0; i < context_list.length; i++) {
		var temp_text = context_list[i];
		
		// > 对齐方式
		xx = 0;
		if( options['align'] == "居中" ){
			xx = this.width/2 - this.drill_COWA_widthList[i]/2;
		}
		if( options['align'] == "右对齐" ){
			xx = this.width - this.drill_COWA_widthList[i];
		}
		
		// > 表达式 - 绘制字符
		if( this.drill_COWA_isMatchDrawCharacter( temp_text ) && options['convertEnabled'] ){
			this.drill_COWA_convertDrawCharacter( temp_text, yy );
		}else{
			this.drawTextEx(temp_text,xx,yy);
		}
		
		
		// > 划分行间距
		if( options['autoLineheight'] == true ){
			yy += this.drill_COWA_heightList[i];	//自适应行间距
		}else{
			yy += options['lineheight'];			//固定行间距
		}
	}
};
//==============================
Window_Base.prototype.drill_COWA_convertEscapeCharacterInList = function( text_list ){
	var converted_list = [];
	for (var i=0; i < text_list.length; i++) {
		var temp_text = text_list[i];
		temp_text = this.drill_COWA_convertEscapeCharacter( temp_text );
		converted_list.push(temp_text);
	}
	return converted_list;
};
//==============================
Window_Base.prototype.drill_COWA_convertEscapeCharacter = function( text ){
	var result_text = text;
	
	// > 复制内容
	var re_A = /<复[制]?:[^<>:]*:[^<>:]*>/g;		
	var re_ma_A = (result_text.match(re_A) || []);
	for( var i=0; i < re_ma_A.length; i++ ){		//同一行可能出现多个表达式
		var temp_org = String(re_ma_A[i]);
		var temp_str = String(re_ma_A[i]);
		temp_str = temp_str.replace("<","");
		temp_str = temp_str.replace(">","");
		var temp_list = temp_str.split(":");
		
		var result = "";
		var num = 0;
		var num_str = temp_list[1];
		if( num_str.slice(0,2) == "\\v" || num_str.slice(0,2) == "\\V" ){
			num = Number(num_str.slice(3,num_str.length-1));
			num = $gameVariables.value(num);
		}else{
			num = Number(temp_list[1]);
		}
		for(var j =0; j < num; j++){
			result += temp_list[2];
		}
		
		result_text = result_text.replace(temp_org,result);
	}
	
	// > 单选内容
	var re_B = /<单选:[^<>:]*:[^<>:]*:[^<>:]*>/g;		
	var re_ma_B = (result_text.match(re_B) || []);
	for( var i=0; i < re_ma_B.length; i++ ){		//同一行可能出现多个表达式
		var temp_org = String(re_ma_B[i]);
		var temp_str = String(re_ma_B[i]);
		temp_str = temp_str.replace("<","");
		temp_str = temp_str.replace(">","");
		var temp_list = temp_str.split(":");
		
		var result = "";
		var s_id = Number(temp_list[1]);
		if( $gameSwitches.value(s_id) ){
			result += temp_list[2];
		}else{
			result += temp_list[3];
		}
		
		result_text = result_text.replace(temp_org,result);
	}
	
	return result_text;
};
//==============================
Window_Base.prototype.drill_COWA_isMatchDrawCharacter = function( drawing_text ){
	if( drawing_text.match(/<分隔:[^<>:]*:[^<>:]*>/) ){ return true; }
	return false;
};
Window_Base.prototype.drill_COWA_convertDrawCharacter = function( drawing_text, yy ){
	
	// > 分隔符（分隔:颜色:厚度）
	var re_A = /<分隔:[^<>:]*:[^<>:]*>/g;		
	var re_ma_A = (drawing_text.match(re_A) || []);
	if( re_ma_A.length == 1 ){
		var temp_str = String(re_ma_A[0]);
		temp_str = temp_str.replace("<","");
		temp_str = temp_str.replace(">","");
		var temp_list = temp_str.split(":");
		
		//（固定出现该字符时将整行都绘制）
		this.contents.fillRect(4, yy + this.standardFontSize()/2 - Number(temp_list[2])/2 , this.width - 8, Number(temp_list[2]), this.textColor(temp_list[1]));
	}
	
};
//==============================
Window_Base.prototype.drill_COWA_changeParamData = function( data ){
	
	// > 默认值
	data['enable'] = true;																//开关
	if( data['x'] == undefined ){ data['x'] = this.x };									//平移x
	if( data['y'] == undefined ){ data['y'] = this.y };									//平移y
	//if( data['opacity'] == undefined ){ data['opacity'] = 255 };						//透明度
	if( data['width'] == undefined ){ data['width'] = this.width };						//宽度
	if( data['height'] == undefined ){ data['height'] = this.height };					//高度
	if( data['fontsize'] == undefined ){ data['fontsize'] = this.standardFontSize(); };	//字体大小
	
	data['slideCur'] = 0;																//移动 - 当前时间
	if( data['slideDelay'] == undefined ){ data['slideDelay'] = 0 };					//移动 - 延迟
	if( data['slideTime'] == undefined ){ data['slideTime'] = 0 };						//移动 - 时长
	if( data['slideMoveType'] == undefined ){ data['slideMoveType'] = "匀速移动" };		//移动 - 移动类型（匀速移动/弹性移动/不移动）
	if( data['slidePosType'] == undefined ){ data['slidePosType'] = "相对坐标" };		//移动 - 起点-坐标类型（相对坐标/绝对坐标）
	if( data['slideX'] == undefined ){ data['slideX'] = 0 };							//移动 - 起点-相对坐标x
	if( data['slideY'] == undefined ){ data['slideY'] = 0 };							//移动 - 起点-相对坐标y
	if( data['slideAbsoluteX'] == undefined ){ data['slideAbsoluteX'] = 0 };			//移动 - 起点-绝对坐标x
	if( data['slideAbsoluteY'] == undefined ){ data['slideAbsoluteY'] = 0 };			//移动 - 起点-绝对坐标y
	
	if( data['layoutType'] == undefined ){ data['layoutType'] = "默认皮肤" };			//布局 - 布局类型（默认皮肤/单张背景贴图/隐藏布局）
	if( data['layoutSrc'] == undefined ){ data['layoutSrc'] = "" };						//布局 - 资源贴图
	if( data['layoutSrcFile'] == undefined ){ data['layoutSrcFile'] = "img/system/" };	//布局 - 资源文件夹
	if( data['layoutX'] == undefined ){ data['layoutX'] = 0 };							//布局 - 位置修正x
	if( data['layoutY'] == undefined ){ data['layoutY'] = 0 };							//布局 - 位置修正y
	
	// > 参数初始化
	this._drill_COWA_CPD_data = data;
	this.drill_COWA_CPD_initMove();			//初始化 - 移动属性 
	this.drill_COWA_CPD_initFrame();		//初始化 - 窗口高宽 
	this.drill_COWA_CPD_initLayout();		//初始化 - 贴图布局 
};
//==============================
Window_Base.prototype.drill_COWA_CPD_update = function(){
	if( this._drill_COWA_CPD_data['enable'] == false ){ return; }

	this._drill_COWA_layer.visible = !this.isClosed();			//帧刷新 - 与 打开/关闭 的窗口透明度同步
	this._drill_COWA_layoutOpacity = this.openness;				//
	
	this.drill_COWA_CPD_updateMove();							//帧刷新 - 移动属性 
};
//==============================
Window_Base.prototype.drill_COWA_CPD_resetMove = function(){
	var data = this._drill_COWA_CPD_data;
	if( data['slideMoveType'] == "不移动" ){ return; }
	
	data['slideCur'] = 0;
	this.contentsOpacity = 0;
	this._drill_COWA_frameOpacity = 0;
	this._drill_COWA_layoutOpacity = 0;
};
//==============================
// * CPD - 初始化
//==============================
var _drill_COWA_CPD_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height){
	_drill_COWA_CPD_initialize.call(this, x, y, width, height);
	this._drill_COWA_CPD_data = {};
	this._drill_COWA_CPD_data['enable'] = false;
};
//==============================
// * CPD - 底层部件
//==============================
var _drill_COWA_CPD__createAllParts = Window_Base.prototype._createAllParts;
Window_Base.prototype._createAllParts = function() {
	this._drill_COWA_layer = new Sprite();			//背景层（窗口最底层）
	this.addChild( this._drill_COWA_layer );
	_drill_COWA_CPD__createAllParts.call(this);
};
//==============================
// * CPD - 移动属性 - 初始化
//==============================
Window_Base.prototype.drill_COWA_CPD_initMove = function(){
	var data = this._drill_COWA_CPD_data;
	
	if( data['slidePosType'] == "相对坐标" ){
		this.x = data['x'] + data['slideX'];
		this.y = data['y'] + data['slideY'];
	}
	if( data['slidePosType'] == "绝对坐标" ){
		this.x = data['slideAbsoluteX'];
		this.y = data['slideAbsoluteY'];
	}
	if( data['slideMoveType'] == "不移动" ){
		this.x = data['x'];
		this.y = data['y'];
	}
};
//==============================
// * CPD - 移动属性 - 帧刷新
//==============================
Window_Base.prototype.drill_COWA_CPD_updateMove = function(){
	var data = this._drill_COWA_CPD_data;
	
	// > 时间控制
	data['slideDelay'] -= 1;
	if( data['slideDelay'] >= 0 ){ this.drill_COWA_CPD_resetMove(); return; }
	data['slideCur'] += 1;
	if( data['slideCur'] > data['slideTime'] ){ return; }
	if( data['slideMoveType'] == "不移动" ){ return; }
	
	// > 移动
	var xx = data['x'];
	var yy = data['y'];
	var dx = 0;
	var dy = 0;
	if( data['slidePosType'] == "相对坐标" ){
		dx = data['slideX'];
		dy = data['slideY'];
	}
	if( data['slidePosType'] == "绝对坐标" ){
		dx = data['slideAbsoluteX'] - data['x'];	//窗口的上层一般直接为scene，所以绝对坐标不会被叠加。
		dy = data['slideAbsoluteY'] - data['y'];
	}
	if( data['slideMoveType'] == "匀速移动" ){
		xx += dx - dx / data['slideTime'] * data['slideCur'];
		yy += dy - dy / data['slideTime'] * data['slideCur'];
	}
	if( data['slideMoveType'] == "弹性移动" ){		//r = 1/2*a*t^2
		var ax = 2 * dx / data['slideTime'] / data['slideTime'];
		var ay = 2 * dy / data['slideTime'] / data['slideTime'];
		var c_time = data['slideTime'] - data['slideCur'];
		xx += 0.5 * ax * c_time * c_time ;
		yy += 0.5 * ay * c_time * c_time ;
	}
	if( data['slideCur'] == data['slideTime'] ){	//最后一刻锁定坐标位置
		xx = data['x'];
		yy = data['y'];
	}
	this.x = xx;
	this.y = yy;
	
	
	// > 透明度
	if( data['layoutType'] == "默认皮肤" ){ 
		this.contentsOpacity = 255 / data['slideTime'] * data['slideCur'];
		this._drill_COWA_frameOpacity = 255 / data['slideTime'] * data['slideCur'];
		this._drill_COWA_layoutOpacity = 0;
	}
	if( data['layoutType'] == "单张背景贴图" ){ 
		this.contentsOpacity = 255 / data['slideTime'] * data['slideCur'];
		this._drill_COWA_frameOpacity = 0;
		this._drill_COWA_layoutOpacity = 255 / data['slideTime'] * data['slideCur'];
	}
	if( data['layoutType'] == "隐藏布局" ){ 
		this.contentsOpacity = 255 / data['slideTime'] * data['slideCur'];
		this._drill_COWA_frameOpacity = 0;
		this._drill_COWA_layoutOpacity = 0;
	}
};
//==============================
// * CPD - 窗口高宽 - 初始化
//==============================
Window_Base.prototype.drill_COWA_CPD_initFrame = function(){
	var data = this._drill_COWA_CPD_data;
	this.width = data['width'];
	this.height = data['height'];
	this.standardFontSize = function(){ return this._drill_COWA_CPD_data['fontsize']; }
	
	this.createContents();	//重刷画布
};
//==============================
// * CPD - 贴图布局 - 初始化
//==============================
Window_Base.prototype.drill_COWA_CPD_initLayout = function(){
	var data = this._drill_COWA_CPD_data;
	
	var temp_sprite = new Sprite();
	if( data['layoutType'] == "单张背景贴图" ){ 
		temp_sprite.bitmap = ImageManager.loadBitmap( data['layoutSrcFile'], data['layoutSrc'], 0, true);
	}
	temp_sprite.x = data['layoutX'];
	temp_sprite.y = data['layoutY'];
	this._drill_COWA_backSprite = temp_sprite ;
	this._drill_COWA_layer.addChild( temp_sprite );
	
	// > 透明度
	if( data['layoutType'] == "默认皮肤" ){ 
		this.contentsOpacity = 255;
		this._drill_COWA_frameOpacity = 255;
		this._drill_COWA_layoutOpacity = 0;
	}
	if( data['layoutType'] == "单张背景贴图" ){ 
		this.contentsOpacity = 255;
		this._drill_COWA_frameOpacity = 0;
		this._drill_COWA_layoutOpacity = 255;
	}
	if( data['layoutType'] == "隐藏布局" ){ 
		this.contentsOpacity = 255;
		this._drill_COWA_frameOpacity = 0;
		this._drill_COWA_layoutOpacity = 0;
	}
};
//==============================
// * CPD - 透明属性 - 布局透明定义
//==============================
Object.defineProperty(Window_Base.prototype, '_drill_COWA_layoutOpacity', {
    get: function() {
        return this._drill_COWA_layer.alpha * 255;
    },
    set: function(value) {
        this._drill_COWA_layer.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});
//==============================
// * CPD - 透明属性 - 窗口框架透明定义
//==============================
Object.defineProperty(Window.prototype, '_drill_COWA_frameOpacity', {	//这部分其实已经被rmmv定义为"opacity"
    get: function() {													//但为了防止概念混淆，这里重新定义一次
        return this._windowSpriteContainer.alpha * 255;
    },
    set: function(value) {
        this._windowSpriteContainer.alpha = value.clamp(0, 255) / 255;
    },
    configurable: true
});
//==============================
Sprite.prototype.drill_COWA_setButtonMove = function( data ){
	
	// > 默认值
	data['enable'] = true;																//开关
	if( data['x'] == undefined ){ data['x'] = this.x };									//平移x
	if( data['y'] == undefined ){ data['y'] = this.y };									//平移y
	//if( data['opacity'] == undefined ){ data['opacity'] = 255 };						//透明度
	
	data['slideCur'] = 0;																//移动 - 当前时间
	if( data['slideDelay'] == undefined ){ data['slideDelay'] = 0 };					//移动 - 延迟
	if( data['slideTime'] == undefined ){ data['slideTime'] = 0 };						//移动 - 时长
	if( data['slideMoveType'] == undefined ){ data['slideMoveType'] = "匀速移动" };		//移动 - 移动类型（匀速移动/弹性移动/不移动）
	if( data['slidePosType'] == undefined ){ data['slidePosType'] = "相对坐标" };		//移动 - 起点-坐标类型（相对坐标/绝对坐标）
	if( data['slideX'] == undefined ){ data['slideX'] = 0 };							//移动 - 起点-相对坐标x
	if( data['slideY'] == undefined ){ data['slideY'] = 0 };							//移动 - 起点-相对坐标y
	if( data['slideAbsoluteX'] == undefined ){ data['slideAbsoluteX'] = 0 };			//移动 - 起点-绝对坐标x
	if( data['slideAbsoluteY'] == undefined ){ data['slideAbsoluteY'] = 0 };			//移动 - 起点-绝对坐标y
	
	this._drill_COWA_SBM_data = data;
	this.drill_COWA_SBM_initMove();		//初始化 - 移动属性 
};
//==============================
Sprite.prototype.drill_COWA_SBM_resetMove = function(){
	var data = this._drill_COWA_SBM_data;
	if( data['slideMoveType'] == "不移动" ){ return; }
	
	data['slideCur'] = 0;
	this.drill_COWA_SBM_initMove();
	//（按钮不控制透明度）
};
//==============================
// * SBM - 初始化
//==============================
var _drill_COWA_SBM_initialize = Sprite.prototype.initialize;
Sprite.prototype.initialize = function(bitmap){
	_drill_COWA_SBM_initialize.call(this, bitmap);
	this._drill_COWA_SBM_data = {};
	this._drill_COWA_SBM_data['enable'] = false;
};
//==============================
// * SBM - 帧刷新
//==============================
var _drill_COWA_SBM_update = Sprite.prototype.update;
Sprite.prototype.update = function(){
	_drill_COWA_SBM_update.call(this);
	if( this._drill_COWA_SBM_data['enable'] == false ){ return; }
	
	this.drill_COWA_SBM_updateMove();	//帧刷新 - 移动属性 
};
//==============================
// * SBM - 移动属性 - 初始化
//==============================
Sprite.prototype.drill_COWA_SBM_initMove = function(){
	var data = this._drill_COWA_SBM_data;
	
	if( data['slidePosType'] == "相对坐标" ){
		this.x = data['x'] + data['slideX'];
		this.y = data['y'] + data['slideY'];
	}
	if( data['slidePosType'] == "绝对坐标" ){
		this.x = data['slideAbsoluteX'];
		this.y = data['slideAbsoluteY'];
	}
	if( data['slideMoveType'] == "不移动" ){
		this.x = data['x'];
		this.y = data['y'];
		//（按钮不控制透明度）
	}
};
//==============================
// * SBM - 移动属性 - 帧刷新
//==============================
Sprite.prototype.drill_COWA_SBM_updateMove = function(){
	var data = this._drill_COWA_SBM_data;
	
	// > 时间控制
	data['slideDelay'] -= 1;
	if( data['slideDelay'] >= 0 ){ return; }
	data['slideCur'] += 1;
	if( data['slideCur'] > data['slideTime'] ){ return; }
	if( data['slideMoveType'] == "不移动" ){ return; }
	
	// > 移动
	var xx = data['x'];
	var yy = data['y'];
	var dx = 0;
	var dy = 0;
	if( data['slidePosType'] == "相对坐标" ){
		dx = data['slideX'];
		dy = data['slideY'];
	}
	if( data['slidePosType'] == "绝对坐标" ){
		dx = data['slideAbsoluteX'] - data['x'];	//窗口的上层一般直接为scene，所以绝对坐标不会被叠加。
		dy = data['slideAbsoluteY'] - data['y'];
	}
	if( data['slideMoveType'] == "匀速移动" ){
		xx += dx - dx / data['slideTime'] * data['slideCur'];
		yy += dy - dy / data['slideTime'] * data['slideCur'];
	}
	if( data['slideMoveType'] == "弹性移动" ){		//r = 1/2*a*t^2
		var ax = 2 * dx / data['slideTime'] / data['slideTime'];
		var ay = 2 * dy / data['slideTime'] / data['slideTime'];
		var c_time = data['slideTime'] - data['slideCur'];
		xx += 0.5 * ax * c_time * c_time ;
		yy += 0.5 * ay * c_time * c_time ;
	}
	if( data['slideCur'] == data['slideTime'] ){	//最后一刻锁定坐标位置
		xx = data['x'];
		yy = data['y'];
	}
	this.x = xx;
	this.y = yy;
};
//==============================
var _drill_COWA_SBM_w_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height){
	_drill_COWA_SBM_w_initialize.call(this, x, y, width, height);
	this._drill_COWA_SBM_data = {};
	this._drill_COWA_SBM_data['enable'] = false;
};
//==============================
Window_Base.prototype.drill_COWA_SBM_update = function(){
	if( this._drill_COWA_SBM_data['enable'] == false ){ return; }
	
	this.drill_COWA_SBM_updateMove();	//帧刷新 - 移动属性 
};
//==============================
Window_Base.prototype.drill_COWA_setButtonMove = Sprite.prototype.drill_COWA_setButtonMove;
Window_Base.prototype.drill_COWA_SBM_resetMove = Sprite.prototype.drill_COWA_SBM_resetMove;
Window_Base.prototype.drill_COWA_SBM_initMove = Sprite.prototype.drill_COWA_SBM_initMove;
Window_Base.prototype.drill_COWA_SBM_updateMove = Sprite.prototype.drill_COWA_SBM_updateMove;


