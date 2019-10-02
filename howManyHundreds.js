function howManyHundreds(can) {
    return (can - can % 100) / 100;
}  
console.log(howManyHundreds(123456), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
