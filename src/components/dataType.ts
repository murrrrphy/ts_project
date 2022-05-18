const DataType = () => {
  // boolean
  let isDone: boolean = false

  // number
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d;
  let binaryLiteral: number = 0b1010;
  let octalLiteral: number = 0o744;

  // string
  let name: string = "bob";
  name = "smith";

  // 模板字符串
  let name2: string = `Gene`
  let age: number = 37
  let sentence: string = `Hello, my name is ${name2}. 
  I'll be ${age +1} years old next month.`
  let sentence2: string = "Hello, my name is" + name2 + "./n/n" + "I'll be" + (age + 1) +"years old next month.";

  // array
  let list: number[] = [1,2,3]
  let list2: Array<number> = [1, 2, 3]

  //tuple
  // declare a tuple type
  let x: [string, number]
  // initialize it
  x = ['hello', 10]

  //enum
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green
  let colorName: string = Color![2];

  // any
  // void
  // null undefined

  //never
  //never类型表示的是那些永不存在的值的类型。
  // 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
  // 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
  function error(message: string): never {
    throw new Error(message);
  }

  function fail() {
    return error("Something failed");
  }

  function infiniteLoop(): never {
    while (true) {
    }
  }

  // object
  declare function create(o: object | null): void;

  create({ prop: 0 }); // OK
  create(null); // OK

  // 断言
  //1.尖括号
  //2.as

  // interface
  interface LabelledValue {
    label: string
  }

  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

  // readonly
  interface Point {
    readonly x: number
    readonly y: number
  }

  let p1: Point = {x: 20, y: 10}

  // ReadonlyArray<T>与Array<T>相似，只是将所有可变方法去掉了
}