const sdk = require("node-appwrite");

let city;

module.exports = async (req, res) => {
  // Input validation
  let ip;
  try {
    const payload = JSON.parse(req.payload);
    ip = payload.ip;
  } catch (err) {
    console.log(err);
    throw new Error("Payload is not valid.");
  }

  if (!ip) {
    throw new Error("Invalid ip.");
  }

  // Make sure we have environment variables required to execute
  if (
    !req.variables.APPWRITE_FUNCTION_ENDPOINT ||
    !req.variables.APPWRITE_FUNCTION_PROJECT_ID ||
    !req.variables.APPWRITE_FUNCTION_API_KEY
  ) {
    throw new Error("Please provide all required environment variables.");
  }

  if (!city) {
    // Init Appwrite SDK
    const client = new sdk.Client();
    const locale = new sdk.Locale(client);

    client
      .setEndpoint(req.variables.APPWRITE_FUNCTION_ENDPOINT)
      .setProject(req.variables.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(req.variables.APPWRITE_FUNCTION_API_KEY);

    const { default: fetch } = await import("node-fetch");

    const locationResponse = await fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${req.variables.IPGEO_API_KEY}&ip_address=${ip}`
    );
    city = await locationResponse.json();
  }

  res.json({
    city: city.city,
  });
};
