;
var Property = /** @class */ (function () {
    function Property(property) {
        this.property = property;
    }
    Property.prototype.getProperty = function () {
        return this.property;
    };
    return Property;
}());
var mansionOptions = {
    bedrooms: 3,
    bathrooms: 2,
    butlers: 1
};
var myMansion = new Property(mansionOptions);
var mansionProperty = myMansion.getProperty();
// const butlersCount  = mansionProperty.butlers; // Error: Property 'butlers' does not exist  on type House | Mansion 
// Using type Assertion. It is similar to casting in other languages.
var butlersCount = mansionProperty.butlers;
var roomName = 'Master bedroom';
// mansionProperty.bedrooms = roomName; // Error : Type 'string' is not assingable to type 'number'
mansionProperty.bedrooms = roomName; // Using forced type assertion 
