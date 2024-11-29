import { useState } from 'react';
import ComponentPlayground from './playground/GlassmorphicPlayground';
import NeumorphicPlayground from './playground/NeumorphicPlayground';
import NeobrutalismPlayground from './playground/NeobrutalismPlayground';

function App() {
  const [activePlayground, setActivePlayground] = useState('glass');

  const getButtonStyles = (type) => {
    const baseStyles = "px-6 py-2.5 rounded-lg transition-all font-medium";
    
    if (type === activePlayground) {
      switch (activePlayground) {
        case 'glass':
          return `${baseStyles} bg-white/20 text-white shadow-lg backdrop-blur-sm`;
        case 'neu':
          return `${baseStyles} bg-[#E0E5EC] text-neutral-700 shadow-[inset_4px_4px_8px_0_rgba(163,177,198,0.6),inset_-4px_-4px_8px_0_rgba(255,255,255,0.5)]`;
        case 'brutal':
          return `${baseStyles} bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`;
        default:
          return baseStyles;
      }
    }

    switch (activePlayground) {
      case 'glass':
        return `${baseStyles} bg-white/10 text-white backdrop-blur-sm hover:bg-white/20`;
      case 'neu':
        return `${baseStyles} bg-[#E0E5EC] text-neutral-700 shadow-[4px_4px_8px_0_rgba(163,177,198,0.6),-4px_-4px_8px_0_rgba(255,255,255,0.5)]`;
      case 'brutal':
        return `${baseStyles} bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`;
      default:
        return baseStyles;
    }
  };

  return (
    <div className="App">
      <nav className={`
        fixed top-0 left-0 right-0 z-50 p-4
        ${activePlayground === 'glass' 
          ? 'bg-black/30 backdrop-blur-md' 
          : activePlayground === 'neu'
            ? 'bg-[#E0E5EC] shadow-[0_4px_12px_rgba(163,177,198,0.4)]'
            : 'bg-orange-100 border-b-4 border-black'
        }
      `}>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActivePlayground('glass')}
            className={getButtonStyles('glass')}
          >
            Glassmorphic
          </button>
          <button
            onClick={() => setActivePlayground('neu')}
            className={getButtonStyles('neu')}
          >
            Neumorphic
          </button>
          <button
            onClick={() => setActivePlayground('brutal')}
            className={getButtonStyles('brutal')}
          >
            Neobrutalism
          </button>
        </div>
      </nav>

      <div className="pt-16">
        {activePlayground === 'glass' ? (
          <ComponentPlayground />
        ) : activePlayground === 'neu' ? (
          <NeumorphicPlayground />
        ) : (
          <NeobrutalismPlayground />
        )}
      </div>
    </div>
  );
}

export default App;