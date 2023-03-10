//=============================================================================
// Drill_RmmvCoreFix.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        系统 - rmmv核心漏洞修复
 * @author Drill_up
 * 
 * @help  
 * =============================================================================
 * +++ Drill_RmmvCoreFix +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看更多我写的drill插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * rmmv核心的漏洞修复，装上该插件即可修复漏洞。
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 该插件可以单独使用。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面、地图界面、战斗界面。
 *   直接作用于rmmv底层。
 * 
 * -----------------------------------------------------------------------------
 * ----知识点 - 插件漏洞
 * 漏洞1：（游戏界面卡死bug）
 *   (1.rmmv核心位置有个bug，但是出现几率非常小。1%的几率出现。
 *      bug出现后，游戏界面完全卡死，但是游戏能正常运行，还能存档。
 *      该插件尝试修复了这个非常小几率出现的bug。
 *     （不能完全保证bug已经完全修复，因为出现几率非常小，不能直接复现。）
 *     （但该插件修复了核心中的漏洞，可以极大地避免bug出现。）
 *   (2.关于bug的问题讨论：
 *      https://rpg.blue/thread-483548-1-1.html
 * 漏洞2：（错误声音数组bug）
 *   (1.此bug对rmmv本身没有影响，但是对声音相关的子插件有影响，
 *      子插件每次请求声音数组时，都只能得到含一个元素的错误数组。
 *   (2.影响：插件 声音-事件的声音 如果同时在远处播放两个以上的声音，会
 *      造成只有一个声音成功衰减，其他声音是原音量。
 * 
 * -----------------------------------------------------------------------------
 * ----插件性能
 * 测试仪器：   4G 内存，Intel Core i5-2520M CPU 2.5GHz 处理器
 *              Intel(R) HD Graphics 3000 集显 的垃圾笔记本
 *              (笔记本的3dmark综合分：571，鲁大师综合分：48456)
 * 总时段：     20000.00ms左右
 * 对照表：     0.00ms  - 40.00ms （几乎无消耗）
 *              40.00ms - 80.00ms （低消耗）
 *              80.00ms - 120.00ms（中消耗）
 *              120.00ms以上      （高消耗）
 * 工作类型：   持续执行
 * 时间复杂度： o(n) 每帧
 * 测试方法：   开启插件，进行相应的性能测试。
 * 测试结果：   战斗界面中，平均消耗为：【5ms以下】
 *              地图界面中，平均消耗为：【5ms以下】
 *              菜单界面中，平均消耗为：【5ms以下】
 * 
 * 1.插件只在自己作用域下工作消耗性能，在其它作用域下是不工作的。
 *   测试结果并不是精确值，范围在给定值的10ms范围内波动。
 *   更多性能介绍，去看看 "0.性能测试报告 > 关于插件性能.docx"。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 修复了声音相关bug。
 * 
 * 
 */
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称：		RCF (Rmmv_Core_Fix)
//		临时全局变量	无
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//<<<<<<<<性能记录<<<<<<<<
//
//		★工作类型		持续执行
//		★时间复杂度		o(n) 每帧
//		★性能测试因素	任意位置
//		★性能测试消耗	1.04ms
//		★最坏情况		无
//		★备注			这里是对核心的结构进行修复，性能如何并没有多少意义。因为缺少这块，程序都无法运行。
//		
//		★优化记录		暂无
//
//<<<<<<<<插件记录<<<<<<<<
//
//		★大体框架与功能如下：
//			核心修复：
//				->游戏界面卡死bug
//				->错误声音数组bug
//
//		★必要注意事项：
//			暂无
//			
//		★其它说明细节：
//			暂无
//			
//		★存在的问题：
//			暂无
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_RmmvCoreFix = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_RmmvCoreFix');
	

//=============================================================================
// ** 核心漏洞修复 - 图形渲染器
//=============================================================================
Graphics.render = function( stage ){
    if( this._skipCount <= 0 ){		// "=== 0" 的符号bug修复
        var startTime = Date.now();
        if( stage ){
            this._renderer.render(stage);
            if( this._renderer.gl && this._renderer.gl.flush ){
                this._renderer.gl.flush();
            }
        }
        var endTime = Date.now();
        var elapsed = endTime - startTime;
        this._skipCount = Math.min(Math.floor(elapsed / 15), this._maxSkip);
        this._rendered = true;
    }else{
        this._skipCount--;
        this._rendered = false;
    }
    this.frameCount++;
};



//=============================================================================
// ** 核心漏洞修复 - 声音管理器
//=============================================================================
AudioManager.playSe = function(se) {
    if( se.name ){
        this._seBuffers = this._seBuffers.filter(function(audio) {
            //return audio.isPlaying();						//bug：每次塞入，都会清除之前的audio
            return !audio.isReady() || audio.isPlaying();	//（修复：这样可以确保不会清除未准备好的声音对象）
        });
        var buffer = this.createBuffer('se', se.name);
        this.updateSeParameters(buffer, se);
        buffer.play(false);
        this._seBuffers.push(buffer);
    }
};


