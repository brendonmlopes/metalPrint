export async function getData(type){
	let data;
	data = await fetch('http://192.168.88.49:3000/api/'+type,{
		method:"GET",
		mode:"cors",
		headers:{"Content-Type":"application/json"}
	})
	if(!data.ok){
		throw new Error(`Fetch failed of type:${type}`)
	}
	data = await data.json()
	return data;
}
