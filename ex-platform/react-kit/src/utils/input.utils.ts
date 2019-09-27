import { CSSProperties, InputHTMLAttributes } from 'react';

interface ComponentProps {
    id: string;
    value: string;
    style: CSSProperties;
    size: string;
    fake: number;
    type: string;
    autoFocus: boolean;
    disabled: boolean;
    checked: boolean;
    a: number;
}

type Filter<T, U> = T extends U ? T : never;
type InputKeys = keyof InputHTMLAttributes<HTMLInputElement>;
type NonInputProps<P> = Partial<Pick<P, Filter<keyof P, InputKeys>>>;

export namespace InputUtils {

    export const getInputProps = <P extends ComponentProps, R extends NonInputProps<P>>(props: R): NonInputProps<P> => {
        return (({ id, value, style, type, autoFocus, disabled, checked }) => ({
            id,
            value,
            style,
            type,
            autoFocus,
            disabled,
            checked,
        }))(props) as NonInputProps<P>;
    };

}