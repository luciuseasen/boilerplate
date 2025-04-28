const fs = require('fs');
const folderName = process.argv[2] || 'Project';
const indexName = process.argv[3] || 'index';
const cssName = process.argv[4] || 'styles';
const jsName = process.argv[5] || 'app';

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/${indexName}.html`,
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="${cssName}.css">
</head>
<body>
    <script src="${jsName}.js"></script>
</body>
</html>`);

    fs.writeFileSync(`${folderName}/${cssName}.css`, '');
    fs.writeFileSync(`${folderName}/${jsName}.js`, '');
} catch (e) {
    console.log("Error");
    console.log(e);
}