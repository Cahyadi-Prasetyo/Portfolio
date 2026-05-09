const ReactDOMServer = require('react-dom/server');
const React = require('react');
const StackIcon = require('tech-stack-icons').default || require('tech-stack-icons');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../static/tech-icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const source = fs.readFileSync(path.join(__dirname, '../node_modules/tech-stack-icons/dist/index.js'), 'utf8');
const regex = /"([^"]+)":\{"keywords":/g;
let match;
let count = 0;

const names = new Set();
while ((match = regex.exec(source)) !== null) {
  names.add(match[1]);
}

const fallbackNames = [
  'reactjs', 'nextjs', 'tailwindcss', 'html5', 'css3', 'js', 'typescript',
  'go', 'gin', 'fastapi', 'flask', 'nodejs', 'laravel', 'php',
  'postgresql', 'mysql', 'sqlite', 'sqlite3',
  'docker', 'wsl', 'nginx', 'linux',
  'figma', 'canva',
  'git', 'github',
  'pandas', 'matplotlib', 'scikitlearn', 'tensorflow', 'googlecolab', 'kaggle', 'huggingface', 'tableau', 'googlesheets', 'excel'
];

fallbackNames.forEach(n => names.add(n));

for (const name of names) {
    try {
        const el = React.createElement(StackIcon, { name });
        const svgString = ReactDOMServer.renderToStaticMarkup(el);
        const svgMatch = svgString.match(/<svg[\s\S]*<\/svg>/);
        if (svgMatch) {
            fs.writeFileSync(path.join(dir, `${name}.svg`), svgMatch[0]);
            count++;
        }
    } catch(e) {}
}

console.log(`Extracted ${count} icons from tech-stack-icons!`);
