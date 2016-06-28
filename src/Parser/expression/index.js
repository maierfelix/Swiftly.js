import {
  Token,
  Types as Type,
  TokenList as TT,
  Operators as OP
} from "../../labels";

import Node from "../../nodes";

import {
  getNameByLabel
} from "../../utils";

/**
 * @return {Node}
 */
export function parseExpressionStatement() {

  switch (this.current.name) {
    case TT.SELF:
    case TT.BIT_AND:
    case TT.UL:
    case TT.TRUE:
    case TT.FALSE:
    case Token.Identifier:
    case Token.NullLiteral:
    case Token.StringLiteral:
    case Token.NumericLiteral:
    case Token.BooleanLiteral:
      return this.parseAtomicExpression();
    break;
    /** Parenthised expression */
    case TT.LPAREN:
      return this.parseParenthese();
    break;
    /** Operator things */
    case TT.ASSOCIATIVITY:
      return this.parseAssociativityExpression();
    break;
    case TT.PRECEDENCE:
      return this.parsePrecedenceExpression();
    break;
    default:
      if (this.isNativeType(this.current.name)) {
        return (this.parseBinaryExpression(0));
      }
    break;
  };

  return (null);

}

/**
 * @return {Node}
 */
export function parsePrecedenceExpression() {

  let node = new Node.PrecedenceExpression();

  this.expect(TT.PRECEDENCE);

  node.level = this.parseLiteral();

  return (node);

}

/**
 * @return {Node}
 */
export function parseAssociativityExpression() {

  let node = new Node.AssociativityExpression();

  this.expect(TT.ASSOCIATIVITY);

  node.associativity = this.parseLiteral();

  return (node);

}

/**
 * Accept precedence
 * @param  {Object}  token
 * @param  {Number}  state
 * @return {Boolean}
 */
export function acceptPrecedence(state) {
  if (state !== void 0 && this.current) {
    /** Custom operator */
    if (getNameByLabel(this.current.name) === "Identifier") {
      return (TT[state.op] === TT[this.current.value]);
    }
    return (TT[state.op] === this.current.name);
  }
  return (false);
}

/**
 * @param  {Number}  name
 * @return {Boolean}
 */
export function isOperator(name) {
  return (
    getNameByLabel(name) in OP
  );
}