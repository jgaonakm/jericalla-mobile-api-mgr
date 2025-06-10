import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (
  response: Response,
  request: ZuploRequest,
  context: ZuploContext,
) {
  // Get the outgoing body as an Object
  const obj = await response.json();
  var body = JSON.stringify(obj);
  if(! obj.error){
    // Parse response removing all OpenAI-specific properties
    // leaving only the text we asked for
    body = obj.output[0].content[0].text
  }
  
  // Return a new response with the new body
  return new Response(body, request);
}