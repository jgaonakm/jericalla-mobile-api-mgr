import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {

  context.log.info(`Client accessing deprecated API`);

  return "This API has been deprecated, please use to v2. Thanks!";
}
