import * as fs from 'fs';
const adventdata : string = 'adventdata.text';
let fileContent = fs.readFileSync(adventdata,'utf8');
let rucksack:string = fileContent;
let strategyArr:string [] = rucksack.split("\r\n")
// console.log(strategyArr)
// } for(let i =0; i <= bags.length;i++)
// {
//     console.log()
// }


// need to split each string in the array in half
// then compare them with each other, and chech for a repeating (letter)



function problemOne(){
let charArray:string [] =[]

strategyArr.forEach(bags => {
    // console.log(bags.length)
let newarr:string[] =[]

    let middle:number = Math.floor(bags.length / 2);
    let firstHalf:string = bags.slice(0,middle);
    let secondHalf:string = bags.slice(middle, bags.length + 1)
//    console.log(firstHalf)
   newarr.push(firstHalf)
//    console.log(firstHalf.length)
    newarr.push(secondHalf)
//    console.log(secondHalf)
//    console.log(secondHalf.length)
//    console.log(newarr.sort())
for(let i =0; i <= firstHalf.length;i++){
    for(let j = secondHalf.length -1; j >= 0;j--){
        if(firstHalf[i] == secondHalf[j]){
            console.log(firstHalf[i]);
            charArray.push(firstHalf[i]);
            // console.log(secondHalf[j]);
            // charArray.push(secondHalf[j]);
            return;

        }
    }
}

    
});
let sum:number =0;
charArray.forEach(c => {
    // console.log(c.charCodeAt(0) - 96)
    if(c == c.toLowerCase()){
        // true,  it is lower case
        // console.log('lowercase' + c.charCodeAt())
        sum = sum + c.charCodeAt(0)-96
    }else{
        sum = sum + c.charCodeAt(0)-38
    }
})
console.log(sum)
}
// problemOne();
function problemTwo(){
console.log(strategyArr)
// function groupby3(arr,nth){
//     const resulta =[];
//     for(let i = 0; i< RTCRtpReceiver.length;i += nth)
// }
for(let i = 3; i <= strategyArr.length; i+= 4){
    strategyArr.splice(i,0,'');
}
console.log(strategyArr)
let previousIndex:number = 0;
var newarr:Array<string []> =[]

for(let i = 0; i<= strategyArr.length;i++){
    if(strategyArr[i] == ''){
        newarr.push(strategyArr.slice(previousIndex,i))
    }
}
console.log('newarr   '+ newarr)
}
problemTwo();

// function getEveryNth(arr, nth) {
//     const result = [];
  
//     for (let i = 0; i < arr.length; i += nth) {
//       result.push(arr[i]);
//     }
  
//     return result;
//   }
  
//   // 👇️ [1, 3, 5]
//   console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));
  
//   // 👇️ [2, 8, 14]
//   console.log(getEveryNth([2, 4, 6, 8, 10, 12, 14], 3));
  