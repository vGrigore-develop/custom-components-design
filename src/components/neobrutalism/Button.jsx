import PropTypes from 'prop-types';

const NeobrutalismButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-pink-500 hover:bg-pink-600',
    success: 'bg-green-500 hover:bg-green-600',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        text-white
        font-bold
        px-8
        py-3
        border-4
        border-black
        rounded-lg
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[-2px]
        hover:translate-y-[-2px]
        active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[4px]
        active:translate-y-[4px]
        transition-all
        duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

NeobrutalismButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success']),
  className: PropTypes.string
};

export default NeobrutalismButton;