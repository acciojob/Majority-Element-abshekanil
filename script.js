//your code here
let arr = [2,1,2];
arr.sort(function(a,b) =>{
	a - b;
});
let count = 0;
let countSave = 0;
for(let i=0; i<arr.length-1; i++)
	{
		if(arr(i) === arr(i+1))
		{
			count++;
		}
		else 
		{
			i++;
			if(count > countSave)
			{
				countSave = count;
				count = 0;
			}
			
		}
	}
if(countSave > Math.floor(n/2))
{
	return countSave;
}