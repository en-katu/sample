const audio1 = document.getElementById("redaudio");
const audio2 = document.getElementById("brueaudio");
const text = document.getElementById("text");
const input=document.getElementById("input");
function red(){
    
    console.log("red");
    if(input.textContent=="1234" ){
        audio1.play();
    }else if(input.textContent=="null"||input.textContent=="----"){
        alert("値が未入力です。");
    }else{

    }
   
}

function brue(){
    
    console.log("brue");
    if(input.textContent=="12345" ){
        audio2.play();
    }else if(input.textContent=="null"||input.textContent=="----"){
        alert("値が未入力です。");
    }else{

    }
   
       
    
}
function push(){
    console.log("push");
    console.log(text.value);
    input.textContent=text.value;
  
    if(text.value=="1234"){
        //audio1.play();
        alert("OK");
        
    }else if(text.value==""){ 
        console.log("nul");
        alert("null");
        input.textContent="null"
    }else{
        //audio2.play();
        alert("no");
    }

    
}
//最小公倍数を求める

// 最大公約数を求める関数
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// 最小公倍数を求める関数
function lcm(a, b) {
    // 最小公倍数 = (a * b) / 最大公約数
    return (a * b) / gcd(a, b);
}

// 複数の数の最小公倍数を求める関数
function findLCM(numbers) {
    if (numbers.length < 2) {
        return "少なくとも2つの数が必要です。";
    }

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }

    return result;
}


// 使用例
const numbersToFindLCM = [3,4];
const resultLCM = findLCM(numbersToFindLCM);
console.log("["+numbersToFindLCM+"] の最小公倍数は" +resultLCM+"です。");


