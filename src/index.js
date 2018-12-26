class of {

  constructor(value) {
    this.result = value;
  };

  map(predicate) {
    this.result = this.result.map((item) => predicate(item));

    return this;
  };

  switchMap(predecate) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        predecate(this.result)
        return this;
      }, 1000)
    });
    // return this;
  };

  subscribe(next, error, complete) {
    next(this.result);
  };

}

var result = new of([ 1, 2, 3, 4, 5 ]);

result
  .map((result) => result)
  .switchMap((result) => result)
  .subscribe(
    (result) => console.log(result),
    (error) => console.log(error),
    () => console.log('complete')
  );
