var postcss = require('postcss');

module.exports = postcss.plugin('postcss-pointer', function () {

  return function (css) {
    css.eachDecl('pointer', function (decl) {
      if (decl.value.indexOf('cursor') !== -1) {
        decl.prop  = 'cursor';
        decl.value = 'pointer';
      }
    });
  };

});
