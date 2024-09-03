processPayment = (amount) => {
  console.log(`Collecting payment of amount ${amount}`);
};

processOrder = (orderId, amount) => {
  console.log(`${orderId} is being processed`);
  processPayment(amount);
  console.log(`${orderId} has been fully processed`);
};

function main() {
  console.log("Processing Orders");
  processOrder(101, 10.99);
  processOrder(102, 12.99);
  processOrder(103, 15.0);
  console.log("All orders have been proccesed");
}

main();
