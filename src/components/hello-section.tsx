export function HelloSection() {
  return (
    <section
      id="hello"
      aria-labelledby="hello-heading"
      className="screen-line-top screen-line-bottom border-x border-line p-4"
    >
      <h2
        id="hello-heading"
        className="font-mono text-xs tracking-widest text-muted"
      >
        Hello
      </h2>

      <div className="mt-6 space-y-5 text-[15px] leading-7 text-foreground/85">
        <p>
          I&rsquo;m{" "}
          <strong className="font-medium text-foreground">Chánh Đại</strong>{" "}
          (call me Dai) — a Design Engineer with 5+ years of experience, known
          for pixel-perfect execution and an obsessive attention to detail.
        </p>
        <p>
          Passionate about exploring new technologies and turning ideas into
          reality through polished, thoughtfully crafted projects.
        </p>
        <p>
          Creator of{" "}
          <a
            href="https://github.com/ncdai/chanhdai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            chanhdai.com
          </a>{" "}
          (2k stars),{" "}
          <a
            href="https://react-wheel-picker.chanhdai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            React Wheel Picker
          </a>{" "}
          (30k+ weekly downloads, ▲Vercel OSS Program), and{" "}
          <a
            href="https://zadark.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            ZaDark
          </a>{" "}
          (80k+ downloads, 30k+ users) — peak metrics.
        </p>
      </div>
    </section>
  );
}
