function count() {
  var start = window.document.querySelector("#start")
  var end = window.document.querySelector("#end")
  var step = window.document.querySelector("#step")
  var result = window.document.querySelector("div#result")
  if (start.value.length == 0) {
    result.innerHTML = "Can't count from naught, ol' love."
  } else if (step.value.length == 0) {
    window.alert("Can't count with zero steps.")
  } else {
    
  }
}
