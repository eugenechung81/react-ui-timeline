import React from "react";
import moment from 'moment';
import Chart from 'chart.js/dist/Chart';
import chartZoom from 'chartjs-plugin-zoom/chartjs-plugin-zoom.min'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    chartZoom;
    this.test2();
    //this.test4();
  }

  test4() {
    var ctx = document.getElementById("barChart").getContext("2d");
    var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Videos',
            data: [
              {"x": 1540331689690, "y": 1.0, "test": "test"}],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            pointRadius: 5,
            pointHoverRadius: 20,
            // xAxisID: "dt",
            // yAxisID: "conversion_count",
          },
        ]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            position: 'bottom'
          }],
          yAxes: [{
            ticks: {
              suggestedMax: 2,
              suggestedMin: 0,
              beginAtZero: true,
            }
          }]

        },
        pan: {
          enabled: true,
          mode: 'x',

        },
        zoom: {
          enabled: true,
          drag: true,
          mode: 'x',
          onZoom: function () {
            // not working
            console.log('I was zoomed!!!');
          }
        }
      }
    });


    document.getElementById("barChart").onclick = function (evt) {
      var activePoints = scatterChart.getElementsAtEvent(evt);
      console.log(activePoints);

      if (activePoints.length > 0) {
        //get the internal index of slice in pie chart
        var clickedElementindex = activePoints[0]["_index"];

        //get specific label by index
        var label = scatterChart.data.labels[clickedElementindex];

        //get value by index
        var value = scatterChart.data.datasets[0].data[clickedElementindex];

        /* other stuff that requires slice's label and value */
        console.log(label, value);
      }
    };

  }

  test3() {
    new Chart(document.getElementById("barChart"), {
      type: 'bar',
      data: {
        labels: ["1900", "1950", "1999", "2050"],
        datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408, 547, 675, 2],
          fill: false
        }, {
          label: "Africa",
          type: "scatter",
          borderColor: "#3e95cd",
          data: [133, 221, 783, 2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408, 547, 675, 734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133, 221, 783, 2478]
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Population growth (millions): Europe & Africa'
        },
        legend: {display: false}
      }
    });
  }

  test2() {
    var data = [{"dt": 1540331689690, "conversion_count": 1.0}, {
      "dt": 1540322166425,
      "conversion_count": 1.0
    }, {"dt": 1540315872421, "conversion_count": 1.0}, {
      "dt": 1540312824680,
      "conversion_count": 1.0
    }, {"dt": 1539553885065, "conversion_count": 1.0}, {
      "dt": 1539522897772,
      "conversion_count": 1.0
    }, {"dt": 1539497402421, "conversion_count": 1.0}, {
      "dt": 1539486793620,
      "conversion_count": 1.0
    }, {"dt": 1539486767667, "conversion_count": 1.0}, {
      "dt": 1539492212043,
      "conversion_count": 1.0
    }, {"dt": 1537222246918, "conversion_count": 1.0}, {
      "dt": 1537222766988,
      "conversion_count": 1.0
    }, {"dt": 1537222247888, "conversion_count": 1.0}, {
      "dt": 1537223257022,
      "conversion_count": 1.0
    }, {"dt": 1537225757224, "conversion_count": 1.0}, {
      "dt": 1537222775738,
      "conversion_count": 1.0
    }, {"dt": 1538087618864, "conversion_count": 1.0}, {
      "dt": 1538085884386,
      "conversion_count": 1.0
    }, {"dt": 1538085205467, "conversion_count": 1.0}, {
      "dt": 1538084050717,
      "conversion_count": 1.0
    }, {"dt": 1538083846857, "conversion_count": 1.0}, {
      "dt": 1538083428704,
      "conversion_count": 1.0
    }, {"dt": 1538083253103, "conversion_count": 1.0}, {
      "dt": 1538069033680,
      "conversion_count": 1.0
    }, {"dt": 1538062506253, "conversion_count": 1.0}, {
      "dt": 1538053503819,
      "conversion_count": 1.0
    }, {"dt": 1538009790142, "conversion_count": 1.0}, {
      "dt": 1538006943272,
      "conversion_count": 1.0
    }, {"dt": 1538079388968, "conversion_count": 1.0}, {
      "dt": 1538023377669,
      "conversion_count": 1.0
    }, {"dt": 1538149279720, "conversion_count": 1.0}, {
      "dt": 1538165274449,
      "conversion_count": 1.0
    }, {"dt": 1538165428893, "conversion_count": 1.0}, {
      "dt": 1538168569406,
      "conversion_count": 1.0
    }, {"dt": 1538178444048, "conversion_count": 1.0}, {
      "dt": 1538149598583,
      "conversion_count": 1.0
    }, {"dt": 1538138578256, "conversion_count": 1.0}, {
      "dt": 1538133427637,
      "conversion_count": 1.0
    }, {"dt": 1538101297157, "conversion_count": 1.0}, {
      "dt": 1539278479151,
      "conversion_count": 1.0
    }, {"dt": 1539725704195, "conversion_count": 1.0}, {
      "dt": 1539650276976,
      "conversion_count": 1.0
    }, {"dt": 1539715963360, "conversion_count": 1.0}, {
      "dt": 1539687489547,
      "conversion_count": 1.0
    }, {"dt": 1539687039742, "conversion_count": 1.0}, {
      "dt": 1539683272039,
      "conversion_count": 1.0
    }, {"dt": 1539661384820, "conversion_count": 1.0}, {
      "dt": 1539666293441,
      "conversion_count": 1.0
    }, {"dt": 1539658090837, "conversion_count": 1.0}, {
      "dt": 1539658078257,
      "conversion_count": 1.0
    }, {"dt": 1537541542140, "conversion_count": 1.0}, {
      "dt": 1537538719393,
      "conversion_count": 1.0
    }, {"dt": 1538431278187, "conversion_count": 1.0}, {
      "dt": 1538429768245,
      "conversion_count": 1.0
    }, {"dt": 1538424835501, "conversion_count": 1.0}, {
      "dt": 1538415341324,
      "conversion_count": 1.0
    }, {"dt": 1538410570164, "conversion_count": 1.0}, {
      "dt": 1538404330688,
      "conversion_count": 1.0
    }, {"dt": 1538696690944, "conversion_count": 1.0}, {
      "dt": 1538686690004,
      "conversion_count": 1.0
    }, {"dt": 1538676642350, "conversion_count": 1.0}, {
      "dt": 1537381275326,
      "conversion_count": 1.0
    }, {"dt": 1537379983477, "conversion_count": 1.0}, {
      "dt": 1539743511910,
      "conversion_count": 1.0
    }, {"dt": 1539810533122, "conversion_count": 1.0}, {
      "dt": 1539746506829,
      "conversion_count": 1.0
    }, {"dt": 1539785653402, "conversion_count": 1.0}, {
      "dt": 1539791844059,
      "conversion_count": 1.0
    }, {"dt": 1539800230030, "conversion_count": 1.0}, {
      "dt": 1539805469176,
      "conversion_count": 1.0
    }, {"dt": 1539012402963, "conversion_count": 1.0}, {
      "dt": 1539016567567,
      "conversion_count": 1.0
    }, {"dt": 1539586316203, "conversion_count": 1.0}, {
      "dt": 1539622200010,
      "conversion_count": 1.0
    }, {"dt": 1539623187381, "conversion_count": 1.0}, {
      "dt": 1539624203097,
      "conversion_count": 1.0
    }, {"dt": 1539624233703, "conversion_count": 1.0}, {
      "dt": 1539637169716,
      "conversion_count": 1.0
    }, {"dt": 1539638789107, "conversion_count": 1.0}, {
      "dt": 1539644733629,
      "conversion_count": 1.0
    }, {"dt": 1539644690150, "conversion_count": 1.0}, {
      "dt": 1539643188637,
      "conversion_count": 1.0
    }, {"dt": 1539638968711, "conversion_count": 1.0}, {
      "dt": 1540061159485,
      "conversion_count": 1.0
    }, {"dt": 1540006933844, "conversion_count": 1.0}, {
      "dt": 1538514945621,
      "conversion_count": 1.0
    }, {"dt": 1538516422962, "conversion_count": 1.0}, {
      "dt": 1539899830379,
      "conversion_count": 1.0
    }, {"dt": 1539835741317, "conversion_count": 1.0}, {
      "dt": 1539878199651,
      "conversion_count": 1.0
    }, {"dt": 1539840824435, "conversion_count": 1.0}, {
      "dt": 1537732119772,
      "conversion_count": 1.0
    }, {"dt": 1540142204655, "conversion_count": 1.0}, {
      "dt": 1539363762217,
      "conversion_count": 1.0
    }, {"dt": 1539363482572, "conversion_count": 1.0}, {
      "dt": 1539360446275,
      "conversion_count": 1.0
    }, {"dt": 1539364098574, "conversion_count": 1.0}, {
      "dt": 1539364001675,
      "conversion_count": 1.0
    }, {"dt": 1539377550740, "conversion_count": 1.0}, {
      "dt": 1539364192169,
      "conversion_count": 1.0
    }, {"dt": 1539364267634, "conversion_count": 1.0}, {
      "dt": 1539364273732,
      "conversion_count": 1.0
    }, {"dt": 1539364338918, "conversion_count": 1.0}, {
      "dt": 1539364747741,
      "conversion_count": 1.0
    }, {"dt": 1539373099655, "conversion_count": 1.0}, {
      "dt": 1538598212323,
      "conversion_count": 1.0
    }, {"dt": 1538598112260, "conversion_count": 1.0}, {
      "dt": 1538526966045,
      "conversion_count": 1.0
    }, {"dt": 1538598124853, "conversion_count": 1.0}, {
      "dt": 1538867475493,
      "conversion_count": 1.0
    }, {"dt": 1538797641542, "conversion_count": 1.0}, {
      "dt": 1538867492760,
      "conversion_count": 1.0
    }, {"dt": 1537477718679, "conversion_count": 1.0}, {
      "dt": 1537471003080,
      "conversion_count": 1.0
    }, {"dt": 1537469045307, "conversion_count": 1.0}, {
      "dt": 1537469036875,
      "conversion_count": 1.0
    }, {"dt": 1537438889108, "conversion_count": 1.0}, {
      "dt": 1537902141290,
      "conversion_count": 1.0
    }, {"dt": 1539974709595, "conversion_count": 1.0}, {
      "dt": 1539196181403,
      "conversion_count": 1.0
    }, {"dt": 1539197736370, "conversion_count": 1.0}, {
      "dt": 1539197747439,
      "conversion_count": 1.0
    }, {"dt": 1539197824986, "conversion_count": 1.0}, {
      "dt": 1539197842945,
      "conversion_count": 1.0
    }, {"dt": 1539197880310, "conversion_count": 1.0}, {
      "dt": 1539198649946,
      "conversion_count": 1.0
    }, {"dt": 1539199154087, "conversion_count": 1.0}, {
      "dt": 1539209637705,
      "conversion_count": 1.0
    }, {"dt": 1540213756918, "conversion_count": 1.0}, {
      "dt": 1540179722023,
      "conversion_count": 1.0
    }, {"dt": 1540179682203, "conversion_count": 1.0}, {
      "dt": 1540229942638,
      "conversion_count": 1.0
    }, {"dt": 1540233684148, "conversion_count": 1.0}, {
      "dt": 1537286655489,
      "conversion_count": 1.0
    }, {"dt": 1537298299509, "conversion_count": 1.0}, {
      "dt": 1537297180376,
      "conversion_count": 1.0
    }, {"dt": 1537296552220, "conversion_count": 1.0}, {
      "dt": 1537292244526,
      "conversion_count": 1.0
    }, {"dt": 1537287835505, "conversion_count": 1.0}, {
      "dt": 1539118398077,
      "conversion_count": 1.0
    }, {"dt": 1539110189419, "conversion_count": 1.0}, {
      "dt": 1537805220570,
      "conversion_count": 1.0
    }, {"dt": 1538241142157, "conversion_count": 1.0}];
    // var data = [{
    //         x: 1537142400000,
    //         y: 6
    //       }, {
    //         x: 1537228800000,
    //         y: 10
    //       }];

    var data2 = [{"dt": 1539486420000, "clicks": 1.0}, {"dt": 1539552900000, "clicks": 1.0}, {
      "dt": 1539460620000,
      "clicks": 1.0
    }, {"dt": 1539474840000, "clicks": 1.0}, {"dt": 1539471360000, "clicks": 1.0}, {
      "dt": 1539466140000,
      "clicks": 1.0
    }, {"dt": 1539405060000, "clicks": 1.0}, {"dt": 1538083320000, "clicks": 1.0}, {
      "dt": 1538083200000,
      "clicks": 1.0
    }, {"dt": 1538083080000, "clicks": 1.0}, {"dt": 1538079360000, "clicks": 1.0}, {
      "dt": 1538078940000,
      "clicks": 1.0
    }, {"dt": 1538083560000, "clicks": 2.0}, {"dt": 1538083620000, "clicks": 1.0}, {
      "dt": 1538083800000,
      "clicks": 1.0
    }, {"dt": 1538083920000, "clicks": 1.0}, {"dt": 1538084820000, "clicks": 3.0}, {
      "dt": 1538084040000,
      "clicks": 1.0
    }, {"dt": 1538087160000, "clicks": 1.0}, {"dt": 1538085060000, "clicks": 1.0}, {
      "dt": 1538084940000,
      "clicks": 1.0
    }, {"dt": 1538167800000, "clicks": 1.0}, {"dt": 1538169180000, "clicks": 1.0}, {
      "dt": 1538170860000,
      "clicks": 1.0
    }, {"dt": 1538172420000, "clicks": 1.0}, {"dt": 1538173380000, "clicks": 1.0}, {
      "dt": 1538158920000,
      "clicks": 1.0
    }, {"dt": 1538164980000, "clicks": 1.0}, {"dt": 1538147460000, "clicks": 1.0}, {
      "dt": 1538151420000,
      "clicks": 1.0
    }, {"dt": 1538158860000, "clicks": 1.0}, {"dt": 1538162100000, "clicks": 1.0}, {
      "dt": 1538163540000,
      "clicks": 1.0
    }, {"dt": 1538164080000, "clicks": 1.0}, {"dt": 1538165280000, "clicks": 2.0}, {
      "dt": 1538174580000,
      "clicks": 1.0
    }, {"dt": 1538175720000, "clicks": 1.0}, {"dt": 1538176500000, "clicks": 1.0}, {
      "dt": 1538176800000,
      "clicks": 1.0
    }, {"dt": 1538178180000, "clicks": 1.0}, {"dt": 1538093580000, "clicks": 1.0}, {
      "dt": 1538178420000,
      "clicks": 1.0
    }, {"dt": 1538178660000, "clicks": 1.0}, {"dt": 1538178240000, "clicks": 1.0}, {
      "dt": 1539267180000,
      "clicks": 1.0
    }, {"dt": 1539290520000, "clicks": 2.0}, {"dt": 1539276060000, "clicks": 1.0}, {
      "dt": 1539276240000,
      "clicks": 1.0
    }, {"dt": 1539276840000, "clicks": 1.0}, {"dt": 1539278040000, "clicks": 1.0}, {
      "dt": 1539281460000,
      "clicks": 1.0
    }, {"dt": 1539282180000, "clicks": 1.0}, {"dt": 1539290580000, "clicks": 5.0}, {
      "dt": 1539273840000,
      "clicks": 2.0
    }, {"dt": 1539686100000, "clicks": 1.0}, {"dt": 1539686700000, "clicks": 1.0}, {
      "dt": 1539660420000,
      "clicks": 1.0
    }, {"dt": 1539661320000, "clicks": 1.0}, {"dt": 1539686820000, "clicks": 1.0}, {
      "dt": 1539659640000,
      "clicks": 1.0
    }, {"dt": 1539686040000, "clicks": 1.0}, {"dt": 1539675540000, "clicks": 1.0}, {
      "dt": 1539690060000,
      "clicks": 1.0
    }, {"dt": 1539657900000, "clicks": 1.0}, {"dt": 1539698880000, "clicks": 1.0}, {
      "dt": 1539667560000,
      "clicks": 1.0
    }, {"dt": 1539698940000, "clicks": 1.0}, {"dt": 1539728940000, "clicks": 1.0}, {
      "dt": 1539653280000,
      "clicks": 1.0
    }, {"dt": 1539654540000, "clicks": 1.0}, {"dt": 1539683040000, "clicks": 2.0}, {
      "dt": 1539694680000,
      "clicks": 1.0
    }, {"dt": 1539650100000, "clicks": 1.0}, {"dt": 1538424540000, "clicks": 1.0}, {
      "dt": 1538424480000,
      "clicks": 2.0
    }, {"dt": 1538423040000, "clicks": 1.0}, {"dt": 1538420460000, "clicks": 1.0}, {
      "dt": 1538418720000,
      "clicks": 2.0
    }, {"dt": 1538416620000, "clicks": 1.0}, {"dt": 1538412840000, "clicks": 1.0}, {
      "dt": 1538427060000,
      "clicks": 1.0
    }, {"dt": 1538415180000, "clicks": 1.0}, {"dt": 1538427360000, "clicks": 1.0}, {
      "dt": 1538429640000,
      "clicks": 1.0
    }, {"dt": 1538428260000, "clicks": 1.0}, {"dt": 1538435700000, "clicks": 1.0}, {
      "dt": 1538433420000,
      "clicks": 1.0
    }, {"dt": 1538432460000, "clicks": 1.0}, {"dt": 1538431980000, "clicks": 1.0}, {
      "dt": 1538431020000,
      "clicks": 1.0
    }, {"dt": 1538427720000, "clicks": 1.0}, {"dt": 1538642040000, "clicks": 1.0}, {
      "dt": 1538685540000,
      "clicks": 1.0
    }, {"dt": 1538612940000, "clicks": 1.0}, {"dt": 1538676480000, "clicks": 1.0}, {
      "dt": 1538672700000,
      "clicks": 1.0
    }, {"dt": 1538665740000, "clicks": 1.0}, {"dt": 1538672640000, "clicks": 1.0}, {
      "dt": 1539795720000,
      "clicks": 1.0
    }, {"dt": 1539798240000, "clicks": 1.0}, {"dt": 1539805320000, "clicks": 1.0}, {
      "dt": 1539799980000,
      "clicks": 1.0
    }, {"dt": 1539791640000, "clicks": 1.0}, {"dt": 1539793140000, "clicks": 1.0}, {
      "dt": 1539799920000,
      "clicks": 1.0
    }, {"dt": 1539019380000, "clicks": 1.0}, {"dt": 1539018900000, "clicks": 1.0}, {
      "dt": 1539016380000,
      "clicks": 1.0
    }, {"dt": 1539003420000, "clicks": 1.0}, {"dt": 1539026820000, "clicks": 1.0}, {
      "dt": 1539030540000,
      "clicks": 1.0
    }, {"dt": 1539035580000, "clicks": 1.0}, {"dt": 1539643800000, "clicks": 1.0}, {
      "dt": 1539643440000,
      "clicks": 1.0
    }, {"dt": 1539642600000, "clicks": 2.0}, {"dt": 1539642540000, "clicks": 4.0}, {
      "dt": 1539642480000,
      "clicks": 1.0
    }, {"dt": 1539641940000, "clicks": 3.0}, {"dt": 1539646140000, "clicks": 1.0}, {
      "dt": 1539641160000,
      "clicks": 1.0
    }, {"dt": 1539641100000, "clicks": 1.0}, {"dt": 1539638940000, "clicks": 1.0}, {
      "dt": 1539617820000,
      "clicks": 1.0
    }, {"dt": 1539619320000, "clicks": 1.0}, {"dt": 1539628440000, "clicks": 1.0}, {
      "dt": 1539638820000,
      "clicks": 1.0
    }, {"dt": 1539638640000, "clicks": 5.0}, {"dt": 1539638580000, "clicks": 11.0}, {
      "dt": 1539638520000,
      "clicks": 1.0
    }, {"dt": 1539638460000, "clicks": 1.0}, {"dt": 1539637740000, "clicks": 1.0}, {
      "dt": 1539629340000,
      "clicks": 1.0
    }, {"dt": 1539633540000, "clicks": 2.0}, {"dt": 1540060680000, "clicks": 1.0}, {
      "dt": 1540047360000,
      "clicks": 1.0
    }, {"dt": 1539997380000, "clicks": 1.0}, {"dt": 1538514840000, "clicks": 3.0}, {
      "dt": 1538515080000,
      "clicks": 1.0
    }, {"dt": 1538492340000, "clicks": 1.0}, {"dt": 1538516160000, "clicks": 2.0}, {
      "dt": 1538758740000,
      "clicks": 1.0
    }, {"dt": 1538776200000, "clicks": 2.0}, {"dt": 1538776320000, "clicks": 1.0}, {
      "dt": 1538753580000,
      "clicks": 1.0
    }, {"dt": 1538761980000, "clicks": 1.0}, {"dt": 1539840660000, "clicks": 1.0}, {
      "dt": 1539894300000,
      "clicks": 1.0
    }, {"dt": 1539835620000, "clicks": 1.0}, {"dt": 1539377580000, "clicks": 1.0}, {
      "dt": 1539355680000,
      "clicks": 1.0
    }, {"dt": 1539360240000, "clicks": 1.0}, {"dt": 1539363540000, "clicks": 1.0}, {
      "dt": 1539363780000,
      "clicks": 5.0
    }, {"dt": 1539364080000, "clicks": 8.0}, {"dt": 1539364140000, "clicks": 1.0}, {
      "dt": 1539364260000,
      "clicks": 1.0
    }, {"dt": 1539364560000, "clicks": 1.0}, {"dt": 1539371460000, "clicks": 1.0}, {
      "dt": 1539372840000,
      "clicks": 5.0
    }, {"dt": 1539372900000, "clicks": 2.0}, {"dt": 1539374280000, "clicks": 1.0}, {
      "dt": 1539364200000,
      "clicks": 1.0
    }, {"dt": 1538598240000, "clicks": 1.0}, {"dt": 1538526180000, "clicks": 1.0}, {
      "dt": 1538585040000,
      "clicks": 1.0
    }, {"dt": 1538588580000, "clicks": 1.0}, {"dt": 1538592840000, "clicks": 1.0}, {
      "dt": 1538595480000,
      "clicks": 3.0
    }, {"dt": 1538595540000, "clicks": 1.0}, {"dt": 1538597820000, "clicks": 1.0}, {
      "dt": 1538598000000,
      "clicks": 2.0
    }, {"dt": 1538598120000, "clicks": 1.0}, {"dt": 1538789100000, "clicks": 1.0}, {
      "dt": 1538789160000,
      "clicks": 1.0
    }, {"dt": 1538867340000, "clicks": 1.0}, {"dt": 1539979200000, "clicks": 1.0}, {
      "dt": 1539978120000,
      "clicks": 2.0
    }, {"dt": 1539961320000, "clicks": 1.0}, {"dt": 1539961380000, "clicks": 1.0}, {
      "dt": 1539974880000,
      "clicks": 1.0
    }, {"dt": 1539974820000, "clicks": 1.0}, {"dt": 1539965520000, "clicks": 1.0}, {
      "dt": 1539197640000,
      "clicks": 2.0
    }, {"dt": 1539197700000, "clicks": 2.0}, {"dt": 1539197820000, "clicks": 1.0}, {
      "dt": 1539198240000,
      "clicks": 1.0
    }, {"dt": 1539199980000, "clicks": 1.0}, {"dt": 1539197760000, "clicks": 1.0}, {
      "dt": 1539195480000,
      "clicks": 1.0
    }, {"dt": 1539206640000, "clicks": 1.0}, {"dt": 1539195060000, "clicks": 2.0}, {
      "dt": 1539195540000,
      "clicks": 1.0
    }, {"dt": 1539195600000, "clicks": 1.0}, {"dt": 1539196020000, "clicks": 2.0}, {
      "dt": 1539197580000,
      "clicks": 6.0
    }, {"dt": 1539198300000, "clicks": 1.0}, {"dt": 1539198480000, "clicks": 1.0}, {
      "dt": 1539198540000,
      "clicks": 1.0
    }, {"dt": 1539198900000, "clicks": 3.0}, {"dt": 1539199140000, "clicks": 1.0}, {
      "dt": 1539188580000,
      "clicks": 1.0
    }, {"dt": 1539145860000, "clicks": 1.0}, {"dt": 1540229400000, "clicks": 1.0}, {
      "dt": 1540236840000,
      "clicks": 1.0
    }, {"dt": 1540243020000, "clicks": 1.0}, {"dt": 1539099180000, "clicks": 1.0}, {
      "dt": 1539118560000,
      "clicks": 1.0
    }, {"dt": 1539118260000, "clicks": 10.0}, {"dt": 1539118200000, "clicks": 8.0}, {
      "dt": 1539114900000,
      "clicks": 1.0
    }, {"dt": 1539109980000, "clicks": 1.0}, {"dt": 1539110040000, "clicks": 1.0}, {
      "dt": 1539102360000,
      "clicks": 1.0
    }, {"dt": 1539106080000, "clicks": 1.0}, {"dt": 1538184420000, "clicks": 1.0}, {
      "dt": 1538183040000,
      "clicks": 1.0
    }, {"dt": 1538231040000, "clicks": 1.0}, {"dt": 1538262300000, "clicks": 2.0}];

    var data3 = [{"dt": 1540331689690, "conversion_count": 1.0}, {
      "dt": 1540322166425,
      "conversion_count": 1.0
    }, {"dt": 1540315872421, "conversion_count": 1.0}, {
      "dt": 1540312824680,
      "conversion_count": 1.0
    }, {"dt": 1538085205467, "conversion_count": 1.0}, {
      "dt": 1538084050717,
      "conversion_count": 1.0
    }, {"dt": 1538083846857, "conversion_count": 1.0}, {
      "dt": 1538083428704,
      "conversion_count": 1.0
    }, {"dt": 1538083253103, "conversion_count": 1.0}, {
      "dt": 1538069033680,
      "conversion_count": 1.0
    }, {"dt": 1538062506253, "conversion_count": 1.0}, {
      "dt": 1538079388968,
      "conversion_count": 1.0
    }, {"dt": 1538149279720, "conversion_count": 1.0}, {
      "dt": 1538165274449,
      "conversion_count": 1.0
    }, {"dt": 1538165428893, "conversion_count": 1.0}, {
      "dt": 1538168569406,
      "conversion_count": 1.0
    }, {"dt": 1538178444048, "conversion_count": 1.0}, {
      "dt": 1538149598583,
      "conversion_count": 1.0
    }, {"dt": 1538431278187, "conversion_count": 1.0}, {
      "dt": 1538429768245,
      "conversion_count": 1.0
    }, {"dt": 1538424835501, "conversion_count": 1.0}, {
      "dt": 1538415341324,
      "conversion_count": 1.0
    }, {"dt": 1538410570164, "conversion_count": 1.0}, {
      "dt": 1538514945621,
      "conversion_count": 1.0
    }, {"dt": 1538516422962, "conversion_count": 1.0}, {
      "dt": 1538598212323,
      "conversion_count": 1.0
    }, {"dt": 1538598112260, "conversion_count": 1.0}, {
      "dt": 1538526966045,
      "conversion_count": 1.0
    }, {"dt": 1538598124853, "conversion_count": 1.0}, {
      "dt": 1537902141290,
      "conversion_count": 1.0
    }, {"dt": 1540229942638, "conversion_count": 1.0}, {
      "dt": 1540233684148,
      "conversion_count": 1.0
    }, {"dt": 1537805220570, "conversion_count": 1.0}];


    var ctx = document.getElementById("barChart").getContext("2d");
    var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Videos',
            data: data3.map(d => {
              return {"x": d.dt, "y": 1}
            }),
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            pointRadius: 3,
            pointHoverRadius: 20,

          },
          {
            label: 'Conversions',
            backgroundColor: 'rgb(255, 99, 132)',
            data: data.map(d => {
              return {"x": d.dt, "y": d.conversion_count}
            }),
            pointRadius: 5,
            pointHoverRadius: 20,
          },
          {
            label: 'Clicks',
            data: data2.map(d => {
              return {"x": d.dt, "y": 1}
            }),
            fill: false,
            // backgroundColor: 'rgb(153, 102, 255)',
            borderColor: 'rgb(201, 203, 207)',
            backgroundColor: 'transparent',
            pointRadius: 10,
            pointHoverRadius: 20,
          },
        ]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            position: 'bottom'
          }],
          yAxes: [{
            ticks: {
              suggestedMax: 2,
              suggestedMin: 0,
              beginAtZero: true,
            }
          }]

        },
        pan: {
          enabled: true,
          mode: 'x',

        },
        zoom: {
          enabled: true,
          drag: true,
          mode: 'x',
          onZoom: function () {
            // not working
            console.log('I was zoomed!!!');
          }
        }
      }
    });

    document.getElementById("barChart").onclick = function (evt) {
      var activePoints = scatterChart.getElementsAtEvent(evt);
      console.log(activePoints);

      if (activePoints.length > 0) {
        //get the internal index of slice in pie chart
        var clickedElementindex = activePoints[0]["_index"];

        //get specific label by index
        var label = scatterChart.data.labels[clickedElementindex];

        //get value by index
        var value = scatterChart.data.datasets[0].data[clickedElementindex];

        /* other stuff that requires slice's label and value */
        console.log(label, value);
      }
    };
    this.chart = scatterChart;
  }

  test1() {

    var ctx = document.getElementById("barChart").getContext("2d");

    window.chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
    };

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomBar(date, lastClose) {
      var open = randomNumber(lastClose * 0.95, lastClose * 1.05);
      var close = randomNumber(open * 0.95, open * 1.05);
      return {
        t: date.valueOf(),
        y: close
      };
    }

    var dateFormat = 'MMMM DD YYYY';
    var date = moment('April 01 2017', dateFormat);
    var data = [randomBar(date, 30)];
    var labels = [date];
    while (data.length < 60) {
      date = date.clone().add(1, 'd');
      if (date.isoWeekday() <= 5) {
        data.push(randomBar(date, data[data.length - 1].y));
        labels.push(date);
      }
    }

    var ctx = document.getElementById('barChart').getContext('2d');
    ctx.canvas.width = 1000;
    ctx.canvas.height = 300;

    var color = Chart.helpers.color;
    var cfg = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'CHRT - Chart.js Corporation',
          backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
          borderColor: window.chartColors.red,
          data: data,
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'series',
            ticks: {
              source: 'labels'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Closing price ($)'
            }
          }]
        }
      }
    };
    var chart = new Chart(ctx, cfg);
  }

  render() {
    return (
      <div>

        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <h5>Bar Chart Example</h5>
          </div>
          <div className="ibox-content">
            <div>
              <canvas
                id="barChart"
                height="140"
              ></canvas>
            </div>
            <div className="text-center">
              <button
                onClick={() => {
                  this.chart.resetZoom();
                }}
              >Reset
              </button>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
