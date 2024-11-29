import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicSlider = ({
  min = 0,
  max = 100,
  value,
  onChange,
  disabled = false,
  className = ''
}) => {
  const isSafari = useIsSafari();

  return (
    <div className={`relative ${className}`}>
      <div className={`
        h-4
        rounded-full
        border
        ${isSafari 
          ? 'bg-[#ffffff33] border-[#ffffff33]' 
          : 'backdrop-blur-md bg-white/10 border-white/20'
        }
      `}>
        <div 
          className={`
            h-full 
            rounded-full
            ${disabled ? 'bg-white/20' : 'bg-white/30'}
          `}
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="
          absolute
          inset-0
          w-full
          opacity-0
          cursor-pointer
          disabled:cursor-not-allowed
        "
      />

      <div 
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          w-6
          h-6
          rounded-full
          border
          pointer-events-none
          transition-transform
          duration-200
          hover:scale-110
          ${isSafari 
            ? 'bg-[#ffffff4d] border-[#ffffff4d]' 
            : 'backdrop-blur-lg bg-white/30 border-white/40'
          }
          ${disabled ? 'opacity-50' : ''}
        `}
        style={{ 
          left: `calc(${((value - min) / (max - min)) * 100}% - 0.75rem)`,
        }}
      />
    </div>
  );
};

GlassmorphicSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default GlassmorphicSlider;