var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var min_var=0
for (var i=0;i<numbers.length;i++){
    if(numbers[i]<min_var){
        numbers[i]=min_var
        // console.log(min_var)
    } //console.log(min_var)
} console.log(min_var)