// Should have no errors for alias
import { Hi } from "@/hi";

type AllHeadingProps = React.ComponentPropsWithoutRef<"h1"> & {
  semanticLevel: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({
  semanticLevel,
  size,
  className,
  children,
  ...props
}: AllHeadingProps) => {
  const Hx: keyof JSX.IntrinsicElements = `h${semanticLevel}`;
  const headingSize = `heading-${size || semanticLevel}`;

  return (
    <Hx className={`${headingSize} ${className}`} {...props}>
      <Hi /> {children}
    </Hx>
  );
};
