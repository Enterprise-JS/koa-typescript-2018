module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    roots: ['src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ]
}