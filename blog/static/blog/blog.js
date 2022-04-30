class Greeter {
  constructor (name) {
    this.name = name
  }

  getGreeting () {
    if (this.name === undefined) {
      return 'Hello, no name'
    }

    return 'Hello, ' + this.name
  }

  showGreeting (greetingMessage) {
    console.log(greetingMessage)
  }

  greet () {
    this.showGreeting(this.getGreeting())
  }
}


class DelayGreeter extends Greeter {
  delay = 2000

  constructor (name, delay) {
    super(name)
    if (delay !== undefined) {
      this.delay = delay
    }
  }

  greet () {
    setTimeout(
      () => {
        this.showGreeting(this.getGreeting())
      }, this.delay
    )
  }
}

const d = new DelayGreeter('Bob')
d.greet()

const g = new Greeter('Patchy')  // Put your name here if you like
g.greet()
