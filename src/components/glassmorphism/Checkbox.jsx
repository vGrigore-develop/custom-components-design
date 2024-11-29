import PropTypes from 'prop-types';

const GlassmorphicCheckbox = ({ 
  checked, 
  onChange, 
  label,
  disabled = false,
  className = '' 
}) => {
  return (
    <label className={`
      inline-flex 
      items-center 
      gap-2 
      cursor-pointer
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        <div className={`
          w-5 h-5
          backdrop-blur-md
          bg-white/10
          border
          border-white/20
          rounded
          transition-all
          duration-300
          peer-checked:bg-white/20
          peer-checked:border-white/30
          peer-hover:border-white/30
          peer-checked:shadow-[0_2px_8px_0_rgba(255,255,255,0.2)]
          relative
          overflow-hidden
        `}>
          <div className="absolute inset-0 glass-pattern opacity-20" />
          
          <svg
            className={`
              absolute
              inset-0
              w-4 h-4
              m-auto
              text-white
              transition-transform
              duration-200
              ${checked ? 'scale-100' : 'scale-0'}
            `}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
          </svg>
        </div>
      </div>
      {label && (
        <span className="text-white/90 select-none">
          {label}
        </span>
      )}
    </label>
  );
};

GlassmorphicCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default GlassmorphicCheckbox;