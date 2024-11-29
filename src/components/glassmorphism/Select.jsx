import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicSelect = ({ children, value, onChange, className = '' }) => {
  const isSafari = useIsSafari();

  return (
    <select
      value={value}
      onChange={onChange}
      className={`
        appearance-none
        w-full
        rounded-xl
        border
        px-4
        py-2
        text-white
        transition-all
        duration-300
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
  );
};

GlassmorphicSelect.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default GlassmorphicSelect;