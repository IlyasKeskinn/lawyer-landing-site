export const SectionImage = ({ src, alt, height = "96" }) => {
  return (
    <img
      src={`./src/assets/${src}`}
      alt={`${alt}`}
      className={`h-${height} w-full object-cover object-top rounded`}
    />
  );
};
