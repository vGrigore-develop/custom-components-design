import PropTypes from 'prop-types';

const NeumorphicInput = ({ placeholder, type = 'text', value, onChange, className = '' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full
        bg-[#E0E5EC]
        px-4
        py-2
        rounded-[16px]
        shadow-[inset_6px_6px_12px_0_rgba(163,177,198,0.6),inset_-6px_-6px_12px_0_rgba(255,255,255,0.5)]
        focus:shadow-[inset_8px_8px_16px_0_rgba(163,177,198,0.6),inset_-8px_-8px_16px_0_rgba(255,255,255,0.5)]
        focus:outline-none
        text-neutral-700
        placeholder-neutral-400
        transition-shadow
        duration-300
        ${className}
      `}
    />
  );
};

NeumorphicInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default NeumorphicInput;