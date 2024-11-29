import PropTypes from 'prop-types';
import { useIsSafari } from '../../hooks/useIsSafari';

const GlassmorphicModal = ({ children, isOpen, onClose, className = '' }) => {
  const isSafari = useIsSafari();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className={`
          absolute 
          inset-0 
          ${isSafari ? 'backdrop-blur-xl' : 'backdrop-blur-[4px]'}
        `}
        onClick={onClose}
      />
      
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
        ${isSafari ? `
          bg-black/5
          backdrop-blur-xl
          border-white/40
          shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
        ` : `
          backdrop-blur-[6px]
          bg-white/10
          border-white/10
          shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        `}
        ${className}
      `}>
        <div className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/20
          via-white/10
          to-transparent
          pointer-events-none
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