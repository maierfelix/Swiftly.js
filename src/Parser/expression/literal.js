import {
  Token,
  Types as Type,
  TokenList as TT,
  Operators as OP
} from "../../labels";

import Node from "../../nodes";

import {
  getNameByLabel,
  getLabelByNumber
} from "../../utils";

/**
 * @return {Node}
 */
export function parseLiteral() {

  /** Unary pex expression */
  if (this.isPrefixOperator()) {
    return this.parseUnaryExpression();
  }

  if (this.peek(TT.LPAREN)) {
    this.expect(TT.LPAREN);
    let tmp = this.parseExpressionStatement();
    this.expect(TT.RPAREN);
    return (tmp);
  }

  let node = new Node.Literal();
  let isExplicit = this.eat(TT.UL);

  if (this.current.value === "&") {
    node.isPointer = true;
    this.next();
  }

  if (isExplicit && this.peek(TT.COLON)) {
    // explicit only parameter
  } else {
    node.type = this.current.name;
    node.value = this.current.value;
    node.raw = this.current.value;
    this.next();
  }

  /** Labeled literal */
  if (this.peek(Token.Identifier)) {
    if (!this.isOperator(TT[this.current.value])) {
      let tmp = this.parseLiteral();
      tmp.label = node;
      node = tmp;
    }
  }

  if (!this.inTernary) {
    if (this.peek(TT.COLON)) {
      node = this.parseStrictType(node);
      if (
        node.argument &&
        node.argument.kind === Type.TypeAnnotation
      ) {
        node.argument.isExplicit = isExplicit;
      }
    }
  }

  return (node);

}

/**
 * @return {Node}
 */
export function parseArrayDeclaration() {

  let node = new Node.ArrayDeclaration();

  let args = this.parseParenthese(TT.LBRACK, TT.RBRACK);

  node.argument = this.parseArguments(args);

  return (node);

}