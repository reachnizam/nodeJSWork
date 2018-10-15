var csv = require('csv'); 
var obj = csv(); 
function MyCSV(policyID, statecode, county) {
    this.policyID = policyID;
    this.statecode = statecode;
    this.county = county;
}; 
var MyData = []; 
obj.from.path('./FL_insurance_sample.csv').to.array(function (data) {
    for (var index = 0; index < data.length; index++) {
        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2]));
    }
    console.log(MyData);
});