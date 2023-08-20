const len = prompt("Enter Your Passward Length....");
class Passward {
  constructor() {
    console.log("Passward Generator Active......")
    this.pass = " "
  }
  genPassward(len) {
    let chars = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "1234567890"
    let special = "!@#$%^&*()"
    if (len < 3) {
      console.log("Your password should be atleast 3 characters long")
    }
    else {
      let i = 0
      while (i <= len) {
        this.pass += chars[Math.floor(Math.random() * chars.length)]
        this.pass += numbers[Math.floor(Math.random() * numbers.length)]
        this.pass += special[Math.floor(Math.random() * special.length)]
        i += 3
      }
      this.pass = this.pass.substr(0, len)
      return this.pass
    }
  }
}



let p = new Passward()
let c = p.genPassward(len)
console.log(c)
let b = document.getElementById("btn")


b.onclick = () => {

  b.innerHTML = `${c}`
}
//b.addEventListener()
