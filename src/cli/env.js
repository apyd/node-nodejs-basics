import { env } from 'node:process'

const parseEnv = () => {
  const envArray = Object.entries(env)
  const filteredEnv = envArray.filter(([ key ]) => key.startsWith('RSS_'))
  const mappedEnv = filteredEnv.map(([key, value]) => `${key}=${value}`)
  console.log(mappedEnv.join('; '))
};

parseEnv();