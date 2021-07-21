
function age() {

    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var dataNascimento = new Date(ano, mes, dia);
    var dataAtual = new Date();
    var resultado = dataAtual.getTime() - dataNascimento.getTime();
    var resultado2 = Math.floor(resultado / (1000 * 60 * 60 * 24 * 365));

    if (mes <= 6) {
        var resMes = Math.abs(dataAtual.getMonth() - dataNascimento.getMonth());
    } else {
        var resMes = Math.abs((dataNascimento.getMonth() - 12)) + dataAtual.getMonth();
    }

    document.getElementById("resposta").innerHTML = resultado2 + " anos " + resMes + " meses ";

}
