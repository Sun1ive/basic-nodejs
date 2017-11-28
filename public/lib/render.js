const fs = require('fs');
const path = require('path');

function render(template, data, done) {
  fs.readFile(path.resolve('views', template), 'utf-8', (error, templateData) => {
    if (error) return done(error);

    if (!data) return done(null, templateData)

    const html = templateData.reaplce(/{{([^{}]*)}}/g);
  })
}

module.exports = render;