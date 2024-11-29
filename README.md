# Modern UI Component Library

A React component library featuring three distinct design styles: Glassmorphism, Neumorphism, and Neobrutalism. Each style comes with a complete set of components and a playground for interactive demonstration.

## Features

### Design Styles
- **Glassmorphism**: Frosted glass effect with transparency and blur
- **Neumorphism**: Soft UI with subtle shadows and depth
- **Neobrutalism**: Bold colors, thick borders, and harsh shadows

### Components
Each design style includes:
- Cards
- Buttons
- Input fields
- Select dropdowns
- Checkboxes
- Sliders
- Modal dialogs
- Badges

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

The library is organized into three main component sets, each with its own design philosophy:

```javascript
// Glassmorphism components
import { 
  GlassmorphicButton, 
  GlassmorphicCard 
} from './components/glassmorphism';

// Neumorphic components
import { 
  NeumorphicButton, 
  NeumorphicCard 
} from './components/neumorphic';

// Neobrutalism components
import { 
  NeobrutalismButton, 
  NeobrutalismCard 
} from './components/neobrutalism';
```

### Example

```jsx
import { GlassmorphicButton } from './components/glassmorphism';

function App() {
  return (
    <GlassmorphicButton onClick={() => alert('Clicked!')}>
      Click Me
    </GlassmorphicButton>
  );
}
```

## Tech Stack

- React 18.3
- Vite
- Tailwind CSS
- ESLint

## Development

```bash
# Lint your code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.