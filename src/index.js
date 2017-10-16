export default function({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        const isLogStatement =
          path.node.name === 'log' && path.parent.type === 'CallExpression';

        if (!isLogStatement) return;

        const prefix = `console.`;
        path.node.name = `${t.stringLiteral(prefix).value}${path.node.name}`;
      }
    }
  };
}
