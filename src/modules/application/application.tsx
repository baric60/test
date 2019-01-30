import * as React from "react";
import { BehaviorSubject } from "rxjs";
import { ApplicationService } from "../services/application/application.service";
export type TApplicationProps = {};
export type TApplicationState = {
  data$: BehaviorSubject<string>;
};

export class Application extends React.Component<
  TApplicationProps,
  TApplicationState
> {
  readonly state: TApplicationState = {
    data$: ApplicationService.data$
  };

  render() {
    return <div>Hello!</div>;
  }
}
