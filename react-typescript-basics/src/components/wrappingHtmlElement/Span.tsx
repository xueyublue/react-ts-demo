type SpanProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"span">, "children">;

export default function Span({ variant, children, ...rest }: SpanProps) {
  return (
    <span className={`class-with-${variant}`} {...rest}>
      {children}
    </span>
  );
}
