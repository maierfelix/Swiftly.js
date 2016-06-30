import {
  Types as Type,
  TokenList as TT
} from "./labels";

/**
 * @class Node
 * @export
 */
export default class Node {

  constructor() {}

  static get Program() {
    return (
      class Program {
        constructor() {
          this.kind = Type.Program;
          this.body = [];
        }
      }
    );
  }

  static get AssociativityExpression() {
    return (
      class AssociativityExpression {
        constructor() {
          this.kind = Type.AssociativityExpression;
          this.associativity = null;
        }
      }
    );
  }

  static get PrecedenceExpression() {
    return (
      class PrecedenceExpression {
        constructor() {
          this.kind = Type.PrecedenceExpression;
          this.level = -1;
        }
      }
    );
  }

  static get InitializerDeclaration() {
    return (
      class InitializerDeclaration {
        constructor() {
          this.kind = Type.InitializerDeclaration;
          this.arguments = [];
          this.body = [];
        }
      }
    );
  }

  static get OperatorDeclaration() {
    return (
      class OperatorDeclaration {
        constructor() {
          this.kind = Type.OperatorDeclaration;
          this.name = null;
          this.body = [];
        }
      }
    );
  }

  static get ClassDeclaration() {
    return (
      class ClassDeclaration {
        constructor() {
          this.kind = Type.ClassDeclaration;
          this.name = null;
          this.extend = null;
          this.body = [];
        }
      }
    );
  }

  static get ExtensionDeclaration() {
    return (
      class ExtensionDeclaration {
        constructor() {
          this.kind = Type.ExtensionDeclaration;
          this.argument = null;
          this.body = [];
        }
      }
    );
  }

  static get RepeatStatement() {
    return (
      class RepeatStatement {
        constructor() {
          this.kind = Type.RepeatStatement;
          this.test = null;
          this.body = [];
        }
      }
    );
  }

  static get WhileStatement() {
    return (
      class WhileStatement {
        constructor() {
          this.kind = Type.WhileStatement;
          this.test = null;
          this.body = [];
        }
      }
    );
  }

  static get ForStatement() {
    return (
      class ForStatement {
        constructor() {
          this.kind = Type.ForStatement;
          this.init = null;
          this.test = null;
          this.update = null;
          this.body = [];
        }
      }
    );
  }

  static get ParameterExpression() {
    return (
      class ParameterExpression {
        constructor() {
          this.kind = Type.ParameterExpression;
          this.arguments = [];
        }
      }
    );
  }

  static get Parameter() {
    return (
      class Parameter {
        constructor() {
          this.kind = Type.Parameter;
          this.label = null;
          this.argument = null;
          this.init = null;
        }
      }
    );
  }

  static get IfStatement() {
    return (
      class IfStatement {
        constructor() {
          this.kind = Type.IfStatement;
          this.condition = null;
          this.consequent = null;
          this.alternate = null;
        }
      }
    );
  }

  static get ReturnStatement() {
    return (
      class ReturnStatement {
        constructor() {
          this.kind = Type.ReturnStatement;
          this.argument = null;
        }
      }
    );
  }

  static get PseudoProperty() {
    return (
      class PseudoProperty {
        constructor() {
          this.kind = Type.PseudoProperty;
          this.name = null;
          this.arguments = [];
          this.body = [];
        }
      }
    );
  }

  static get BlockStatement() {
    return (
      class BlockStatement {
        constructor() {
          this.kind = Type.BlockStatement;
          this.body = [];
        }
      }
    );
  }

  static get FunctionDeclaration() {
    return (
      class FunctionDeclaration {
        constructor() {
          this.kind = Type.FunctionDeclaration;
          this.name = null;
          this.type = null;
          this.arguments = [];
          this.body = [];
          this.isStatic = false;
        }
      }
    );
  }

  static get TypeCast() {
    return (
      class TypeCast {
        constructor() {
          this.kind = Type.TypeCast;
          this.expression = null;
          this.type = null;
          this.operator = null;
          this.isForced = false;
          this.isConditional = false;
        }
      }
    );
  }

  static get TernaryExpression() {
    return (
      class TernaryExpression {
        constructor() {
          this.kind = Type.TernaryExpression;
          this.condition = null;
          this.consequent = null;
          this.alternate = null;
        }
      }
    );
  }

  static get CallExpression() {
    return (
      class CallExpression {
        constructor() {
          this.kind = Type.CallExpression;
          this.callee = null;
          this.arguments = [];
        }
      }
    );
  }

  static get MemberExpression() {
    return (
      class MemberExpression {
        constructor() {
          this.kind = Type.MemberExpression;
          this.object = null;
          this.property = null;
        }
      }
    );
  }

  static get Tuple() {
    return (
      class Tuple {
        constructor() {
          this.kind = Type.Tuple;
          this.arguments = [];
        }
      }
    );
  }

  static get TupleType() {
    return (
      class TupleType {
        constructor() {
          this.kind = Type.TupleType;
          this.arguments = [];
        }
      }
    );
  }

  static get TypeAnnotation() {
    return (
      class TypeAnnotation {
        constructor() {
          this.kind = Type.TypeAnnotation;
          this.type = null;
        }
      }
    );
  }

  static get VariableDeclaration() {
    return (
      class VariableDeclaration {
        constructor() {
          this.kind = Type.VariableDeclaration;
          this.symbol = null;
          this.declarations = [];
          this.init = null;
        }
      }
    );
  }

  static get AssignmentExpression() {
    return (
      class AssignmentExpression {
        constructor() {
          this.kind = Type.AssignmentExpression;
          this.operator = null;
          this.left = null;
          this.right = null;
        }
      }
    );
  }

  static get BinaryExpression() {
    return (
      class BinaryExpression {
        constructor() {
          this.kind = Type.BinaryExpression;
          this.operator = null;
          this.left = null;
          this.right = null;
          this.isParenthised = false;
        }
      }
    );
  }

  static get CallExpression() {
    return (
      class CallExpression {
        constructor() {
          this.kind = Type.CallExpression;
          this.callee = null;
          this.arguments = [];
        }
      }
    );
  }

  static get ExpressionStatement() {
    return (
      class ExpressionStatement {
        constructor() {
          this.kind = Type.ExpressionStatement;
          this.expression = null;
        }
      }
    );
  }

  static get Identifier() {
    return (
      class Identifier {
        constructor() {
          this.kind = Type.Identifier;
          this.name = null;
        }
      }
    );
  }

  static get Literal() {
    return (
      class Literal {
        constructor() {
          this.kind = Type.Literal;
          this.value = null;
          this.raw = null;
        }
      }
    );
  }

}