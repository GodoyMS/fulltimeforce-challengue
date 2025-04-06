# FullTimeForce Challenge App

This is a React Native app created using Expo. It is built to provide a seamless experience for the user, and you can easily run it on your device for testing purposes.

## Prerequisites

- **Android**: APK file for testing.
- **iOS**: Requires Expo Go app or Apple Developer account to generate and install an `.ipa` file (if you want to test on iOS devices).

## Getting Started

Follow the steps below to install the app on your device:

---

### Android Installation

For Android, I have already generated an APK file for testing. Follow these instructions to install it on your device.

1. **Download the APK File**:
   - You can download the APK from the following link:
     [Download APK](https://expo.dev/artifacts/eas/xuW2uAEmfTBqAia9U7yiP5.apk)
   - Alternatively, you can find the APK in the `dist` folder of the project.

2. **Enable Installations from Unknown Sources**:
   On devices running Android 8.0 (API level 26) and higher:
   - Navigate to **Settings** > **Apps & notifications** > **Advanced** > **Install unknown apps**.
   - Choose the app (browser or file manager) from which you want to install the APK.
   - Enable **Allow from this source**.

   On devices running Android 7.1.1 (API level 25) and lower:
   - Navigate to **Settings** > **Security** > **Install unknown apps**.
   - Enable **Allow from this source** for the app you are using to install the APK.

3. **Install the APK**:
   After enabling the unknown sources setting, click on the APK file you downloaded. It will prompt you to install the app on your device. Confirm the installation, and once it’s done, you can open the app directly.

---

### iOS Installation (Expo Go)

## Prerequisites

Before starting, make sure you have the following installed:

- **Node.js 20.12.2** (Recommended version)
- **npm 10.5.0** (Recommended version)
- **Visual Studio Code 2022** (IDE for code editing)
---

To test the app on iOS, you can use **Expo Go**. This method does not require any Apple Developer account, and you can easily run the app on your device.

1. **Clone or Download the repository**:
   First, you need to clone or download this repository to your local machine.

   ```bash
   git clone https://github.com/GodoyMS/fulltimeforce-challengue.git
   cd your-project-folder

2. **Install Expo Go on your iPhone**:
   - Go to the **App Store** on your iPhone and search for **Expo Go**.
   - Install **Expo Go**.

3. **Install Expo CLI**:
   - If you haven’t installed Expo CLI on your computer yet, run the following command:
     ```bash
     npm install -g expo-cli
     ```
4. **Start the Expo Project**:
   - Install dependencies
     ```bash
     npm install
     ```
5. **Start the Expo Project**:
   - Open your project directory and start the project with:
     ```bash
     npm run start
     ```

6. **Scan the QR Code**:
   - After running the project, a QR code will appear in the terminal or in the browser. Scan this QR code with the **Expo Go** app on your iPhone to open the app on your device.

---

## Available Scripts

You can also run the app in your local development environment by using the following commands:

- **Start the project**:
  ```bash
  npm start
