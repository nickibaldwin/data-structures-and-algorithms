'use stict';


const zipLists = (list1, list2) => {
  let c1 = list1.head;
  let c2 = list2.head;
  let temp1 = list1.head;
  let temp2 = list2.head;

  while(c1 || c2) {
    temp1 = c1.next;
    temp2 = c2.next;
    c1.next = c2;
    c2.next = temp1;
    c1 = temp1;
    c2 = temp2;
  }
};

module.exports = zipLists;
