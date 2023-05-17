// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import type { PageProps } from "$fresh/server.ts";

import Layout from "@/components/Layout.tsx";
import Head from "@/components/Head.tsx";

export default function HomePage(props: PageProps) {
  return (
    <>
      <Head href={props.url.href} />
      <Layout session={props.data?.session}>
        <section>
          Hello
        </section>
      </Layout>
    </>
  );
}
