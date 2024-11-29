import PropTypes from 'prop-types';

const GlassmorphicSelect = ({ children, value, onChange, className = '' }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`
        appearance-none
        backdrop-blur-md
        bg-white/10
        rounded-xl
        border
        border-white/20
        px-4
        py-2
        text-white
        transition-all
        duration-300
        hover:border-white/30
        focus:outline-none
        focus:border-white/40
        focus:bg-white/15
        ${className}
      `}
    >
      {children}
    </select>
  );
};

GlassmorphicSelect.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default GlassmorphicSelect