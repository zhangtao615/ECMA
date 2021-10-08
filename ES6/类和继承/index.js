class People {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._sex = 'male'
  }
  get sex() {
    return this._sex
  }
  set sex(sex) {
    this._sex = sex
  }
  showName() {
    console.log(this.name)
  }
}

let p1 = new People('Tom', 21)
console.log(p1.sex) // male
class Coder extends People {
  constructor(name, age, company) {
    super(name, age)
    this.company = company
  }
  showCompany() {
    console.log(this.company);
  }
}

let c1 = new Coder('Jerry', 22, 'xes')