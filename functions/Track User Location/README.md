# Track user current location

A node cloud function that figures out the current location of the user based on their IP address.

_Example input:_

```json
{
    "ip": "110.224.108.61"
}
```

> Function gets the current ip addess of the user as an input through **Appwrite Locale API** which we are using in frontend to fetch users' IP address.


_Example output:_

```json
{
    "city":"Kolkata"
}
```

## 📝 Environment Variables

List of environment variables used by this cloud function:

- **APPWRITE_FUNCTION_ENDPOINT** - Endpoint of your Appwrite server
- **APPWRITE_FUNCTION_API_KEY** - Appwrite API Key
- **APPWRITE_FUNCTION_PROJECT_ID** - Appwrite project ID. If running on Appwrite, this variable is provided automatically.
- **IPGEO_API_KEY** - IP Geolocation API Key   (https://app.abstractapi.com/)
