const serverIp = "192.168.88.250"
const port = "3000"

export async function execute(command){
	let data;
	data = await fetch(`http://${serverIp}:${port}/api/${command}`,{
		method:"GET",
		mode:"cors",
		headers:{"Content-Type":"application/json"}
	})

	if(!data.ok){
		throw new Error(`Fetch failed of type:${command}`)
	}

	data = await data.json()

	return data;
}
