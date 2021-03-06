/**
 * Teams2Teams API prototype
 * This is a simple API in case of try the login functions out.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorMessage from '../model/ErrorMessage';
import LoginInput from '../model/LoginInput';
import LoginOutput from '../model/LoginOutput';
import RegistrationData from '../model/RegistrationData';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 1.0.0
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthenticationApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User login operation
     * @param {module:model/LoginInput} loginInput 
     * @param {module:api/AuthenticationApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoginOutput}
     */
    login(loginInput, callback) {
      let postBody = loginInput;
      // verify the required parameter 'loginInput' is set
      if (loginInput === undefined || loginInput === null) {
        throw new Error("Missing the required parameter 'loginInput' when calling login");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LoginOutput;
      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/AuthenticationApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User logout operation
     * @param {String} sessionId 
     * @param {module:api/AuthenticationApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    logout(sessionId, callback) {
      let postBody = null;
      // verify the required parameter 'sessionId' is set
      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling logout");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'session_id': sessionId
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/logout', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registrate operation.
     * @callback module:api/AuthenticationApi~registrateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User registration
     * @param {module:model/RegistrationData} registrationData 
     * @param {module:api/AuthenticationApi~registrateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    registrate(registrationData, callback) {
      let postBody = registrationData;
      // verify the required parameter 'registrationData' is set
      if (registrationData === undefined || registrationData === null) {
        throw new Error("Missing the required parameter 'registrationData' when calling registrate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/registrate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
