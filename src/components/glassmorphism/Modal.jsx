import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicModal = ({ children, isOpen, onClose, className = '' }) => {
  const isSafari = useIsSafari();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with subtle blur */}
      <div 
        className={`
          absolute 
          inset-0 
          ${isSafari 
            ? 'bg-black/20' 
            : 'backdrop-blur-[4px] bg-black/5'
          }
        `}
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className={`
        relative
        rounded-3xl
        border
        p-8
        max-w-md
        w-full
        transition-all
        duration-300
        animate-modal-appear
        overflow-hidden
        ${isSafari 
          ? 'bg-[#ffffff33] border-[#ffffff33]' 
          : 'backdrop-blur-[6px] bg-white/10 border-white/10'
        }
        shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        ${className}
      `}>
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

        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

GlassmorphicModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default GlassmorphicModal;