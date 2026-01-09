#!/bin/bash
# Production Build Script for Finance Mobile App

echo "🚀 Finance Mobile App - Production Build"
echo "=========================================="
echo ""

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI not found. Installing..."
    npm install -g eas-cli
fi

# Check if logged in
echo "📋 Checking Expo login status..."
if ! eas whoami &> /dev/null; then
    echo "⚠️  Not logged in to Expo. Please run: eas login"
    echo "   Then run this script again."
    exit 1
fi

echo "✅ Logged in as: $(eas whoami)"
echo ""

# Ask which platform to build
echo "Select platform to build:"
echo "1) Android (APK)"
echo "2) iOS"
echo "3) Both platforms"
echo "4) Web"
read -p "Enter choice [1-4]: " choice

case $choice in
    1)
        echo "📱 Building Android APK..."
        eas build --platform android --profile production
        ;;
    2)
        echo "🍎 Building iOS..."
        eas build --platform ios --profile production
        ;;
    3)
        echo "📱🍎 Building for both platforms..."
        eas build --platform all --profile production
        ;;
    4)
        echo "🌐 Building for web..."
        npx expo export:web
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "✅ Build process completed!"
echo "📦 Check EAS dashboard for build status: https://expo.dev"
