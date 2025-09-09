# Three.js Infinity Loading Screen

## Overview
A stunning 3D pulsing infinity symbol loading screen built with Three.js and React Three Fiber.

## Features
- **3D Infinity Symbol**: Mathematically accurate lemniscate curve
- **Pulsing Animation**: Scale and color pulsing effects
- **Smooth Rotation**: Gentle rotation on multiple axes
- **Particle Background**: Floating particles for atmosphere
- **Brand Integration**: Custom colors matching Limitless Grit brand
- **Responsive Design**: Works on all screen sizes

## Components

### `InfinitySymbol.tsx`
- Creates the 3D infinity symbol using TubeGeometry
- Implements lemniscate mathematical curve
- Handles animations (rotation, pulsing, color changes)

### `LoadingScreen.tsx`
- Main loading screen component
- Contains Three.js Canvas and Scene
- Overlay with brand text and loading dots
- Particle background effects

### `LoadingProvider.tsx`
- Context provider for loading state management
- Handles initial loading (2.5 seconds)
- Provides methods to start/stop loading

### `LoadingDemo.tsx`
- Demo button to test loading screen
- Shows how to programmatically trigger loading

## Usage

### Automatic Loading
The loading screen shows automatically when the app first loads.

### Manual Loading
```tsx
import { useLoading } from '@/components/LoadingProvider'

function MyComponent() {
  const { startLoading, stopLoading } = useLoading()
  
  const handleAction = async () => {
    startLoading()
    // Perform async operation
    await someAsyncOperation()
    stopLoading()
  }
}
```

### Page Transitions (Optional)
```tsx
import { usePageLoading } from '@/hooks/usePageLoading'

function MyPage() {
  usePageLoading(true) // Enable loading on page changes
  // ... component content
}
```

## Customization

### Colors
Update colors in `InfinitySymbol.tsx`:
```tsx
<InfinitySymbol color="#your-color" />
```

### Timing
Adjust loading duration in `LoadingProvider.tsx`:
```tsx
const timer = setTimeout(() => {
  setIsLoading(false)
}, 3000) // Change this value
```

### Animation Speed
Modify animation speeds in `InfinitySymbol.tsx`:
```tsx
meshRef.current.rotation.z += 0.01 // Faster rotation
const pulse = Math.sin(state.clock.elapsedTime * 3) // Faster pulse
```

## Performance
- Uses React Three Fiber for optimal React integration
- Leverages Three.js hardware acceleration
- Suspense boundary for graceful loading
- Efficient geometry caching

## Browser Support
- Modern browsers with WebGL support
- Graceful fallback for older browsers
- Mobile-optimized performance

