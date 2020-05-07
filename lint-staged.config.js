module.exports = {
    '**/*.+(js|jsx|json|less|css|ts|tsx|md)': [
        'npm run lint:format',
        'git add',
    ],
};