'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('======== QUEUE WITH STACKS ========', () => {
  it('Can enqueue Properly', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size).toEqual(3);
  });

  it('Can dequeue Properly', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.size).toEqual(2);
  });
});
