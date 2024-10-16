const randomNumber = Math.random();

function prediction() {
  console.log(randomNumber);
  if (randomNumber < 0.5) {
    alert("Hai Cacato nel Puzzo");
  } else {
    alert("Non Hai Cacato nel Puzzo");
  }
};
