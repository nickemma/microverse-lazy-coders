function SectionTitle({ icon, title, className }) {
  return (
    <div className={`programs-title ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
