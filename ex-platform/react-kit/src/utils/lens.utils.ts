type Getter<S extends object, K extends keyof S> = () => S[K]

type Setter<S extends object, K extends keyof S> = (
    value: S[K],
) => S &
    {
        [P in keyof S]: S[P];
    };

type ILense<S extends object, K extends keyof S> = {
    get: Getter<S, K>;
    set: Setter<S, K>;
    compose: any;
};

export class Lense<S extends object, P extends keyof S> {

    constructor(readonly store: S, readonly prop: P) { }

    get: Getter<S, P> = () => this.store[this.prop];
    set: Setter<S, P> = (value) => ({
        ...this.store,
        [this.prop]: value,
    });

    compose = <S1 extends object, P1 extends keyof S1>(lense: Lense<S1, P1>) => {
        return new Lense<S1, P1>(lense.store, lense.prop);
    };

}
const lensingEntity = <S extends object>(props: S): { [K in keyof S]: ILense<S, K> } => {
    return Object.keys(props).reduce(
        (acc: { [K in keyof S]: ILense<S, K> }, key) => ({
            ...acc,
            [key]: new Lense<S, keyof S>(props, key as keyof S),
        }),
        {} as never,
    );
};

type ExampleForm = {
    name: string;
    surname: string;
    age: number;
    isFavorite: boolean;
    add: {
        field: string,
    }
};

const form: ExampleForm = {
    name: '',
    surname: '',
    age: 1,
    isFavorite: false,
    add: {
        field: ''
    }
};

const lenses = lensingEntity<ExampleForm>(form);
lenses.name.get();
lenses.age.set(1);
lenses.add.get();
