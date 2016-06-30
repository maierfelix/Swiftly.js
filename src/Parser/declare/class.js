import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

/**
 * @return {Node}
 */
export function parseClass() {

  let node = new Node.ClassDeclaration();

  this.expect(TT.CLASS);

  node.name = this.extract(Token.Identifier).value;

  if (this.peek(TT.COLON)) {
    node.extend = this.parseStrictType(node);
  }

  this.expect(TT.LBRACE);
  node.body = this.parseBlock();
  this.expect(TT.RBRACE);

  return (node);

}