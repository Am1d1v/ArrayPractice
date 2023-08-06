




// .map Method

const dollarTransactions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const usdToEuro = 0.91;

const transactionEuro = dollarTransactions.map((transaction) => {
    return transaction * usdToEuro
});

console.log(transactionEuro);



