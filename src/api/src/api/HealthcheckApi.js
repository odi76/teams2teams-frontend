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
import Pong from '../model/Pong';

/**
* Healthcheck service.
* @module api/HealthcheckApi
* @version 1.0.0
*/
export default class HealthcheckApi {

    /**
    * Constructs a new HealthcheckApi. 
    * @alias module:api/HealthcheckApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ping operation.
     * @callback module:api/HealthcheckApi~pingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pong} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the system live status
     * @param {module:api/HealthcheckApi~pingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pong}
     */
    ping(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Pong;
      return this.apiClient.callApi(
        '/ping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}