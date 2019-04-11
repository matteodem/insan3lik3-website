const readline = require('readline')
const chalk = require('chalk')

const readQuestion = question => (new Promise(resolve =>  {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question(`${question}`, (answer) => {
    rl.close()
    resolve(answer)
  })
}))

const errorChalk = chalk.white.bgRed

const main = async function () {
  const deployedInstanceAnswer = await readQuestion('Did you test the deployed instance? ')
  const formattedAnswer = deployedInstanceAnswer.trim().toLowerCase()

  const hasTested = formattedAnswer === 'y' || formattedAnswer === 'yes'

  if (!hasTested) return errorChalk(`
Test it before assigning an alias to prod!
`)

  const deployedUrl = await readQuestion(`
What is the url of the deployed instance?  

e.g ${chalk.white.bgYellow('site-xijynfewe.now.sh')}

`)

  return `
Run following command to alias to prod 

${chalk.white.bgGreen(`now alias ${deployedUrl} www.insan3lik3.com`)}

`
}

main().then(console.log)


