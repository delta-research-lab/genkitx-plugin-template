import { GenkitError } from "@genkit-ai/core";
import { StatusName } from "@genkit-ai/core/lib/statusTypes";
import { PluginOptions } from "./../interfaces";
import { ERROR_NO_CONNECTION_CONFIG } from "./../constants";

export const throwError = (status: StatusName, message: string) => {
  throw new GenkitError({
    status,
    message,
  });
};

export const isConnectionConfigExist = (pluginOptions: PluginOptions) => {
  const { connection } = pluginOptions;
  if (!connection)
    return throwError("INVALID_ARGUMENT", ERROR_NO_CONNECTION_CONFIG);
};
