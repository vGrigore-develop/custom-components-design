import PropTypes from 'prop-types';

const NeobrutalismSelect = ({ 
  children, 
  value, 
  onChange, 
  className = '' 
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`
        appearance-none
        w-full
        bg-white
        border-4
        border-black
        px-4
        py-2
        pr-10
        text-lg
        font-medium
        text-black
        rounded-lg
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[-2px]
        hover:translate-y-[-2px]
        focus:outline-none
        focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        focus:translate-x-[-2px]
        focus:translate-y-[-2px]
        transition-all
        duration-200
        ${className}
      `}
    >
      {children}
    </select>
  );
};

NeobrutalismSelect.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default NeobrutalismSelect;