type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export default function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}
