const fs = require('fs')
const path = require('path')

const stuff = fs.readFile(path.resolve(__dirname, 'rawExercises.txt'), 'utf8', (err, file) => {
    const list = file.trim().split('\n')
    const formatted = list.map((item, i) => {
        const [name, area] = item.split(',')
        return {
            id: i+1,
            name,
            area,
        }
    })
    writeIt(JSON.stringify(formatted))
});

const writeIt = (content) => {
    fs.writeFile(path.resolve(__dirname, 'exerciseData.js'), content, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
}