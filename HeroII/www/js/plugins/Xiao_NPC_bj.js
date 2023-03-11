/*-------------------------------NPC查看------------------------------------------*/
//--------------陌生人随机对话----------------
function NPC_msdhid_Xiao() {

    var Npc_msdhID = $gameVariables.value(80)
    switch (Npc_msdhID) {
        case 1:
            $gameVariables.setValue(107, "你好，很高兴认识你！");
            break;
        case 2:
            $gameVariables.setValue(107, "找呀，找呀，找朋友，找到一个好朋友。");
            break;
        case 3:
            $gameVariables.setValue(107, "我最喜欢交朋友了，以后经常来和我聊天呀！");
            break;
        case 4:
            $gameVariables.setValue(107, "你好呀！从此以后我们就是朋友了。");
            break;
        case 5:
            $gameVariables.setValue(107, "四海之内皆兄弟，以后有事尽管来找我。");
            break;
        case 6:
            $gameVariables.setValue(107, "我们能在茫茫人海中相遇也是一种缘分。");
            break;
        case 7:
            $gameVariables.setValue(107, "哈哈哈，今天又多认识了一位朋友！");
            break;
        case 8:
            $gameVariables.setValue(107, "正所谓朋友多了路好走，你认识我以后路就宽阔了！");
            break;
        case 9:
            $gameVariables.setValue(107, "从今往后我们就算是认识的，要多走动呀！");
            break;
        case 10:
            $gameVariables.setValue(107, "人与人之间最重要的就是讲义气，今日又认识一位朋友！");
            break;
        default:
            $gameVariables.setValue(107, "我忘记我想说什么了。");

    }

}
//--------------普通人随机对话----------------
function NPC_ptdhid_Xiao() {

    var Npc_ptdhID = $gameVariables.value(80)
    switch (Npc_ptdhID) {
        case 1:
            $gameVariables.setValue(108, "今天的天气真是，哈哈。");
            break;
        case 2:
            $gameVariables.setValue(108, "我什么也都不知道，就算知道也不说，打死你我也不说。");
            break;
        case 3:
            $gameVariables.setValue(108, "没看到我在忙吗？你还是找别人聊天去吧。");
            break;
        case 4:
            $gameVariables.setValue(108, "我有一个小秘密，就不告诉你，就不告诉你。");
            break;
        case 5:
            $gameVariables.setValue(108, "不约！不约！我很忙的。");
            break;
        case 6:
            $gameVariables.setValue(108, "哎呀，我突然忘记想和你说什么了。");
            break;
        case 7:
            $gameVariables.setValue(108, "不少门派的武功若是装备了对应的兵器就能提高获得的威力。");
            break;
        case 8:
            $gameVariables.setValue(108, "你的臂力、技能等级、熟练度以及你的实战经验会影响武功威力。");
            break;
        case 9:
            $gameVariables.setValue(108, "有的人是有惊天秘密的，就看你能坚持和他说多少次！");
            break;
        case 10:
            $gameVariables.setValue(108, "虽然有的门派只收女弟子，但是男人想入也不是不可能！");
            break;
        case 11:
            $gameVariables.setValue(108, "听说有不少男子就加入过古墓派，只是条件比较复杂。");
            break;
        case 12:
            $gameVariables.setValue(108, "走过的地方越多，人的阅历就会越丰富。");
            break;
        case 13:
            $gameVariables.setValue(108, "听说有一个绝佳的离线挂机的地方叫琅嬛福地。");
            break;
        case 14:
            $gameVariables.setValue(108, "传说江湖上有一些武功绝技，只有不识字的人才可以学得会！");
            break;
        case 15:
            $gameVariables.setValue(108, "武功绝学有一定几率暴击，但是也会导致伤害不稳定。");
            break;
        case 16:
            $gameVariables.setValue(108, "门派的低级武功会对绝学有一定的加成影响哟！");
            break;
        case 17:
            $gameVariables.setValue(108, "如果那个人被杀掉了，你就永远都看不见他了。");
            break;
        case 18:
            $gameVariables.setValue(108, "友善达到一定程度，送秘籍、传武功、甚至结婚生子也未尝不可！");
            break;
        case 19:
            $gameVariables.setValue(108, "运功打坐不可操之过急，如果连续运功可能会导致走火入魔！");
            break;
        case 20:
            $gameVariables.setValue(108, "太玄经上的武功，读书越低、悟性越低威力就会越大，反之亦然！");
            break;
        case 21:
            $gameVariables.setValue(108, "轻功练到一定程度便可穿梭往来，瞬间飞到你想要去的地方。");
            break;
        case 22:
            $gameVariables.setValue(108, "阅历和读书识字，能让你有更多机会学到高深的武功绝学。");
            break;
        case 23:
            $gameVariables.setValue(108, "积累一定的实战经验就连使用平凡无奇的招数都能伤人性命。");
            break;
        case 24:
            $gameVariables.setValue(108, "年龄也会随时增长，每长大一岁你的基础能力就会得到提高。");
            break;
        case 25:
            $gameVariables.setValue(108, "当你拥有内功之后就可以自行调息恢复生命和内力了。");
            break;
        case 26:
            $gameVariables.setValue(108, "有一些机关需要有一定阅历的人才能识破！");
            break;
        case 27:
            $gameVariables.setValue(108, "帮助他人会提高自己的善，为非作歹就会让自己的恶增加。");
            break;
        case 28:
            $gameVariables.setValue(108, "武林幻境只需要联网激活一次，之后即便断网也是可以自由进入的。");
            break;
        case 29:
            $gameVariables.setValue(108, "武林幻境联网可以及时解决一些问题，只有开启联网才能更新。");
            break;
        case 30:
            $gameVariables.setValue(108, "一旦设备处于断网状态，武林幻境会自动切换到离线数据。");
            break;
        case 31:
            $gameVariables.setValue(108, "听说擅自修改武林幻境中的数据是会受到很严重的处罚的哟！");
            break;
        case 32:
            $gameVariables.setValue(108, "曾经有人擅自修改武林幻境的时间，竟然导致花花草草都不生长了！");
            break;
        case 33:
            $gameVariables.setValue(108, "我们所在的这个武林幻境是萧遥小熊一手创建的，真是了不起啊！");
            break;
        case 34:
            $gameVariables.setValue(108, "夫妻之间的情感值越高，夫妻所教授的武功威力也就会越大！");
            break;
        default:
            $gameVariables.setValue(108, "我忘记我想说什么了。");

    }

}
//--------------无剧情随机对话----------------
function NPC_wjdhid_Xiao() {

    var Npc_wjdhID = $gameVariables.value(80)
    switch (Npc_wjdhID) {
        case 1:
            $gameVariables.setValue(107, "你来早了，这个剧情还没做！");
            break;
        case 2:
            $gameVariables.setValue(107, "我现在只可以欣赏，别妄想对我动手动脚的。");
            break;
        case 3:
            $gameVariables.setValue(107, "我只是暂时站在这，我的剧情还没开放。");
            break;
        case 4:
            $gameVariables.setValue(107, "关注微信公众号或群公告就知道更新什么了。");
            break;
        case 5:
            $gameVariables.setValue(107, "在这个开放的世界中，谁都可以向小熊提剧情建议。");
            break;
        case 6:
            $gameVariables.setValue(107, "梦想不是一个人的，如果你也有梦想，就去实现吧！");
            break;
        case 7:
            $gameVariables.setValue(107, "你可以点一下我，但是不能对我指指点点的。");
            break;
        case 8:
            $gameVariables.setValue(107, "看什么看，再看我就把你给吃掉，哇！受不了。");
            break;
        default:
            $gameVariables.setValue(107, "我忘记我想说什么了。");

    }

}
//--------------拜见名----------------
function NPC_bjid_Xiao() {

    var Npc_bjID = $gameVariables.value(223)
    switch (Npc_bjID) {
        case 15:
            $gameVariables.setValue(224, "张猎户");//姓名
            break;
        case 16:
            $gameVariables.setValue(224, "王婆婆");//姓名
            break;
        case 17:
            $gameVariables.setValue(224, "琪琪");//姓名
            break;
        case 18:
            $gameVariables.setValue(224, "小商贩");//姓名
            break;
        case 19:
            $gameVariables.setValue(224, "道德和尚");//姓名
            break;
        case 20:
            $gameVariables.setValue(224, "傻姑");//姓名
            break;
        case 21:
            $gameVariables.setValue(224, "小顽童");//姓名
            break;
        case 22:
            $gameVariables.setValue(224, "老婆婆");//姓名
            break;
        case 23:
            $gameVariables.setValue(224, "小裁缝");//姓名
            break;
        case 24:
            $gameVariables.setValue(224, "老裁缝");//姓名
            break;
        case 25:
            $gameVariables.setValue(224, "潘金莲");//姓名
            break;
        case 26:
            $gameVariables.setValue(224, "李白");//姓名
            break;
        case 27:
            $gameVariables.setValue(224, "小书童");//姓名
            break;
        case 28:
            $gameVariables.setValue(224, "戚继光");//姓名
            break;
        case 29:
            $gameVariables.setValue(224, "顾炎武");//姓名
            break;
        case 30:
            $gameVariables.setValue(224, "平一指");//姓名
            break;
        case 31:
            $gameVariables.setValue(224, "田伯光");//姓名
            break;
        case 32:
            $gameVariables.setValue(224, "寻捕");//姓名
            break;
        case 33:
            $gameVariables.setValue(224, "捕快");//姓名
            break;
        case 34:
            $gameVariables.setValue(224, "流氓");//姓名
            break;
        case 35:
            $gameVariables.setValue(224, "洪凌波");//姓名
            break;
        case 36:
            $gameVariables.setValue(224, "恶霸");//姓名
            break;
        case 37:
            $gameVariables.setValue(224, "工地管事");//姓名
            break;
        case 38:
            $gameVariables.setValue(224, "石料管事");//姓名
            break;
        case 39:
            $gameVariables.setValue(224, "挑夫");//姓名
            break;
        case 40:
            $gameVariables.setValue(224, "县官");//姓名
            break;
        case 41:
            $gameVariables.setValue(224, "卖花妞");//姓名
            break;
        case 42:
            $gameVariables.setValue(224, "盐商");//姓名
            break;
        case 43:
            $gameVariables.setValue(224, "西门庆");//姓名
            break;
        case 44:
            $gameVariables.setValue(224, "胡屠户");//姓名
            break;
        case 45:
            $gameVariables.setValue(224, "杂货贩");//姓名
            break;
        case 46:
            $gameVariables.setValue(224, "荷西");//姓名
            break;
        case 47:
            $gameVariables.setValue(224, "沈万三");//姓名
            break;
        case 48:
            $gameVariables.setValue(224, "何铁手");//姓名
            break;
        case 49:
            $gameVariables.setValue(224, "茅十八");//姓名
            break;
        case 50:
            $gameVariables.setValue(224, "说书先生");//姓名
            break;
        case 51:
            $gameVariables.setValue(224, "店小二");//姓名
            break;
        case 52:
            $gameVariables.setValue(224, "独行大侠");//姓名
            break;
        case 53:
            $gameVariables.setValue(224, "厨师");//姓名
            break;
        case 54:
            $gameVariables.setValue(224, "黑衣大盗");//姓名
            break;
        case 55:
            $gameVariables.setValue(224, "采花大盗");//姓名
            break;
        case 56:
            $gameVariables.setValue(224, "杨不悔");//姓名
            break;
        case 57:
            $gameVariables.setValue(224, "中年妇女");//姓名
            break;
        case 58:
            $gameVariables.setValue(224, "山贼");//姓名
            break;
        case 59:
            $gameVariables.setValue(224, "小明");//姓名
            break;
        case 60:
            $gameVariables.setValue(224, "城门枪兵");//姓名
            break;
        case 61:
            $gameVariables.setValue(224, "城门刀兵");//姓名
            break;
        default:
            $gameVariables.setValue(224, "无名氏："+Npc_bjID);

    }

}
//--------------作弄名----------------
function NPC_txid_Xiao() {

    var Npc_txID = $gameVariables.value(225)
    switch (Npc_txID) {
        case 2:
            $gameVariables.setValue(226, "老婆婆");//姓名
            break;
        case 3:
            $gameVariables.setValue(226, "王婆婆");//姓名
            break;
        case 4:
            $gameVariables.setValue(226, "小裁缝");//姓名
            break;
        case 5:
            $gameVariables.setValue(226, "潘金莲");//姓名
            break;
        case 6:
            $gameVariables.setValue(226, "洪凌波");//姓名
            break;
        case 7:
            $gameVariables.setValue(226, "傻姑");//姓名
            break;
        case 8:
            $gameVariables.setValue(226, "卖花妞");//姓名
            break;
        case 9:
            $gameVariables.setValue(226, "何铁手");//姓名
            break;
        case 10:
            $gameVariables.setValue(226, "杨不悔");//姓名
            break;
        case 11:
            $gameVariables.setValue(226, "中年妇女");//姓名
            break;
        case 12:
            $gameVariables.setValue(226, "李师师");//姓名
            break;
        case 13:
            $gameVariables.setValue(226, "柳如是");//姓名
            break;
        case 14:
            $gameVariables.setValue(226, "茶花女");//姓名
            break;
        case 15:
            $gameVariables.setValue(226, "瑞婆婆");//姓名
            break;
        case 16:
            $gameVariables.setValue(226, "聂隐娘");//姓名
            break;
        case 17:
            $gameVariables.setValue(226, "平婆婆");//姓名
            break;
        case 18:
            $gameVariables.setValue(226, "公孙大娘");//姓名
            break;
        case 19:
            $gameVariables.setValue(226, "小红");//姓名
            break;
        case 20:
            $gameVariables.setValue(226, "唐晚词");//姓名
            break;
        case 21:
            $gameVariables.setValue(226, "绿珠");//姓名
            break;
        case 22:
            $gameVariables.setValue(226, "红拂女");//姓名
            break;
        case 23:
            $gameVariables.setValue(226, "李青照");//姓名
            break;
        case 24:
            $gameVariables.setValue(226, "桑轻虹");//姓名
            break;
        case 25:
            $gameVariables.setValue(226, "马春花");//姓名
            break;
        case 26:
            $gameVariables.setValue(226, "商老太");//姓名
            break;
        case 27:
            $gameVariables.setValue(226, "金花婆婆");//姓名
            break;
        case 28:
            $gameVariables.setValue(226, "小昭");//姓名
            break;
        case 29:
            $gameVariables.setValue(226, "源静香");//姓名
            break;
        case 30:
            $gameVariables.setValue(226, "丰臣姬茹");//姓名
            break;
        case 31:
            $gameVariables.setValue(226, "紫川群子");//姓名
            break;
        default:
            $gameVariables.setValue(226, "无名氏："+Npc_txID);

    }

}
//--------------反贼名----------------
function NPC_fzid_Xiao() {

    var Npc_fzdID = $gameVariables.value(228)
    switch (Npc_fzdID) {
        case 1:
            $gameVariables.setValue(228, "宋江");//姓名
            break;
        case 2:
            $gameVariables.setValue(228, "吴用");//姓名
            break;
        case 3:
            $gameVariables.setValue(228, "林冲");//姓名
            break;
        case 4:
            $gameVariables.setValue(228, "花荣");//姓名
            break;
        case 5:
            $gameVariables.setValue(228, "李逵");//姓名
            break;
        case 6:
            $gameVariables.setValue(228, "武松");//姓名
            break;
        case 7:
            $gameVariables.setValue(228, "鲁智深");//姓名
            break;
        case 8:
            $gameVariables.setValue(228, "公孙胜");//姓名
            break;
        case 9:
            $gameVariables.setValue(228, "卢俊义");//姓名
            break;
        case 10:
            $gameVariables.setValue(228, "呼延灼");//姓名
            break;
        case 11:
            $gameVariables.setValue(228, "时迁");//姓名
            break;
        case 12:
            $gameVariables.setValue(228, "杨志");//姓名
            break;
        case 13:
            $gameVariables.setValue(228, "燕青");//姓名
            break;
        case 14:
            $gameVariables.setValue(228, "秦明");//姓名
            break;
        case 15:
            $gameVariables.setValue(228, "柴进");//姓名
            break;
        default:
            $gameVariables.setValue(226, "无名氏："+Npc_fzdID);

    }

}
//--------------反贼地----------------
function NPC_ddid_Xiao() {

    var Npc_didID = $gameVariables.value(229)
    switch (Npc_didID) {
        case 1:
            $gameVariables.setValue(229, "你家");//地点
            $gameSelfSwitches.setValue([2,10,'A'], true);
            break;
        case 2:
            $gameVariables.setValue(229, "村长家");//地点
            $gameSelfSwitches.setValue([3,2,'A'], true);
            break;
        case 3:
            $gameVariables.setValue(229, "猎户家");//地点
            $gameSelfSwitches.setValue([4,4,'A'], true);
            break;
        case 4:
            $gameVariables.setValue(229, "芦溪村后山");//地点
            $gameSelfSwitches.setValue([8,10,'A'], true);
            break;
        case 5:
            $gameVariables.setValue(229, "芦溪村郊外");//地点
            $gameSelfSwitches.setValue([7,14,'A'], true);
            break;
        case 6:
            $gameVariables.setValue(229, "宁静寺");//地点
            $gameSelfSwitches.setValue([18,11,'A'], true);
            break;
        case 7:
            $gameVariables.setValue(229, "平安镇郊外");//地点
            $gameSelfSwitches.setValue([15,8,'A'], true);
            break;
        case 8:
            $gameVariables.setValue(229, "赌场");//地点
            $gameSelfSwitches.setValue([30,2,'A'], true);
            break;
        case 9:
            $gameVariables.setValue(229, "布庄");//地点
            $gameSelfSwitches.setValue([25,3,'A'], true);
            break;
        case 10:
            $gameVariables.setValue(229, "商业街");//地点
            $gameSelfSwitches.setValue([14,10,'A'], true);
            break;
        case 11:
            $gameVariables.setValue(229, "豆腐店");//地点
            $gameSelfSwitches.setValue([27,3,'A'], true);
            break;
        case 12:
            $gameVariables.setValue(229, "平安客栈");//地点
            $gameSelfSwitches.setValue([17,4,'A'], true);
            break;
        case 13:
            $gameVariables.setValue(229, "武馆");//地点
            $gameSelfSwitches.setValue([16,3,'A'], true);
            break;
        case 14:
            $gameVariables.setValue(229, "平安镇南");//地点
            $gameSelfSwitches.setValue([13,8,'A'], true);
            break;
        case 15:
            $gameVariables.setValue(229, "李白居");//地点
            $gameSelfSwitches.setValue([31,3,'A'], true);
            break;
        case 16:
            $gameVariables.setValue(229, "钱庄");//地点
            $gameSelfSwitches.setValue([22,4,'A'], true);
            break;
        case 17:
            $gameVariables.setValue(229, "衙门");//地点
            $gameSelfSwitches.setValue([21,4,'A'], true);
            break;
        case 18:
            $gameVariables.setValue(229, "震远镖局");//地点
            $gameSelfSwitches.setValue([20,2,'A'], true);
            break;
        case 19:
            $gameVariables.setValue(229, "平安镇北");//地点
            $gameSelfSwitches.setValue([12,16,'A'], true);
            break;
        case 20:
            $gameVariables.setValue(229, "药铺");//地点
            $gameSelfSwitches.setValue([28,2,'A'], true);
            break;
        case 21:
            $gameVariables.setValue(229, "食堂");//地点
            $gameSelfSwitches.setValue([23,2,'A'], true);
            break;
        case 22:
            $gameVariables.setValue(229, "平安镇东");//地点
            $gameSelfSwitches.setValue([11,19,'A'], true);
            break;
        case 23:
            $gameVariables.setValue(229, "铁匠铺");//地点
            $gameSelfSwitches.setValue([29,3,'A'], true);
            break;
        case 24:
            $gameVariables.setValue(229, "田伯光居");//地点
            $gameSelfSwitches.setValue([26,3,'A'], true);
            break;
        case 25:
            $gameVariables.setValue(229, "驿站");//地点
            $gameSelfSwitches.setValue([24,3,'A'], true);
            break;
        case 26:
            $gameVariables.setValue(229, "平安镇西");//地点
            $gameSelfSwitches.setValue([10,12,'A'], true);
            break;
        case 27:
            $gameVariables.setValue(229, "芦溪村");//地点
            $gameSelfSwitches.setValue([1,9,'A'], true);
            break;
        default:
            $gameVariables.setValue(229, "未知地点："+Npc_didID);

    }

}
//--------------寻物名----------------
function NPC_xwid_Xiao() {

    var Npc_xwdID = $gameVariables.value(231)
    switch (Npc_xwdID) {
        case 1:
            $gameVariables.setValue(231, "珍珠项链");//姓名
            break;
        case 2:
            $gameVariables.setValue(231, "茄子");//姓名
            break;
        case 3:
            $gameVariables.setValue(231, "翡翠手镯");//姓名
            break;
        case 4:
            $gameVariables.setValue(231, "袜子");//姓名
            break;
        case 5:
            $gameVariables.setValue(231, "绣花手绢");//姓名
            break;
        case 6:
            $gameVariables.setValue(231, "白玉茶壶");//姓名
            break;
        case 7:
            $gameVariables.setValue(231, "夜明珠");//姓名
            break;
        case 8:
            $gameVariables.setValue(231, "黄瓜");//姓名
            break;
        case 9:
            $gameVariables.setValue(231, "银筷子");//姓名
            break;
        case 10:
            $gameVariables.setValue(231, "算盘");//姓名
            break;
        case 11:
            $gameVariables.setValue(231, "肚兜");//姓名
            break;
        case 12:
            $gameVariables.setValue(231, "戒指");//姓名
            break;
        case 13:
            $gameVariables.setValue(231, "扇子");//姓名
            break;
        case 14:
            $gameVariables.setValue(231, "竹篮");//姓名
            break;
        case 15:
            $gameVariables.setValue(231, "貂绒披肩");//姓名
            break;
        case 16:
            $gameVariables.setValue(231, "玉如意");//姓名
            break;
        default:
            $gameVariables.setValue(231, "未知物品："+Npc_xwdID);

    }

}
//--------------寻物地----------------
function NPC_xwdid_Xiao() {

    var Npc_xwaID = $gameVariables.value(232)
    switch (Npc_xwaID) {
        case 1:
            $gameVariables.setValue(232, "你家");//地点
            $gameSelfSwitches.setValue([2,11,'A'], true);
            break;
        case 2:
            $gameVariables.setValue(232, "村长家");//地点
            $gameSelfSwitches.setValue([3,7,'A'], true);
            break;
        case 3:
            $gameVariables.setValue(232, "猎户家");//地点
            $gameSelfSwitches.setValue([4,5,'A'], true);
            break;
        case 4:
            $gameVariables.setValue(232, "芦溪村后山");//地点
            $gameSelfSwitches.setValue([8,11,'A'], true);
            break;
        case 5:
            $gameVariables.setValue(232, "芦溪村郊外");//地点
            $gameSelfSwitches.setValue([7,15,'A'], true);
            break;
        case 6:
            $gameVariables.setValue(232, "宁静寺");//地点
            $gameSelfSwitches.setValue([18,12,'A'], true);
            break;
        case 7:
            $gameVariables.setValue(232, "平安镇郊外");//地点
            $gameSelfSwitches.setValue([15,10,'A'], true);
            break;
        case 8:
            $gameVariables.setValue(232, "赌场");//地点
            $gameSelfSwitches.setValue([30,3,'A'], true);
            break;
        case 9:
            $gameVariables.setValue(232, "布庄");//地点
            $gameSelfSwitches.setValue([25,5,'A'], true);
            break;
        case 10:
            $gameVariables.setValue(232, "商业街");//地点
            $gameSelfSwitches.setValue([14,11,'A'], true);
            break;
        case 11:
            $gameVariables.setValue(232, "豆腐店");//地点
            $gameSelfSwitches.setValue([27,5,'A'], true);
            break;
        case 12:
            $gameVariables.setValue(232, "平安客栈");//地点
            $gameSelfSwitches.setValue([19,3,'A'], true);
            break;
        case 13:
            $gameVariables.setValue(232, "武馆");//地点
            $gameSelfSwitches.setValue([16,5,'A'], true);
            break;
        case 14:
            $gameVariables.setValue(232, "平安镇南");//地点
            $gameSelfSwitches.setValue([13,11,'A'], true);
            break;
        case 15:
            $gameVariables.setValue(232, "李白居");//地点
            $gameSelfSwitches.setValue([31,4,'A'], true);
            break;
        case 16:
            $gameVariables.setValue(232, "钱庄");//地点
            $gameSelfSwitches.setValue([22,5,'A'], true);
            break;
        case 17:
            $gameVariables.setValue(232, "衙门");//地点
            $gameSelfSwitches.setValue([21,6,'A'], true);
            break;
        case 18:
            $gameVariables.setValue(232, "震远镖局");//地点
            $gameSelfSwitches.setValue([20,3,'A'], true);
            break;
        case 19:
            $gameVariables.setValue(232, "平安镇北");//地点
            $gameSelfSwitches.setValue([12,17,'A'], true);
            break;
        case 20:
            $gameVariables.setValue(232, "药铺");//地点
            $gameSelfSwitches.setValue([28,4,'A'], true);
            break;
        case 21:
            $gameVariables.setValue(232, "食堂");//地点
            $gameSelfSwitches.setValue([23,4,'A'], true);
            break;
        case 22:
            $gameVariables.setValue(232, "平安镇东");//地点
            $gameSelfSwitches.setValue([11,20,'A'], true);
            break;
        case 23:
            $gameVariables.setValue(232, "铁匠铺");//地点
            $gameSelfSwitches.setValue([29,5,'A'], true);
            break;
        case 24:
            $gameVariables.setValue(232, "田伯光居");//地点
            $gameSelfSwitches.setValue([26,5,'A'], true);
            break;
        case 25:
            $gameVariables.setValue(232, "驿站");//地点
            $gameSelfSwitches.setValue([24,5,'A'], true);
            break;
        case 26:
            $gameVariables.setValue(232, "平安镇西");//地点
            $gameSelfSwitches.setValue([10,14,'A'], true);
            break;
        case 27:
            $gameVariables.setValue(232, "芦溪村");//地点
            $gameSelfSwitches.setValue([1,18,'A'], true);
            break;
        default:
            $gameVariables.setValue(232, "未知地点："+Npc_xwaID);

    }

}
//--------------经书名字----------------
function NPC_jsnid_Xiao() {

    var Npc_jsdID = $gameVariables.value(411)
    switch (Npc_jsdID) {
        case 1:
            $gameVariables.setValue(411, "《金刚经》");//姓名
            break;
        case 2:
            $gameVariables.setValue(411, "《无量寿经》");//姓名
            break;
        case 3:
            $gameVariables.setValue(411, "《华严经》");//姓名
            break;
        case 4:
            $gameVariables.setValue(411, "《法华经》");//姓名
            break;
        case 5:
            $gameVariables.setValue(411, "《楞伽经》");//姓名
            break;
        case 6:
            $gameVariables.setValue(411, "《楞严经》");//姓名
            break;
        case 7:
            $gameVariables.setValue(411, "《地藏经》");//姓名
            break;
        case 8:
            $gameVariables.setValue(411, "《悲华经》");//姓名
            break;
        case 9:
            $gameVariables.setValue(411, "《圆觉经》");//姓名
            break;
        default:
            $gameVariables.setValue(411, "无名经："+Npc_jsdID);

    }

}
//--------------经书地点----------------
function NPC_jsdid_Xiao() {

    var Npc_jsdID = $gameVariables.value(412)
    switch (Npc_jsdID) {
        case 1:
            $gameVariables.setValue(412, "华山派");//地点
            $gameSelfSwitches.setValue([36,19,'A'], true);
            break;
        case 2:
            $gameVariables.setValue(412, "武当派");//地点
            $gameSelfSwitches.setValue([58,23,'A'], true);
            break;
        case 3:
            $gameVariables.setValue(412, "全真教");//地点
            $gameSelfSwitches.setValue([108,12,'A'], true);
            break;
        case 4:
            $gameVariables.setValue(412, "雪山派");//地点
            $gameSelfSwitches.setValue([100,8,'A'], true);
            break;
        case 5:
            $gameVariables.setValue(412, "少林寺");//地点
            $gameSelfSwitches.setValue([188,10,'A'], true);
            break;
        case 6:
            $gameVariables.setValue(412, "古墓派");//地点
            $gameSelfSwitches.setValue([209,1,'A'], true);
            break;
        case 7:
            $gameVariables.setValue(412, "灵鹫宫");//地点
            $gameSelfSwitches.setValue([103,8,'A'], true);
            break;
        case 8:
            $gameVariables.setValue(412, "血刀门");//地点
            $gameSelfSwitches.setValue([97,9,'A'], true);
            break;
        case 9:
            $gameVariables.setValue(412, "星宿派");//地点
            $gameSelfSwitches.setValue([204,16,'A'], true);
            break;
        case 10:
            $gameVariables.setValue(412, "峨嵋派");//地点
            $gameSelfSwitches.setValue([64,5,'A'], true);
            break;
        case 11:
            $gameVariables.setValue(412, "丐帮");//地点
            $gameSelfSwitches.setValue([125,4,'A'], true);
            break;
        case 12:
            $gameVariables.setValue(412, "日月神教");//地点
            $gameSelfSwitches.setValue([227,6,'A'], true);
            break;
        case 13:
            $gameVariables.setValue(412, "五毒教");//地点
            $gameSelfSwitches.setValue([309,5,'A'], true);
            break;
        case 14:
            $gameVariables.setValue(412, "嵩山派");//地点
            $gameSelfSwitches.setValue([34,7,'A'], true);
            break;
        case 15:
            $gameVariables.setValue(412, "泰山派");//地点
            $gameSelfSwitches.setValue([254,8,'A'], true);
            break;
        case 16:
            $gameVariables.setValue(412, "恒山派");//地点
            $gameSelfSwitches.setValue([236,10,'A'], true);
            break;
        default:
            $gameVariables.setValue(412, "未知地点："+Npc_jsdID);

    }

}
//--------------奸细地----------------
function NPC_zjxid_Xiao() {
    var Npc_zjxID = $gameVariables.value(483)
    switch (Npc_zjxID) {
        case 1:
            $gameSelfSwitches.setValue([297,11,'A'], true);
            $gameVariables.setValue(484, "将军印");
            break;
        case 2:
            $gameSelfSwitches.setValue([183,14,'A'], true);
            $gameVariables.setValue(484, "兵符");
            break;
        case 3:
            $gameSelfSwitches.setValue([233,12,'A'], true);
            $gameVariables.setValue(484, "火药");
            break;
        case 4:
            $gameSelfSwitches.setValue([148,7,'A'], true);
            $gameVariables.setValue(484, "令旗");
            break;
        case 5:
            $gameSelfSwitches.setValue([327,3,'A'], true);
            $gameVariables.setValue(484, "膏药");
            break;
        case 6:
            $gameSelfSwitches.setValue([328,3,'A'], true);
            $gameVariables.setValue(484, "弓箭");
            break;
        case 7:
            $gameSelfSwitches.setValue([329,4,'A'], true);
            $gameVariables.setValue(484, "粮草");
            break;
        case 8:
            $gameSelfSwitches.setValue([234,9,'A'], true);
            $gameVariables.setValue(484, "公文");
            break;
        case 9:
            $gameSelfSwitches.setValue([330,3,'A'], true);
            $gameVariables.setValue(484, "粮草");
            break;
        case 10:
            $gameSelfSwitches.setValue([331,2,'A'], true);
            $gameVariables.setValue(484, "奏折");
            break;
        case 11:
            $gameSelfSwitches.setValue([332,3,'A'], true);
            $gameVariables.setValue(484, "地图");
            break;
        default:
            $gameVariables.setValue(483, "未知地点："+Npc_zjxID);
            $gameVariables.setValue(484, "未知物品："+Npc_zjxID);
    }
}
//--------------物资地----------------
function NPC_twzid_Xiao() {
    var Npc_twzID = $gameVariables.value(493)
    switch (Npc_twzID) {
        case 1:
            $gameSelfSwitches.setValue([297,12,'A'], true);
            $gameVariables.setValue(495, "将军印");
            break;
        case 2:
            $gameSelfSwitches.setValue([183,16,'A'], true);
            $gameVariables.setValue(495, "兵符");
            break;
        case 3:
            $gameSelfSwitches.setValue([233,8,'A'], true);
            $gameVariables.setValue(495, "火药");
            break;
        case 4:
            $gameSelfSwitches.setValue([148,8,'A'], true);
            $gameVariables.setValue(495, "令旗");
            break;
        case 5:
            $gameSelfSwitches.setValue([327,4,'A'], true);
            $gameVariables.setValue(495, "膏药");
            break;
        case 6:
            $gameSelfSwitches.setValue([328,5,'A'], true);
            $gameVariables.setValue(495, "弓箭");
            break;
        case 7:
            $gameSelfSwitches.setValue([329,7,'A'], true);
            $gameVariables.setValue(495, "粮草");
            break;
        case 8:
            $gameSelfSwitches.setValue([234,12,'A'], true);
            $gameVariables.setValue(495, "公文");
            break;
        case 9:
            $gameSelfSwitches.setValue([330,4,'A'], true);
            $gameVariables.setValue(495, "粮草");
            break;
        case 10:
            $gameSelfSwitches.setValue([331,3,'A'], true);
            $gameVariables.setValue(495, "奏折");
            break;
        case 11:
            $gameSelfSwitches.setValue([332,4,'A'], true);
            $gameVariables.setValue(495, "地图");
            break;
        default:
            $gameVariables.setValue(493, "未知地点："+Npc_twzID);
            $gameVariables.setValue(495, "未知物品："+Npc_twzID);
    }
}
//--------------清理门户----------------
function NPC_qlmh_Xiao() {
    var Npc_qlmhID = $gameVariables.value(594)
    switch (Npc_qlmhID) {
        case 1:
            $gameSelfSwitches.setValue([11,24,'A'], true);
            $gameVariables.setValue(598, "平安镇");
            break;
        case 2:
            $gameSelfSwitches.setValue([73,10,'A'], true);
            $gameVariables.setValue(598, "扬州城");
            break;
        case 3:
            $gameSelfSwitches.setValue([104,15,'A'], true);
            $gameVariables.setValue(598, "京城");
            break;
        case 4:
            $gameSelfSwitches.setValue([296,3,'A'], true);
            $gameVariables.setValue(598, "大理城");
            break;
        case 5:
            $gameSelfSwitches.setValue([183,8,'A'], true);
            $gameVariables.setValue(598, "朱仙镇");
            break;
        case 6:
            $gameSelfSwitches.setValue([244,15,'A'], true);
            $gameVariables.setValue(598, "神龙岛");
            break;
        case 7:
            $gameSelfSwitches.setValue([90,6,'A'], true);
            $gameVariables.setValue(598, "侠客岛");
            break;
        case 8:
            $gameSelfSwitches.setValue([278,9,'A'], true);
            $gameVariables.setValue(598, "桃花岛");
            break;
        case 9:
            $gameSelfSwitches.setValue([86,11,'A'], true);
            $gameVariables.setValue(598, "冰火岛");
            break;
        case 10:
            $gameSelfSwitches.setValue([357,4,'A'], true);
            $gameVariables.setValue(598, "灵蛇岛");
            break;
        case 11:
            $gameSelfSwitches.setValue([116,10,'A'], true);
            $gameVariables.setValue(598, "无极山庄");
            break;
        default:
            $gameVariables.setValue(598, "未知地点："+Npc_qlmhID);
    }
}
//--------------门派叛徒----------------
function NPC_mppt_Xiao() {
    var Npc_mpptID = $gameVariables.value(600)
    switch (Npc_mpptID) {
        case 1:
            $gameSwitches.setValue(583,true);
            $gameVariables.setValue(599, "全真叛徒");
            break;
        case 2:
            $gameSwitches.setValue(584,true);
            $gameVariables.setValue(599, "武当叛徒");
            break;
        case 3:
            $gameSwitches.setValue(585,true);
            $gameVariables.setValue(599, "少林叛徒");
            break;
        case 4:
            $gameSwitches.setValue(586,true);
            $gameVariables.setValue(599, "古墓叛徒");
            break;
        case 5:
            $gameSwitches.setValue(587,true);
            $gameVariables.setValue(599, "雪山叛徒");
            break;
        case 6:
            $gameSwitches.setValue(588,true);
            $gameVariables.setValue(599, "丐帮叛徒");
            break;
        case 7:
            $gameSwitches.setValue(589,true);
            $gameVariables.setValue(599, "峨眉叛徒");
            break;
        case 8:
            $gameSwitches.setValue(590,true);
            $gameVariables.setValue(599, "血刀叛徒");
            break;
        case 9:
            $gameSwitches.setValue(591,true);
            $gameVariables.setValue(599, "灵鹫叛徒");
            break;
        case 10:
            $gameSwitches.setValue(592,true);
            $gameVariables.setValue(599, "华山叛徒");
            break;
        case 11:
            $gameSwitches.setValue(593,true);
            $gameVariables.setValue(599, "星宿叛徒");
            break;
        case 12:
            $gameSwitches.setValue(594,true);
            $gameVariables.setValue(599, "日月叛徒");
            break;
        default:
            $gameVariables.setValue(599, "未知叛徒："+Npc_mpptID);
    }
}