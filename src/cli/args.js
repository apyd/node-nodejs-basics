import { argv } from 'node:process'

const parseArgs = () => {

  const args = argv.slice(2)
  const mappedArgs = args
    .map((arg, index) => {
      if(index % 2 === 0) {
        return `${arg} is ${args[index + 1]}`
      }
    })
    .filter(arg => arg)
  console.log(mappedArgs.join(', '))
};

parseArgs();