var a =2

const runner = {
    a: 3,
    func1: () => {
        console.log('Hello from func1', this.a)
    },
    func2: function () {
        console.log('Hello from func2', this.a)
    }
}

runner.func1()
runner.func2()