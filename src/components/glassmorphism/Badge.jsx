import PropTypes from 'prop-types';

const GlassmorphicBadge = ({ children, className = '' }) => {
  return (
    <span className={`
      inline-block
      backdrop-blur-md
      bg-white/10
      rounded-full
      border
      border-white/20
      px-3
      py-1
      text-sm
      text-white
      transition-all
      duration-300
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
