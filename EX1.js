let user = {
    name: "",
    family: "",
    age: "",
    birthday: {
      day: "",
      mounth: "",
      year: ""
    },
    phonNumber: "",
    country: "",
    state: "",
    city: "",
    street: "",
    No: "",
    unit: "",
    set fullName(value) {
      [this.name, this.family] = value.split(" ");
    },
    get fullName() {
      return `${this.name} ${this.family}`
    },
    set age_set(value) {
      this.age = value
    },
    set birthday1(value) {
      this.birthday.day = value.getDate()
      this.birthday.mounth = value.getMonth()
      this.birthday.year = value.getFullYear()
    },
    get birthday1() {
      return `${this.birthday.year},${this.birthday.mounth},${this.birthday.day}`
    },
    set phonNumber1(value) {
      this.phonNumber = value
    },
    set address(value) {
      [this.country, this.state, this.city, this.street, this.No, this.unit] = value.split(",")
    }
  };