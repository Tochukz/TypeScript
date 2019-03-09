/*Using the Mapped types*/
//Readonly Options
var readonly = {
    size: 11,
    color: 'black'
};
//Optional Options
var optional = {};
//Nullable Options
var nullable = {
    size: null,
    color: null
};
console.log(readonly.color);
optional.size = 10;
console.log(optional.size);
console.log(nullable.color);
