var monthnumber;
function go() {
	var waterselector = $("#water");
	var gasselector = $("#gas");
	var electricityselector = $("#electricity");
	var internetselector = $("#internet");
	var monthselector = $(".months");
	var yearselector = $(".year");

	var monthn = monthselector.val();
	var year = yearselector.val();
    	var waterprice = waterselector.val();
	var gasprice = gasselector.val();
    	var electricityprice = electricityselector.val();
	var internetprice = internetselector.val();
	if (waterprice !== "" && gasprice !== "" && electricityprice !== "" && internetprice !== ""){
		try{
			var totalprice = Number(waterprice) + Number(gasprice) + Number(electricityprice) + Number(internetprice);
		}
		catch(err){
			alert("Input invalid");		
		}
		var newtablerow = "<tr> <td align=\"left\"><p> Total: $" + totalprice + "</p>" + "</td></tr>";
		var tableselector = $(".utilities tr:last");
		tableselector.after(newtablerow);
		waterselector.val("");
		gasselector.val("");
		electricityselector.val("");
		internetselector.val("");
		}
		
}	



