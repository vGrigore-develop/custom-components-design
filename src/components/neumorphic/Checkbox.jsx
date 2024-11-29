import PropTypes from 'prop-types';

const NeumorphicCheckbox = ({
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
          bg-[#E0E5EC]
          rounded-lg
          transition-all
          duration-300
          ${checked
            ? 'shadow-[inset_3px_3px_6px_0_rgba(163,177,198,0.6),inset_-3px_-3px_6px_0_rgba(255,255,255,0.5)]'
            : 'shadow-[3px_3px_6px_0_rgba(163,177,198,0.6),-3px_-3px_6px_0_rgba(255,255,255,0.5)]'
          }
          relative
        `}>
          <svg
            className={`
              absolute
              inset-0
              w-3 h-3
              m-auto
              text-neutral-600
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
        <span className="text-neutral-700 select-none">
          {label}
        </span>
      )}
    </label>
  );
};

NeumorphicCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default NeumorphicCheckbox;