# 📱 Build APK and Install on Phone - Step by Step Guide

## Quick Steps

### Step 1: Login to Expo (One-time)
```bash
eas login
```
This will open your browser. Sign in or create a free Expo account.

### Step 2: Build APK
```bash
eas build --platform android --profile production
```

Or use the npm script:
```bash
npm run build:android
```

### Step 3: Download APK
1. Visit: https://expo.dev/accounts/[your-username]/projects/finance-mobile-app/builds
2. Wait for build to complete (usually 10-20 minutes)
3. Click "Download" button on the completed build
4. Save the `.apk` file to your computer

### Step 4: Install on Android Phone

**Method 1: Direct Transfer**
1. Connect your phone to computer via USB
2. Copy the `.apk` file to your phone's Downloads folder
3. On your phone, open File Manager
4. Navigate to Downloads
5. Tap the `.apk` file
6. Allow installation from "Unknown sources" if prompted
7. Tap "Install"

**Method 2: Email/Cloud**
1. Email the `.apk` file to yourself
2. Open email on your phone
3. Download the attachment
4. Tap to install (allow "Unknown sources" if needed)

**Method 3: QR Code (From EAS Dashboard)**
1. After build completes, EAS provides a QR code
2. Scan QR code with your phone
3. Download and install directly

## Detailed Instructions

### Prerequisites Check
```bash
# Check if you're logged in
eas whoami

# If not logged in, run:
eas login
```

### Build Options

**Option A: Production APK (Recommended)**
```bash
eas build --platform android --profile production
```

**Option B: Preview APK (Faster, for testing)**
```bash
eas build --platform android --profile preview
```

### Monitor Build Progress
- Build status: https://expo.dev
- You'll get email notifications when build completes
- Or check terminal for build URL

### Build Time
- First build: ~15-20 minutes
- Subsequent builds: ~10-15 minutes
- You can close terminal, build continues in cloud

## Troubleshooting

### "Not logged in" error
```bash
eas login
```

### "Project not initialized" error
```bash
eas init
```
(Select "Link to existing project" if prompted)

### Build fails
- Check build logs in EAS dashboard
- Common issues:
  - Missing app icon (we're using placeholder - this is OK for testing)
  - Bundle identifier conflicts (unlikely with our setup)

### Can't install APK on phone
- Enable "Install from Unknown Sources" in Android settings
- Settings → Security → Unknown Sources (enable)
- Or: Settings → Apps → Special Access → Install Unknown Apps

## Alternative: Local Build (Faster for Testing)

If you have Android Studio installed:

```bash
# Generate native Android project
npx expo prebuild

# Build APK locally
cd android
./gradlew assembleRelease

# APK will be in: android/app/build/outputs/apk/release/app-release.apk
```

## What You'll Get

- **File**: `finance-mobile-app-[version].apk`
- **Size**: Usually 20-50 MB
- **Location**: Downloads folder (or wherever you saved it)
- **Installation**: Tap the file on your Android device

## Next Steps After Installation

1. Test all features on physical device
2. Check navigation works correctly
3. Verify safe area handling
4. Test on different Android versions if possible

---

**Ready?** Just run:
```bash
eas login
npm run build:android
```

Then wait for the build to complete and download! 🚀
