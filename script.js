const saldoFgtsInput = document.querySelector('#saldoFgts');
const salarioInput = document.querySelector('#salario');
const mesNascimentoSelect = document.querySelector('#mesNascimento');
const btnCalcular = document.querySelector('#btnCalcular');

btnCalcular.addEventListener('click', function() {
    const saldoFgts = Number(saldoFgtsInput.value);
    const salario = Number(salarioInput.value);
    const mesNascimento = mesNascimentoSelect.value;

    if (saldoFgts <= 0 || salario <= 0 || mesNascimento === ''){
        alert('Preencha todos os campos corretamente.');
        return
    }

    console.log(saldoFgts, salario, mesNascimento);
});



