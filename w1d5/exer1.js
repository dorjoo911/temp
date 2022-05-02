/*
Use the Module pattern to create a shopping cart that has one private member: basket which is an Array, and the following public methods:
- upsertItem(item) add an item to basket if doesn't exist, or update if exist.
- getItemsCount() returns the total number of items in the basket.
- getTotalPrice() calculates the total price of items. Each item price is the product's price multiply item's count.
- removeItemById(id) removes an item from the basket. Every product item has the following structure:
*/
//Sample-->> Item = {id: 0, product: {id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5}, count: 1}

const shoppingCart = (function () {
  let basket = []; //it's privite. If give return, it would be public.

  return {
    // Now shoppingCart() has public return values !!!
    upsertItem: function (item) {
      const index = basket.findIndex(
        (basketIndex) => basketIndex.id === item.id
      );
      //save at index = findIndex( Array basket has ID that matches item's ID ) if match 1, not match -1
      if (index > -1) {
        // if match/index===1
        basket[index] = item; // overwrite/update that matching ID of Index/item in basket by new item.
      } else {
        // if not match/index===-1
        basket.push(item); // give the new item in basket Array.
      }
    },
    getItemsCount: function () {
      return basket.length; // basket.length===number of items
    },
    getTotalPrice: function () {
      return basket.reduce(
        (total, item) => total + item.product.price * item.count,
        0
      );
      // go through basket Array while, Do --> curr.product.price * curr.count, then --> pre===0 + Do
    },
    removeItemById: function (id) {
      basket = basket.filter((item) => item.id !== id);
      // re-assign in basket that basket Array filtered by not included given ID by parameter/argument.
    },
  };
})();

const item1 = {
  id: 0,
  product: {
    id: 1,
    name: "Coffee",
    description: "Coffee Grounds from Ethiopia",
    price: 9,
  },
  count: 1,
};
const item2 = {
  id: 1,
  product: {
    id: 2,
    name: "Tea",
    description: "Oonlong Tea from China",
    price: 10,
  },
  count: 5,
};
const item3 = {
  id: 2,
  product: {
    id: 3,
    name: "Bottled Water",
    description: "Bottled Water from US",
    price: 2,
  },
  count: 30,
};

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = "Himilayan Water";
item3.product.price = 10;
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309
