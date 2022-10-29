`use strict`
const studentInfo = 
{
    'registerNumber' : '913121104073',
    'degree' : 'B E',
    'branch' : "Computer Science Engineering",
    'semester' :'2',
}
var subjects = 6;
var markInfo = [];
function createmarkInfo()
{
    for(let i = 0;i<subjects;i++)
    {
        markInfo.push(['21CSE101','A+','PASS']);
    }
}
function addStudentInfo()
{
    var regData = $('#regData');
    var degreeData = $('#degData');
    var branchData = $('#branchData');
    var semData = $('#semData');
    regData.text(studentInfo['registerNumber']);
    degreeData.text(studentInfo['degree']);
    branchData.text(studentInfo['branch']);
    semData.text(studentInfo['semester']);
}
function addMarkInfo()
{
    var tbody = $('tbody');
    tbody.html('<tbody></tbody>');
    for(let tempNos = 0;tempNos < subjects;tempNos++)
    {
        var trData = $('<tr></tr>');
        var thReg = $('<th></th>');
        var tdGrade = $('<td></td>');
        var tdResult = $('<td></td>');
        thReg.text(markInfo[tempNos][0]);
        tdGrade.text(markInfo[tempNos][1]);
        tdResult.text(markInfo[tempNos][2]);
        trData.append(thReg);
        trData.append(tdGrade);
        trData.append(tdResult);
        console.log(trData.text());
        tbody.append(trData);
        console.log($('tbody > tr').eq(tempNos).text());
    }
}
function displayTable()
{
    var tbody = $('tbody');
    for(let i = 0;i<subjects;i++)
    {
        var trData = $('tbody ').eq(i);
        console.log(trData.text());
    }
}
createmarkInfo();
addStudentInfo();
addMarkInfo();


