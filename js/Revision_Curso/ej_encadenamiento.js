const order = {
  customer: {
    name: 'Emilio',
    address: {
      street: 'arrayan',
      // city:'Sevilla'
      
    }
  }
};

if ( !order?.customer?.address?.city) {
  console.log('City is required');
}else console.log(`City: ${order.customer.address.city}`);