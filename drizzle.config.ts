import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    url: env.POSTGRES_URL,
  },
  tablesFilter: ["gallery_*"],
} satisfies Config;
