import { genkitPlugin, GenkitPlugin } from "@genkit-ai/core";
import { defineFlow } from "@genkit-ai/flow";

import { PluginOptions } from "./interfaces";
import { pluginAction } from "./actions";
import { flowConfig } from "./config";
import { isConnectionConfigExist } from "./utilities";
import { PLUGIN_NAME } from "./constants";

export const postgresPlugin = (pluginOptions: PluginOptions): GenkitPlugin => {
  return genkitPlugin(PLUGIN_NAME, async () => {
    isConnectionConfigExist(pluginOptions);
    defineFlow(flowConfig, (flowOptions) =>
      pluginAction(flowOptions, pluginOptions)
    );
  });
};
