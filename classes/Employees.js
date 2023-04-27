export class Employees {
    #salary;
    #isHired;
    static #allEmployees = [];
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
}

  getSalary() {
      return this.#salary;
}

  setSalary(amount) {
      this.#salary = amount;
}

  getStatus() {
      return this.#isHired;
  }

  setStatus(command) {
      if (command === 'hire') {
        this.#isHired = true;
    } else if (command === 'fire') {
        this.#isHired = false;
    }
  }

  static getEmployees() {
    return Employees.#allEmployees;
}

static getTotalPayroll() {
      let totalSalary = 0;
      for (const employee of Employees.#allEmployees) {
          totalSalary += employee.#salary;
  }
  return totalSalary;
}

}


module.exports = {
    Employees,
}