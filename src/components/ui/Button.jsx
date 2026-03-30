export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const buttonClassName = `btn btn--${variant} ${className}`.trim();
  
  return (
    <a href={href} className={buttonClassName} {...props}>
      {children}
    </a>
  );
}
