let client = ZAFClient.init();

client.on("app.activated", (data) => {
	console.log(`DEBUG ${client._context["location"]} app.activated`, data);
});

client.on("pane.activated", (data) => {
	console.log(`DEBUG ${client._context["location"]} pane.activated`, data);
});

client.on("pane.deactivated", (data) => {
	console.log(`DEBUG ${client._context["location"]} pane.deactivated`, data);
});

client.on("app.registered", (data) => {
	console.log(`DEBUG ${client._context["location"]} app.registered`, data);
});

client.on("app.deactivated", (data) => {
	console.log(`DEBUG ${client._context["location"]} app.deactiviated`, data);
});

async function displayModal() {
	// Create modal instance
	const instanceData = await client.invoke("instances.create", {
		location: "modal",
		url: "assets/iframe.html",
	});

	// Access modal instance
	let instanceGuid = instanceData["instances.create"][0].instanceGuid;
	let modalClient = client.instance(instanceGuid);
	modalClient.on("modal.close", (data) => {
		console.log(`DEBUG modal.close`, data);
	});
}
