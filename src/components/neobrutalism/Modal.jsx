import PropTypes from 'prop-types';

const NeobrutalismModal = ({ children, isOpen, onClose, className = '' }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className={`
            relative
            bg-yellow-300
            border-4
            border-black
            rounded-lg
            p-8
            max-w-md
            w-full
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            animate-modal-appear
            ${className}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-2
              right-2
              bg-red-500
              text-white
              font-bold
              w-8
              h-8
              rounded
              border-2
              border-black
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:translate-x-[-2px]
              hover:translate-y-[-2px]
              active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
              active:translate-x-[2px]
              active:translate-y-[2px]
              transition-all
              duration-200
            "
          >
            ×
          </button>

          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

NeobrutalismModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default NeobrutalismModal;