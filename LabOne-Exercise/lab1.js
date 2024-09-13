// Question One
var str = "the quick brown fox";
var res = [];
const myArray = str.split(' ');

for (let i in myArray) {
    let temp = myArray[i]; 
    if (temp.length > 0) {
        temp = temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
    }
    res.push(temp);
}
res_str = res.join(' ');

console.log(res_str); 


// Question Two
function Max(num1, num2, num3){
    var numbers = [num1, num2, num3];
    let x = 0;
    for(let i = 1; i < numbers.length; i++){
        if(numbers[x] < numbers[i]){
            x = i;
        }
    }
    return numbers[x];
}
console.log(Max(1,0,1))
console.log(Max(0,-10,-20))
console.log(Max(1000,510,440));


// Question Three
function Right(str){
    if(str.length <= 3){
        return str;
    }else{
        var last_res = str.slice(-3);
        var temp = str.indexOf(last_res);
        var first_res = str.slice(0, temp);
        return last_res+first_res;
    }
}

console.log(Right("Python"));
console.log(Right("JavaScript"));
console.log(Right("Hi"));

// Question Four
function angle_Type(num){
    if(num < 90){
        return "Acute Angle";
    } else if(num == 90){
        return "Right Angle";
    }else if(num > 90 && num < 180){
        return "Obtuse Angle";
    }else if(num == 180){
        return "Straight Angle";
    }else{
        return "Please enter the right degree";
    }
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

// Question Five
function max_sum(list, num){
    var sum = 0;
    for(i = 0; i <= list.length-num; i++){
        var temp = 0;
        for(j = 0; j < num; j++){
            temp += list[i+j];
        }
        if(temp > sum){
            sum = temp;
        }
    }
    return sum;
}

console.log(max_sum([1, 2, 3, 14, 5], 2))
console.log(max_sum([2, 3, 5, 1, 6], 3))
console.log(max_sum([9, 3, 5, 1, 7], 2))
