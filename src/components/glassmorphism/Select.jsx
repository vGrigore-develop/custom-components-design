import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicSelect = ({ children, value, onChange, className = '' }) => {
  const isSafari = useIsSafari();

  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`
          w-full
          rounded-xl
          border
          px-4
          py-2
          text-white
          transition-all
          duration-300
          appearance-none
          pr-10
          ${isSafari 
            ? 'bg-[#ffffff33] border-[#ffffff33]' 
            : 'backdrop-blur-md bg-white/10 border-white/20'
          }
          hover:border-white/30
          focus:outline-none
          focus:border-white/40
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
        text-white/70
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

GlassmorphicSelect.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default GlassmorphicSelect;