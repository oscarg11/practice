// const person: {
//     name : string;
//     age: number;
// } 
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name : 'Oscar',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};

//person.role.push('admin');
person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())

}