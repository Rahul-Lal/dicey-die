function ftnDiceRoll() {
  let txtInput1 = document.getElementById("h1Die");
  let txtInput2 = document.getElementById("h2Die");

  let imgInput = document.getElementById("dieImage");
  
  let dieNumber1 = Math.floor(Math.random() * 7);
  let dieNumber2 = Math.floor(Math.random() * 7);
  let dieArrayNum = Math.floor(Math.random() * 6);

  if(dieNumber1 == 0 || dieNumber2 == 0)
  {
    dieNumber1 = 1;
    dieNumber2 = 1;
  }
  else
  {
  txtInput1.innerText = dieNumber1;
  txtInput2.innerText = dieNumber2;
  console.log(dieNumber1 + dieNumber2);
  }
}
