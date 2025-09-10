const gradientVariants = {
  top: "bg-gradient-to-t from-white/10 to-transparent",
  bottom: "bg-gradient-to-b from-white/10 to-transparent",
  left: "bg-gradient-to-l from-white/10 to-transparent",
  right: "bg-gradient-to-r from-white/10 to-transparent",
};

// fade: "top" or "bottom"
// gradient: "tr", "tl", "br", "bl"
const GradientDiv = ({
  className = "",
  children,
  fade = "top",
  gradient = "tr",
}) => {
  // Map fade to Tailwind
  const fadeClasses = {
    top: "absolute top-0 bottom-1/3 inset-x-0",
    bottom: "absolute top-1/3 bottom-0 inset-x-0",
  };

  // Map fade to CSS
  const fadeGradient = {
    top: "linear-gradient(to top, transparent, #0D1117)",
    bottom: "linear-gradient(to bottom, transparent, #0D1117)",
  };

  // Map gradient CSS
  const gradients = {
    tr: "linear-gradient(to top right, rgba(168, 85, 247, 0.1) 0%, rgba(255,255,255,0) 70%)",
    tl: "linear-gradient(to top left, rgba(168, 85, 247, 0.1) 0%, rgba(255,255,255,0) 70%)",
    br: "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1) 0%, rgba(255,255,255,0) 70%)",
    bl: "linear-gradient(to bottom left, rgba(168, 85, 247, 0.1) 0%, rgba(255,255,255,0) 70%)",
  };

  return (
    <div className="relative -mx-20">
      {/* Fade gradient */}
      <div
        className={`${fadeClasses[fade]} bg-white z-10`}
        style={{ background: fadeGradient[fade] }}
      />

      <div className="relative w-full rounded-2xl border border-white/10 shadow overflow-hidden">
        {/* Half gradient */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{ background: gradients[gradient] }}
        />

        <div className={`relative z-10 w-full py-20 px-20 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GradientDiv;
