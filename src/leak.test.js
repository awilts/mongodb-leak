const MongoClient = require('mongodb').MongoClient;

describe('Memory test', () => {
    it('does not clean up', async () => {
        for (let i = 0; i < 1000; i++) {
            await run(i);
        }
    });
});


async function run(i) {
    const mongoUrl = 'mongodb://127.0.0.1:27017';
    const mongoClient = new MongoClient(mongoUrl);
    await mongoClient.connect();
    const db = mongoClient.db();
    await db.collections();
    await mongoClient.close();

    global.gc();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    process.stdout.write(`Iteration ${i}: The test uses ${Math.round(used * 100) / 100} MB.\n`);
    expect(1).toBe(2 - 1);
}