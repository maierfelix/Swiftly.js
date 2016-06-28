import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

/**
  [x] name
  [x] pattern
  [x] block
  [x] getter-setter
  [x] willset-didset
  [x] expression
  [x] type annotation (opt)
  @return {Node}
 */
export function parseVariable() {

  let declaration = null;
  let node = new Node.VariableDeclaration();

  node.symbol = this.current.name;
  this.next();

  /** pattern */
  if (this.peek(TT.LPAREN)) {
    declaration = this.parseExpressionStatement();
  /** type annotation */
  } else {
    declaration = this.parseVariableDeclarement();
  }

  node.declarations.push(declaration);

  /** block */
  if (this.eat(TT.LBRACE)) {
    node.init = this.parseBlock();
    this.expect(TT.RBRACE);
  /** expression */
  } else {
    if (this.eat(TT.ASSIGN)) {
      node.init = this.parseStatement();
    }
  }

  return (node);

}

/**
 * @return {Node}
 */
export function parseVariableDeclarement() {

  let node = new Node.VariableDeclarement();

  node.name = this.current.value;
  this.next();
  node.type = this.parseStrictType();

  return (node);

}