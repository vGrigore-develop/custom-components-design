import PropTypes from 'prop-types';

const NeobrutalismCheckbox = ({
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
      gap-3 
      transform
      transition-all
      duration-200
      ${disabled 
        ? 'opacity-60 cursor-not-allowed' 
        : 'cursor-pointer hover:-translate-y-[2px]'
      }
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
          w-8
          h-8
          border-4
          border-black
          rounded-lg
          transition-all
          duration-200
          ${disabled 
            ? 'bg-neutral-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
            : `
              bg-white
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              peer-checked:bg-blue-500
            `
          }
        `}/>
        
        <svg
          className={`
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-5
            h-5
            text-white
            opacity-0
            transition-opacity
            duration-200
            ${checked ? 'opacity-100' : ''}
            ${disabled ? 'text-neutral-500' : ''}
          `}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      
      {label && (
        <span className={`
          text-lg
          font-bold
          select-none
          ${disabled ? 'text-neutral-500' : ''}
        `}>
          {label}
        </span>
      )}
    </label>
  );
};

NeobrutalismCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default NeobrutalismCheckbox;