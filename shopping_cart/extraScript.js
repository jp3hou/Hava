$(document).ready(function() {
	
	var Arrays=new Array();
	
	$('#wrap li').click(function(){
		
		var thisID = $(this).attr('id');
		var itemname  = $(this).find('div .name').html();
		var itemprice = $(this).find('div .price').html();
			
		if(include(Arrays,thisID))
		{
			var price = $('#each-'+thisID).children(".shopp-price").find('em').html();
			
			
			$('#each-'+thisID).children(".shopp-price").find('em').html(total);
	
			
			var prev_charges = $('.cart-total span').html();
			prev_charges = parseInt(prev_charges)-parseInt(price);
			
			prev_charges = parseInt(prev_charges)+parseInt(total);
			$('.cart-total span').html(prev_charges);
			
			$('#total-hidden-charges').val(prev_charges);
		}
		else
		{
			Arrays.push(thisID);
			
			var prev_charges = $('.cart-total span').html();
			prev_charges = parseInt(prev_charges)+parseInt(itemprice);
			
			$('.cart-total span').html(prev_charges);
			$('#total-hidden-charges').val(prev_charges);
			
			$('#left_bar .cart-info').append('<div class="shopp" id="each-'+thisID+'"><div  class="label">'+itemname+'</div><div class="shopp-price"> $<em>'+itemprice+'</em></div><img src="remove.png" class="remove" /><br class="all" /></div>');
			
		}
		
		setTimeout('angle()',200);
	});	
	
	
	$('.remove').livequery('click', function() {
		
		var deduct = $(this).parent().children(".shopp-price").find('em').html();
		var prev_charges = $('.cart-total span').html();
		
		var thisID = $(this).parent().attr('id').replace('each-','');
		
		var pos = getpos(Arrays,thisID);
		Arrays.splice(pos,1,"0")
		
		prev_charges = parseInt(prev_charges)-parseInt(deduct);
		$('.cart-total span').html(prev_charges);
		$('#total-hidden-charges').val(prev_charges);
		$(this).parent().remove();
		
	});
	
	$('.prior').livequery('click', function() {
		
		var deduct = $(this).parent().children(".shopp-price").find('em').html();
		var prev_charges = $('.cart-total span').html();
		
		var thisID = $(this).parent().attr('id').replace('each-','');
		
		var pos = getpos(Arrays,thisID);
		Arrays.splice(pos,1,"0")
		
		prev_charges = parseInt(prev_charges)-parseInt(deduct);
		$('.cart-total span').html(prev_charges);
		$('#total-hidden-charges').val(prev_charges);
		$(this).parent().remove();
		
	});
	
	$('#Submit').livequery('click', function() {
		
		var totalCharge = $('#total-hidden-charges').val();
		
		$('#left_bar').html('Total Charges: $'+totalCharge);
		
		return false;
		
	});
	
	var count = 4;
	$('#add').click(function(){
		
		var name = $('#item-name').val();
		var price = $('#item-price').val();
		//alert(name + ", " + price);
		
		var string = "<li onclick=\"hide(\'"+count+ "\')\" id=\""+ count +"\"><div><span class=\"name\">" + name +" : $<span class=\"price\">"+ price+"</span></div><img src=\"remove.png\" class=\"prior\" /></li>";
	
		$("#toBuy").append(string);
		count++;
		adding(name);
		
	});
	
	function adding(realNam) {
		$('#wrap li').click(function(){
		
		var thisID = $(this).attr('id');
		var itemname  = realNam;
		var itemprice = $(this).find('div .price').html();
			
		if(include(Arrays,thisID))
		{
			var price = $('#each-'+thisID).children(".shopp-price").find('em').html();
			
			$('#each-'+thisID).children(".shopp-price").find('em').html(total);
		
			
			var prev_charges = $('.cart-total span').html();
			prev_charges = parseInt(prev_charges)-parseInt(price);
			
			prev_charges = parseInt(prev_charges)+parseInt(total);
			$('.cart-total span').html(prev_charges);
			
			$('#total-hidden-charges').val(prev_charges);
		}
		else
		{
			Arrays.push(thisID);
			
			var prev_charges = $('.cart-total span').html();
			prev_charges = parseInt(prev_charges)+parseInt(itemprice);
			
			$('.cart-total span').html(prev_charges);
			$('#total-hidden-charges').val(prev_charges);
			
			$('#left_bar .cart-info').append('<div class="shopp" id="each-'+thisID+'"><div onclick="test()" class="label">'+itemname+'</div><div class="shopp-price"> $<em>'+itemprice+'</em></div><img src="remove.png" class="remove" /><br class="all" /></div>');
			
		}
		
		setTimeout('angle()',200);
	});
	}
	
});

function test(name) {
	alert(name);
}


function include(arr, obj) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] == obj) return true;
  }
}
function getpos(arr, obj) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] == obj) return i;
  }
}