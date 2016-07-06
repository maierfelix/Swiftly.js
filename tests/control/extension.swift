extension Int {
  var double: Int { return self * 2 }
  func square() -> Int {
    return (self * self);
  }
}

extension Double {
  var double: Double { return self * 2 }
}

extension °°°°° {
  var double: Int { return self * 2 }
  func square() -> Int {
    return (self * self);
  }
}

var a:Int = 8.double.square();
var oneInch = 25.75.double;

expect(a == 256);
expect(oneInch == 51.5);

expect(8.square() * 2 * 2.square() / 4 == 128);