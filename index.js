// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(a instanceof Array);
console.log(b instanceof Array);
//TODO


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
for(var i=0;i<a.length;i++){
  a[i]=a[i]*2;
}
console.log(a);
// TODO should output [2,4,6,8,10]


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var x;
switch(x){
  case 1:
    console.log(colors[0]+' '+ colors[1]+' 'colors[2]+' 'colors[3]);
  case 2:
    console.log(colors[0]+'+'+ colors[1]+'+'colors[2]+'+'colors[3]);  
  case 3:
    console.log(colors[0]+','+ colors[1]+','colors[2]+','colors[3]);
   default:
    return false;
}


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
var max;
for(var i=0; i<a.length; i++){　　
    for(var j=i; j<a.length; j++){
        if(arr[i]<a[j]){
            max=a[j];
            a[j]=a[i];
            a[i]=max;
        }
     }
}
console.log(a);            
//TODO should output: [10,8,5,4,1]


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function findMost(arr) {
    var res = {}
    // 遍历数组
    for (var i=0,l=a.length;i<l;i++) {
        if (!res[a[i]]) {
            res[a[i]] = 1
        } else {
            res[a[i]]++
        }
    }
    // 遍历 res
    var keys = Object.keys(res)
    var maxNum = 0, maxEle
    for (var i=0,l = keys.length;i<l;i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]]
            maxEle = keys[i]
        }
    }
    return maxNum
}
//TODO should output: 'a'
