// Use the D3 library to read in samples.json
constURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
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
        let samples = data["samples"];
        let matchSample = samples.find(s => s["id"] == subjectID)[0];
        buildBarChart(matchSample);
        buildMetaData(subjectID);
    });
}

function buildMetaData(sampleID) {
    d3.json(URL).then(function (data){
        let metadata = data.metadata;
        let result = metasat.filter(sampleObj => sampleObj.id == sampleID)[0];

        let panel = d3.select("#sampke-metadat");

        panel.html("")
        for (let key in result){
            panel.append("h6").text(`${key}:${result[key]}`);
        }
    })
}

function buildBarChart(subjectSample) {
    d3.json(URL).then(function (data){
        let samples = data.samples;
        let result = samples.filter(sampleObj => sampleObj.id = sample)[0];
        let out_ids = result.out_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values
        
        //Bubble Chart
        let bubbleLayout = {
            title: "Test Bubble"
        };

        let bubbleData = [
            {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                }
            }
        ];

        Plotly.newPlot("bubbles", bubbleData, bubbleData);


        //Bar Chart
        let ytics = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse()
        let barData = [
            {
                y: ytics,
                x: sample_values.slice(0,10),
                text: otu_labels.slice(0,10),
                type: "bar",
                orientation: "h"
            }
        ];

        let barLayout = {
            title: "Top 10 Bacterias",
            margin: {t: 30, l:150}
        };

        Plotly.newPlot("bar", barData, barLayout);
    
    });
}
function init() {
    // Get a reference to the selector element
    let selector = d3.select("#selDataset");

    //Populate the Dropdown options 
    d3.json(d3.json(URL).then(function (data){
        let sampleName = data.names;

        //build selector list
        for (i =0; i < sampleName.length; i++){
            selector
                .append("option")
                .text(sampleName[i])
                .property("value",sampleName[i]);
        };

        let firstSample = sampleName[0];
        buildCharts(firstSample);
        buildMetaData(firstSample);

    }));
}

//Call Options Changes with first subject
function optionChanged(newSample) {
    buildCharts(newSample);
    buildMetaData(newSample);
}
init(); 




const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function optionChanged(subjectID) {
    d3.json(URL).then(function (data) {
        let samples = data.samples;
        let matchSample = samples.find(s => s.id == subjectID);
        buildBarChart(matchSample);
        buildMetaData(subjectID);
    });
}

function buildMetaData(sampleID) {
    d3.json(URL).then(function (data) {
        let metadata = data.metadata;
        let result = metadata.find(sampleObj => sampleObj.id == sampleID);

        let panel = d3.select("#sample-metadata");

        panel.html("");
        for (let key in result) {
            panel.append("h6").text(`${key}: ${result[key]}`);
        }
    });
}

function buildBarChart(subjectSample) {
    let otu_ids = subjectSample.otu_ids;
    let otu_labels = subjectSample.otu_labels;
    let sample_values = subjectSample.sample_values;

    // Bubble Chart
    let bubbleLayout = {
        title: "Test Bubble"
    };

    let bubbleData = [
        {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
            }
        }
    ];

    Plotly.newPlot("bubbles", bubbleData, bubbleLayout);

    // Bar Chart
    let ytics = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
    let barData = [
        {
            y: ytics,
            x: sample_values.slice(0, 10),
            text: otu_labels.slice(0, 10),
            type: "bar",
            orientation: "h"
        }
    ];

    let barLayout = {
        title: "Top 10 Bacteria",
        margin: { t: 30, l: 150 }
    };

    Plotly.newPlot("bar", barData, barLayout);
}

function init() {
    let selector = d3.select("#selDataset");

    d3.json(URL).then(function (data) {
        let sampleNames = data.names;

        for (let i = 0; i < sampleNames.length; i++) {
            selector
                .append("option")
                .text(sampleNames[i])
                .property("value", sampleNames[i]);
        }

        let firstSample = sampleNames[0];
        buildBarChart(firstSample);
        buildMetaData(firstSample);
    });
}

function optionChanged(newSample) {
    buildBarChart(newSample);
    buildMetaData(newSample);
}

init();