import * as React from "react";
import { of } from "rxjs";
import { map, tap, delay } from "rxjs/operators";

export type TApplicationProps = {};
export type TApplicationState = {};

export class Application extends React.Component<
  TApplicationProps,
  TApplicationState
> {
  render() {
    this.getVersion();
    return <div />;
  }

  private getVersion: () => void = () => {
    of(true)
      .pipe(
        map(flag => !flag),
        delay(4000),
        tap(console.log)
      )
      .subscribe();
  };
}
