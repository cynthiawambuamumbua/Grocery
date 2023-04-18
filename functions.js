//You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data.

//1.Create an array containing the names of all items in the inventory maximum of 10.
const items=["banana","oranges","pears","potatoes","juice","tomatoes","carrots","apples","magazines","newspapers"]

//2Create a separate array with the corresponding stock quantities of each item maximum of 10.
const array=[1,2,3,4,5,6,7,8,9,10]
//3.Write a function to add a new item to the inventory, updating both arrays.
function addItems(itemName, quantity){
    items.push(itemName);
    array.push(quantity);
}
addItems("Bananas", 12);
console.log(items);
console.log(array);
//4.Write a function to update the stock quantity of an existing item.
function updateStock(items){
    for (let i = 0; i < items; i++){
        if (itemCheck(items[i], array)){
           arr1.push(items[i]);
        }
     }
}
console.log(updateStock())
//5.Write a function to calculate the total number of items in the inventory.
function total(items){
      let totalNumber = 0
       for( totalNumber in items){
       totalNumber+=items()
       }
       return totalNumber
}
console.log(items)
//6.Write a function to find the item with the lowest stock quantity.
function lowestStock(items) {
    let lowestStockQuantity= 0;
    for (lowestStock in items) {
      if (items[lowestStock] < lowestStock) {
        lowestStock = items;
      }
    }
    return lowestStockQuantity;
  }
console.log(lowestStock)
