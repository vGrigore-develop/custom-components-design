import PropTypes from 'prop-types';

const GlassmorphicCard = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        relative
        backdrop-blur-[3px]
        bg-gradient-to-br
        from-white/10
        to-white/5
        rounded-3xl
        border
        border-white/10
        shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        p-8
        transition-all
        duration-300
        hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
        hover:border-white/20
        overflow-hidden
        group
        ${className}
      `}
    >
      <div className="
        absolute
        inset-0
        glass-pattern
      "/>
      
      <div className="
        absolute
        inset-0
        glass-shine
      "/>

      <div className="
        relative
        z-10
      ">
        {children}
      </div>
    </div>
  );
};

GlassmorphicCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

GlassmorphicCard.defaultProps = {
  className: ''
};

export default GlassmorphicCard;
