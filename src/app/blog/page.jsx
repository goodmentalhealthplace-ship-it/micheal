import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getPosts() {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  return res.items;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Blog</h1>

      {posts.length === 0 && <p>No posts found.</p>}

      {posts.map((post) => (
        <article key={post.sys.id} style={{ marginBottom: "30px" }}>
          <h2>{post.fields.title}</h2>
          <div>{post.fields.body?.content?.[0]?.content?.[0]?.value}</div>
        </article>
      ))}
    </main>
  );
}
