process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Define a function with 1 argument, 'data'
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
