import { genkitPlugin } from "@genkit-ai/core";
import { defineFlow } from "@genkit-ai/flow";

import { PluginOptions } from "./interfaces";
import { pluginAction } from "./actions";
import { flowConfig } from "./config";
import { isConnectionConfigExist } from "./utilities";
import { PLUGIN_NAME } from "./constants";

export const getPostgresData = genkitPlugin(
  PLUGIN_NAME,
  async (pluginOptions: PluginOptions) => {
    isConnectionConfigExist(pluginOptions);
    defineFlow(flowConfig, (flowOptions) =>
      pluginAction(flowOptions, pluginOptions)
    );
  }
);
