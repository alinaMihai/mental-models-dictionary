module.exports = {
    '**/*.+(js|jsx|json|less|css|ts|tsx|md)': [
        'npm run format',
        'npm run lint',
        'git add',
    ],
};