import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {

  context.log.info(`Your phantom API is working!`);
  return "This is a response from an API that doesn't exist on the backend!";
}
