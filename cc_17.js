//Task 1 
class Customer { //Making Customer Class
    constructor(name, email, purchaseHistory) { 
        this.name = name,
        this.email = email,
        this.purchaseHistory = []
    }
    addPurchase(amount) { //Adds purchase to array
        this.purchaseHistory.push(amount)
    }
    getTotalSpent(){ //Shows purchase history
        console.log(this.purchaseHistory)
    }
}

