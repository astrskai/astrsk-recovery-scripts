/**
 * astrsk Data Detection Script v1.0.0
 *
 * Detects missing characters and scenarios from failed migration
 */

log("🔍 astrsk Data Detection Script v1.0.0");
log("═══════════════════════════════════════════════════");
log("");

// Check for data loss
log("Checking for missing data...");
const report = await legacy.checkLegacyData();

log("");
log("📊 Detection Results:");
log("═══════════════════════════════════════════════════");
log(`  Legacy tables found: ${report.hasLegacyTables ? '✅ Yes' : '❌ No'}`);
log(`  Legacy characters: ${report.legacyCharacterCount}`);
log(`  Current characters: ${report.currentCharacterCount}`);
log(`  Legacy scenarios: ${report.legacyScenarioCount}`);
log(`  Current scenarios: ${report.currentScenarioCount}`);
log("");

if (report.missingCharacters > 0 || report.missingScenarios > 0) {
  log("⚠️  DATA LOSS DETECTED!");
  log(`  Missing ${report.missingCharacters} characters`);
  log(`  Missing ${report.missingScenarios} scenarios`);
} else {
  log("✅ No data loss detected!");
  log("Your characters and scenarios are safe.");
}

log("");
log("═══════════════════════════════════════════════════");
log("Detection complete");
log("═══════════════════════════════════════════════════");
log("");

if (report.canRecover) {
  log("Next steps:");
  log("1. Contact support with this detection report");
  log("2. Await recovery script update");
  log("3. A backup will be created before any recovery");
}
