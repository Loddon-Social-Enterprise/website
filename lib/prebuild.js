/**
 * https://answers.netlify.com/t/server-edge-not-defined-error-on-nextjs-ssr-functions-cause-site-to-return-500-errors/91793/31
 */

console.log("********* PREBUILDING");
const path = require("node:path");
const fs = require("fs");
const baseDir = path.resolve(process.cwd() + '../');


const prebuildScripts = async () => {
  const file = path.join(
    baseDir,
    "/node_modules",
    "next/dist/server/require-hook.js"
  );

  const content = await fs.promises.readFile(file, "utf-8");
  await fs.promises.writeFile(
    file,
    content.replace(
      "if (process.env.__NEXT_PRIVATE_PREBUNDLED_REACT) {",
      "if (true) {"
    )
  );
};

prebuildScripts();
