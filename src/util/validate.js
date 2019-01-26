// 正则匹配

let reg = {
    isEmail:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    isPhone:/^((19[0-9])|(17[0-9])|(14[0-9])|(13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/,
    hasIllegal:/[^-+=|,0-9a-zA-Z!@#$%^&*?_.~+/\\(){}[\]<>]/,
    hasLetter:/[a-zA-Z]/g,
    hasNumber:/\d/g,
    hasCharacter:/[-+=|,!@#$%^&*?_.~+/\\()|{}[\]<>]/g,
    isSixDigits:/^\d{6}$/,
    chineseOrChar:/^[\u4e00-\u9fa5a-zA-Z]+$/,
    normalStr_:/(^$)|(^[\u4e00-\u9fa5_a-zA-Z0-9]+$)/,
}

export function isRegExp (v) {
    return Object.prototype.toString.call(v) === '[object RegExp]'
}

export function isEmail(val){ // 验证邮箱
    return reg.isEmail.test(val)
}

export function isPhone(val){ //验证手机号
    return reg.isPhone.test(val)
}

export function hasIllegal(val){   //验证非法字符  (密码必须是数字、字母(区分大小写)、符号)
    return reg.hasIllegal.test(val)
}

export function hasLetter (val) {  // 用于验证字母
    return reg.hasLetter.test(val)
}

export function hasNumber (t) {  //验证是否含有数字
    return reg.hasNumber.test(t)
}

export function hasCharacter (t) { // 验证是否含有字符
    return reg.hasCharacter.test(t)
}

export function hasDoubleChars(val){ // 验证是否包括字母、数字和符号中的两种(用于验证密码的正确性)
    let _hasNumber = /\d/g.test(val)
    let _hasLetter = /[a-zA-Z]/g.test(val)
    let _hasCharacter = /[-+=|,!@#$%^&*?_.~+/\\()|{}[\]<>]/g.test(val)
    return (_hasNumber&&_hasLetter)
            ||(_hasNumber&&_hasCharacter)
            ||(_hasLetter&&_hasCharacter)
}

export function isSixDigits(val){  // 用于校验手机短信验证码 和邮箱验证码
    return reg.isSixDigits.test(val)
}

export function chineseOrChar(val){  // 中文或字母
    return reg.chineseOrChar.test(val)
}

export function normalStr_(val){   //中文字母下划线 或空
    return reg.normalStr_.test(val)
}

export const regExp = reg;





