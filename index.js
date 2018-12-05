// var colors= [];

// // for (item in colors){
// //     console.log(color[item])
// // }


// //work with array

// //conversion method
// //to string method
// colors.unshift("1","2","3")
// colors.unshift("4","5","6")


// console.log(colors.toString())
// colors.shift();
// console.log(colors.toString());

// var values = [10,15,20,89,5,3,2,1];

// console.log(values.reverse())
// var value3 = [];
// value3 = values.sort()
// console.log(value3)


//array concat


// var colors = ["yellow","black","green"]
// var newColors = colors.concat(["red","purple"]);
// console.log(newColors)

// console.log(newColors.splice(1,2))

// var numbers = [1,2,3,4,5,8,9,7]

// var everyresult = numbers.forEach(function(item,index,array){
//     console.log(item,index,array);

// });

// console.log(everyresult);


// var date = new Date();
// console.log(date.getTime())



// var func = new Function('num1','num2','return num1+num2');
// console.log(func(1))


// console.log(total(1,2))
// function total(a,b){
//     return a+b;

// }



// function addHundred(num){
//     return num+100;
// }

// var sum = callingFunction(addHundred,10000);


// console.log(sum)




function factorial(num){
    if(num<1){
        return 1;

    }else{
        return num * factorial(num-1);
    }

}

console.log(factorial(12));







