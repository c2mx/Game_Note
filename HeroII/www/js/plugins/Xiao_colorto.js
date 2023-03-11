// JavaScript Document
 /*:
* @plugindesc 物品颜色描绘
* @author 萧遥小熊
* 
* @help 
* 在数据库物品备注栏里添加<ici:数字>
<ici:1> # 一般品质的色彩（白，1）
<ici:2> # 平庸品质的色彩（绿，2）
<ici:3> # 精良品质的色彩（蓝，3）
<ici:4> # 卓越品质的色彩（紫，4）
<ici:5> # 专属物品的色彩（黑，5）
<ici:6> # 传说品质的色彩（橙，6）
<ici:7> # 神秘品质的色彩（红，7）
<ici:8> # 特殊品质的色彩（黄，8）
*/
    (function() {
            Window_Base.prototype.itemColor = function(n) {
                    switch (n) {
                            case 1:
                            return this.textColor(0);
                            break;
                            case 2:
                            return 'rgba(128, 255, 128, 1)';
                            break;
                            case 3:
                            return 'rgba(57, 185, 255, 1)';
                            break;
                            case 4:
                            return 'rgba(128, 100, 245, 1)';
                            break;
                            case 5:
                            return 'rgba(255, 40, 255, 1)';
                            break;
                            case 6:
                            return 'rgba(255, 128, 0, 1)';
                            break;
                            case 7:
                            return 'rgba(253, 55, 55, 1)';
                            break;
                            case 8:
                            return 'rgba(255, 255, 128, 1)';
                            break;
                    }
            };
            Window_Base.prototype.drawItemName = function(item, x, y, width) {
                width = width || 312;
                if (item) {
                    var iconBoxWidth = Window_Base._iconWidth + 4;
                    var ici;
                    if (item.meta.ici != null) {
                            ici = Number(item.meta.ici);
                    }else {
                            ici = 1;
                    }
                    this.changeTextColor(this.itemColor(ici));
                    this.drawIcon(item.iconIndex, x + 2, y + 2);
                    this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
                        }
            };
    }());

function Xiao_BXLX(){
    switch (SessionData.DXLXII) {
        case "百宝袋":
            $gameSwitches.setValue(750,true);
            $gameSwitches.setValue(751,false);
            break;
        case "裘千丈":
            $gameSwitches.setValue(750,false);
            $gameSwitches.setValue(751,true);
            break;
        //--------------------------------------------无信息----------------------------------------------------
        default:
            $gameVariables.setValue(881,12);
    }
}

function Xiao_BXWZ(){
    switch (SessionData.DXWZII) {
        case "平安镇":
            $gameSwitches.setValue(821,true);
            break;
        case "衡山城":
            $gameSwitches.setValue(822,true);
            break;
        case "泰山派":
            $gameSwitches.setValue(823,true);
            break;
        case "全真教":
            $gameSwitches.setValue(824,true);
            break;
        case "峨眉派":
            $gameSwitches.setValue(825,true);
            break;
        case "圆月山庄":
            $gameSwitches.setValue(826,true);
            break;
        case "侠客岛":
            $gameSwitches.setValue(827,true);
            break;
        case "少林寺":
            $gameSwitches.setValue(828,true);
            break;
        case "扬州城":
            $gameSwitches.setValue(829,true);
            break;
        case "恒山派":
            $gameSwitches.setValue(830,true);
            break;
        case "天宁寺":
            $gameSwitches.setValue(831,true);
            break;
        case "白马寺":
            $gameSwitches.setValue(832,true);
            break;
        case "大理城":
            $gameSwitches.setValue(833,true);
            break;
        case "日月神教":
            $gameSwitches.setValue(834,true);
            break;
        case "寒风岭":
            $gameSwitches.setValue(835,true);
            break;
        case "茅山":
            $gameSwitches.setValue(836,true);
            break;
        case "昆仑派":
            $gameSwitches.setValue(837,true);
            break;
        case "楼兰城":
            $gameSwitches.setValue(838,true);
            break;
        case "京城":
            $gameSwitches.setValue(839,true);
            break;
        case "光明顶":
            $gameSwitches.setValue(840,true);
            break;
        //--------------------------------------------无信息----------------------------------------------------
        default:
            $gameVariables.setValue(881,11);
    }
}