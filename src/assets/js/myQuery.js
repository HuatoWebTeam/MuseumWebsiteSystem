

// 常用的js 方法

/**
 * 判断有没有class
 */

export const hasClass = (element, clsName) => {
    return (' ' + element.className +' ' ).indexOf(' ' + clsName +' ') > -1;
};

export const addClass = (currNode, newClass) => {
    var oldClass;
    oldClass = currNode.getAttribute('class') || currNode.getAttribute('className');
    if (oldClass !== null) {
        oldClass = oldClass.split(' ');
        newClass = newClass.split(' ');
        newClass = mergeArray(newClass, oldClass).join(' ');

    }
    currNode.className = newClass;  // IE和 FF 都支持
} 

export const mergeArray = (arr1, arr2) => {
    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                arr1.splice(i, 1);
            }
        }
    }
    for(var n = 0; n < arr2.length; n++) {
        arr1.push(arr2[n]);
    }
    return arr1;
}

export const getUserAgent = () => {
    var userAgent = navigator.userAgent;//取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否IE < 11
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE;  // 判断是否是IE的Edge 浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;

    if(isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp['$1']);
        if(fIEVersion === 9) {
            return 9;
        } else if (fIEVersion === 10) {
            return 10;
        } else {
            return '低于IE9';  // ie 版本小于 9
        }
    } else if (isEdge) {
        return 'edge';
    } else if (isIE11) {
        return 11;
    } else {
        return 'notIE';  // 不是IE
    }
}