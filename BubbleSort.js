
let bubble_Sort = (a) => {

	let swapp;
	let n = a.length-1;
	let x=a;

	do{
		swapp = false;

		for(let i=0; i<n; i++){

			if(x[i] < x[i+1]){

				let temp = x[i];
				x[i] = x[i+1];
				x[i+1] = temp;
				swapp = true;
			}
		}
		n--;
	}
	while (swapp);
	return x;
}
