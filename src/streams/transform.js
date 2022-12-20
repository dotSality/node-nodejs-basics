import { Transform } from 'stream';

const transform = async () => {
  const terminalInput = process.stdin;
  const terminalOutput = process.stdout;

  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const data = chunk.toString().trim();
      let output = '';
      for (let i = data.length - 1 ; i >= 0 ; i--) {
        output += data[i];
      }
      this.push(output + '\n');
      callback();
    }
  });

  terminalInput.pipe(reverseStream).pipe(terminalOutput);
};

await transform();