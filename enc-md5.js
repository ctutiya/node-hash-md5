'use strict';

// const process = require('process')

if (process.argv.length === 4) {
    const encMethod = process.argv[2]
    const encContent = process.argv[3]

    switch(encMethod) {
        case '--package':
            const md5 = require('md5')

            console.log(`hash: ${md5(encContent)}`)
            break

        case '--builtin':
            // loading the crypto module in node.js
            const crypto = require('crypto')

            // creating hash object 
            const hash = crypto.createHash('md5')

            // passing the data to be hashed
            const data = hash.update(encContent, 'utf-8')

            // creating the hash in the required format
            const gen_hash= data.digest('hex')

            // printing the output on the console
            console.log(`hash: ${gen_hash}`)
            break

        default:
            console.log('Encrypt method not found!')
        }
}
else console.log('Insufficient arguments')