/**
Exercise 1
1. Create a variable named "Price" and set it to a specific price value.
2. Create a variable named "Product" and set it to a product name.
3. Create a variable named "Tax" and set it to a specific tax value.
4. Print the name of the product.
5. Calculate the total price amount, including tax (total = Price + Tax),
and then print it.
 */

var Price = 70000
var Product = "Samsung Mobile"
var Tax = (8/100)*Price;
console.log(Product);
var total = Price + Tax;
console.log("Price: ",total)