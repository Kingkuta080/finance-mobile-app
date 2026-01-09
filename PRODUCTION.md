# Production Build Guide

## Quick Start (Automated)

### Windows:
```bash
build-production.bat
```

### Mac/Linux:
```bash
chmod +x build-production.sh
./build-production.sh
```

## Prerequisites (One-Time Setup)

1. **EAS CLI** - Already installed ✅
   - Version: 16.28.0

2. **Login to Expo** (Required - Interactive):
   ```bash
   eas login
   ```
   This will open a browser for authentication.

3. **Verify your Expo account**:
   ```bash
   eas whoami
   ```

## Production Checklist

- [x] TypeScript compilation passes
- [x] No console.log statements
- [x] All navigation headers hidden
- [x] SafeAreaView implemented
- [x] App configuration updated with bundle identifiers
- [x] EAS build configuration created

## Build Commands

### Android Production Build (APK)
```bash
npm run build:android
```

### iOS Production Build
```bash
npm run build:ios
```

### Build for Both Platforms
```bash
npm run build:all
```

### Web Production Build
```bash
npm run build:web
```

## Important Notes

1. **Bundle Identifiers**: 
   - iOS: `com.financemobileapp.app`
   - Android: `com.financemobileapp.app`
   
   Update these in `app.json` if needed to match your app's branding.

2. **App Icons**: 
   Currently using `logo-light.png` as placeholder. Replace with proper app icons:
   - iOS: 1024x1024px icon
   - Android: 1024x1024px foreground, 1024x1024px background

3. **Splash Screen**: 
   Currently using `logo-light.png`. Replace with proper splash screen image.

4. **Version Management**: 
   - Auto-increment is enabled for production builds
   - Current version: `1.0.0` (in `app.json`)

5. **Environment Variables**: 
   - No environment variables detected
   - If needed, configure in EAS dashboard or `eas.json`

## Before Building

1. **Update Bundle Identifiers** in `app.json` if needed
2. **Replace placeholder icons** with production icons
3. **Test the app** thoroughly on both platforms
4. **Review app.json** for any additional configuration needed

## After Building

### Submit to App Stores

**Android (Google Play)**:
```bash
npm run submit:android
```

**iOS (App Store)**:
```bash
npm run submit:ios
```

### Testing Production Build

1. Download the build from EAS dashboard
2. Install on physical devices
3. Test all features thoroughly
4. Verify navigation works correctly
5. Check safe area handling on different devices

## Troubleshooting

- If build fails, check EAS dashboard for detailed logs
- Ensure all dependencies are up to date: `npm install`
- Clear cache if needed: `expo start -c`
- Check Expo documentation for platform-specific issues

## Resources

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit Documentation](https://docs.expo.dev/submit/introduction/)
- [Expo Production Best Practices](https://docs.expo.dev/distribution/introduction/)
