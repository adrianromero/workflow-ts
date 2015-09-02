
/**
 * Sums two numbers
 * @param a - First number
 * @param b - Second number
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * Just greets people
 * @class Greeter
 */
export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    /**
     * Main method that says hello.
     */
    greet() {
        return 'Hello, ' + this.greeting + '!';
    }
}
