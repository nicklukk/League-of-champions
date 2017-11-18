var data = $('#national').attr('data-nat');
console.log(data);
data = data.replace("<QuerySet [", "");
data = data.replace("]>", "");
data = data.replace(/\(/g, "");
data = data.replace(/\)/g, "");
data = data.replace(/\'/g, "");
data = data.replace(/ /g, "");
var arr = data.split(",");
var result = [];
for (var i = 0; i < arr.length; i += 2)
    result.push({category: arr[i], number: parseInt(arr[i + 1])})

console.log(result);

var dataSource = result;

$("#chartContainer").dxPieChart({
    dataSource: dataSource,
    series: {
        type: "pie",
        argumentField: "category",
        valueField: "number",
        innerRadius: 0.5,
        hoverMode: "none"
    },
    legend: {
        verticalAlignment: "bottom",
        horizontalAlignment: "center",
        equalColumnWidth: true
    },
    tooltip: {
        enabled: true,
        customizeText: function () {
            return this.argumentText + "<br/>"
                + this.percentText + " (" + this.valueText + ")";
        }
    }
});