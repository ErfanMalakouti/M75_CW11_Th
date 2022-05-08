let num = 1;

let add = function (id, name, family, age, birthday, fatherName, avg, grade) {
  let student = {
    id: id,
    name: name,
    family: family,
    age: age,
    birthday: birthday,
    fatherName: fatherName,
    avg: avg,
    grade: grade,
  };
  localStorage.setItem(`student${num}`, JSON.stringify(student));
  num += 1;
};

let find = function (name, family) {
  for (let i = 0; i < localStorage.length; i++) {
    let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (temp["name"] === name && temp["family"] === family) {
      return temp;
    }
  }
};

let remove = function (id) {
  for (let i = 0; i < localStorage.length; i++) {
    let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (s["id"] == id) {
      console.log(temp);
      localStorage.removeItem(localStorage.key(i));
      num--;
      return localStorage;
    }
  }
};

let getInfo = function (id) {
  for (let i = 0; i < localStorage.length; i++) {
    let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (temp["id"] == id) {
      return temp;
    }
  }
};
