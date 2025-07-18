import { Client } from "pg";
import { FlowOptions, PluginOptions } from "../interfaces";

export const retrieveResponse = async (
  flowOptions: FlowOptions,
  pluginOptions: PluginOptions
) => {
  const { query } = flowOptions;
  const { connection } = pluginOptions;

  const client = new Client(connection);
  await client.connect();

  try {
    const result = await client.query(query);
    return result.rows;
  } finally {
    await client.end();
  }
};
