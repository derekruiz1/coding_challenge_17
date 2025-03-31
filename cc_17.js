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
        console.log(this.purchaseHistory.reduce((sum , purchase) => sum + purchase ,0))
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

//Task 3 
class VIPCustomer extends Customer { //VIP Class
    constructor(name, email, vipLevel) {
        super(name, email)
        this.vipLevel = vipLevel
    }
    getTotalSpent() { //Total with 10% bonus
        const total = super.getTotalSpent();
        const bonusTotal = total * 1.1;
        console.log(`VIP${this.name},Total:${this.bonusTotal}`)
    }
}

//Task 4
//Customer Data

const customer1 = new Customer("John Doe", "john@example.com");
customer1.addPurchase(100);
customer1.addPurchase(50);

const customer2 = new Customer("Susan Doe", "susan@example.com");
customer2.addPurchase(75);

const vipCustomer1 = new VIPCustomer("Jane Smith", "jane@example.com", "Gold");
vipCustomer1.addPurchase(200);
vipCustomer1.addPurchase(100);

const vipCustomer2 = new VIPCustomer("Steve Carell", "steve@theoffice.com", "Gold");
vipCustomer2.addPurchase(500);

const salesRep = new SalesRep("Dwight");
salesRep.addClient(customer1);
salesRep.addClient(customer2);
salesRep.addClient(vipCustomer1);
salesRep.addClient(vipCustomer2);

const totalRevenue = this.clients.reduce((sum, client) => {
    return sum + client.purchaseHistory.reduce((clientSum, purchase) => clientSum + purchase, 0);
}, 0);
console.log(`Total Revenue:${totalRevenue}`)

const highSpendingCustomers = this.clients.filter(client => client.getTotalSpent() >= 500);
console.log("High-spending customers:", highSpenders.map(client => client.name));

const customerSummary = this.clients.map(client => ({
    name: client.name,
    totalSpent: client.getTotalSpent(),
}));
console.log("Customer Summary:", customerSummary);