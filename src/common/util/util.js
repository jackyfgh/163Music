/**
* Created by hp430 on 2017/9/5.
* 正则格式化字符串接收两个参数一个为data数据一个是格式
*/
export const formatData=function (date, fmt) {
 if (/(y+)/.test(fmt)) {
   fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
 }
 let o = {
   'M+': date.getMonth() + 1,
   'd+': date.getDate(),
   'h+': date.getHours(),
   'm+': date.getMinutes(),
   's+': date.getSeconds()
 };
 for (let k in o) {
   if (new RegExp(`(${k})`).test(fmt)) {
     let str = o[k] + '';
     fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
   }
 }
 return fmt;
};

function padLeftZero(str) {
 return ('00' + str).substr(str.length);
}

