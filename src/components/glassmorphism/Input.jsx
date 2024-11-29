import PropTypes from 'prop-types';

const GlassmorphicInput = ({ 
  placeholder, 
  type = 'text',
  value,
  onChange,
  className = '' 
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full
        backdrop-blur-md
        bg-white/10
        bg-gradient-to-b
        from-white/20
        to-white/10
        rounded-xl
        border
        border-white/20
        px-4
        py-2
        text-white
        placeholder-white/50
        transition-all
        duration-300
        hover:border-white/30
        focus:outline-none
        focus:border-white/40
        focus:bg-white/15
        focus:shadow-[0_4px_16px_0_rgba(31,38,135,0.3)]
        ${className}
      `}
    />
  );
};

GlassmorphicInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default GlassmorphicInput;