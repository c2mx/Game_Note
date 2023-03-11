/*-------------------------------NPC查看------------------------------------------*/

function NPC_equip(){
    $dataEnemies[$gameVariables.value(24)].dropItems[0].kind//种类
    $dataEnemies[$gameVariables.value(24)].dropItems[1].kind
    $dataEnemies[$gameVariables.value(24)].dropItems[2].kind
    $dataEnemies[$gameVariables.value(24)].dropItems[0].dataId//掉落物品
    $dataEnemies[$gameVariables.value(24)].dropItems[1].dataId
    $dataEnemies[$gameVariables.value(24)].dropItems[2].dataId
    switch ($dataEnemies[$gameVariables.value(24)].dropItems[0].kind) {
        case 0:
            $gameVariables.setValue(288, " ");
            break;
        case 1:
            $gameVariables.setValue(288, "["+$dataItems[$dataEnemies[$gameVariables.value(24)].dropItems[0].dataId].name+"]");
            break;
        case 2:
            $gameVariables.setValue(288, "["+$dataWeapons[$dataEnemies[$gameVariables.value(24)].dropItems[0].dataId].name+"]");
            break;
        case 3:
            $gameVariables.setValue(288, "["+$dataArmors[$dataEnemies[$gameVariables.value(24)].dropItems[0].dataId].name+"]");
            break;
        default:
            $gameVariables.setValue(288, "[未知]");
    };
    switch ($dataEnemies[$gameVariables.value(24)].dropItems[1].kind) {
        case 0:
            $gameVariables.setValue(289, " ");
            break;
        case 1:
            $gameVariables.setValue(289, "["+$dataItems[$dataEnemies[$gameVariables.value(24)].dropItems[1].dataId].name+"]");
            break;
        case 2:
            $gameVariables.setValue(289, "["+$dataWeapons[$dataEnemies[$gameVariables.value(24)].dropItems[1].dataId].name+"]");
            break;
        case 3:
            $gameVariables.setValue(289, "["+$dataArmors[$dataEnemies[$gameVariables.value(24)].dropItems[1].dataId].name+"]");
            break;
        default:
            $gameVariables.setValue(289, "[未知]");
    };
    switch ($dataEnemies[$gameVariables.value(24)].dropItems[2].kind) {
        case 0:
            $gameVariables.setValue(290, " ");
            break;
        case 1:
            $gameVariables.setValue(290, "["+$dataItems[$dataEnemies[$gameVariables.value(24)].dropItems[2].dataId].name+"]");
            break;
        case 2:
            $gameVariables.setValue(290, "["+$dataWeapons[$dataEnemies[$gameVariables.value(24)].dropItems[2].dataId].name+"]");
            break;
        case 3:
            $gameVariables.setValue(290, "["+$dataArmors[$dataEnemies[$gameVariables.value(24)].dropItems[2].dataId].name+"]");
            break;
        default:
            $gameVariables.setValue(290, "[未知]");
    };
};//装备
function NPC_level(){
    $gameVariables.setValue(26, "未知　[？级]");
    var nl =$dataEnemies[$gameVariables.value(24)].params[2];//获取能力
    if(nl>0&&nl<=5){$gameVariables.setValue(26, "不堪一击　[1级]");}
    if(nl>5&&nl<=10){$gameVariables.setValue(26, "毫不足虑　[2级]");}
    if(nl>10&&nl<=15){$gameVariables.setValue(26, "不足挂齿　[3级]");}
    if(nl>15&&nl<=20){$gameVariables.setValue(26, "初学乍练　[4级]");}
    if(nl>20&&nl<=25){$gameVariables.setValue(26, "勉勉强强　[5级]");}
    if(nl>25&&nl<=30){$gameVariables.setValue(26, "初窥门径　[6级]");}
    if(nl>30&&nl<=40){$gameVariables.setValue(26, "初出茅庐　[7级]");}
    if(nl>40&&nl<=50){$gameVariables.setValue(26, "略知一二　[8级]");}
    if(nl>50&&nl<=70){$gameVariables.setValue(26, "普普通通　[9级]");}
    if(nl>70&&nl<=90){$gameVariables.setValue(26, "平平常常　[10级]");}
    if(nl>90&&nl<=110){$gameVariables.setValue(26, "平淡无奇　[11级]");}
    if(nl>110&&nl<=130){$gameVariables.setValue(26, "粗懂皮毛　[12级]");}
    if(nl>130&&nl<=150){$gameVariables.setValue(26, "半生不熟　[13级]");}
    if(nl>150&&nl<=170){$gameVariables.setValue(26, "登堂入室　[14级]");}
    if(nl>170&&nl<=190){$gameVariables.setValue(26, "略有小成　[15级]");}
    if(nl>190&&nl<=210){$gameVariables.setValue(26, "已有小成　[16级]");}
    if(nl>210&&nl<=230){$gameVariables.setValue(26, "鹤立鸡群　[17级]");}
    if(nl>230&&nl<=250){$gameVariables.setValue(26, "驾轻就熟　[18级]");}
    if(nl>250&&nl<=270){$gameVariables.setValue(26, "青出於蓝　[19级]");}
    if(nl>270&&nl<=290){$gameVariables.setValue(26, "融会贯通　[20级]");}
    if(nl>290&&nl<=310){$gameVariables.setValue(26, "心领神会　[21级]");}
    if(nl>310&&nl<=330){$gameVariables.setValue(26, "炉火纯青　[22级]");}
    if(nl>330&&nl<=350){$gameVariables.setValue(26, "了然於胸　[23级]");}
    if(nl>350&&nl<=370){$gameVariables.setValue(26, "略有大成　[24级]");}
    if(nl>370&&nl<=390){$gameVariables.setValue(26, "已有大成　[25级]");}
    if(nl>390&&nl<=410){$gameVariables.setValue(26, "豁然贯通　[26级]");}
    if(nl>410&&nl<=430){$gameVariables.setValue(26, "非比寻常　[27级]");}
    if(nl>430&&nl<=450){$gameVariables.setValue(26, "出类拔萃　[28级]");}
    if(nl>450&&nl<=470){$gameVariables.setValue(26, "罕有敌手　[29级]");}
    if(nl>470&&nl<=490){$gameVariables.setValue(26, "技冠群雄　[30级]");}
    if(nl>490&&nl<=510){$gameVariables.setValue(26, "神乎其技　[31级]");}
    if(nl>510&&nl<=530){$gameVariables.setValue(26, "出神入化　[32级]");}
    if(nl>530&&nl<=550){$gameVariables.setValue(26, "傲视群雄　[33级]");}
    if(nl>550&&nl<=570){$gameVariables.setValue(26, "登峰造极　[34级]");}
    if(nl>570&&nl<=600){$gameVariables.setValue(26, "无与伦比　[35级]");}
    if(nl>600&&nl<=630){$gameVariables.setValue(26, "所向披靡　[36级]");}
    if(nl>630&&nl<=640){$gameVariables.setValue(26, "一代宗师　[37级]");}
    if(nl>640&&nl<=650){$gameVariables.setValue(26, "精深奥妙　[38级]");}
    if(nl>650&&nl<=660){$gameVariables.setValue(26, "神功盖世　[39级]");}
    if(nl>660&&nl<=670){$gameVariables.setValue(26, "举世无双　[40级]");}
    if(nl>670&&nl<=680){$gameVariables.setValue(26, "惊世骇俗　[41级]");}
    if(nl>680&&nl<=690){$gameVariables.setValue(26, "撼天动地　[42级]");}
    if(nl>690&&nl<=700){$gameVariables.setValue(26, "震古铄今　[43级]");}
    if(nl>700&&nl<=710){$gameVariables.setValue(26, "超凡入圣　[44级]");}
    if(nl>710&&nl<=720){$gameVariables.setValue(26, "威镇寰宇　[45级]");}
    if(nl>720&&nl<=730){$gameVariables.setValue(26, "空前绝后　[46级]");}
    if(nl>730&&nl<=740){$gameVariables.setValue(26, "天人合一　[47级]");}
    if(nl>740&&nl<=760){$gameVariables.setValue(26, "深藏不露　[48级]");}
    if(nl>760&&nl<=780){$gameVariables.setValue(26, "深不可测　[49级]");}
    if(nl>780&&nl<=800){$gameVariables.setValue(26, "返璞归真　[50级]");}
    if(nl>800&&nl<=820){$gameVariables.setValue(26, "极轻很轻　[51级]");}
    if(nl>820&&nl<=840){$gameVariables.setValue(26, "英雄大侠　[55级]");}
    if(nl>840&&nl<=850){$gameVariables.setValue(26, "创派掌门　[60级]");}
    if(nl>850){$gameVariables.setValue(26, "号令武林　[65级]");}
};//武艺描述
