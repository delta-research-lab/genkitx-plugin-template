import { getPostgresData } from "../index";
import { Client } from "pg";
import { runFlow, defineFlow } from "@genkit-ai/flow";
import { FLOW_NAME } from "../constants";
import { pluginAction } from "../actions";
import { FlowOptionsSchema } from "../interfaces";
import * as z from 'zod';

jest.mock("pg", () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Client: jest.fn(() => mClient) };
});

describe("Postgres Plugin", () => {
  let client: any;

  beforeEach(() => {
    client = new Client();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data from postgres", async () => {
    const rows = [{ id: 1, name: "test" }];
    client.query.mockResolvedValueOnce({ rows });

    const getPostgresDataFlow = defineFlow(
      {
        name: FLOW_NAME,
        inputSchema: FlowOptionsSchema,
        outputSchema: z.any(),
      },
      (flowOptions) =>
        pluginAction(flowOptions, {
          connection: {},
        })
    );

    const result = await runFlow(getPostgresDataFlow, {
      query: "SELECT * FROM test",
    });

    expect(result).toEqual(rows);
    expect(client.connect).toBeCalledTimes(1);
    expect(client.query).toBeCalledWith("SELECT * FROM test");
    expect(client.end).toBeCalledTimes(1);
  });
});
