// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { ComponentChild, ComponentChildren, JSX } from "preact";

import type { Session } from "@supabase/supabase-js";

const SITE_NAME = "Promptopia";
const SITE_DESCRIPTION = "Discover & Share AI prompts ";

interface NavProps extends JSX.HTMLAttributes<HTMLElement> {
  active?: string;
  items: (JSX.HTMLAttributes<HTMLAnchorElement> & { inner: ComponentChild })[];
}

function Nav(props: NavProps) {
  return (
    <nav>
      <ul
        class={`flex gap-x-8 gap-y-2 items-center justify-between h-full ${
          props.class ?? ""
        }`}
      >
        {props.items.map((item) => (
          <li>
            <a href={item.href}>{item.inner}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Header(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <header
      {...props}
      class={`p-4 justify-between  flex z-10 ${props.class ?? ""}`}
    >
      <a href="/">
      </a>
      <div class="text-2xl">
        Discover and share ai propmpts
      </div>
      {props.children}
    </header>
  );
}

function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      {...props}
      class={`flex flex-col md:flex-row p-4 justify-between gap-y-4 ${
        props.class ?? ""
      }`}
    >
      <span>
        <strong>{SITE_NAME}</strong>
      </span>
      {props.children}
    </footer>
  );
}

interface LayoutProps {
  children: ComponentChildren;
  session: Session | null;
}

export default function Layout(props: LayoutProps) {
  const headerNavItems = [
    {
      href: "/submit",
      inner: <span class="">Submit</span>,
    },
    props.session
      ? {
        href: "/account",
        inner: "Account",
      }
      : {
        href: "/login",
        inner: "Login",
      },
  ];

  const footerNavItems = [
    {
      href: "/blog",
      inner: "Blog",
    },
    {
      inner: "Source code",
      href: "https://github.com/denoland/saaskit",
    },
    {
      href: "https://fresh.deno.dev",
      inner: (
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
        />
      ),
    },
  ];

  return (
    <html class="">
      <body class="flex flex-col h-screen">
        <Header>
          <Nav items={headerNavItems} />
        </Header>
        <main>
          {props.children}
        </main>
        <Footer>
          <Nav items={footerNavItems} />
        </Footer>
      </body>
    </html>
  );
}
