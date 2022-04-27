// alert(Math.PI);
// "hello".length;
// console.log("hello".length);

// console.log("hello".charAt(0));

// console.log("hello,world".replace("hello","goodbye"));

// console.log("hello,world".toUpperCase());

// var name="DasAuto";//var全局，let局部？
// console.log(name)

// let a = 1;
// console.log(a);

// const Pi=3.14;

// console.log(Pi);

// var x;

// x="3"+4+5
// console.log(x);//输出345

// console.log(123=='123')//==会做自动字符转换，===不会

// console.log(123==='123')

// var obj = new Object();
// var obj2 = {};

// obj = {
//     name:"Simon",
//     age:"20",
//     email:"simon@gmail.com",
//     contact: {
//         phone:"1234567",
//         Telegram:"@Simon"
//     }
// };

// obj.age="21";
// obj.contact.WeChat="abcd";

// console.log(obj.age);
// console.log(obj.contact);

// var a=new Array();
// var b=[];
// a[0]="dog";
// a[2]="cat"
// a.push("sheep");
// a.pop();//删最后一个
// a.shift();//删第一个
// console.log(a);
// console.log(a[1]);//undefined


// function add(){
//     let sum = 0;
//     for (let i=0,j=arguments.length;i<j;i++){
//         sum+=arguments[i]
//     }
//     return sum;
// }

// let sum=add(1,2,3,4);

// console.log(sum);

// function makeAdder(a){
//     return function(b){
//         return a+b;
//     };
// }

// var x=makeAdder(5);
// var sum=x(6);

// console.log(sum);