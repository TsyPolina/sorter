class Sorter {
  constructor() {
    this.array = [];
    this.customSortFunction = function(a, b) {
      return a - b;
    }
    this.customSort = function(array, indices) {
      for (let i = 0; i < array.length; i++) {
          for (let j = i; j < array.length; j++) {
              if (!indices) {
                  if (this.customSortFunction(array[i], array[j])) {
                      let temp = array[i];
                      array[i] = array[j];
                      array[j] = temp;
                  }
              } else {
                  if (indices.indexOf(i) !== -1 && indices.indexOf(j) !== -1 && this.customSortFunction(array[i], array[j]) > 0) {
                      let temp = array[i];
                      array[i] = array[j];
                      array[j] = temp;
                  }
              }
          }
      }
      this.arr = array;
    }
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    this.customSort(this.array, indices);
  }

  setComparator(compareFunction) {
    this.customSortFunction = compareFunction;
  }
}

module.exports = Sorter;