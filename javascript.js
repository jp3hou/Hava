$.ajax({
	url : "http://twitter.com/statuses/user_timeline/userid.json?callback=?",
	dataType : "json",
	timeout:15000,
	success : function(data)
	{
		$("#data").html("Data successfully obtained! <br />");
for (i=0, i<data.length; i++)
	{
	$("#data").append("<p>" + data[i].text) + "</p>";
	$("#data").append("<p>" + data[i].created_at + "</p>");
	},
	
	error : function()
	{
		alert("Failure!");
	},

});
