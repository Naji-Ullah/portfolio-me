export default function Button({ href, variant = "primary", children, ...props }) {
  const className = `btn btn--${variant}`;
  
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
