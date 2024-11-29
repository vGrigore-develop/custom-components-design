import PropTypes from 'prop-types';

const NeumorphicModal = ({ children, isOpen, onClose, className = '' }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-[#E0E5EC]/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className={`
            relative
            bg-[#E0E5EC]
            rounded-[32px]
            shadow-[20px_20px_40px_0_rgba(163,177,198,0.6),-20px_-20px_40px_0_rgba(255,255,255,0.5)]
            p-8
            max-w-md
            w-full
            animate-modal-appear
            ${className}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

NeumorphicModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default NeumorphicModal;