# 💪 Gym Workout Tracker — React Native Mobile App

A sleek, **dark-themed** gym workout tracking mobile application built with **React Native** and **Expo**. This app helps fitness enthusiasts log their workouts, track sets/reps/weights, view workout history, analyze progress with charts, and manage their fitness profile — all wrapped in a premium, modern UI inspired by automotive dashboard aesthetics.

I built this app because I wanted a clean, no-nonsense workout tracker that focuses on the essentials — logging sets, tracking personal records, and visualizing progress — without the bloat of social features. The design philosophy is "pure black canvas with crisp white typography," delivering a focused, distraction-free workout experience.

---

## ✨ Features

### 🏠 Dashboard
- **Stats at a Glance** — View total workouts, current streak, total weight lifted, and new personal records in a 4-card grid
- **Today's Workout** — Quick access to your current workout session with exercise count and total volume
- **Recent PRs** — See your latest personal records with upward trend indicators
- **Pull-to-Refresh** — Swipe down to refresh all dashboard data
- **Skeleton Loading** — Elegant loading states while data is being fetched
- **Floating Action Button** — Quick-access FAB to start a new workout

### 🏋️ Workout Logger
- **Exercise Tracking** — Log exercises with muscle group and equipment type labels
- **Set-by-Set Logging** — Track reps and weight for each set with completion checkmarks
- **Haptic Feedback** — Tactile feedback on set completion, exercise addition, and workout finish using `expo-haptics`
- **Rest Timer** — Built-in countdown rest timer that auto-starts when you complete a set
- **Live Workout Timer** — Elapsed time display in the header
- **Dynamic Sets** — Add as many sets as needed per exercise

### 📅 Workout History
- **Chronological Timeline** — Browse past workouts sorted by date
- **Workout Detail View** — Tap any workout to see the full breakdown with all exercises, sets, and weights
- **Stack Navigation** — History screen uses its own navigation stack for a smooth drill-down experience

### 📊 Analytics
- **Progress Charts** — Visual workout analytics powered by `react-native-chart-kit`
- **Calendar Heatmap** — See your workout frequency at a glance
- **Performance Trends** — Track volume, frequency, and strength progression over time

### 👤 Profile
- **User Profile Management** — View and manage your account details
- **Logout** — Securely sign out and clear stored tokens

### 🔐 Authentication
- **Login & Register** — Email-based authentication with JWT token management
- **Persistent Sessions** — Tokens stored securely in AsyncStorage for automatic re-login
- **Protected Routes** — Main app tabs only accessible after authentication

---

## 🏗️ Architecture

```
Gym-Wrokout-MobileApp/
├── App.tsx                    # Root component with font loading & auth provider
├── index.ts                   # Expo entry point with registerRootComponent
├── app.json                   # Expo configuration (icons, splash, platforms)
├── tsconfig.json              # TypeScript configuration
└── src/
    ├── api/
    │   └── axios.ts           # Axios instance with JWT interceptor & platform-aware URLs
    ├── components/
    │   ├── Button.tsx          # Reusable button (filled/outline variants)
    │   ├── CalendarHeatmap.tsx # Workout frequency heatmap
    │   ├── Card.tsx            # Base card component with dark theme
    │   ├── CategoryTabs.tsx    # Horizontal category filter tabs
    │   ├── Divider.tsx         # Hairline divider
    │   ├── EmptyState.tsx      # Empty state placeholder
    │   ├── ExerciseCard.tsx    # Exercise display card
    │   ├── IconButton.tsx      # Circular icon button (used for FAB)
    │   ├── Input.tsx           # Styled text input
    │   ├── LoadingState.tsx    # Full-screen loading spinner
    │   ├── MStripe.tsx         # Decorative brand stripe accent
    │   ├── RestTimer.tsx       # Countdown rest timer with circular progress
    │   ├── ScreenHeader.tsx    # Consistent screen header with optional stripe
    │   ├── SetRow.tsx          # Individual set row (reps, weight, ✓)
    │   ├── Skeleton.tsx        # Skeleton loading placeholder
    │   ├── StatCard.tsx        # Dashboard stat card
    │   ├── Toast.tsx           # Toast notification
    │   ├── WorkoutCard.tsx     # Workout summary card
    │   └── index.ts            # Barrel export for all components
    ├── context/
    │   └── AuthContext.tsx     # React Context for auth state management
    ├── hooks/
    │   └── useAuth.ts          # Custom hook for accessing auth context
    ├── navigation/
    │   ├── AppNavigator.tsx    # Root navigator (auth check → AuthStack or MainTabs)
    │   ├── AuthStack.tsx       # Login/Register stack navigator
    │   ├── HistoryStack.tsx    # History → WorkoutDetail stack navigator
    │   └── MainTabs.tsx        # Bottom tab navigator (5 tabs)
    ├── screens/
    │   ├── DashboardScreen.tsx  # Home dashboard with stats & today's workout
    │   ├── LogWorkoutScreen.tsx # Workout logging with sets, timer, haptics
    │   ├── HistoryScreen.tsx    # Past workout timeline
    │   ├── WorkoutDetailScreen.tsx # Individual workout breakdown
    │   ├── AnalyticsScreen.tsx  # Charts & progress analytics
    │   ├── ProfileScreen.tsx    # User profile management
    │   ├── LoginScreen.tsx      # Login form
    │   ├── RegisterScreen.tsx   # Registration form
    │   └── index.ts             # Barrel export for all screens
    ├── theme/
    │   ├── colors.ts           # True-black palette with brand accents
    │   ├── spacing.ts          # Consistent spacing scale
    │   ├── typography.ts       # Typography presets (Inter font)
    │   └── index.ts            # Theme barrel export
    ├── types/
    │   ├── navigation.types.ts # TypeScript types for navigation params
    │   └── user.types.ts       # User type definition
    └── utils/
        └── storage.ts          # AsyncStorage wrapper for token management
```

---

## 🛠️ Tech Stack

| Layer              | Technology                                                 |
| ------------------ | ---------------------------------------------------------- |
| **Framework**      | React Native 0.81 with Expo SDK 54                         |
| **Language**       | TypeScript                                                 |
| **Navigation**     | React Navigation 6 (Bottom Tabs + Native Stack)            |
| **State Mgmt**     | React Context API                                          |
| **HTTP Client**    | Axios with JWT interceptor                                 |
| **Storage**        | AsyncStorage (`@react-native-async-storage/async-storage`) |
| **Charts**         | `react-native-chart-kit` + `react-native-svg`              |
| **Haptics**        | `expo-haptics` for tactile feedback                        |
| **UI Effects**     | `expo-linear-gradient` for gradient backgrounds            |
| **Typography**     | Inter font via `@expo-google-fonts/inter`                  |
| **Splash Screen**  | `expo-splash-screen` with async font loading               |

---

## 🎨 Design System

The app follows a **true-black canvas** design philosophy:

| Token             | Value       | Usage                          |
| ----------------- | ----------- | ------------------------------ |
| `canvas`          | `#000000`   | Main background                |
| `surfaceSoft`     | `#0d0d0d`   | Input backgrounds              |
| `surfaceCard`     | `#1a1a1a`   | Cards & modals                 |
| `onDark`          | `#ffffff`   | Headlines & primary text       |
| `body`            | `#bbbbbb`   | Body paragraphs                |
| `muted`           | `#7e7e7e`   | Captions & inactive elements   |
| `hairline`        | `#3c3c3c`   | Dividers & borders             |
| `mBlueDark`       | `#1c69d4`   | Primary brand accent           |
| `mRed`            | `#e22718`   | Danger / sport accent          |
| `success`         | `#0fa336`   | Positive indicators            |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **Expo CLI** — Install globally or use `npx`
- **Expo Go** app on your phone (iOS/Android) for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/Gym-Wrokout-MobileApp.git
   cd Gym-Wrokout-MobileApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Expo development server**
   ```bash
   npm start
   ```

4. **Run on your device**
   - Scan the QR code with the Expo Go app (Android) or Camera app (iOS)
   - Or press `a` for Android emulator, `i` for iOS simulator

### Platform-Specific API URLs

The app auto-detects the platform and sets the API base URL:

| Platform           | API Base URL                     |
| ------------------ | -------------------------------- |
| Android Emulator   | `http://10.0.2.2:3000/api`      |
| iOS Simulator      | `http://localhost:3000/api`      |
| Physical Device    | Use your computer's local IP     |

---

## 📱 App Navigation

```
App
├── AuthStack (if not logged in)
│   ├── Login Screen
│   └── Register Screen
└── MainTabs (if logged in)
    ├── 🏠 Dashboard
    ├── 🏋️ Workout (Log)
    ├── 📅 History Stack
    │   ├── History List
    │   └── Workout Detail
    ├── 📊 Analytics
    └── 👤 Profile
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/rest-timer-sounds`)
3. Commit your changes (`git commit -m 'Add audio alerts to rest timer'`)
4. Push to the branch (`git push origin feature/rest-timer-sounds`)
5. Open a Pull Request

---

## 📄 License

This project is private and intended for personal use and portfolio demonstration.
