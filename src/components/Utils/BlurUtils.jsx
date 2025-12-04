export function getBlurClasses(isActive) {
  if (!isActive) {
    return {
      container: "",
      overlay: "",
    };
  }

  return {
    container: "blur-xl opacity-60 pointer-events-none",
    overlay:
     "absolute inset-0 flex items-center justify-center text-5xl font-semibold text-black/80 z-10  backdrop-blur-sm",
  };
}