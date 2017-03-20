function display_text(){
  var objDiv = document.getElementById("summer");
  var sum =0;

  for(var i=1 ; i<= 100; i++){
    sum += i;
  }
  objDiv.innerHTML = "Sum (1-100) = "+sum;
}
