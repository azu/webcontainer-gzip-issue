import * as fs from 'fs/promises';
import * as path from 'path';
import * as zlib from 'zlib';

const dictFiles = await fs.readdir('dict');
for (const dictFile of dictFiles) {
    const fileBuffer = await fs.readFile(path.join('dict', dictFile));
    zlib.gunzip(fileBuffer, (err, buffer) => {
        if (err) {
            console.error("Error:", dictFile, err)
        } else {
            console.log("Success:", dictFile);
        }
    });
}
