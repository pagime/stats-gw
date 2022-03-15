import {
    scatterDatetimeChild,
    dataSeries,
    generateDayWiseTimeSeries,
    randomizeArray,
    sparklineData,
} from '@/data/apexDataSeries'

export const dashboardOne = {
    series: [
        {
            name: 'Pierre Fabre',
            data: [12, 20, 23, 23, 39, 25, 19, 4, 13, 19, 23, 25],
        },
        {
            name: 'Airbus Operations SAS',
            data: [14, 28, 16, 12, 15, 10, 15, 10, 13, 13, 18, 6],
        },
        {
            name: 'Nexter',
            data: [1, 0, 4, 2, 0, 3, 8, 3, 3, 3, 2, 1],
        },
    ],
    chartOptions: {
        colors: ['rgb(39,53,130)', '#8ac0ca', "#ae3fd2"],
        chart: {
            type: 'bar',

            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [
                'Janvier',
                'Fevrier',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Août',
                'Septembre',
                'Octobre',
                'Novembre',
                'Décembre',
            ],
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + ' demandes'
                },
            },
        },
    },
}

// export const dashboardOne = {
//   series: [
//     {
//       name: 'Net Profit',
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//     },
//     {
//       name: 'Revenue',
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//     },
//   ],
//   chartOptions: {
//     colors: ['rgba(196, 181, 253, 1)', '#8b5cf6'],
//   chart: {
//     type: 'bar',
//     height: 350,
//     toolbar: {
//       show: false,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: '55%',
//       borderRadius: 80,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ['transparent'],
//   },
//   xaxis: {
//     categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
//   },
//   fill: {
//     opacity: 1,
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return '$ ' + val + ' thousands';
//       },
//     },
//   },
//   }

// }

export const dashboardTwo = {
    series: [43,30,6,5,4,4,4,2,2,2,1,1],
    chartOptions: {
        labels: ['Pierre Fabre','Airbus Operations SAS', 'Airbus Defense & Space', 'Nexter','Meteorage', 'Aerocampus', 'Bard', 'Thuasne', 'Mauna Kea Technologies', 'Horiba', 'Vygon', 'Hill-Rom'],
        fill: {
            colors: ['#636aae', '#72c8da', '#edc976', '#f19107', '#A78BFA', '#75DBCD', '#C9DBBA', '#DCDBA8', '#F5CDA7', '#FAA381', '#7F7CAF', '#9FB798'],
        },
        chart: {
            height: 400,
            type: 'pie',
        },
        dataLabels: {
            enabled: false,
            position: 'top',
        },
        legend: {
            show: true,

        }
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         // width: 200
        //       },
        //       legend: {
        //         show: false,
        //       },
        //     },
        //   },
        // ],
    },
}

export const splineAreaWidgetTwo = {
    series: [
        {
            name: 'series2',
            data: [11, 90, 45, 32, 34, 52, 41],
        },
    ],

    chartOptions: {
        chart: {
            width: '90%',
            height: 100,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        legend: {
            show: false,
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
            ],
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
        colors: ['#273582'],
        stroke: {
            curve: 'smooth',
            width: 1,
        },
    },
}
export const splineAreaWidgetThree = {
    series: [
        {
            name: 'series2',
            data: [41, 52, 34, 32, 45, 90, 11],
        },
    ],

    chartOptions: {
        chart: {
            width: '100%',
            height: 100,
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        legend: {
            show: false,
        },

        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00',
                '2018-09-19T01:30:00',
                '2018-09-19T02:30:00',
                '2018-09-19T03:30:00',
                '2018-09-19T04:30:00',
                '2018-09-19T05:30:00',
                '2018-09-19T06:30:00',
            ],
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: true,
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
        colors: ['#f59e0b'],
        stroke: {
            curve: 'smooth',
            width: 1,
        },
    },
}
