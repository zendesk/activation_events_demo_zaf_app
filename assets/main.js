const client = ZAFClient.init();

// Runs on app.registered event
client.on("app.registered", (data) => {
	client.invoke("notify", `${client._context["location"]} app.activated`);
	console.log(`DEBUG ${client._context["location"]} app.registered`, data);
});

// Runs on app.activated event
client.on("app.activated", (data) => {
	console.log(`DEBUG ${client._context["location"]} app.activated`, data);
});

// Runs on app.deactivated event
client.on("app.deactivated", (data) => {
	console.log(`DEBUG ${client._context["location"]} app.deactiviated`, data);
});

// Runs on pane.activated event
client.on("pane.activated", (data) => {
	client.invoke("notify", `${client._context["location"]} app.activated`);
	console.log(`DEBUG ${client._context["location"]} pane.activated`, data);
});

// Runs on pane.deactivated event
client.on("pane.deactivated", (data) => {
	console.log(`DEBUG ${client._context["location"]} pane.deactivated`, data);
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
