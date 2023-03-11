//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};

$(document).ready(function(){if(LocalData.Fmii==20180108){
    alert("\r【第一次游戏激活】\r\n请允许设备或游戏联网，请进行一次联网激活。")
}else if(LocalData.IIMMB==20200427||LocalData.Yzii==19880826){
    alert("\r【联网数据未获取】\r\n联网获取数据获取错误，请联系游戏作者。")
}else if(SessionData.opengame!=1){
    alert("\r【当前为离线模式游戏】\r\n离线模式不影响游戏，但是无法获得游戏更新和福利。")
}
})