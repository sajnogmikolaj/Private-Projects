function send() {
  let dataValue = document.getElementById("data").value;

  console.log(dataValue);

  let regValue = document.getElementById("rej").value;

  console.log(regValue);

  let qpalValue = document.getElementById("qpal").value;

  console.log(qpalValue);

  let gateValue = document.getElementById("gate").value;

  console.log(gateValue);
}

submit.addEventListener("click", send);