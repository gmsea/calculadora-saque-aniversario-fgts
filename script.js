const saldoFgtsInput = document.querySelector('#saldoFgts');
const salarioInput = document.querySelector('#salario');
const mesNascimentoSelect = document.querySelector('#mesNascimento');
const btnCalcular = document.querySelector('#btnCalcular');
const valorSaqueEl = document.querySelector('#valorSaque'); 

btnCalcular.addEventListener('click', function () {
    const saldoFgts = Number(saldoFgtsInput.value);
    const salario = Number(salarioInput.value);
    const mesNascimento = mesNascimentoSelect.value;
    let percentual = 0;
    let parcelaFixa = 0;

    if (saldoFgts <= 0 || salario <= 0 || mesNascimento === '') {
        alert('Preencha todos os campos corretamente.');
        return
    }

    if (saldoFgts <= 500) {
        percentual = 0.5;
        parcelaFixa = 0;

    } else if (saldoFgts <= 1000) {
        percentual = 0.4;
        parcelaFixa = 50;

    } else if (saldoFgts <= 5000) {
        percentual = 0.3;
        parcelaFixa = 150;

    } else if (saldoFgts <= 10000) {
        percentual = 0.2;
        parcelaFixa = 650;

    } else if (saldoFgts <= 15000) {
        percentual = 0.15;
        parcelaFixa = 1150;

    } else if (saldoFgts <= 20000) {
        percentual = 0.1;
        parcelaFixa = 1900;

    } else {
        percentual = 0.05;
        parcelaFixa = 2900;
    }

    const valorSaque = (saldoFgts * percentual) + parcelaFixa;
    valorSaqueEl.innerHTML = `R$ ${valorSaque.toFixed(2)}`;


});

