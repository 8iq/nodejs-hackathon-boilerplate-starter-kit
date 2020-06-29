const timer = require('../realtime/application/timer');

//todo(toplenboren) move to utils.js maybe
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test('Timer should start', () => {
    const x = new timer(10,10,10)
    x.start()
    sleep(1000).then(() => {
        expect(x.getTime()).toBe(9);
    })
});

test('Timer should pause', () => {
    const x = new timer(10,10,10)
    x.start()
    sleep(1000).then(() => {
        x.pause()
        sleep(1000).then(() => {
            expect(x.getTime()).toBe(9);
        })
    })
});

test('Timer should reset', () => {
    const x = new timer(10,10,10)
    x.start()
    sleep(1000).then(() => {
        expect(x.getTime()).toBe(9)
        x.reset()
        expect(x.getTime()).toBe(10)
    })
});

test('Timers should be safe to work async', async () => {
    const x = new timer(10,10,10)
    const y = x
    const z = x
    // first client pushes start:
    x.start()
    await sleep(1000)
    // second client pushes start
    y.start()
    // third client pushes start
    z.start()
    await sleep(1000)
    // somebody pauses the timers
    y.pause()
    await sleep(1000)
    expect(x.getTime()).toBe(8)
});

// we should wait more then 10 secs in order to pass the last test
jest.setTimeout(15000)

test('Timers should give correct period', async () => {
    const x = new timer(2,2,2)
    expect(x.getTime()).toBe(2)
    expect(x.getPeriod()).toBe('WORK')
    expect(x.getNextPeriod()).toBe('BREAK')
    x.start()
    await sleep(2500)
    expect(x.getTime()).toBe(2)
    expect(x.getPeriod()).toBe('BREAK')
    expect(x.getNextPeriod()).toBe('WORK')
    await sleep(2000) // work 2
    await sleep(2000) // break 2
    await sleep(2000) // work 3
    await sleep(2000) // break 3
    await sleep(2000) // work 4
    await sleep(2000) // big_break
    expect(x.getPeriod()).toBe('BIG_BREAK')
    expect(x.getNextPeriod()).toBe('WORK')
});
