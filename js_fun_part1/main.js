var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (var i = 0; i < x.length; i++){
	console.log(x[i])
}
x.push(100);
x = ["hello", "world", "JavaScript is Fun"]
for (var i = 0; i < x.length; i++){
	console.log(x[i])
}
var sum = 0
for (var i = 1; i <= 500; i++){
	sum += i
}
console.log(sum)
arr = [1, 5, 90, 25, -3, 0]
min = arr[0]
avg = arr[0]
sum = arr[0]
for (var i = 1; i < arr.length; i++){
	if (arr[i] < min){
		min = arr[i]
	}
	sum += i
	avg = sum/arr.length
}
console.log(min);
console.log(avg);


var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja){
	console.log(key +': '+ newNinja[key]);

}