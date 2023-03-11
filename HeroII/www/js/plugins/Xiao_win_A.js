 /*:
* @plugindesc 萧遥小熊的综合内容放在这个地方.
* @author 萧遥小熊
*
*
* @help

  No
*/
/*-------------------------------获取臂力------------------------------------------*/
function Xiao_Gmat(){$gameVariables.setValue(37,$gameActors.actor($gameVariables.value(62)).mat);}
/*-------------------------------获取根骨------------------------------------------*/
function Xiao_Gmdf(){$gameVariables.setValue(38,$gameActors.actor($gameVariables.value(62)).mdf);}
/*-------------------------------获取敏捷------------------------------------------*/
function Xiao_Gagi(){$gameVariables.setValue(39,$gameActors.actor($gameVariables.value(62)).agi);}
/*-------------------------------获取悟性------------------------------------------*/
function Xiao_Gluk(){$gameVariables.setValue(40,$gameActors.actor($gameVariables.value(62)).luk);}
/*-------------------------------获取当前生命------------------------------------------*/
function Xiao_Ghp(){$gameVariables.setValue(33,$gameActors.actor($gameVariables.value(62)).hp);}
/*-------------------------------获取最大生命------------------------------------------*/
function Xiao_Gmhp(){$gameVariables.setValue(34,$gameActors.actor($gameVariables.value(62)).mhp);}
/*-------------------------------获取当前内力------------------------------------------*/
function Xiao_Gmp(){$gameVariables.setValue(35,$gameActors.actor($gameVariables.value(62)).mp);}
/*-------------------------------获取最大内力------------------------------------------*/
function Xiao_Gmmp(){$gameVariables.setValue(36,$gameActors.actor($gameVariables.value(62)).mmp);}
/*--------------------------------------------------------------------------------------*/
function customSkillNames(id){
	var a = $gameActors.actor(40).name();
$dataSkills[id].name = a;
}

/*-------------------------------修改装备位置------------------------------------------*/

Window_EquipSlot.prototype.itemRect = function(index) {
    var rect = new Rectangle();
    switch(index)
    {
        case 0:
            rect.x = 243; rect.y = 54; break;//手
        case 1:
            rect.x = 395; rect.y = 0; break;//头
        case 2:
            rect.x = 433; rect.y = 101; break;//身
        case 3:
            rect.x = 315; rect.y = 156; break;//脚
        case 4:
            rect.x = 58; rect.y = 69; break;//饰
    }
    rect.width = 40;
    rect.height = 40;
    return rect;
};

/*-------------------------------去掉敌人编号------------------------------------------*/

Game_Enemy.prototype.name = function() {return this.originalName()};

/*-------------------------------物品技能彩色------------------------------------------*/
Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
    var sub_str = String(text).match(/\\c\[(\d+)\]/i);
    if (sub_str)
    {
        this.contents.textColor = this.textColor(Number(sub_str[1]));
        text = text.replace(/\\c\[(\d+)\]/ig,'');
        this.contents.drawText(text, x, y, maxWidth, this.lineHeight(), align);
        this.resetTextColor();
    }
    else
        this.contents.drawText(text, x, y, maxWidth, this.lineHeight(), align);
};
/*-------------------------------套装属性装备------------------------------------------*/
/*
 * 套装的效果等同于额外装备了一件武器，要增加的属性就设定在该武器内；
 * 目前只支持基础属性的增加。
 * 在装备（武器、防具）备注栏里填入<Suit:套装序号,1,2件套对应武器编号,3件套,4件套……>
 * 例：<Suit:1,1,5,5,6>;
 * 套装序号从1开始，不同套装序号不同；序号后的“1”是固定值，别改，就是“1”；
 * 例如，2件套对应武器编号填了“5”，那么满足2件效果就会增加编号5武器的相应属性；
 * 3件套如果还是填的“5”，则等同于三件套无效果；
 * 如果4件套填了“6”，那么满足4件套效果会增加编号6武器的相应属性，之前2件套的效果会取消，
 * 所以设定编号“6”武器的属性的时候，一定要把之前编号“5”的武器的相关属性也算进去。
 *
 */
(function() {
    Game_Actor.prototype.param = function(paramId) {
        var value = this.paramBase(paramId) + this.paramPlus(paramId) + this.paramSuit(paramId);
        value *= this.paramRate(paramId) * this.paramBuffRate(paramId);
        var maxValue = this.paramMax(paramId);
        var minValue = this.paramMin(paramId);
        return Math.round(value.clamp(minValue, maxValue));
    };

    Game_Actor.prototype.paramSuit = function(paramId) {
        var value = 0;
        var suits = new Array();
        var equips = this.equips();
        for (var i = 0; i < equips.length; i++) {
            var item = equips[i];
            if (item && item.meta.Suit) {
                var tempSuit = item.meta.Suit.split(",");
                var suitIndex = Number(tempSuit[0]);
                if (suits[suitIndex]) {
                    suits[suitIndex][1] += 1;
                } else {
                    suits[suitIndex] = tempSuit;
                    var suitNum = Number(suits[suitIndex][1]);
                    suits[suitIndex][1] = suitNum;
                }
            }
        }
        var currentSuits = suits;
        for (var j = 0; j < currentSuits.length; j++) {
            if (currentSuits[j] && Number(currentSuits[j][1]) > 1 ) {
                var indexSuit = Number(currentSuits[j][1]);
                var indexParam = Number(currentSuits[j][indexSuit]);
                value += $dataWeapons[indexParam].params[paramId];
            }
        }
        return value;
    }
}());
 /*-------------------------------修复动画镜像旋转错误------------------------------------------*/

 var Imported = Imported || {};
 Imported.Kien_MirrorAnimationFix = true;

 var Kien = Kien || {};
 Kien.MirroredAnimation = {};

 Kien.MirroredAnimation.Sprite_Animation_setup = Sprite_Animation.prototype.setup;
 Sprite_Animation.prototype.setup = function(target, animation, mirror, delay) {
     Kien.MirroredAnimation.Sprite_Animation_setup.apply(this,arguments);
     if (this._animation && this._mirror){
         this.scale.x = -1;
     }
 };

 Sprite_Animation.prototype.updateCellSprite = function(sprite, cell) {
     var pattern = cell[0];
     if (pattern >= 0) {
         var sx = pattern % 5 * 192;
         var sy = Math.floor(pattern % 100 / 5) * 192;
         var mirror = this._mirror;
         sprite.bitmap = pattern < 100 ? this._bitmap1 : this._bitmap2;
         sprite.setFrame(sx, sy, 192, 192);
         sprite.x = cell[1];
         sprite.y = cell[2];
         sprite.rotation = cell[4] * Math.PI / 180;
         sprite.scale.x = cell[3] / 100;
         if (cell[5]) {
             sprite.scale.x *= -1;
         }
         sprite.scale.y = cell[3] / 100;
         sprite.opacity = cell[6];
         sprite.blendMode = cell[7];
         sprite.visible = this._target.visible;
     } else {
         sprite.visible = false;
     }
 };
 //Tp------------------------------------------------------------------------------------------
 //Game_BattlerBase.prototype.maxTp = function() {
 //    return 100*$gameVariables.value(834);
 //};
 //PK------------------------------------------------------------------------------------------
 function Xiao_PkClassII(){
     $.get(Jurl+Nurl+"PkName", function (result) {$gameVariables.setValue(653,result);});
     $.get(Jurl+Nurl+"PkText", function (result) {$gameVariables.setValue(657,result);});
     $.get(Jurl+Nurl+"PkClass", function (result) {SessionData.PkClass=result;
         $gameVariables.setValue(656,SessionData.PkClass);
         $.get(Jurl+Nurl+"PkSex", function (result) {SessionData.PkSex=result;
             $gameVariables.setValue(655,SessionData.PkSex);
             if(SessionData.PkSex=="男"){
                 $gameSwitches.setValue(719,true);
                 $gameSwitches.setValue(720,false)
             }else{
                 $gameSwitches.setValue(719,false);
                 $gameSwitches.setValue(720,true)
             }
             var Pkinfo = SessionData.PkClass+SessionData.PkSex;
             $gameVariables.setValue(660,Pkinfo);
         });
     });}
 function Xiao_PlayerII(){
     switch ($gameVariables.value(660)) {
         case "无门派男":
             $gameVariables.setValue(654,754);
             $gameSwitches.setValue(721,true);
             $gameVariables.setValue(658,1);
             break;
         case "无门派女":
             $gameVariables.setValue(654,769);//1
             $gameSwitches.setValue(721,true);
             $gameVariables.setValue(658,2);
             break;
         case "华山派男":
             $gameVariables.setValue(654,755);
             $gameSwitches.setValue(722,true);
             $gameVariables.setValue(658,3);
             break;
         case "华山派女":
             $gameVariables.setValue(654,770);//2
             $gameSwitches.setValue(722,true);
             $gameVariables.setValue(658,4);
             break;
         case "少林寺男":
             $gameVariables.setValue(654,756);
             $gameSwitches.setValue(723,true);
             $gameVariables.setValue(658,5);
             break;
         case "少林寺女":
             $gameVariables.setValue(654,776);//3
             $gameSwitches.setValue(729,true);
             $gameVariables.setValue(656,"峨眉派");
             $gameVariables.setValue(658,6);
             break;
         case "武当派男":
             $gameVariables.setValue(654,757);
             $gameSwitches.setValue(724,true);
             $gameVariables.setValue(658,7);
             break;
         case "武当派女":
             $gameVariables.setValue(654,771);//4
             $gameSwitches.setValue(724,true);
             $gameVariables.setValue(658,8);
             break;
         case "全真教男":
             $gameVariables.setValue(654,758);
             $gameSwitches.setValue(725,true);
             $gameVariables.setValue(658,9);
             break;
         case "全真教女":
             $gameVariables.setValue(654,772);//5
             $gameSwitches.setValue(725,true);
             $gameVariables.setValue(658,10);
             break;
         case "丐帮男":
             $gameVariables.setValue(654,759);
             $gameSwitches.setValue(726,true);
             $gameVariables.setValue(658,11);
             break;
         case "丐帮女":
             $gameVariables.setValue(654,773);//6
             $gameSwitches.setValue(726,true);
             $gameVariables.setValue(658,12);
             break;
         case "血刀门男":
             $gameVariables.setValue(654,760);
             $gameSwitches.setValue(727,true);
             $gameVariables.setValue(658,13);
             break;
         case "血刀门女":
             $gameVariables.setValue(654,774);//7
             $gameSwitches.setValue(727,true);
             $gameVariables.setValue(658,14);
             break;
         case "雪山派男":
             $gameVariables.setValue(654,761);
             $gameSwitches.setValue(728,true);
             $gameVariables.setValue(658,15);
             break;
         case "雪山派女":
             $gameVariables.setValue(654,775);//8
             $gameSwitches.setValue(728,true);
             $gameVariables.setValue(658,16);
             break;
         case "峨眉派男":
             $gameVariables.setValue(654,756);
             $gameSwitches.setValue(723,true);
             $gameVariables.setValue(656,"少林寺");
             $gameVariables.setValue(658,5);
             break;
         case "峨眉派女":
             $gameVariables.setValue(654,776);//9
             $gameSwitches.setValue(729,true);
             $gameVariables.setValue(658,6);
             break;
         case "古墓派男":
             $gameVariables.setValue(654,762);
             $gameSwitches.setValue(730,true);
             $gameVariables.setValue(658,17);
             break;
         case "古墓派女":
             $gameVariables.setValue(654,777);//10
             $gameSwitches.setValue(730,true);
             $gameVariables.setValue(658,18);
             break;
         case "星宿派男":
             $gameVariables.setValue(654,763);
             $gameSwitches.setValue(731,true);
             $gameVariables.setValue(658,19);
             break;
         case "星宿派女":
             $gameVariables.setValue(654,778);//11
             $gameSwitches.setValue(731,true);
             $gameVariables.setValue(658,20);
             break;
         case "灵鹫宫男":
             $gameVariables.setValue(654,764);
             $gameSwitches.setValue(732,true);
             $gameVariables.setValue(658,21);
             break;
         case "灵鹫宫女":
             $gameVariables.setValue(654,779);//12
             $gameSwitches.setValue(732,true);
             $gameVariables.setValue(658,22);
             break;
         case "日月神教男":
             $gameVariables.setValue(654,765);
             $gameSwitches.setValue(733,true);
             $gameVariables.setValue(658,23);
             break;
         case "日月神教女":
             $gameVariables.setValue(654,780);//13
             $gameSwitches.setValue(733,true);
             $gameVariables.setValue(658,24);
             break;
         case "嵩山派男":
             $gameVariables.setValue(654,766);
             $gameSwitches.setValue(734,true);
             $gameVariables.setValue(658,25);
             break;
         case "嵩山派女":
             $gameVariables.setValue(654,781);//14
             $gameSwitches.setValue(735,true);
             $gameVariables.setValue(656,"恒山派");
             $gameVariables.setValue(658,26);
             break;
         case "恒山派男":
             $gameVariables.setValue(654,766);
             $gameSwitches.setValue(734,true);
             $gameVariables.setValue(656,"嵩山派");
             $gameVariables.setValue(658,25);
             break;
         case "恒山派女":
             $gameVariables.setValue(654,781);//15
             $gameSwitches.setValue(735,true);
             $gameVariables.setValue(658,26);
             break;
         case "五毒教男":
             $gameVariables.setValue(654,767);
             $gameSwitches.setValue(737,true);
             $gameVariables.setValue(656,"泰山派");
             $gameVariables.setValue(658,28);
             break;
         case "五毒教女":
             $gameVariables.setValue(654,782);//16
             $gameSwitches.setValue(736,true);
             $gameVariables.setValue(658,27);
             break;
         case "泰山派男":
             $gameVariables.setValue(654,767);
             $gameSwitches.setValue(737,true);
             $gameVariables.setValue(658,28);
             break;
         case "泰山派女":
             $gameVariables.setValue(654,782);//17
             $gameSwitches.setValue(736,true);
             $gameVariables.setValue(656,"五毒教");
             $gameVariables.setValue(658,27);
             break;
         case "逍遥派男":
             $gameVariables.setValue(654,767);
             $gameSwitches.setValue(737,true);
             $gameVariables.setValue(656,"泰山派");
             $gameVariables.setValue(658,28);
             break;
         case "逍遥派女":
             $gameVariables.setValue(654,782);//18
             $gameSwitches.setValue(736,true);
             $gameVariables.setValue(656,"五毒教");
             $gameVariables.setValue(658,27);
             break;

         default:
             $gameVariables.setValue(881,11);
     }
 }