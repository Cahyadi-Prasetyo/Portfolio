require('dotenv').config();
console.log('Loaded Environment Variables Keys (Values hidden):');
console.log(Object.keys(process.env).filter(key => key.includes('URL') || key.includes('KEY')));
