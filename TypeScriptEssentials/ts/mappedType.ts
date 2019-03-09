/*Working with Mapped Types */
interface Options{
    size: number;
    color: string;
}
/*Manually created readonly interface*/
interface ManualReadonlyOptions{
    readonly size: number;
    readonly color: string;
}
/*Manually created Optional interface*/
interface ManualOptionalOptions{
    size?: number;
    color?: string;
}
/*Manually created Nullable interface*/
interface ManualNullableOptions{
    size: number | null;
    color: string | null
}
/*Creating resuable Mapped types*/
type ReadOnly<T> = { readonly [k in keyof T]: T[k]};
type Optional<T> = { [k in keyof T]?: T[k]};
type Nullable<T> = { [k in keyof T]: T[k] | null};

/*Creating new types from mapped types*/
type ReadOnlyOptions = ReadOnly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

/*Using the Mapped types*/
//Readonly Options
const readonly: ReadOnlyOptions  = {
    size: 11,
    color: 'black'
}
//Optional Options
const optional: OptionalOptions = {
    //All members are optional;
}
//Nullable Options
const nullable: NullableOptions = {
    size: null,
    color: null
}
console.log(readonly.color);
optional.size = 10;
console.log(optional.size);
console.log(nullable.color);