
var num=[1,2,3,[3,4,5],5,6,8,[2,3,4]]
var i=0;
var sum=0;
var n=num[i]
while(i<num.length){
    if(typeof(n)==Array){
        for(var j of n[i]){
            sum=sum+n[j]
        }j++;
    }else{
        sum=sum+n
    }i++;

}console.log(sum);
