import PropTypes from 'prop-types';

const NeumorphicSelect = ({ children, value, onChange, className = '' }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`
          w-full
          bg-[#E0E5EC]
          px-4
          py-2
          rounded-[16px]
          shadow-[inset_6px_6px_12px_0_rgba(163,177,198,0.6),inset_-6px_-6px_12px_0_rgba(255,255,255,0.5)]
          focus:shadow-[inset_8px_8px_16px_0_rgba(163,177,198,0.6),inset_-8px_-8px_16px_0_rgba(255,255,255,0.5)]
          focus:outline-none
          text-neutral-700
          appearance-none
          transition-shadow
          duration-300
          ${className}
        `}
      >
        {children}
      </select>
      
      <div className="
        absolute 
        right-4 
        top-1/2 
        -translate-y-1/2 
        pointer-events-none
        text-neutral-600
      ">
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M2.5 4.5L6 8L9.5 4.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

NeumorphicSelect.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default NeumorphicSelect;