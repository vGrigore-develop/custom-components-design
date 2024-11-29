import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicInput = ({ 
  placeholder, 
  type = 'text',
  value,
  onChange,
  className = '' 
}) => {
  const isSafari = useIsSafari();

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full
        rounded-xl
        border
        px-4
        py-2
        text-white
        placeholder-white/50
        transition-all
        duration-300
        ${isSafari 
          ? 'bg-[#ffffff33] border-[#ffffff33]' // Safari fallback
          : 'backdrop-blur-md bg-white/10 border-white/20'
        }
        hover:border-white/30
        focus:outline-none
        focus:border-white/40
        focus:bg-white/15
        ${className}
      `}
    />
  );
};

GlassmorphicInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default GlassmorphicInput;