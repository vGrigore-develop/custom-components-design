import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicBadge = ({ children, className = '' }) => {
  const isSafari = useIsSafari();

  return (
    <span className={`
      inline-block
      rounded-full
      border
      px-3
      py-1
      text-sm
      text-white
      transition-all
      duration-300
      ${isSafari 
        ? 'bg-[#ffffff33] border-[#ffffff33]' 
        : 'backdrop-blur-md bg-white/10 border-white/20'
      }
      hover:bg-white/15
      ${className}
    `}>
      {children}
    </span>
  );
};

GlassmorphicBadge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default GlassmorphicBadge;