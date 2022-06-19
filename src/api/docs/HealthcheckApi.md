# Teams2TeamsApiPrototype.HealthcheckApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](HealthcheckApi.md#ping) | **GET** /ping | 



## ping

> Pong ping()



Check the system live status

### Example

```javascript
import Teams2TeamsApiPrototype from 'teams2_teams_api_prototype';

let apiInstance = new Teams2TeamsApiPrototype.HealthcheckApi();
apiInstance.ping((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Pong**](Pong.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

