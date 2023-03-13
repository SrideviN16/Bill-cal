let form=document.querySelector('form');
form.addEventListener('submit',function(t)
{
	t.preventDefault();
	let amount=parseInt(document.querySelector('#amount').value);
	let tip=parseInt(document.querySelector('#tips').value);
	let tipvalue=document.querySelector('#tipvalue');
	let result=document.querySelector('#result');

	if(( amount=='')||(amount<0)||(isNaN(amount)))
	{
	result.innerHTML="Enter the Bill amount";
	}
	else if(( tip=='')||(tip<0)||(isNaN(tip)))
	{
	result.innerHTML="Enter the Tip value";
	}
	else 
		
	{
		 let ans=(amount*(tip/100));
		tipvalue.value=ans;
		 document.querySelector('#result').value=ans+amount;
	}
})
	