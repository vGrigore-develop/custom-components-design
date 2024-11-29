import PropTypes from 'prop-types';

const NeumorphicSlider = ({
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
        <label className="block text-neutral-700 text-sm mb-1">
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
            [&::-webkit-slider-runnable-track]:bg-[#E0E5EC]
            [&::-webkit-slider-runnable-track]:shadow-[inset_2px_2px_4px_0_rgba(163,177,198,0.6),inset_-2px_-2px_4px_0_rgba(255,255,255,0.5)]
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#E0E5EC]
            [&::-webkit-slider-thumb]:shadow-[3px_3px_6px_0_rgba(163,177,198,0.6),-3px_-3px_6px_0_rgba(255,255,255,0.5)]
            [&::-webkit-slider-thumb]:-mt-2
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            active:[&::-webkit-slider-thumb]:shadow-[inset_3px_3px_6px_0_rgba(163,177,198,0.6),inset_-3px_-3px_6px_0_rgba(255,255,255,0.5)]
            [&::-moz-range-track]:h-1
            [&::-moz-range-track]:rounded-full
            [&::-moz-range-track]:bg-[#E0E5EC]
            [&::-moz-range-track]:shadow-[inset_2px_2px_4px_0_rgba(163,177,198,0.6),inset_-2px_-2px_4px_0_rgba(255,255,255,0.5)]
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-[#E0E5EC]
            [&::-moz-range-thumb]:border-none
            [&::-moz-range-thumb]:shadow-[3px_3px_6px_0_rgba(163,177,198,0.6),-3px_-3px_6px_0_rgba(255,255,255,0.5)]
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            active:[&::-moz-range-thumb]:shadow-[inset_3px_3px_6px_0_rgba(163,177,198,0.6),inset_-3px_-3px_6px_0_rgba(255,255,255,0.5)]
          `}
        />
        
        <div className="absolute -top-1 right-0 text-sm text-neutral-600">
          {value}
        </div>
      </div>
    </div>
  );
};

NeumorphicSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default NeumorphicSlider;