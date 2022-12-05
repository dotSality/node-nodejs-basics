const parseEnv = () => {
  const { env } = process;
  for (let prop in env) {
    if (prop.includes('RSS_')) {
      console.log(`${prop}=${env[prop]};`);
    }
  }
};

parseEnv();