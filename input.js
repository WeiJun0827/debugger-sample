// config env
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const PORT = isProduction ? 3000: 3001;
console.log('port:', PORT);

// config args
const args = process.argv;
console.log('args:', args[2], args[3]);
