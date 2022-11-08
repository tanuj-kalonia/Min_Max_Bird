function maxAndMin(arr) {
    arr.sort();
    var maxCount = 0, minCount = 1e9;
    var currCount = 0, curr = -1;
    var res = [-1, -1]
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == curr) currCount++;
        else if (curr == -1) {
            curr = arr[i];
            currCount++;
        } else {
            if (maxCount < currCount) {
                maxCount = currCount;
                res[0] = curr;
            }
            if (minCount > currCount) {
                minCount = currCount;
                res[1] = curr;
            }
            curr = arr[i];
            currCount = 1;
        }
    }
    if (maxCount < currCount) {
        maxCount = currCount;
        res[0] = curr;
    }
    if (minCount > currCount) {
        minCount = currCount;
        res[1] = curr;
    }
    return res;
}

const Arr = [1, 1, 1, 2, 2, 4, 2, 3, 3, 3, 4, 1];

/*
Arr = [1,1,1,1,2,2,2,3,3,3,4,4];

MAX = 0, MIN = 1e9
RES = [-1, -1];
currCount = 0, curr = -1;

1->1->1->1->2 => MAX = 4, MIN = 4, currCount = 1, curr = 2
2->2->2->3 => MAX = 4, MIN = 3, currCount = 1, curr = 3
3->3->3->4 => MAX = 4, MIN = 3, currCount = 1, curr = 4
4->4-> => MAX = 4, MIN = 2

RES = [MAX, MIN];
*/

const res = maxAndMin(Arr);
console.log(res);