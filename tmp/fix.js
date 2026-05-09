const fs = require('fs');
let c = fs.readFileSync('src/lib/components/Hero.svelte', 'utf8');
if (c.startsWith('"')) c = JSON.parse(c);
fs.writeFileSync('src/lib/components/Hero.svelte', c);
