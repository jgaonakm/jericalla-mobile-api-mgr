import {
  RuntimeExtensions,
  LokiLoggingPlugin,
  environment,
} from "@zuplo/runtime";

// For more information on runtime extensions see:
// https://zuplo.com/docs/articles/runtime-extensions


export function runtimeInit(runtime: RuntimeExtensions) {
  var optionalField = "Optional field, additional to what is sent by default";

  runtime.addPlugin(
    new LokiLoggingPlugin({
      url: environment.LOKI_URL,
      username: environment.LOKI_USR,
      job: "jericalla-mobile",
      password: environment.LOKI_PWD,
      version: 2,
      fields: {
        custom_field1: optionalField,
        custom_field2: optionalField,
      },
    }),
  );
}