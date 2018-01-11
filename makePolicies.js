var json2csv = require('json2csv');
var fs = require('fs');
var myFields = ['Name', 'Properties.DisplayName', 'Properties.Description', 'Properties.Parameters', 'Properties.PolicyRule', 'Properties.Metadata'];
var content = fs.readFileSync("PoliciesPROD.json");
var myJson = JSON.parse(content);
var csv = json2csv({ data: myJson, fields: myFields });

fs.writeFile('PoliciesPROD.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
});