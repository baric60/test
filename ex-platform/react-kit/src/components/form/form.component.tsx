import * as React from 'react';
import { Component, Fragment, FunctionComponent } from 'react';
import { Function1 } from 'fp-ts/lib/function';
import { ControlComponent } from '../control/control.component';

interface Field<V> {
    value: V;
    onValueChange: Function1<V, void>;
}

interface Control<V> {
    value: V;
    onValueChange: Function1<V, void>;
    isValid: boolean;
}

interface ExampleForm {
    name: Field<string>;
    surname: Field<string>;
}

interface FormComponentProps<V> {
    value: V;
    onValueChange: Function1<V, void>;
    children: Function1<V, JSX.Element>;
}

function createControl<V>(value: V): Control<V> {
    return {
        value,
        onValueChange: (value: V) => console.log(value),
        isValid: false,
    };
}

function createForm<V>(): FunctionComponent<FormComponentProps<V>> {
    return props => (
        <form>{props.children(props.value)}</form>
    );
}

const Form = createForm<ExampleForm>();

type ExampleLayoutState = {
    value: ExampleForm;
};

export class ExampleLayout extends Component<{}, ExampleLayoutState> {

    readonly state = {
        value: {
            name: createControl(''),
            surname: createControl(''),
        }
    };

    render() {
        const { value } = this.state;

        return (
            <Form value={value} onValueChange={this.handleFormValueChage}>
                {props => {
                    const name = props.name;
                    const surname = props.surname;

                    return (
                        <Fragment>
                            <ControlComponent value={name.value} onValueChange={name.onValueChange} />
                            <div>
                                <ControlComponent value={surname.value} onValueChange={surname.onValueChange} />
                            </div>
                        </Fragment>
                    );
                }}
            </Form>
        )
    };

    private handleFormValueChage = (value: ExampleForm) => {
        console.log(value);
        this.setState({
            value
        })
    };
}

