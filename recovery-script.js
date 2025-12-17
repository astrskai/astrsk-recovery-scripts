/**
 * astrsk Recovery Script v1.0.0
 *
 * Recovers missing characters and scenarios from failed migration
 */

log("🔍 astrsk Data Recovery Script v1.0.0");
log("═══════════════════════════════════════════════════");
log("");

// Step 1: Check for data loss
log("Step 1: Checking for missing data...");
const report = await legacy.checkLegacyData();

log(`  Legacy tables found: ${report.hasLegacyTables ? '✅ Yes' : '❌ No'}`);
log(`  Legacy characters: ${report.legacyCharacterCount}`);
log(`  Current characters: ${report.currentCharacterCount}`);
log(`  Legacy scenarios: ${report.legacyScenarioCount}`);
log(`  Current scenarios: ${report.currentScenarioCount}`);
log(`  Missing characters: ${report.missingCharacters}`);
log(`  Missing scenarios: ${report.missingScenarios}`);
log("");

// Step 2: Decide if recovery is needed
if (!report.canRecover) {
  log("✅ No data loss detected!");
  log("Your characters and scenarios are safe.");
  log("");
  log("If you believe data is missing, please contact support.");
} else {
  log("⚠️  DATA LOSS DETECTED!");
  log(`  Missing ${report.missingCharacters} characters`);
  log(`  Missing ${report.missingScenarios} scenarios`);
  log("");

  // Step 3: Create backup before recovery
  log("Step 2: Creating backup before recovery...");
  log("  💾 Downloading backup file...");
  await legacy.downloadBackup();
  log("  ✅ Backup saved to Downloads folder");
  log("");

  // Step 4: Recover data
  log("Step 3: Starting data recovery...");
  const result = await legacy.recoverAll();

  log("");
  log("═══════════════════════════════════════════════════");
  log("✅ RECOVERY COMPLETE!");
  log("═══════════════════════════════════════════════════");
  log("");
  log(`📊 Results:`);
  log(`  Characters recovered: ${result.characters.recovered}`);
  log(`  Characters failed: ${result.characters.failed}`);
  log(`  Scenarios recovered: ${result.scenarios.recovered}`);
  log(`  Scenarios failed: ${result.scenarios.failed}`);
  log("");

  if (result.characters.failed > 0 || result.scenarios.failed > 0) {
    log("⚠️  Some items failed to recover.");
    log("Please check the logs above and contact support if needed.");
  }

  log("");
  log("🔄 Please refresh the page to see your recovered data.");
  log("");
  log("If you still don't see your data after refreshing:");
  log("1. Check the backup file in your Downloads folder");
  log("2. Contact support with this log file");
  log("3. Use Settings > Advanced > Recovery > Download Logs");
}

log("═══════════════════════════════════════════════════");
log("Script execution complete");
log("═══════════════════════════════════════════════════");
