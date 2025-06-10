import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {

  // Stringify the object
  var model = request.query.model;
  if (!model) {
    model = 'gpt-4.1-nano';
  }
  context.log.info(request.query);
  context.log.info(model);

  var promptText = `Act as a friendly customer service representative, and provide a welcome message for client 
                    that called your support line. After the greeting menetion one-line brief fun fact about mobile phone organizations, 
                    replacing the company name with 'Jericalla Mobile'`;

  var prompt = {
    'model': model,
    'input': promptText,
    'max_output_tokens': 1000,
    'service_tier': 'default',
    'temperature': 0.8
  };
  const body = JSON.stringify(prompt);

  // Return a new request based on the
  // original but with the new body
  return new ZuploRequest(request, { body });
}