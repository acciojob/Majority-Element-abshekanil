//your code here
let arr = [2,1,2];
arr.sort(function(a,b){
	return a - b;
});
let count = 1;
let countSave = 0;
for(let i=0; i<arr.length-1; i++)
	{
		if(arr[i] === arr[i+1])
		{
			count++;
		}
		else 
		{
			if(count > countSave)
			{
				countSave = count;
				
			}
			count = 1;
			
		}
	}
if(countSave > Math.floor(n/2))
{
	return countSave;
}