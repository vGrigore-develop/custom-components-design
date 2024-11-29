import PropTypes from 'prop-types';

const NeobrutalismBadge = ({ children, className = '' }) => {
  return (
    <span className={`
      inline-block
      bg-pink-500
      text-white
      font-bold
      px-3
      py-1
      text-sm
      border-2
      border-black
      rounded-lg
      shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      hover:translate-x-[-2px]
      hover:translate-y-[-2px]
      transition-all
      duration-200
      ${className}
    `}>
      {children}
    </span>
  );
};

NeobrutalismBadge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default NeobrutalismBadge;