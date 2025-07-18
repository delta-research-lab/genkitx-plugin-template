# Genkit PostgreSQL Plugin

This plugin provides a way to interact with a PostgreSQL database from a Genkit flow.

## Preparation

Before using this plugin, you need to have a PostgreSQL database running and have the connection details handy.

## Installation

1.  **Initialize Genkit**

    If you don't have a Genkit project yet, you can create one by running the following command:

    ```bash
    npm create genkit@latest
    ```

    This will create a new directory with a sample Genkit project.

2.  **Install the plugin**

    To install this plugin, you can install it from npm:

    ```bash
    npm install genkitx-plugin-postgres
    ```

    Or, if you are developing the plugin locally, you can install it from the local directory:

    ```bash
    npm install /path/to/genkitx-plugin-postgres
    ```

## Usage

To use this plugin, you need to import it and configure it with your PostgreSQL connection details.

1.  **Import and configure the plugin**

    In your Genkit flow file (e.g., `index.ts`), import the plugin and configure it with your PostgreSQL connection details.

    ```typescript
    import { configure } from "@genkit-ai/core";
    import { postgresPlugin } from "genkitx-plugin-postgres";

    configure({
      plugins: [
        postgresPlugin({
          connection: {
            host: "localhost",
            port: 5432,
            user: "user",
            password: "password",
            database: "database",
          },
        }),
      ],
    });
    ```

    You can also configure the connection details using the `POSTGRES_CONNECTION_STRING` environment variable.

    ```
    export POSTGRES_CONNECTION_STRING="postgresql://user:password@localhost:5432/database"
    ```

2.  **Use the `getPostgresData` flow**

    Now, you can use the `getPostgresData` flow to execute a query.

    ```typescript
    import { run } from "@genkit-ai/flow";
    import { getPostgresData } from "genkitx-plugin-postgres";

    const response = await run(getPostgresData, {
      query: "SELECT * FROM my_table",
    });

    console.log(response);
    ```

### Trying out the plugin

To try out the plugin, you can create a simple Genkit flow that uses the `getPostgresData` flow.

1.  Create a file named `my-flow.ts`.

    ```typescript
    import { configure } from "@genkit-ai/core";
    import { postgresPlugin } from "genkitx-plugin-postgres";
    import { run } from "@genkit-ai/flow";
    import { getPostgresData } from "genkitx-plugin-postgres";

    configure({
      plugins: [
        postgresPlugin({
          connection: {
            host: "localhost",
            port: 5432,
            user: "user",
            password: "password",
            database: "database",
          },
        }),
      ],
    });

    async function main() {
      const response = await run(getPostgresData, {
        query: "SELECT * FROM my_table",
      });

      console.log(response);
    }

    main();
    ```

2.  Run the flow.

    ```bash
    npx ts-node my-flow.ts
    ```

License : Apache 2.0