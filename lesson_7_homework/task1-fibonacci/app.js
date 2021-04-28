const submit_button = document.querySelector('.submit-button')
const input_box = document.querySelector('.input-box')
const result_box=document.querySelector('.result')

submit_button.onclick = function () {
    const n = input_box.value
    if (n===0) return 0;
    if(n===1) return 1;
    let prev1=1,prev2=0,res
    for (let i=2;i<=n;i++){
        res=prev1+prev2
        prev2=prev1
        prev1=res
    }
    result_box.innerHTML='结果输出：第'+n+'个Fibonacci数是'+res
}