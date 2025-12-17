# astrsk Recovery Scripts

Remote recovery scripts for astrsk data loss incidents.

## Quick Links

- **Latest Script**: [recovery-script.js](recovery-script.js)
- **Metadata**: [metadata.json](metadata.json)
- **Version History**: [versions/](versions/)

## Purpose

This repository hosts JavaScript recovery scripts that can be remotely fetched and executed by the astrsk PWA to help users recover from data loss due to migration failures.

## How It Works

1. User experiences data loss (missing characters/scenarios)
2. User navigates to **Settings > Advanced > Recovery Tools**
3. User clicks **"Run Remote Recovery Script"**
4. astrsk PWA fetches the latest script from this repository
5. Script executes in sandboxed environment with access to recovery tools
6. User's data is recovered from legacy database tables

## Current Version

**v1.0.0** - Initial release supporting character and scenario recovery

## Updating the Script

To update the recovery script:

1. Edit `recovery-script.js` with your changes
2. Update `metadata.json`:
   - Increment version number
   - Update `updatedAt` timestamp
   - Add changelog entry
3. Commit to `main` branch
4. (Optional) Copy to `versions/vX.X.X/` for historical record

Users will automatically receive the updated script on their next recovery attempt!

## Security

- Scripts run in isolated function scope (no access to global window)
- All operations are logged for transparency
- User must explicitly click "Run" button
- Scripts are hosted on trusted GitHub repository

## Available Context

Scripts have access to:
- `log(message)` - Log to user interface
- `legacy` - LegacyCharacterRecovery service
  - `checkLegacyData()` - Check for missing data
  - `recoverAll()` - Recover all missing data
  - `downloadBackup()` - Download JSON backup
- `snapshot` - DatabaseSnapshotRecovery service
  - `createSnapshot()` - Create database snapshot
  - `restoreSnapshot()` - Restore from snapshot

## Support

For issues or questions:
- GitHub Issues: https://github.com/astrsk/astrsk-recovery-scripts/issues
- Email: support@astrsk.com
