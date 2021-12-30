elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var averg=0
var averg1=0
var sum_odd_numbers=0
var sum_even_numbers=0
for(var i of elements){
if(i%2 ===0){
sum_even_numbers+=i
averg=sum_even_numbers/4
}
else{
sum_odd_numbers+=i
averg1=sum_odd_numbers/7
}
}
console.log(sum_odd_numbers);
console.log(sum_even_numbers);
console.log("averge",averg)
console.log("odd averge",averg1)

