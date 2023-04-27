import { Employees } from './Employee.js';

class SalesPerson extends Employees {
    #totalSales;
    constructor(name, position, salary, clients) {
        super(name, position, salary);
        this.clients = clients;
        this.#totalSales = 0;
  }

  getSalesNumbers() {
        return this.#totalSales;
  }

}

module.exports = {
    SalesPerson,
}