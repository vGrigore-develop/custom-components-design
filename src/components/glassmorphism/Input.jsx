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
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
      }}
      className={`
        w-full
        backdrop-blur-md
        rounded-xl
        border
        border-[rgba(255,255,255,0.2)]
        px-4
        py-2
        text-white
        placeholder-[rgba(255,255,255,0.5)]
        transition-all
        duration-300
        hover:border-[rgba(255,255,255,0.3)]
        focus:outline-none
        focus:border-[rgba(255,255,255,0.4)]
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