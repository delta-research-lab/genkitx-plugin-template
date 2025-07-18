import { z } from "zod";

import { FLOW_NAME } from "./../constants";
import { FlowOptionsSchema } from "./../interfaces";

export const flowConfig = {
  name: FLOW_NAME,
  inputSchema: FlowOptionsSchema,
  outputSchema: z.any(),
};
