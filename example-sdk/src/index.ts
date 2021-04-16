/**
 * A glorious class for everyone to use
 */
export class MyClass {
  private foo: number;
  constructor(foo: number) {
    this.foo = foo;
  }

  /**
   * logs the value of foo
   */
  callFoo() {
    console.log(this.foo);
  }
}
