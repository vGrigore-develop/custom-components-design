import PropTypes from 'prop-types';

const NeobrutalismSlider = ({
  min = 0,
  max = 100,
  value,
  onChange,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`
      relative 
      ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
      ${className}
    `}>
      <div className={`
        h-4
        bg-white
        border-4
        border-black
        rounded-full
        ${disabled 
          ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-neutral-200' 
          : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
        }
      `}>
        <div 
          className={`
            h-full 
            rounded-full
            ${disabled ? 'bg-neutral-400' : 'bg-blue-500'}
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
          [&::-webkit-slider-thumb]:w-8
          [&::-webkit-slider-thumb]:h-8
        "
      />

      <div 
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          w-8
          h-8
          border-4
          border-black
          rounded-full
          pointer-events-none
          transition-all
          duration-200
          ${disabled 
            ? 'bg-neutral-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
            : `
              bg-yellow-300
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:scale-110
            `
          }
        `}
        style={{ 
          left: `calc(${((value - min) / (max - min)) * 100}% - 1rem)`,
        }}
      />
    </div>
  );
};

NeobrutalismSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default NeobrutalismSlider;