'use strict';

const LL = require('../lib/linked-list.js');

describe('Linked List', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.length).toEqual(0);
  });

  it('should add a node to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);

    list.insert(second);
    console.log(list);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
  });

  it('should stringify the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);

    list.insert(second);
    expect(list.toString()).toEqual('{ 2 } -> { 1 } -> NULL');
  });

  it('should append a new node to the end of the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);

    list.append(second);
    expect(list.head.next.value).toEqual(2);
  });
});
