import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getPosts() {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate",
  });

  return res.items;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Blog</h1>

      {posts.map((post) => (
        <article key={post.sys.id} style={{ marginBottom: "30px" }}>
          <h2>{post.fields.title}</h2>
          <p>{post.fields.publishDate}</p>
        </article>
      ))}
    </main>
  );
}
