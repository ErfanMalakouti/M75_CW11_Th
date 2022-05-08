console.log(document.cookie.split(";"));
document.cookie = "age = 5";
document.cookie = "mehran = khalili";
console.log(document.cookie.split(";"));

function addName(name) {
  document.cookie = `name = ${name}`;
}

function expire(num, name) {
  let date = new Date();
  document.cookie = `name = ${name};expire= ${date.setDate(
    date.getDate() + num
  )}`;
}
