//=============================================================================
// NameInput.js
//=============================================================================
/*:
 * @plugindesc 名字输入
 * @author wangwang
 *
 *
 * @help
 * 帮助的信息
 * 用网页输入代替原本的名字输入
 *
 *
 *
 */




function Window_BC() {
    this.initialize.apply(this, arguments);
}

(function() {

    Scene_Name.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_Name.prototype.constructor = Scene_Name;
//初始化
    Scene_Name.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };
//准备
    Scene_Name.prototype.prepare = function(actorId, maxLength) {
        this._actorId = actorId;
        this._maxLength = maxLength;
    };
//创建
    Scene_Name.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this._actor = $gameActors.actor(this._actorId);
        this.createEditWindow();
        this.createBCWindow();
        //$("input").focus()
    };
//开始
    Scene_Name.prototype.start = function() {
        Scene_MenuBase.prototype.start.call(this);
        this._editWindow.refresh();

    };

//创建编辑窗口
    Scene_Name.prototype.createEditWindow = function() {
        this._editWindow = new Window_NameEdit(this._actor, this._maxLength);
        this.addWindow(this._editWindow);
    };

    Scene_Name.prototype.createBCWindow = function() {
        var x = this._editWindow.x + this._editWindow.left();
        var y = this._editWindow.y + 59;
        var width = this._editWindow.charWidth() * this._maxLength+10;
        var height = this._editWindow.lineHeight();

        Graphics._addInput("text",x,y, width,height, this._editWindow.standardFontSize());
        Graphics._input.maxLength = this._maxLength;
        Graphics._input.value = this._actor.name().slice(0, this._maxLength);
        this._bcWindow = new Window_BC("确定");
        this._bcWindow.x = this._editWindow.x + this._editWindow.width - this._bcWindow.width;
        this._bcWindow.y = this._editWindow.y +this._editWindow.height+10;
        this._bcWindow.setHandler('dianji', this.onInputOk.bind(this));
        this.addWindow(this._bcWindow);

        this._csWindow = new Window_BC("还原");
        this._csWindow.x = this._editWindow.x + this._editWindow.width - this._bcWindow.width - this._bcWindow.width-10;
        this._csWindow.y = this._editWindow.y +this._editWindow.height+10;
        this._csWindow.setHandler('dianji', this.oncs.bind(this));
        this.addWindow(this._csWindow);

        this._gmWindow = new Window_BC("改名");
        this._gmWindow.x = this._editWindow.x + this._editWindow.width - this._bcWindow.width - this._bcWindow.width-100;
        this._gmWindow.y = this._editWindow.y +this._editWindow.height+10;
        this._gmWindow.setHandler('dianji', this.rname.bind(this));
        this.addWindow(this._gmWindow);
    };

//输入初始化
    Scene_Name.prototype.oncs = function() {
        Graphics._input.value = this._actor.name().slice(0, this._maxLength);
    };


//当输入确定
    Scene_Name.prototype.onInputOk = function() {
        var name="" + Graphics._input.value;
        this._actor.setName(name);
        this.popScene();
        Graphics._removeInput()
    };

//选择改名
    Scene_Name.prototype.rname = function() {
        var NameWord = prompt("请输入你的名字",Graphics._input.value);
        Graphics._input.value = NameWord;
        if(NameWord == "" || NameWord == null) {
            Graphics._input.value = this._actor.name().slice(0, this._maxLength);
        }else{
            Graphics._input.value = NameWord.slice(0, this._maxLength);
        }

    };

//名称编辑窗口
    Window_NameEdit.prototype = Object.create(Window_Base.prototype);
    Window_NameEdit.prototype.constructor = Window_NameEdit;
//初始化
    Window_NameEdit.prototype.initialize = function(actor, maxLength) {
        var width = this.windowWidth();
        var height = this.windowHeight();
        var x = (Graphics.boxWidth - width) / 2;
        var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this._actor = actor;
        this._name = actor.name().slice(0, this._maxLength);
        this._index = this._name.length;
        this._maxLength = maxLength;
        this._defaultName = this._name;
        this.deactivate();
        this.refresh();
        ImageManager.loadFace(actor.faceName());
    };

//窗口宽
    Window_NameEdit.prototype.windowWidth = function() {
        return 480;
    };

//窗口高
    Window_NameEdit.prototype.windowHeight = function() {
        return this.fittingHeight(4);
    };

//名称
    Window_NameEdit.prototype.name = function() {
        return this._name;
    };


//脸宽
    Window_NameEdit.prototype.faceWidth = function() {
        return 144;
    };
//字符宽
    Window_NameEdit.prototype.charWidth = function() {
        var text =  '我';
        return this.textWidth(text);
    };

//左
    Window_NameEdit.prototype.left = function() {
        var nameCenter = (this.contentsWidth() + this.faceWidth()) / 2;
        var nameWidth = (this._maxLength + 1) * this.charWidth();
        return Math.min(nameCenter - nameWidth / 2, this.contentsWidth() - nameWidth);
    };

//刷新
    Window_NameEdit.prototype.refresh = function() {
        this.contents.clear();
        this.drawActorFace(this._actor, 0, 0);
    };



//随便写的点击窗口....
    Window_BC.prototype = Object.create(Window_Base.prototype);
    Window_BC.prototype.constructor = Window_BC;
//初始化
    Window_BC.prototype.initialize = function(text) {
        var width = 80
        var height = this.fittingHeight(1);
        Window_Base.prototype.initialize.call(this, 0, 0, width, height);
        this._handlers = {};
        this._text = '';
        this.setText(text)
    };
    Window_BC.prototype.standardFontSize = function() {
        return 18;
    };
    Window_BC.prototype.lineHeight = function() {
        return 22;
    };

    Window_BC.prototype.standardPadding = function() {
        return 14;
    };

    Window_BC.prototype.textPadding = function() {
        return 0;
    };

//设置文本
    Window_BC.prototype.setText = function(text) {
        if (this._text !== text) {
            this._text = text;
            this.refresh();
        }
    };

//清除
    Window_BC.prototype.clear = function() {
        this.setText('');
    };
//刷新
    Window_BC.prototype.refresh = function() {
        this.contents.clear();
        this.drawTextEx(this._text, this.textPadding(), 0);
    };

    Window_BC.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        this.dianji()
    };

    Window_BC.prototype.setHandler = function(symbol, method) {
        this._handlers[symbol] = method;
    };
    Window_BC.prototype.isHandled = function(symbol) {
        return !!this._handlers[symbol];
    };
    Window_BC.prototype.callHandler = function(symbol) {
        if (this.isHandled(symbol)) {
            this._handlers[symbol]();
        }
    };

    Window_BC.prototype.dianji = function() {
        if (this.isOpen()) {
            if (TouchInput.isTriggered()) {
                var x = this.canvasToLocalX(TouchInput.x);
                var y = this.canvasToLocalY(TouchInput.y);
                if(x >= 0 && y >= 0 && x < this.width && y < this.height){
                    this.callHandler("dianji")
                }
            }
        }
    };



    Graphics._createAllElements = function() {
        this._createErrorPrinter();
        this._createCanvas();
        this._createVideo();
        this._createUpperCanvas();
        this._createRenderer();
        this._createFPSMeter();
        this._createModeBox();
        this._createGameFontLoader();

        this._createInput()     //修改
    };

    /**更新所有成分
     * @static
     * @method _updateAllElements
     * @private
     */
    Graphics._updateAllElements = function() {
        this._updateRealScale();
        this._updateErrorPrinter();
        this._updateCanvas();
        this._updateVideo();
        this._updateUpperCanvas();
        this._updateRenderer();

        this._updateInput();     //添加

        this._paintUpperCanvas();
    };



//创建输入
    Graphics._createInput = function() {
        this._input = document.createElement("input");
        this._input.id = 'Input';
        this._input.type ="text";
        //this._input.autofocus ="autofocus";
        this._input._sx ={};
        var sx = this._input._sx;
        sx.xs = false;
        sx.x= 0;
        sx.y=0;
        sx.width =100;
        sx.height= 20;
        sx.fontSize = 18;
        //document.body.appendChild(this._input);
    };
//添加输入
    Graphics._addInput = function(type,x,y,width,height,fontSize) {
        this._input.type = type || "text";
        var sx = this._input._sx;
        sx.x= x;
        sx.y= y;
        sx.width = width|| 100;
        sx.height= height|| 20;
        sx.fontSize = fontSize || 18;
        this._updateInput();
        sx.xs = true;
        document.body.appendChild(this._input);


    };

//移除输入
    Graphics._removeInput = function() {
        this._input.remove();
        this._input.value = null;
        this._input._xs = false;
        //document.body.appendChild(this._input);
    };
//更新输入
    Graphics._updateInput =function () {
        this._input.style.zIndex = 12;
        var sx = this._input._sx;
        var x = sx.x  * this._realScale + (window.innerWidth - this._width * this._realScale) / 2;
        var y = sx.y  * this._realScale + (window.innerHeight - this._height * this._realScale) / 2;

        var width = sx.width * this._realScale;
        var height = sx.height * this._realScale;
        var fontSize =        sx.fontSize * this._realScale;
        this._input.style.position = 'absolute';
        this._input.style.margin = 'auto';
        this._input.style.top = y  + 'px';
        this._input.style.left = x  + 'px' ;
        this._input.style.width = width + 'px';
        this._input.style.height = height + 'px';
        this._input.style.fontSize = fontSize + 'px';
        this._input.style.fontFamily = 'GameFont';
        this._input.style.paddingLeft='10px';
        this._input.style.borderRadius='5px';
        this._input.style.borderColor="black";
        this._input.style.backgroundColor="rgb(250, 241, 211)";
    };

//防止默认
    Input._onKeyDown = function(event) {
        //如果 需要避免默认 (键值)
        if (this._shouldPreventDefault(event.keyCode)) {

            if (Graphics && Graphics._input && Graphics._input._sx && Graphics._input._sx.xs){
                //允许默认
            }else {
                //避免默认
                event.preventDefault();
            }
        }
        //键值===144
        if (event.keyCode === 144) {    // Numlock  数字开关
            //清除
            this.clear();
        }
        var buttonName = this.keyMapper[event.keyCode];
        //如果 键名
        if (buttonName) {
            //当前状态 键 =true
            this._currentState[buttonName] = true;
        }
    };



})();


//======================================================
//呼叫项目状态绘画
Window_ShopInfo.prototype.drawItemIcon = function() {
	Window_ItemStatus.prototype.drawItemIcon.call(this);
};
//增加项目状态绘画的属性
Window_ShopInfo.prototype.itemHasPictureImage = function() {
	if (!this._item) return false;
	var filename = ItemManager.getItemPictureImageFilename(this._item);
	return filename !== '';
};
//增加项目状态绘画的属性
Window_ShopInfo.prototype.readyItemPictureImage = function(item) {
	if (item !== this._item) return;
	var bitmap = ItemManager.getItemPictureImage(item);
	if (bitmap.width <= 0) {
		return setTimeout(this.readyItemPictureImage.bind(this, item), 250);
	} else {
		this.drawItemPictureImage(bitmap);
	}
};
//绘制大图标
Window_ShopInfo.prototype.drawItemPictureImage = function(bitmap) {
	var pw = bitmap.width;
	var ph = bitmap.height;
	var sx = 0;
	var sy = 0;
	var dw = pw;
	var dh = ph;
	if (dw > Yanfly.Param.ItemImageMaxWidth) {
		var rate = Yanfly.Param.ItemImageMaxWidth / dw;
		dw = Math.floor(dw * rate);
		dh = Math.floor(dh * rate);
	}
	if (dh > Yanfly.Param.ItemImageMaxHeight) {
		var rate = Yanfly.Param.ItemImageMaxHeight / dh;
		dw = Math.floor(dw * rate);
		dh = Math.floor(dh * rate);
	}
	var dx = (Window_Base._faceWidth - dw) / 2;
	var dy = (Window_Base._faceHeight - dh) / 2;
	this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, dw, dh);
};



//创建精灵改变
Battle_Hud.prototype.create_states = function() {
	if (String(Moghunter.bhud_states_visible) != "true") {
		return
	};
	this.removeChild(this._state_icon);
	if (!this._battler) {
		return
	};
	this._states_data = [0, 0, 0];
	this._state_icon = new Sprite_StateIcon();
	this._state_icon.x = this._pos_x + Moghunter.bhud_states_pos_x + 15;
	this._state_icon.y = this._pos_y + Moghunter.bhud_states_pos_y + 15;
	this.addChild(this._state_icon);
	this._state_icon.setup(this._battler);
	this._state_icon.animationWait = function() {
		return 80
	};
	this._state_icon.update();
};
//更新改变
Battle_Hud.prototype.update_sprites = function() {
	this.update_active();
	this.update_visible();
	this.update_turn();
	this.update_face();
	this.update_hp();
	this.update_mp();
	this.update_tp();
	this.update_at();
	if (this._state_icon) {
		if (this._stateType === 0) {
			this._state_icon.update();
		} else {
			this.update_states2();
		};
	};
};



//---------------
var LeeXavier_Window_BattleActor_processTouch =
	Window_BattleActor.prototype.processTouch;
Window_BattleActor.prototype.processTouch = function() {
	if (this.isOpenAndActive()) {
		if (TouchInput.isTriggered()) {
			if (this.getClickedPictureActor() >= 0) {
				var index = this.getClickedPictureActor();
				if (this.index() === index) {
					return this.processOk();
				} else {
					SoundManager.playCursor();
					return this.select(index);
				}
			}
		}
		if (TouchInput.isPressed()) {
			if (this.getClickedPictureActor() >= 0) {
				var index = this.getClickedPictureActor();
				if (this.index() !== index) {
					SoundManager.playCursor();
					return this.select(index);
				}
			}
		}
		if (Yanfly.Param.BECSelectMouseOver) {
			var index = this.getMouseOverPictureActor();
			if (index >= 0 && this.index() !== index) {
				SoundManager.playCursor();
				return this.select(index);
			}
		}
	}
	LeeXavier_Window_BattleActor_processTouch.call(this);
};

Window_BattleActor.prototype.getClickedPictureActor = function() {
	for (var i = 0; i < $gameParty.battleMembers().length; ++i) {
		var actor = $gameParty.battleMembers().reverse()[i];
		if (!actor) continue;
		if (this.isClickedPictureActor(actor)) {
			if (this._selectDead && !actor.isDead()) continue;
			if (this._inputLock && actor.index() !== this.index()) continue;
			return actor.index();
		}
	}
	return -1;
};

Window_BattleActor.prototype.isClickedPictureActor = function(actor) {
	if (!actor) return false;
	if (!actor.isSpriteVisible()) return false;
	if (!actor.isAppeared()) return false;
	if ($gameTemp._disableMouseOverSelect) return false;
	var x = TouchInput.x;
	var y = TouchInput.y;
	var rect = new Rectangle();
	rect.width = this.windowPictureWidth();
	rect.height = this.windowPictureHeight();
	rect.y = 375;
	rect.x = this.windowPictureX(actor);
	return (x >= rect.x && y >= rect.y && x < rect.x + rect.width &&
		y < rect.y + rect.height);
};

Window_BattleActor.prototype.getMouseOverPictureActor = function() {
	for (var i = 0; i < $gameParty.battleMembers().length; ++i) {
		var actor = $gameParty.battleMembers().reverse()[i];
		if (!actor) continue;
		if (this.isMouseOverPictureActor(actor)) {
			if (this._selectDead && !actor.isDead()) continue;
			if (this._inputLock && actor.index() !== this.index()) continue;
			return actor.index();
		}
	}
	return -1;
};

Window_BattleActor.prototype.isMouseOverPictureActor = function(actor) {
	if (!actor) return false;
	if (!actor.isSpriteVisible()) return false;
	if (!actor.isAppeared()) return false;
	if ($gameTemp._disableMouseOverSelect) return false;
	var x = TouchInput._mouseOverX;
	var y = TouchInput._mouseOverY;
	var rect = new Rectangle();
	rect.width = this.windowPictureWidth();
	rect.height = this.windowPictureHeight();
	rect.y = 375;
	rect.x = this.windowPictureX(actor);
	return (x >= rect.x && y >= rect.y && x < rect.x + rect.width &&
		y < rect.y + rect.height);
};

Window_BattleActor.prototype.windowPictureHeight = function() {
	return 160;
};

Window_BattleActor.prototype.windowPictureWidth = function() {
	return 240;
};

Window_BattleActor.prototype.windowPictureX = function(a) {
	var b_actor = $gameParty.battleMembers();
	if (b_actor.length == 1) {
		return 355;
	} else if (b_actor.length == 2) {
		for (let i = 0; i < b_actor.length; i++) {
			if (b_actor[0] == a) {
				return 120;
			}else if (b_actor[1] == a) {
				return 590;
			}
		}
	} else if (b_actor.length == 3) {
		for (let i = 0; i < b_actor.length; i++) {
			if (b_actor[0] == a) {
				return 50;
			}else if (b_actor[1] == a) {
				return 370;
			}else if (b_actor[2] == a) {
				return 690;
			}
		}
	}
};

Game_Interpreter.prototype.command339 = function() {
	this.iterateBattler(this._params[0], this._params[1] == 28 ? $gameVariables.value(62) : this._params[1], function(
		battler) {
		if (!battler.isDeathStateAffected()) {
			battler.forceAction(this._params[2], this._params[3]);
			BattleManager.forceAction(battler);
			this.setWaitMode('action');
		}
	}.bind(this));
	return true;
};


function Scene_MenuMiniMap() {
	this.initialize.apply(this, arguments);
}
Scene_MenuMiniMap.prototype = Object.create(Scene_MenuBase.prototype);
Scene_MenuMiniMap.prototype.constructor = Scene_MenuMiniMap;
Scene_MenuMiniMap.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
};
Scene_MenuMiniMap.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this.createMenuMiniMap();
};
Scene_MenuMiniMap.prototype.start = function() {
	Scene_MenuBase.prototype.start.call(this);
};
Scene_MenuMiniMap.prototype.createMenuMiniMap = function() {
	this.miniMapBackground = new Sprite();
	this.myPlace = new Sprite();
	this.closeButton = new Sprite_Button();
	this.miniMapBackground.bitmap = ImageManager.loadPicture($dataMap.note.split(',')[0]);
	this.myPlace.bitmap = ImageManager.loadPicture('myPlace');
	this.closeButton.bitmap = ImageManager.loadPicture("myClose");
	this.miniMapBackground.x = 0;
	this.miniMapBackground.y = 0;
	this.myPlace.x = Number($dataMap.note.split(',')[1]);
	this.myPlace.y = Number($dataMap.note.split(',')[2]);
	this.closeButton.x = 800;
	this.closeButton.y = 80;
	this.addChild(this.miniMapBackground);
	this.addChild(this.myPlace);
	this.addChild(this.closeButton);
	this.closeButton.setClickHandler(this.closeSwitch.bind(this));
};

Scene_MenuMiniMap.prototype.flicker = function() {
 this.myPlace.opacity -= 5;
 if(this.myPlace.opacity < 15){
  this.myPlace.opacity = 255
 } 
};

Scene_MenuMiniMap.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
                this.flicker();
                //this.testPositionMethod();
	if(Input.isTriggered('cancel')){
		SceneManager.goto(Scene_Map);
	}
};
Scene_MenuMiniMap.prototype.closeSwitch = function(){
	SceneManager.goto(Scene_Map);
};
Scene_MenuMiniMap.prototype.createBackground = function() {
	this._backgroundSprite = new Sprite();
	this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
	this.addChild(this._backgroundSprite);
};

//Scene_MenuMiniMap.prototype.testPositionMethod = function() {
// this.myPlace.x = PositionMethodx(Number($dataMap.note.split(',')[1]));
 //this.myPlace.y = PositionMethody(Number($dataMap.note.split(',')[2]));
//}
//Lee_Xavier_Scene_MenuMiniMap_testPositionX = 0;
//Lee_Xavier_Scene_MenuMiniMap_testPositionY = 0;
//function PositionMethodx(num){
// if(Lee_Xavier_Scene_MenuMiniMap_testPositionX == 0){
 // return num;
 //}else {
 // return Lee_Xavier_Scene_MenuMiniMap_testPositionX;
// }
//}
//function PositionMethody(num){
// if(Lee_Xavier_Scene_MenuMiniMap_testPositionY == 0){
//  return num;
// }else {
//  return Lee_Xavier_Scene_MenuMiniMap_testPositionY;
// }
//};

//Lee_Xavier_Scene_MenuMiniMap_testPositionX = 0;
//Lee_Xavier_Scene_MenuMiniMap_testPositionY = 0

// Scene_MenuBase.prototype.setBackgroundOpacity = function(opacity) {
//     this._backgroundSprite.opacity = opacity;
// };

var xiaoBkBitMap = {};
xiaoBkBitMap.imgList = ['cs_1', 'cs_2', 'cs_3', 'cs_4', 'cs_5', 'cs_6', 'cs_7', 'cs_8', 'cs_9', 'cs_10',
    'ls_1', 'ls_2', 'ls_3', 'ls_4', 'ls_5', 'ls_6', 'ls_7', 'ls_8', 'ls_9', 'ls_10',
    'zs_1', 'zs_2', 'zs_3', 'zs_4', 'zs_5', 'zs_6', 'zs_7', 'zs_8', 'zs_9', 'zs_10',
    'js_1', 'js_2', 'js_3', 'js_4', 'js_5', 'js_6', 'js_7', 'js_8', 'js_9', 'js_10',
    'hs_1', 'hs_2', 'hs_3', 'hs_4', 'hs_5', 'hs_6', 'hs_7', 'hs_8', 'hs_9', 'hs_10',
    'ws_1',
    'qs_1', 'qs_2', 'qs_3', 'qs_4', 'qs_5', 'qs_6', 'qs_7', 'qs_8', 'qs_9', 'qs_10'];
xiaoBkBitMap.bitmapList = {};
function loadImg (img) {
    return new Promise(resolve => {
            var imgbit = Bitmap.load(`img/xiaobk/${img}.png`)
    imgbit.addLoadListener(() => {
        resolve(imgbit)
    })
})
}
xiaoBkBitMap.imgList.forEach(async img => {
    const imgbit = await loadImg(img)
    xiaoBkBitMap.bitmapList[img] = imgbit
})
Window_EquipSlot.prototype.drawEquipBorder = function (item, rect, index) {
    if (this._actor) {
        const self = this;
        this.clearEquipBorder(index);
        setBKxiao(parseInt(parseInt(item.meta['ici'])), index);
        function setBKxiao (level, index) {
            var curKey = 'ws';
            if (level === 1) {
                curKey = 'ws'
            } else if (level === 2) {
                curKey = 'qs'
            } else if (level === 3) {
                curKey = 'ls'
            } else if (level === 5) {
                curKey = 'zs'
            } else if (level === 6) {
                curKey = 'cs'
            } else if (level === 7) {
                curKey = 'hs'
            } else if (level === 8) {
                curKey = 'js'
            } else  {
                curKey = 'ws'
            }

            var curImgIndex = 1;
            var limit = 5;
            var xiaobkSprite = new Sprite();
            xiaobkSprite.name = `equipBkSprite_${index}`
            xiaobkSprite.bitmap = xiaoBkBitMap.bitmapList[`${curKey}_${curImgIndex}`]
            xiaobkSprite.x = rect.x + 9;
            xiaobkSprite.y = rect.y + 8;
            //xiaobkSprite.width = 95;
            //xiaobkSprite.height = 95;
            xiaobkSprite.scale = { x: 45 / 95, y: 45 / 95 };
            self.addChild(xiaobkSprite);
            xiaobkSprite.update = () => {
                if (limit === 5) {
                    curImgIndex++;
                    if (curImgIndex === 11) {
                        curImgIndex = 1
                    }
                    xiaobkSprite.bitmap = xiaoBkBitMap.bitmapList[`${curKey}_${curImgIndex}`]
                }
                limit--
                if (limit === 0) {
                    limit = 5
                }
            }
        }

    }
};
Window_EquipSlot.prototype.clearEquipBorder = function (index) {
    const weaponBkSpriteIndex = this.children.findIndex(sprite => {
            return sprite.name === `equipBkSprite_${index}`
})
if (weaponBkSpriteIndex !== -1) {
    this.removeChild(this.children[weaponBkSpriteIndex])
}
}