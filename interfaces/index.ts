import { z } from "zod";

export const FlowOptionsSchema = z.object({
  query: z.string().min(1).describe("The SQL query to execute."),
});
export type FlowOptions = z.infer<typeof FlowOptionsSchema>;

export const PluginOptionsSchema = z.object({
  connection: z.any().optional(),
});
export type PluginOptions = z.infer<typeof PluginOptionsSchema>;