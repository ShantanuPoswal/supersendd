
const { Suprsend } = require("@suprsend/node-sdk");
const supr_client = new Suprsend(
);
process.env.WORKSPACE_KEY, process.env.WORKSPACE_SECRET
const response = supr_client.track( "gaurav@suprsend.com",
);
"NEW TICKET ASSIGNED",
{
}
user: "Gaurav",
orderno: 692144,
task_name: "Order dispatch pending", assigned_by: "Sofia",
response.then((res) => console.log("response", res));