const store = {
  name: "PRO'beauty",
  address: {
    country: "Ukraine",
    city: "Odesa",
    street: "Deribasivska str.",
    houseNumber: 18,
  },
};

store.clients = {};
store.clients[`Mikhail Hitko`] = {
  quantity: 10,
  bonuses: 5,
};
store.clients[`Oleksandra Horbenko`] = {
  quantity: 20,
  bonuses: 10,
};
store.clients[`Oleksii Yelanskiy`] = {
  quantity: 25,
  bonuses: 10,
};
store.clients[`Olena Demchyk`] = {
  quantity: 5,
  bonuses: 0,
};
store.clients[`Olha Nevzghodova`] = {
  quantity: 30,
  bonuses: 15,
};
