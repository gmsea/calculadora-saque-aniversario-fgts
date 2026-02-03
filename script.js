const saldoFgtsInput = document.querySelector('#saldoFgts');
const salarioInput = document.querySelector('#salario');
const mesNascimentoSelect = document.querySelector('#mesNascimento');
const btnCalcular = document.querySelector('#btnCalcular');
const valorSaqueEl = document.querySelector('#valorSaque'); 

btnCalcular.addEventListener('click', function () {
    const saldoFgts = Number(saldoFgtsInput.value);
    const salario = Number(salarioInput.value);
    const mesNascimento = Number(mesNascimentoSelect.value);
    let percentual = 0;
    let parcelaFixa = 0;

    if (saldoFgts <= 0 || salario <= 0 || mesNascimento === 0) {
        alert('Preencha todos os campos corretamente.');
        return
    }

    const depositoMensal = salario * 0.08;
    const mesAtual = new Date().getMonth() + 1;
    let mesesAteAniversario;

    if (mesNascimento >= mesAtual) {
        mesesAteAniversario = mesNascimento - mesAtual;
    } else {
        mesesAteAniversario = (12 - mesAtual) + mesNascimento;
    }

    const saldoProjetado = saldoFgts + (depositoMensal * mesesAteAniversario)


    if (saldoProjetado <= 500) {
        percentual = 0.5;
        parcelaFixa = 0;

    } else if (saldoProjetado <= 1000) {
        percentual = 0.4;
        parcelaFixa = 50;

    } else if (saldoProjetado <= 5000) {
        percentual = 0.3;
        parcelaFixa = 150;

    } else if (saldoProjetado <= 10000) {
        percentual = 0.2;
        parcelaFixa = 650;

    } else if (saldoProjetado <= 15000) {
        percentual = 0.15;
        parcelaFixa = 1150;

    } else if (saldoProjetado <= 20000) {
        percentual = 0.1;
        parcelaFixa = 1900;

    } else {
        percentual = 0.05;
        parcelaFixa = 2900;
    }

    const valorSaque = (saldoProjetado * percentual) + parcelaFixa;
    valorSaqueEl.innerHTML = valorSaque.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

});

