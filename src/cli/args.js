const parseArgs = () => {
  const { argv } = process;
  const [, , ...rest] = argv;
  for (let i = 0 ; i < rest.length ; i += 2) {
    const prop = rest[i].substring(2);
    console.log(`${prop} is ${rest[i + 1]}`);
  }
};

parseArgs();