import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello world ' + name);
}

function goodbyeHandler(name){
    console.log('Goodbye world '+ name)
}

//register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', goodbyeHandler);

// emit events
myEmitter.emit('greet', 'Oscar');
myEmitter.emit('bye', 'Oscar');

//error handling
myEmitter.on('error', (err) => {
    console.log('An error occured: ', err)
})

//simulate error
myEmitter.emit('error', new Error('Something went wrong'))

