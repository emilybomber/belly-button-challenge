// Use the D3 library to read in samples.json
const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
//df = pd.read_json(URL)
//d3.json(URL).then(console.log);
//console.log(promise);
//d3.json(URL).then(function (data){
    //console.log(data);
//});
//console.log(data)

function optionChanged(subjectID) {
    console.log(`optionChanged, ${subjectID}`);
    //Retrive the correct infomation from the "samples" list 
    d3.json(URL).then(function (data){
        // console.log(data);
        console.log(subjectID);
        let samples = data["samples"];
        let matchSample = samples.filter( s => s["id"] == subjectID)[0];
        console.log(matchSample);
        buildBarChart(matchSample);
    });
}

function buildBarChart(subjectSample) {
    d3.json(URL).then(function (data){
        let samples = data.samples
    console.log(subjectSample)
    });
}
function init() {
    let selector = d3.select("#selDataset");
    //Populate the Dropdown options 
    d3.json(d3.json(URL).then(function (data){
        let sampleName = data.names;

    }));
}
function startup() {
    console.log('startup');
    //Call Options Changes with first subject
    optionChanged("940");
}
startup(); 