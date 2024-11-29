import PropTypes from 'prop-types';

const GlassmorphicSlider = ({ 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1,
  label,
  disabled = false,
  className = '' 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-white/90 text-sm mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="range"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={`
            w-full
            appearance-none
            bg-transparent
            cursor-pointer
            disabled:cursor-not-allowed
            disabled:opacity-50
            [&::-webkit-slider-runnable-track]:h-1
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:backdrop-blur-md
            [&::-webkit-slider-runnable-track]:bg-white/10
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white/90
            [&::-webkit-slider-thumb]:backdrop-blur-lg
            [&::-webkit-slider-thumb]:border
            [&::-webkit-slider-thumb]:border-white/20
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:-mt-2
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            hover:[&::-webkit-slider-thumb]:bg-white
            active:[&::-webkit-slider-thumb]:scale-110
            [&::-moz-range-track]:h-1
            [&::-moz-range-track]:rounded-full
            [&::-moz-range-track]:bg-white/10
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white/90
            [&::-moz-range-thumb]:border-none
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            hover:[&::-moz-range-thumb]:bg-white
            active:[&::-moz-range-thumb]:scale-110
          `}
        />
        
        <div className="absolute -top-1 right-0 text-sm text-white/70">
          {value}
        </div>
      </div>
    </div>
  );
};

GlassmorphicSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default GlassmorphicSlider;