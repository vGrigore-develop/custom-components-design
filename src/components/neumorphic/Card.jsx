import PropTypes from 'prop-types';

const NeumorphicCard = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-[#E0E5EC]
      p-8
      rounded-[32px]
      shadow-[16px_16px_32px_0_rgba(163,177,198,0.6),-16px_-16px_32px_0_rgba(255,255,255,0.5)]
      transition-shadow
      duration-300
      hover:shadow-[20px_20px_40px_0_rgba(163,177,198,0.6),-20px_-20px_40px_0_rgba(255,255,255,0.5)]
      ${className}
    `}>
      {children}
    </div>
  );
};

NeumorphicCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default NeumorphicCard;