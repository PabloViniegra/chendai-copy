import { stack } from "@/data/stack";

export function StackSection() {
  return (
    <div className="space-y-6">
      {stack.map((category) => (
        <div
          key={category.index}
          className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-[88px_1fr]"
        >
          <div className="relative pl-3 sm:pl-4">
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-0 w-px bg-line"
            />
            <p className="font-mono text-xs">
              <span className="text-muted">{category.index}</span>
              <span className="text-foreground/90">{category.title}</span>
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 sm:pl-2">
            {category.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-foreground/85 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
