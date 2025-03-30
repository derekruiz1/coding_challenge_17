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
        console.log(this.purchaseHistory.reduce(sum , purchase => sum + purchase ,0))
    }
}

//Task 2
class SalesRep { //Making Sales Rep Class
    constructor(name, clients) { 
        this.name = name 
        this.clients = []
    }
    addClient(customer){ //Adds customer to clients
        this.clients.push(customer)
    }
    getClientTotal(name) { //Gets Client total
        const client = this.clients.find(client => client.name === name);
        if (client) {
            const total = client.getTotalSpent();
            console.log(`Name:${name}, Total:${total}`)
        }
    }
}