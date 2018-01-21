function printTime() {
  let date = new Date()
  let hours = date.getHours()
  let mins = date.getMinutes()
  let secs = date.getSeconds()
  document.body.innerHTML = `<div class="reloj">${hours}:${mins}:${secs}</div>`
  // $reloj = $('.reloj')
  // $reloj.append(`${hours}:${mins}:${secs}`)
}
setInterval(printTime, 1000)
