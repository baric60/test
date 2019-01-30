import { TestScheduler } from "rxjs/testing";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
// import { callback$ } from "../application.service";

describe("should start schedule", () => {
  let scheduler: TestScheduler;
  let observable: BehaviorSubject<string>;

  beforeEach(() => {
    scheduler = new TestScheduler((a, e) => expect(a).toEqual(e));
    observable = new BehaviorSubject("a");
  });

  afterEach(() => {
    scheduler.flush();
  });

  it("should test BehaviorSubject", () => {
    const scheme = {
      src: "^--b--c|",
      res: "a--b--c-"
    };

    scheduler
      .createHotObservable<string>(scheme.src)
      .pipe(tap(value => observable.next(value)))
      .subscribe();

    scheduler.expectObservable(observable).toBe(scheme.res);
  });
});
