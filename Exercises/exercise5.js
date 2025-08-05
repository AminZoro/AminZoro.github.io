const alist = [1, 6, 3, 4, 10];

const temp=alist[1];



alist[1]=alist[4];
alist[4]=temp;
console.log(alist);
// alist[4]=2;