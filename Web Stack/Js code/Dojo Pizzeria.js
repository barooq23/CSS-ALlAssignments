function randomPizza(arr) {
    if(arr.length === 0) return
    const rNumber = Math.floor(Math.random() * arr.length);
    console.log(arr[rNumber])
}


function pizzaOven(crustType, sauceType, cheeses, toppings) {

    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    }
}


const pizza1 = pizzaOven("deep dish", 'traditional', ['mozzarella'], ['pepporoni', 'sausage'])

const pizza2 = pizzaOven("hand", 'bandora', ['mozarela'], ['l7me', 'ba6a6a'])
const pizza3 = pizzaOven("hand", 'barbique', ['betmoot'], ['nqaneq', 'looz'])
const pizza4 = pizzaOven("hand", 'test', ['test'], ['test', 'test'])

const arr = [pizza1, pizza2, pizza3, pizza4]

randomPizza(arr)