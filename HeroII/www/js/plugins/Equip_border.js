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