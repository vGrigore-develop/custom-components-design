import PropTypes from 'prop-types';

const NeumorphicButton = ({ children, onClick, variant = 'default', className = '' }) => {
  const baseStyles = 'relative transition-all duration-300 font-medium';
  
  const variants = {
    default: `
      bg-[#E0E5EC]
      px-8 py-3
      rounded-[20px]
      shadow-[8px_8px_16px_0_rgba(163,177,198,0.6),-8px_-8px_16px_0_rgba(255,255,255,0.5)]
      hover:shadow-[12px_12px_20px_0_rgba(163,177,198,0.6),-12px_-12px_20px_0_rgba(255,255,255,0.5)]
      active:shadow-[inset_8px_8px_16px_0_rgba(163,177,198,0.6),inset_-8px_-8px_16px_0_rgba(255,255,255,0.5)]
      text-neutral-700
    `,
    pressed: `
      bg-[#E0E5EC]
      px-8 py-3
      rounded-[20px]
      shadow-[inset_8px_8px_16px_0_rgba(163,177,198,0.6),inset_-8px_-8px_16px_0_rgba(255,255,255,0.5)]
      text-neutral-700
    `
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

NeumorphicButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'pressed']),
  className: PropTypes.string
};

export default NeumorphicButton;