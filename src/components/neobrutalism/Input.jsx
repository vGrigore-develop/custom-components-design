import PropTypes from 'prop-types';

const NeobrutalismInput = ({ 
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
        bg-white
        border-4
        border-black
        px-4
        py-2
        text-lg
        font-medium
        text-black
        placeholder-neutral-500
        rounded-lg
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        focus:outline-none
        focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        focus:translate-x-[-2px]
        focus:translate-y-[-2px]
        transition-all
        duration-200
        ${className}
      `}
    />
  );
};

NeobrutalismInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default NeobrutalismInput;