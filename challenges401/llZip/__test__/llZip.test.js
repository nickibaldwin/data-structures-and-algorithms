'use strict';

const LL = require('../linked-list.js');

const zipList = require('../ll-zip.js');

describe('Linked List', () => {
  it('Happy Path: should zip 2 linked lists', () => {
    let list1 = new LL();
    let list2 = new LL();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    list2.append('a');
    list2.append('b');
    list2.append('c');

    zipList(list1, list2);

    expect(list1.head.next.value).toEqual('a');
    expect(list2.head.next.value).toEqual(2);
  });
});
