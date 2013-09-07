function go() {
	var descriptionselector = $("#description");
	var priceselector = $("#money-amount");
    	var description = descriptionselector.val();
	var price = priceselector.val();
	if (description !== "" && price !== ""){
		var newtablerow = "<tr> <td align=\"left\"><p>" + description + ": "+ price + "</p>" + "</td></tr>";
		var tableselector = $(".utilities tr:last");
		tableselector.after(newtablerow);
		priceselector.val("");
		descriptionselector.val("");
	}	
}


