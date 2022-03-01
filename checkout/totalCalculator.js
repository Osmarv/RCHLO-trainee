function totalCalculator(qntd, undValue) {

    const strUndValue = undValue.split(" ")[1].replace(",", ".");

    const undValuePart = parseFloat(strUndValue);
    const qntdNumber = Number(qntd);

    document.querySelector('#total').innerHTML = "R$" + (qntdNumber * undValuePart).toFixed(2);
}