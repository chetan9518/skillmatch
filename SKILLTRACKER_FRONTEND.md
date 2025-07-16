# SkillTracker Frontend - Competitive Programming Dashboard

## Overview

I've created a comprehensive frontend for your competitive programming tracker that integrates with all the backend APIs you mentioned. The enhanced SkillTracker component provides a beautiful, modern UI for tracking progress on both Codeforces and LeetCode platforms.

## API Endpoints Integrated

### Codeforces APIs
- ✅ **POST `/fetchusercf`** - Fetches existing Codeforces user data
- ✅ **POST `/postusercf`** - Adds a new Codeforces handle to user profile
- ✅ **POST `/cfrefresh`** - Refreshes Codeforces statistics

### LeetCode APIs
- ✅ **POST `/lc-refresh`** - Refreshes LeetCode statistics (Note: `/fetchuserlc` doesn't exist in your backend, but the frontend handles fetching through the refresh endpoint)

## Features

### 🎨 Modern UI Design
- **Responsive grid layout** with two main sections for Codeforces and LeetCode
- **Dark mode support** with consistent theming
- **Smooth animations** using Framer Motion
- **Loading states** and **error handling** for better UX
- **Color-coded rank system** for Codeforces ranks
- **Difficulty-based color coding** for LeetCode problems

### 🏆 Codeforces Integration
- **Handle verification** and storage
- **Real-time stats display**:
  - Current rating with color-coded ranks
  - Maximum rating achieved
  - Rank title (Newbie, Pupil, Specialist, etc.)
  - Number of contests participated
  - Handle information
- **One-click refresh** functionality
- **Persistent data storage** (loads existing data on page refresh)

### 💻 LeetCode Integration
- **Username input** with validation
- **Problem-solving statistics**:
  - Easy problems solved (green theme)
  - Medium problems solved (orange theme)
  - Hard problems solved (red theme)
  - Total problems solved (purple theme)
- **Refresh functionality** to update stats
- **Visual problem breakdown** with colored cards

### 📊 Quick Summary Dashboard
- **Combined overview** showing progress from both platforms
- **Gradient design** for visual appeal
- **Conditional rendering** (only shows when data is available)

## Technical Implementation

### Components Structure
```
frontend/src/pages/skilltracker.tsx
├── Codeforces Section
│   ├── Handle Input Form
│   ├── Stats Display Grid
│   └── Refresh Functionality
├── LeetCode Section
│   ├── Username Input
│   ├── Problem Stats Grid
│   └── Refresh Functionality
└── Summary Section
    └── Combined Progress Overview
```

### Dependencies Added
- `framer-motion` - For smooth animations and transitions
- `lucide-react` - For consistent iconography
- `sonner` - For toast notifications
- Existing: `axios`, `react`, `tailwindcss`

### State Management
- **TypeScript interfaces** for type safety
- **Separate state management** for each platform
- **Loading states** for better UX
- **Error handling** with user-friendly messages

## API Response Handling

### Codeforces Data Structure
```typescript
interface CodeforceDetails {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  contests: number;
  lastSynced: string;
}
```

### LeetCode Data Structure
```typescript
interface LeetCodeDetails {
  easy: number;
  medium: number;
  hard: number;
  total: number;
  lastSynced: string;
}
```

## How to Use

### 1. Access the SkillTracker
- Navigate to `/dashboard/skilltracker` in your application
- The component is already integrated into your existing React Router setup

### 2. Add Codeforces Handle
- Enter your Codeforces handle in the input field
- Click "Add Codeforces Handle"
- Data will be fetched and stored automatically

### 3. Add LeetCode Username
- Enter your LeetCode username
- Click the refresh button to fetch stats
- Stats will be displayed in a color-coded grid

### 4. Refresh Data
- Use the refresh buttons (🔄) to update stats
- Smooth rotation animation provides visual feedback
- Toast notifications confirm successful updates

## Error Handling

- **Invalid handles/usernames**: Clear error messages displayed
- **Network errors**: Graceful fallback with retry options
- **Missing data**: Friendly prompts to add information
- **Loading states**: Spinner animations during API calls

## Responsive Design

- **Mobile-first approach** with responsive grid layout
- **Tablet and desktop optimized** layouts
- **Touch-friendly** buttons and interactions
- **Dark mode compatibility** throughout

## Future Enhancements

### Potential Additions
- **Progress charts** showing rating/problem trends over time
- **Goal setting** and progress tracking
- **Social features** to compare with friends
- **Export functionality** for sharing achievements
- **Integration with more platforms** (AtCoder, TopCoder, etc.)

## Testing the Frontend

### Prerequisites
1. Backend server running on `http://localhost:3000`
2. Valid authentication token in localStorage
3. Codeforces/LeetCode accounts for testing

### Running the Application
```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173` (or your configured Vite port).

## API Integration Notes

### Authentication
- All API calls include `Authorization: Bearer ${token}` header
- Token is retrieved from localStorage
- Automatic redirect to signin if token is missing/invalid

### Error Responses
- Backend error messages are displayed via toast notifications
- Fallback to generic error messages if response format is unexpected
- Network errors handled gracefully with retry suggestions

## Styling & Theming

### Color Palette
- **Primary Blue**: Codeforces branding and primary actions
- **Orange**: LeetCode branding and secondary actions
- **Green**: Easy problems and success states
- **Red**: Hard problems and error states
- **Purple**: Total stats and premium features
- **Gray scale**: Text hierarchy and backgrounds

### Typography
- **Heading fonts**: Bold, clear hierarchy
- **Body text**: Readable with proper contrast
- **Code elements**: Monospace for handles/usernames

This implementation provides a complete, production-ready frontend for tracking competitive programming progress with a focus on user experience, visual design, and seamless API integration.