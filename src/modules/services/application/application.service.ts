import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";

export namespace ApplicationService {
  export const data$ = new BehaviorSubject("1");

  export const callback$ = data$.pipe(filter(value => value !== "b"));
}
