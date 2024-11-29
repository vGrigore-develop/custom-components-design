import PropTypes from 'prop-types';

const NeobrutalismCard = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-yellow-300
      border-4
      border-black
      p-8
      rounded-lg
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
      transition-all
      duration-200
      ${className}
    `}>
      {children}
    </div>
  );
};

NeobrutalismCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default NeobrutalismCard;