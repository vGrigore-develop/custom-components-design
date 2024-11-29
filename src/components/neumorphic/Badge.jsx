import PropTypes from 'prop-types';

const NeumorphicBadge = ({ children, className = '' }) => {
  return (
    <span className={`
      inline-block
      bg-[#E0E5EC]
      px-3
      py-1
      rounded-[12px]
      text-sm
      text-neutral-700
      shadow-[4px_4px_8px_0_rgba(163,177,198,0.6),-4px_-4px_8px_0_rgba(255,255,255,0.5)]
      transition-shadow
      duration-300
      hover:shadow-[6px_6px_12px_0_rgba(163,177,198,0.6),-6px_-6px_12px_0_rgba(255,255,255,0.5)]
      ${className}
    `}>
      {children}
    </span>
  );
};

NeumorphicBadge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default NeumorphicBadge;