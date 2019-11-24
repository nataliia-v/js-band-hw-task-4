const tasks = arr => arr.join(' && ');

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'npm run test',
      'npm run eslint'
    ]),
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true'
  }
};


