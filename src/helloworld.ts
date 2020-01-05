class HelloWorld
{
    constructor(public displayText : string) {}
    
    greet()
    {
        return this.displayText;
    }
}

var helloworld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloworld.greet();