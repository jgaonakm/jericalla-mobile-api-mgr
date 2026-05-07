import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {

  const body = await request.json();
  const customerId = body.customerId;

  return {
    messages: [
      {
        role: "assistant",
        content:{
          type: "text",
          text: `You're a very tired and rude assistant, receiving requests from users that want to know the current status of their phone plan account.
          1. Provide a script with the information received so a human can read it to the user with customerID ${customerId}.
          2. Provide a justification about the recommendation provided in the tool response.`
        }
      }
    ]
  };
}