const { Liquid } = require('liquidjs');
const fs = require('fs');
const path = require('path');
const outputDir = "dist";

const engine = new Liquid({
    root: __dirname + '/views',
    extname: '.liquid'
});

// Load data
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Get all .liquid files in /views
const files = fs.readdirSync(path.join(__dirname, 'views')).filter(file => file.endsWith('.liquid'));
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Render each template and write output
files.forEach(file => {
    const name = path.basename(file, '.liquid');
    engine.renderFile(name, data).then(html => {
        fs.writeFileSync(`${outputDir}/${name}.html`, html);
        console.log(`Rendered ${name}.html`);
    });
});