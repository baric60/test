import * as React from 'react';
import { FunctionComponent, ChangeEvent } from 'react';
import { Function1 } from 'fp-ts/lib/function';
import { MakeTheme } from '../../utils/theme.utils';
import { withTheme } from '../../utils/with-theme.utils';

type ControlProps<V> = {
    value: V;
    onValueChange: Function1<V, void>;
};

type RawControlComponentProps = ControlProps<string> & {
    theme: MakeTheme<'container' | 'input', string>;
};

const RawControlComponent: FunctionComponent<RawControlComponentProps> = props => {
    const { theme, onValueChange, children } = props;

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        onValueChange(event.target.value);
    };

    return (
        <div className={theme.container}>
            <input type='text' value={props.value} onInput={handleValueChange} className={theme.input} />
            {children}
        </div>
    );
}

export const ControlComponent = withTheme(Symbol(), {})(RawControlComponent);