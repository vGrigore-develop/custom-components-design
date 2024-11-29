import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicButton = ({ 
  children, 
  onClick, 
  disabled = false,
  className = '' 
}) => {
  const isSafari = useIsSafari();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        overflow-hidden
        px-8
        py-3
        rounded-2xl
        border
        transition-all
        duration-300
        shadow-[0_4px_16px_0_rgba(31,38,135,0.15)]
        hover:shadow-[0_4px_20px_0_rgba(31,38,135,0.25)]
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        group
        ${isSafari 
          ? 'bg-[#ffffff33] border-[#ffffff33]' 
          : 'backdrop-blur-[6px] bg-gradient-to-br from-white/15 to-white/5 border-white/10'
        }
        hover:border-white/20
        ${className}
      `}
    >
      {/* Glass pattern overlay */}
      <div className="
        absolute
        inset-0
        glass-pattern
        opacity-20
      "/>
      
      {/* Subtle light reflection effect */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-white/5
        via-transparent
        to-transparent
        opacity-50
      "/>

      <span className="
        relative
        z-10
        font-medium
        text-white/90
      ">
        {children}
      </span>
    </button>
  );
};

GlassmorphicButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default GlassmorphicButton;