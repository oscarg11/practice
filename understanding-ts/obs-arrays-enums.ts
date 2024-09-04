// const person: {
//     name : string;
//     age: number;
// } 
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name : 'Oscar',
//     age: 25,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// };
enum Role {  ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
    name : 'Oscar',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

//person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN){
    console.log('is admin')
}
