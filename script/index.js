const userHeight = document.getElementById('height');
const userWeight = document.getElementById('weight');
const goals = document.getElementById('goals');
const result_btn = document.getElementById('result');
console.log(userHeight, userWeight, goals, result_btn);

result_btn.addEventListener('click', function(){
        // 적정체중 계산식
    let normal_w = ((userHeight.value-100)*0.9);

    // 초과체중 계산식
    let excess_w = (userWeight.value-normal_w);

    goals.value = (`적정체중은 ${normal_w}kg이며 ${excess_w}kg 초과되셨습니다.`);
});