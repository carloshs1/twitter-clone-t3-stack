import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "twitter-clone-t3-stack/env.mjs";
import { createTRPCContext } from "twitter-clone-t3-stack/server/api/trpc";
import { appRouter } from "twitter-clone-t3-stack/server/api/root";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
