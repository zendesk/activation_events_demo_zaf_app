const client = ZAFClient.init();

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

// Creates the modal instance
async function createModal() {
	return client.invoke("instances.create", {
		location: "modal",
		url: "assets/modal.html",
	});
}

// Access the modal instance and logs to the console when modal is closed
function accessModal(instanceData) {
	const instanceGuid = instanceData["instances.create"][0].instanceGuid;
	const modalClient = client.instance(instanceGuid);
	modalClient.on("modal.close", (data) => {
		console.log(`DEBUG modal.close`, data);
	});
}

// Runs when user clicks button in app UI
async function displayModal() {
	const instanceData = await createModal();

	return accessModal(instanceData);
}
