
function apiResponse(status, message, data) {
  const response = {}
  response.status = status;
  message ? response.message = message : "";
  data ? response.data = data : "";
  return response;
}


module.exports = {
 
  APIResponse: apiResponse,
 

};