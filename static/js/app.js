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

    //Plot Bar

    // Plot Bubble Graph 

    // Fill Data in Demographics box
}


function startup() {
    console.log('startup');
    //Populate the Dropdown options

    //Call Options Changes with first subject
    optionChanged("AAA");
}
startup();