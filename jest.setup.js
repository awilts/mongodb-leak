const MongoMemoryReplSet = require('mongodb-memory-server-global-4.4').MongoMemoryReplSet;

module.exports = async () => {
    const replset = new MongoMemoryReplSet({
        replSet: {count: 1, name: 'test', ip: '127.0.0.1'},
        instanceOpts: [
            {
                port: 27017,
                storageEngine: 'wiredTiger',
            },
        ],
    });
    await replset.start();
    await replset.waitUntilRunning();
    global['mongoServer'] = replset;
};

