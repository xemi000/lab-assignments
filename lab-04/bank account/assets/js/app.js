let account1 = {
    firstName: "",
    bank_number: "",
    balance: ""
};


let account2 = {
    firstName: "",
    bank_number: "",
    balance: ""
};


account1.firstName = prompt("Enter name:");
account1.bank_number = 0123;
account1.balance = 0;
account2.balance = 0;




(function () {
    while (1) {
        let choice = prompt("Choose service \n 1. Deposit \n 2. Withdraw \n 3. Balance \n 4. Transfer");
        choice = parseInt(choice);

        if (choice === 1) {
            let depositValue = prompt("How much do you want to deposit.");
            depositValue = parseInt(depositValue);
            if (depositValue < 0) {
                alert("You inserted an invalid value");
            }
            account1.balance = account1.balance + depositValue;
            alert("deposit successful")
        } else if (choice === 2) {;
            let withdrawValue = prompt("How much do you want to withdraw.");
            withdrawValue = parseInt(withdrawValue);
            if (withdrawValue > account1.balance) {
                alert("under sufficient balance");
            } else {
                account1.balance = account1.balance - withdrawValue;
                alert("successful withdrawal.")
            }
        } else if (choice === 3) {
            alert("Your account balance is " + account1.balance);
        } else if (choice === 4) {
            let transferNo = prompt("Enter the transfer amount:");
            transferNo = parseInt(transferNo);
            if (transferNo > account1.balance) {
                alert("under sufficient balance");
                console.log("You don't have sufficient balance");
            } else {
                account2.firstName = prompt("Enter the name of the recipent:");
                account2.bank_number = prompt("Enter the Account Number of the recipent :");
                account2.balance = account2.balance + transferNo;
                account1.balance = account1.balance - transferNo;
                alert("Transferred succesfully");
            }

        } 
         else {
            alert("Wrong input. Try again!");
        }

    }

})();