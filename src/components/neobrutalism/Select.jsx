import PropTypes from 'prop-types';

const NeobrutalismSelect = ({ 
  children, 
  value, 
  onChange, 
  className = '' 
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`
          w-full
          bg-white
          border-4
          border-black
          px-4
          py-2
          pr-10
          text-lg
          font-medium
          text-black
          rounded-lg
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[-2px]
          hover:translate-y-[-2px]
          focus:outline-none
          focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          focus:translate-x-[-2px]
          focus:translate-y-[-2px]
          transition-all
          duration-200
          appearance-none
          ${className}
        `}
      >
        {children}
      </select>
      
      {/* Custom arrow */}
      <div className="
        absolute 
        right-4 
        top-1/2 
        -translate-y-1/2 
        pointer-events-none
        text-black
      ">
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[3]"
        >
          <path 
            d="M2.5 4.5L6 8L9.5 4.5" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

NeobrutalismSelect.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default NeobrutalismSelect;