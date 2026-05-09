const fs = require('fs');

const logContent = fs.readFileSync('C:/Users/MSI MODEREN 15/.gemini/antigravity/brain/bb094ad6-a753-40bc-a810-df9deced46d4/.system_generated/logs/overview.txt', 'utf8');

const lines = logContent.split('\n');
let latestHeroContent = null;

for (const line of lines) {
    if (line.trim().startsWith('{')) {
        try {
            const obj = JSON.parse(line);
            if (obj.tool_calls) {
                for (const call of obj.tool_calls) {
                    if (call.name === 'replace_file_content' || call.name === 'write_to_file') {
                        if (call.args.TargetFile && call.args.TargetFile.includes('Hero.svelte')) {
                            if (call.args.ReplacementContent) {
                                latestHeroContent = call.args.ReplacementContent;
                            } else if (call.args.CodeContent) {
                                latestHeroContent = call.args.CodeContent;
                            }
                        }
                    }
                }
            }
        } catch(e) {}
    }
}

if (latestHeroContent) {
    // latestHeroContent might be a JSON-escaped string because it was inside the JSON logs as a stringified value
    // Let's make sure it's fully unescaped.
    // Actually, JSON.parse(line) already unescapes the JSON string itself. But sometimes tool args are double JSON stringified.
    let unescaped = latestHeroContent;
    if (typeof unescaped === 'string' && unescaped.startsWith('"') && unescaped.endsWith('"')) {
        try {
            unescaped = JSON.parse(unescaped);
        } catch(e) {
            // just manual unescape if JSON.parse fails
            unescaped = unescaped.slice(1, -1).replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
    }
    
    fs.writeFileSync('d:/Workspace/portfolio/src/lib/components/Hero.svelte', unescaped);
    console.log('Restored Hero.svelte correctly!');
} else {
    console.log('Could not find Hero.svelte content in logs.');
}
