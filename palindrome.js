// i=len(name)-1
// n=name
// temp=[]
// while i>=0:
//     t=(name[i])
//     temp.append(t)
//     i=i-1
// print(temp)
// if temp==n:
//     print("its palindrome ")
// else:
//     print("its not palindrome ")

// var Name=['m','a','l','a','y','a','l','a','m'];
// var new_array=[];
// for (var i=Name.length-1; i>=0;i--){
// new_array.push(Name[i]);
// }
// var count=0;
// for (var j=0; j<Name.length; j++){
// if (new_array[j]===Name[j]){
// count++;
// }
// }
// if(count===Name.length){
// console.log("This is palindrome");
// }else{
// console.log("This is not a palindrome");
// }



var Name=["m","a","l","a","y","a","l","a","m"]
var new_array=[]
// var i=name.length-1
for ( var i=Name.length-1 ;i>=0;i++){
    new_array.push(Name[i]);
}
var count=0;
for (var j=0;j<Name.length;j++){
    if(new_array[j]==Name[j]){
        count++;
    }
}if (count==Name.length){
    console.log("this is palindrome")
}else{
    console.log("not a palindrome")
}




