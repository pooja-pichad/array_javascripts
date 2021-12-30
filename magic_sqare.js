// let a=[[8,3,4],
//     [1,5,9],
//     [6,7,2]]
// var i=0;
// var sum1=0;
// var sum2=0;
// var sum3=0;
// var sum4=0;
// while (i<a.length){
//     var row=0;
//     var sum=0;
//     while (row<a.length){
//         sum+=a[i][row];
//         row+=1}
//     console.log(sum);
//     var diagonal=0;
//     while (diagonal<a.length){
//         if (i==diagonal){
//             sum1+=a[i][diagonal];
//         }
//         diagonal+=1;
//     }
//     var column1=0
//     while (column1<1){
//         sum2+=a[i][column1];
//         column1+=1;
//     }
//     var column2=1
//     while (column2<2){
//         sum3+=a[i][column2];
//         column2+=1;
//     }
//     i+=1
    
// }
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// if (sum==sum1&&sum1==sum2&&sum2==sum3&&sum3==sum4){
//     console.log("magic square")
// }
// else{
//     console.log("not a magic square")
// }






// let a=[
//     [8,3,4],
//     [1,5,9],
//     [6,7,2]
// ]
// var i=0;
// var sum1=0;
// var sum2=0;
// var sum3=0;
// var sum4=0;
// while (i<a.length){             //for row
// var row=0;
// var sum=0;
// while (row<a.length){
//     sum+=a[i][row];     
//     row+=1}
// console.log(sum);
// var diagonal=0;
// while (diagonal<a.length){     //for daigonal
//     if (i==diagonal){
//         sum1+=a[i][diagonal];
//     }
//     diagonal+=1;
// }
// var column1=0                   //for column
// while (column1<1){
//     sum2+=a[i][column1];        
//     column1+=1;
// }
// var column2=1
// while (column2<2){
//     sum3+=a[i][column2];
//     column2+=1;
// }
// i+=1

// }
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// if (sum==sum1&&sum1==sum2 || sum2==sum3&&sum3==sum4){
// console.log("magic square")
// }
// else{
// console.log("not a magic square")
// }


var magic_square=[
    [8,3,4],
    [1,5,9],
    [6,7,2]
]
a=[]
// for(var i=0;i<3;i++){    
//     for (var j=0;j<3;j++){
//         console.log()
//     }
// }
var sum1=0;      
var sum2=0;
for(var i=0;i<3;i++){
    for (var j=0;j<3;j++){
        if(i==j){
            sum1=sum1+magic_square[i][j]
        }if(i+j==3-1){
            sum2=sum2+magic_square[i][j]

        }
    
    // console.log(sum1)
    // console.log(sum2)
 }//console.log(sum1)

if(sum1!=sum2){
    var f=0;
}else{
    for(var i=0;i<3;i++){      //for daigonal**
        var sum3=0;
        var sum4=0;
        for (var j=0;j<3;j++){
            sum3=sum3+magic_square[i][j]
            sum4=sum4+magic_square[i][j]
        }if(sum3!=sum2){
            var f=1;
        }else if(sum4!=sum1){
            var f=1;
        }else{
            var f=0;
        }
    // console.log(sum3) 
    // console.log(sum1)  
    }
if (f==0){
    console.log("it is magic sqaure")
}else{
    console.log("not a magic square")
}
}
}