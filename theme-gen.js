const fs = require('fs')
const glob = require('glob')

let fileString = ''

glob(`theme/**/*.string.js`, async function(err, files) {
  console.log(files)
  files.map(async (file) => {
    try {
      const mod = require(`./${file}`)
      console.log(mod)
      fileString += mod.default
    } catch (error) {
      console.log(error)
    }
  })

  // 2. create snipet file and attach created snippets
  fs.writeFile('theme/theme.css', fileString, function(err) {
    if (err) throw err
    console.log('Snippet file created successfully :)')
  })
})
