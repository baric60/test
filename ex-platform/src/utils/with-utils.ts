import { Component, createElement, ComponentType } from 'react';
import { Observable, BehaviorSubject, Subscription, merge } from 'rxjs';

export type ComponentDecorator<P> = (Target: ComponentType<P>) => ComponentType<P>;

export type WithRXSelector<P = never, S = never> = (
	props$: Observable<Readonly<P>>,
	state$: Observable<Readonly<S>>,
) => Observable<Partial<Readonly<P>>>;

export namespace WithRxUtils {
	export function withRX<P extends object = never, S extends object = never>(
		select: WithRXSelector<P, S>,
	): ComponentDecorator<P> {
		return Target => {
			class WithRX extends Component<P> {
				private props$ = new BehaviorSubject(this.props);
				private state$ = new BehaviorSubject(this.state);
				private subscriptions?: Subscription;

				componentDidMount() {
					this.subscriptions = merge(this.props$.asObservable(), this.state$.asObservable()).subscribe();
				}

				render() {
					return createElement(Target, this.props, this.state);
				}

				componentWillUnmount() {
					if (this.subscriptions) {
						this.subscriptions.unsubscribe();
					}
				}
			}

			return WithRX;
		};
	}
}
