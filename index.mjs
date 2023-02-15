import * as fs from 'fs/promises';
import * as zlib from 'zlib';

const buffer = await fs.readFile('base.dat.gz');
zlib.gunzip(buffer, (err, buffer) => {
    if (err) {
        throw err;
    }
    console.log("Success gunzip", buffer);
});
