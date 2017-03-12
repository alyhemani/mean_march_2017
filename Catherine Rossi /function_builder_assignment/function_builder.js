//Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.

function runningLogger() {
    console.log('I am running!')
}

//Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.


function multiplyByTen(x){
    x= x * 10;
    return x;
}
console.log(multiplyByTen(5));
//or can write var result = multiplyByTen(5);
//                      console.log(result);

//Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string

function stringReturnOne(){
    return "hardcoded";
}
function stringReturnTwo(){
    return "hardcoded2";
}
var return1 = stringReturnOne();
var return2 = stringReturnTwo();
console.log(return1);
console.log(return2);

//Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.

function caller(fun){
    if(typeof fun == 'function'){
        fun();
    }
}
caller(function cat(){
    console.log({name:'ollie'});
});

//Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each function returns  when invoked.

function myDoubleConsoleLong(x,y) {
    if (typeof x == 'function') {
        console.log(x());
    }
    if (typeof y == 'function') {
        console.log(y());
    }
}
myDoubleConsoleLong(function cat(){
    return {name:"Smudge Rossi"};
}, function mouse(){
    return {name:"Speedy Gonzalez"};
});

//Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(param){
    console.log("starting");
    setTimeout(function(){
        if(typeof param =="function"){
            param();
        }
        console.log("ending?");
        return "interesting";
    } ,2000);
}
myDoubleConsoleLong(caller2);
