module.exports = {
    rules: {
      'converter-filename': {
        meta: {
          type: 'suggestion',
          docs: {
            description: 'Files in converter folder should have converter in name',
            category: 'Best Practices',
            recommended: true,
          },
        },
        create: function(context) {
          const fileName = context.getFilename();
  
          if (/^.*\/converters\/.*Converter.*\..*$/.test(fileName)) {
            return {};
          }
  
          return {
            message: `Files in the 'converters' folder should contain the word 'Converter' in their name`,
          };
        },
      },
    },
  };