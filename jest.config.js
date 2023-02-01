module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/*.js'],
    globalSetup: './jest.setup.js',
    testTimeout: 60000,
    globalTeardown: './jest.teardown.js',
};
