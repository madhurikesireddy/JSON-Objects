var data1 = [

	{
		"name" :  "vinnu",
		"phone":  99394223423,
		"Address": "Bange",
		"RelId": 9
	},
	{
		"name" :  "madhu",
		"phone":  934534534,
		"sal": 090909,
		"Address": "Ther",
		"RelId": 7
	},
	{
		"name" :  "potti",
		"phone":  93242342,
		"Address": "rr",
		"RelId": 0
	}
]


var myData = {
		"name" :  "",
		"phone":  '',
		"Address": "",
		"RelId": ''
	}

var AddRec = function(){
	
	var userName = document.getElementById('userName').value;
	var phone = document.getElementById('phone').value;
	var Address = document.getElementById('Address').value;
	var RolId = document.getElementById('rolId').value;
	
	myData.name = userName;
	myData.phone = phone;
	myData.Address = Address;
	myData.RelId = RolId;
	
	data1.push(myData);
	datapop();
	// alert(userName +" /// "+ phone +" /// "+ Address +" /// "+RolId);
	
}

function datapop(){
var TableData="<tr><th>Name</th><th>Phone</th><th>Address</th><th>Rel ID</th></tr>"; 
var rowData = "";
for(var i=0; i < data1.length; i++ ){
	
	
	rowData = rowData +	"<tr>"
			+"<td>"+data1[i].name+"</td>"
			+"<td>"+data1[i].phone+"</td>"
			+"<td>"+data1[i].Address+"</td>"
			+"<td>"+data1[i].RelId+"</td>"
		+"</tr>";
	
}

document.getElementById('tables').innerHTML = TableData + rowData;
};
datapop();