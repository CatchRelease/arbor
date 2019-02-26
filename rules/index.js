module.exports.rules = {
  'use-create-with-component': context => ({
    'CallExpression Identifier': node => {
      if (node.name === 'withComponent') {
        context.report(node, 'Use the createWithComponent utility method');
      }
    },

    'ExpressionStatement AssignmentExpression Identifier': node => {
      if (node.name === 'defaultProps' || node.name === 'propTypes') {
        const source = context.getSourceCode();
        const name = node.parent.object && node.parent.object.name;

        if (!name) return;

        const program = context.getAncestors().find(n => n.type === 'Program');

        const declarations = program.body
          .filter(n => n.type === 'VariableDeclaration')
          .map(n => n.declarations);

        const flattenedDeclarations = [].concat(...declarations);
        const declaration = flattenedDeclarations.find(d => d.id.name === name);

        if (!declaration) return;

        const usedCreateWithComponent = source
          .getTokensBetween(
            source.getTokenByRangeStart(declaration.start),
            source.getTokenByRangeStart(declaration.end)
          )
          .find(t => t.value === 'createWithComponent');

        if (usedCreateWithComponent) {
          context.report(
            node,
            `Pass ${
              node.name
            } via the options argument of createWithComponent utility method`
          );
        }
      }
    }
  })
};
