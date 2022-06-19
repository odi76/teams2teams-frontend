# Teams2TeamsApiPrototype.AuthenticationApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthenticationApi.md#login) | **POST** /login | 
[**logout**](AuthenticationApi.md#logout) | **DELETE** /logout | 
[**registrate**](AuthenticationApi.md#registrate) | **POST** /registrate | 



## login

> LoginOutput login(loginInput)



User login operation

### Example

```javascript
import Teams2TeamsApiPrototype from 'teams2_teams_api_prototype';

let apiInstance = new Teams2TeamsApiPrototype.AuthenticationApi();
let loginInput = new Teams2TeamsApiPrototype.LoginInput(); // LoginInput | 
apiInstance.login(loginInput, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginInput** | [**LoginInput**](LoginInput.md)|  | 

### Return type

[**LoginOutput**](LoginOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logout

> logout(sessionId)



User logout operation

### Example

```javascript
import Teams2TeamsApiPrototype from 'teams2_teams_api_prototype';

let apiInstance = new Teams2TeamsApiPrototype.AuthenticationApi();
let sessionId = null; // String | 
apiInstance.logout(sessionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registrate

> registrate(registrationData)



User registration

### Example

```javascript
import Teams2TeamsApiPrototype from 'teams2_teams_api_prototype';

let apiInstance = new Teams2TeamsApiPrototype.AuthenticationApi();
let registrationData = new Teams2TeamsApiPrototype.RegistrationData(); // RegistrationData | 
apiInstance.registrate(registrationData, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationData** | [**RegistrationData**](RegistrationData.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

