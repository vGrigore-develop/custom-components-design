import PropTypes from "prop-types";

const GlassmorphicModal = ({ children, isOpen, onClose, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 backdrop-blur-[4px] bg-black/5"
        onClick={onClose}
      />
      
      <div className={`
        relative
        backdrop-blur-[6px]
        bg-gradient-to-br
        from-white/10
        to-white/5
        rounded-3xl
        border
        border-white/10
        shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        p-8
        max-w-md
        w-full
        transition-all
        duration-300
        animate-modal-appear
        overflow-hidden
        ${className}
      `}>
        <div className="
          absolute
          inset-0
          glass-pattern
          opacity-20
        "/>
        
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