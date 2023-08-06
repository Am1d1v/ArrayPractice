




// .map() Method

/*
const dollarTransactions = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const newTransaction = [100, -200, 300, -400, 500, -600, 700, -800, 900, -1000];

const usdToEuro = 0.91;

const transactionEuro = dollarTransactions.map((transaction) => {
    return transaction * usdToEuro
});
console.log(transactionEuro);


const euroArray = [];

for( const transaction of dollarTransactions ){

    euroArray.push(transaction * usdToEuro);
};
console.log(euroArray);


const transactionInfo = newTransaction.map((transaction, index) => {
    
        if(transaction > 0){
           return ` Transaction №${index + 1}: ${transaction}$ was deposited`;
        } else {
           return `Transaction №${index + 1}: ${transaction}$ was withdrew`;
        }
})

console.log(transactionInfo);

*/


// .filter()

const transaction = [100, -200, 300, -400, 500, -600, 700, -800, 900, -1000];

const withdrawals = transaction.filter((transaction) => {
        return transaction < 0;
});
console.log(withdrawals);

const deposites = transaction.filter((transaction) => {
    return transaction > 0;
});
console.log(deposites);

