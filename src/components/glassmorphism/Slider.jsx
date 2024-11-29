import PropTypes from 'prop-types';

const GlassmorphicSlider = ({
  min = 0,
  max = 100,
  value,
  onChange,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Track */}
      <div className="
        h-4
        backdrop-blur-md
        bg-white/10
        bg-gradient-to-b
        from-white/20
        to-white/10
        rounded-full
        border
        border-white/20
      ">
        {/* Fill */}
        <div 
          className="
            h-full 
            bg-gradient-to-r
            from-white/30
            to-white/20
            rounded-full
          "
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>

      {/* Actual range input */}
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

      {/* Custom thumb */}
      <div 
        className="
          absolute
          top-1/2
          -translate-y-1/2
          w-6
          h-6
          backdrop-blur-lg
          bg-white/30
          bg-gradient-to-b
          from-white/40
          to-white/20
          rounded-full
          border
          border-white/40
          pointer-events-none
          transition-transform
          duration-200
          hover:scale-110
        "
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