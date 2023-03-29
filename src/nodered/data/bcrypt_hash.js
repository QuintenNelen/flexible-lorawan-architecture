// small program to update the bcrypt hash for the root user in settings.js
// WARNING: when running this multiple times with the same plaintext the hash WILL BE DIFFERENT, this is normal
// usage: node bcrypt_hash.js [plainTextPassword]

const fs = require('fs');
const path = require('path')
const filePath = '/data/settings.js';
const fileContent = fs.readFileSync(filePath, 'utf-8');

const bcrypt = require ('bcryptjs');
const saltRounds = 8
const plaintext = process.argv[2]

bcrypt.genSalt(saltRounds, function(err,salt) {
  bcrypt.hash(plaintext, salt, function(err,hash){
    console.log(plaintext)
    console.log(hash)

    // create password hash
    const regex = /(username:\s*"root",\s*password:\s*")[^"\n]*(?:"[\s,])/g;
    const newFileContent = fileContent.replace(regex, `$1${hash}",`)
    //console.log(newFileContent)
    
    // create backup of old settings file
    const backupPath = path.join(path.dirname(filePath), `${path.basename(filePath)}.bak`);
    fs.copyFileSync(filePath, backupPath);
    console.log("Old settings file backed up to settings.js.bak")
    
    // write updated settings to file
    fs.writeFile(filePath, newFileContent, function(err) {
      if (err) throw err;
      console.log('Password updated successfully.');
    });
  })
})

