const ReactDOMServer = require('react-dom/server');
const React = require('react');
const icons = require('tech-stack-icons');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../static/tech-icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let extractedCount = 0;
for (const key in icons) {
    if (key === 'default' || key === 'StackIcon') continue; // skip main component or defaults
    
    const Component = icons[key];
    try {
        const el = React.createElement(Component, { width: 24, height: 24 });
        const svgString = ReactDOMServer.renderToStaticMarkup(el);
        if (svgString.startsWith('<svg')) {
            fs.writeFileSync(path.join(dir, `${key}.svg`), svgString);
            extractedCount++;
        }
    } catch(e) {
        // silently ignore components that fail to render
    }
}

console.log(`Successfully extracted ${extractedCount} standard icons from tech-stack-icons!`);
