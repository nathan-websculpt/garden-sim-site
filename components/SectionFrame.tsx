import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionSpacing = "home" | "inner";

type SectionFrameProps = {
  spacing?: SectionSpacing;
  shell?: boolean;
  containerClassName?: string;
  shellClassName?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">;

type SectionShellProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

const spacingClasses: Record<SectionSpacing, string> = {
  home: "pb-10 sm:pb-14",
  inner: "pt-8 pb-14 sm:pt-12 sm:pb-16",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionShell({
  className,
  children,
  ...shellProps
}: SectionShellProps) {
  return (
    <div {...shellProps} className={joinClasses("section-shell", className)}>
      {children}
    </div>
  );
}

export default function SectionFrame({
  spacing = "home",
  shell = true,
  className,
  containerClassName,
  shellClassName,
  children,
  ...sectionProps
}: SectionFrameProps) {
  return (
    <section {...sectionProps} className={joinClasses(spacingClasses[spacing], className)}>
      <div className={joinClasses("garden-container", containerClassName)}>
        {shell ? (
          <SectionShell className={shellClassName}>{children}</SectionShell>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
