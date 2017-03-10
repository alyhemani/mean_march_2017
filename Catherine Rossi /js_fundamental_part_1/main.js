var sum = 0;
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for(var i=0;i<x.length;i++){
    console.log(x[i]);
}
x.push(100);
x.push("hello", "world", "JavaScript is Fun");
console.log(x);
for(var i=1;i<=500;i++) {
    sum = sum + i;
    
}
	console.log(sum);
	
var arr = [1, 5, 90, 25, -3, 0];
var min=arr[0];
var sum=0;
for(var i=0;i<arr.length;i++){
    sum=arr[i] + sum;
    if(arr[i]< min){
        min = arr[i];
    }
}
console.log(min);
console.log(sum/arr.length);
