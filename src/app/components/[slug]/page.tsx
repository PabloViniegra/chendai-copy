import { notFound } from "next/navigation";
import { components } from "@/data/components-list";

type ComponentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return components.map((component) => ({
    slug: component.href.replace("/components/", ""),
  }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = components.find(
    (item) => item.href === `/components/${slug}`,
  );

  if (!component) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl border-x border-line px-4 py-8 sm:px-6 sm:py-12">
      <header className="screen-line-bottom -mx-4 mb-6 px-4 pb-6 sm:-mx-6 sm:px-6">
        <p className="font-mono text-xs tracking-widest text-muted">
          COMPONENT
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">
          {component.name}
        </h1>
        <p className="mt-2 max-w-xl text-muted">
          A polished, reusable interface primitive from the Chánh Đại registry.
        </p>
      </header>

      <section className="screen-line-top screen-line-bottom grid min-h-72 place-items-center border-x border-line bg-accent-muted p-6">
        <div className="text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-line bg-background font-mono text-xl text-muted">
            {component.name.charAt(0)}
          </div>
          <p className="mt-4 font-mono text-sm text-muted">Preview</p>
        </div>
      </section>
    </main>
  );
}
