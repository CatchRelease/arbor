module.exports.rules = {
  'use-create-with-component': context => ({
    'CallExpression Identifier': node => {
      if (node.name === 'withComponent') {
        context.report(node, 'Use the createWithComponent utility method');
      }
    },

    'VariableDeclarator CallExpression Identifier': node => {
      if (node.name === 'createWithComponent') {
        const source = context.getSourceCode().getText();
        const declarator = context
          .getAncestors()
          .find(({ type }) => type === 'VariableDeclarator');

        if (source.match(`${declarator.id.name}.defaultProps = {`)) {
          context.report(
            node,
            'Pass defaultProps as argument of createWithComponent utility method'
          );
        }
      }
    }
  })
};
