const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let array = []

  document.body.addEventListener('keydown', (e) => {
    let index = array.length
    let num = parseInt(e.which || e.detail)
    // debugger
    if (num === code[index]) {
      array.push(num)
    } else {
      array = []
    }
    console.log(array, num);
    if (array.equals(code)) {
      alert('Unlimited lives unlocked!')
    }
  })
}

Array.prototype.equals = function (array) {
  if (!(array instanceof Array) || this.length !== array.length) { return false }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== this[i]) { return false }
  }
  return true
}

init()