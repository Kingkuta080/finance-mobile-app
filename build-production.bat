@echo off
REM Production Build Script for Finance Mobile App (Windows)

echo.
echo ==========================================
echo   Finance Mobile App - Production Build
echo ==========================================
echo.

REM Check if EAS CLI is installed
where eas >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] EAS CLI not found. Installing...
    call npm install -g eas-cli
)

REM Check if logged in
echo [INFO] Checking Expo login status...
eas whoami >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Not logged in to Expo. Please run: eas login
    echo           Then run this script again.
    exit /b 1
)

for /f "tokens=*" %%i in ('eas whoami') do set USERNAME=%%i
echo [SUCCESS] Logged in as: %USERNAME%
echo.

REM Ask which platform to build
echo Select platform to build:
echo 1) Android (APK)
echo 2) iOS
echo 3) Both platforms
echo 4) Web
set /p choice="Enter choice [1-4]: "

if "%choice%"=="1" (
    echo [INFO] Building Android APK...
    call eas build --platform android --profile production
) else if "%choice%"=="2" (
    echo [INFO] Building iOS...
    call eas build --platform ios --profile production
) else if "%choice%"=="3" (
    echo [INFO] Building for both platforms...
    call eas build --platform all --profile production
) else if "%choice%"=="4" (
    echo [INFO] Building for web...
    call npx expo export:web
) else (
    echo [ERROR] Invalid choice
    exit /b 1
)

echo.
echo [SUCCESS] Build process completed!
echo [INFO] Check EAS dashboard for build status: https://expo.dev
pause
