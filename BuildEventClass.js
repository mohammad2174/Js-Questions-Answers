class Events {
    constructor() {
        this.events = {};
    }

on(eventName, callback) {
    if (this.events[eventName]) {
        this.events[eventName].push(callback);
    } else {
        this.events[eventName] = [callback];
    }
}

trigger(eventName) {
    if (this.events[eventName]) {
        for (const cb of this.events[eventName]) {
            cb();
        }        
    }
}

off(eventName) {
    delete this.events[eventName];
    }
}

test('Events can be registered then triggered', () => {
    const events = new Events();

    const cb1 = jest.fn();

    events.on('click', cb1);
    events.trigger('click');

    expect(cb1.mock.calls.length).toBe(1);
});

test('multiple events can be registered then triggered', () => {
    const events = new Events();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    events.on('click', cb1);
    events.on('click', cb2);
    events.trigger('click');

    expect(cb1.mock.calls.length).toBe(1);
    expect(cb2.mock.calls.length).toBe(1);
});

test('Events can be triggered multiple times', () => {
    const events = new Events();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    events.on('click', cb1);
    events.trigger('click');
    events.on('click', cb2);
    events.trigger('click');
    events.trigger('click');

    expect(cb1.mock.calls.length).toBe(3);
    expect(cb2.mock.calls.length).toBe(2);
});

test('Events can have different names', () => {
    const events = new Events();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    events.on('click', cb1);
    events.trigger('click');
    events.on('hover', cb2);
    events.trigger('click');
    events.trigger('click');

    expect(cb1.mock.calls.length).toBe(2);
    expect(cb2.mock.calls.length).toBe(1);
});

test('Events can be toggled off', () => {
    const events = new Events();

    const cb1 = jest.fn();
    const cb2 = jest.fn();

    events.on('hover', cb2);

    events.on('click', cb1);
    events.trigger('click');
    events.on('hover', cb2);
    events.off('click');

    events.trigger('hover');

    expect(cb1.mock.calls.length).toBe(1);
    expect(cb2.mock.calls.length).toBe(1);
});