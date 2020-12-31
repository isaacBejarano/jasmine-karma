type greetable = string | number | undefined;

const greet = (name: greetable): string => 'Welcome' + name;

export { greet };
