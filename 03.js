class Cart {
    constructor() {
        this.cart = {
            item: [],
            discount: 0
        }
    }
    addItem(paramData) {
        this.cart.item.push(paramData)
    }

    removeItem(paramId) {
        this.cart.item.forEach((item) => {
            if (item.item_id === paramId.item_id) {
                let index = this.cart.item.indexOf(item)
                this.cart.item.splice(index, 1)
            }
        })
    }

    addDiscount(paramDiscount) {
        this.cart.discount = Number(paramDiscount.split('').splice(0, paramDiscount.length-1).join(''))
    }

    totalItems() {
        console.log(this.cart.item.length);
    }

    totalQuantity() {
        let totalQuantity = 0
        this.cart.item.forEach(
            (item) => {
                if (item.quantity) {
                    totalQuantity += item.quantity
                } else {
                    totalQuantity += 1
                }
            }
        );
        console.log(totalQuantity);
    }

    totalPrice() {
        let totalPrice = 0
        this.cart.item.forEach((item) => {
            if (item.quantity) {
                totalPrice += item.quantity * item.price
            } else {
                totalPrice += 1 * item.price
            }
        }
        );
        totalPrice = totalPrice - (totalPrice *(50/100))
        console.log(totalPrice);
    }

    showAll() {
        console.log(this.cart.item);
    }

    checkout() {
        console.log('belum');

    }
}

const cart = new Cart()

// Do some chainings
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
cart.addItem({ item_id: 2, price: 10000 })               // By default quantity is 1
cart.addItem({ item_id: 3, price: 5000, quantity: 2 })
cart.removeItem({ item_id: 2 })
cart.addItem({ item_id: 4, price: 400, quantity: 6 })
cart.addDiscount('50%')

cart.totalItems() // 3

cart.totalQuantity() // 11

cart.totalPrice() // 51200

cart.showAll() // Show all items in cart

cart.checkout() // Store data in a file