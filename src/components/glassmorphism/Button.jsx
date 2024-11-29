import PropTypes from 'prop-types';

const GlassmorphicButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        backdrop-blur-[6px]
        bg-gradient-to-br
        from-white/15
        to-white/5
        rounded-2xl
        border
        border-white/10
        px-8
        py-3
        transition-all
        duration-300
        shadow-[0_4px_16px_0_rgba(31,38,135,0.15)]
        hover:shadow-[0_4px_20px_0_rgba(31,38,135,0.25)]
        hover:border-white/20
        active:scale-[0.98]
        group
        ${className}
      `}
    >
      <div className="
        absolute
        inset-0
        glass-pattern
        opacity-20
      "/>
      
      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-white/5
        via-transparent
        to-transparent
        opacity-50
      "/>

      <span className="
        relative
        z-10
        font-medium
        text-white/90
      ">
        {children}
      </span>
    </button>
  );
};

GlassmorphicButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

GlassmorphicButton.defaultProps = {
  onClick: () => {},
  className: ''
};

export default GlassmorphicButton;
