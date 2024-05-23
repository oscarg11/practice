// const person: {
//     name : string;
//     age: number;
// } 
var person = {
    name: 'Oscar',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
person.role.push('admin');
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
