const CURRENCY_CODE = {
    USD: 'USD',
    EUR: 'EUR',
    RUB: 'RUB',
}

const getToday = () => {
    const date = new Date();

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

console.log(getToday());


const renderContent = (response) => {
    const {
        data
    } = response;
    let content = document.getElementById('data').innerHTML;

    Object
        .keys(data.rates)
        .map((currencyCode) => {
            console.log(currencyCode)
            content += `
                <tr>
                    <td>${currencyCode}</td>
                    <td>${(1/data.rates[currencyCode]).toFixed(2)}</td>
                </tr>
                `;
        });

    document.getElementById('data').innerHTML = content;
};

axios
    .get(`https://api.ratesapi.io/api/${getToday()}?base=${CURRENCY_CODE.RUB}&symbols=${CURRENCY_CODE.USD},${CURRENCY_CODE.EUR}`)
    .then(renderContent);






