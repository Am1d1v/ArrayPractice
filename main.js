




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

/*

const transaction = [100, -200, 300, -400, 500, -600, 700, -800, 900, -1000];

const withdrawals = transaction.filter((transaction) => {
        return transaction < 0;
});
console.log(withdrawals);

const deposites = transaction.filter((transaction) => {
    return transaction > 0;
});
console.log(deposites);

*/

// .reduce()

/*

const transaction = [100, -200, 300, -400, 500, -600, 700, -800, 900, -1000];

const newTransaction = transaction.reduce((acc, item, index, arr) => {
    console.log(acc);
     return acc + item;
}, 0)
console.log(`Total: ${newTransaction}`);

*/

// .find()

/*

const transactions = [100, -200, 300, -400, 500, -600, 700, -800, 900, -1000];


const firstDeposit = transactions.find((transaction) => {

    return transaction > 0;
});

const firstWithdrawal = transactions.find((transaction) => {

    return transaction < 0;
});

console.log(firstDeposit);
console.log(firstWithdrawal);

*/

// .some() & .every()

/*

const transactions = [100, -200, 300, -400, 500, -600, 700, -800, 900, -1000];
//console.log(transactions.includes(100));

const hasWithdrawals = transactions.some((transactions) => {
   return transactions < 0;
});
console.log(hasWithdrawals);

const hasWithdrawalsOver2000 = transactions.some((transactions) => {
    return transactions < -2000;
 });
 console.log(hasWithdrawalsOver2000);


 const everyTransaction = transactions.every((transactions) => {
    return transactions > 50;
 });
 console.log(everyTransaction);

 */

// .flat() & .flatMap()


const accounts = [['User1'], ['User2'], ['User3'], ['User4'], ['User5'], ['User6']];

const accountsArray = accounts.flat();
console.log(accountsArray)

const accounts2 = [['User1', ['some InnerData']], ['User2', ['some InnerData']], ['User3', ['some InnerData']], ['User4'], ['User5'], ['User6']];

const deeperAccountsArray = accounts2.flat(2);
console.log(deeperAccountsArray);

