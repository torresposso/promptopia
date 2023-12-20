import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  const tailwindScript = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  `;
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>gemini-deno-fresh</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css"
        />
        <script src="https://cdn.tailwindcss.com/3.3.0"></script>
        <script dangerouslySetInnerHTML={{ __html: tailwindScript }} />
      </head>
      <body class="bg-neutral-800">
        <Component />
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js" />
      </body>
    </html>
  );
}
