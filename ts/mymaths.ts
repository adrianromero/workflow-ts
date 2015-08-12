
export function add(a: number, b : number): number {
    return a + b;
}

export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting + '!';
    }
}
