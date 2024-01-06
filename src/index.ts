// generate-build-number.ts

export function getBuildNumber() {
  "use server";
  const fs = require("fs");
  const path = require("path");
  const buildNumber = Date.now().toString();
  const filePath = path.join(__dirname, "build-number.json");

  fs.writeFileSync(filePath, JSON.stringify({ buildNumber }));
  console.log(`Build number generated: ${buildNumber}`);
}
