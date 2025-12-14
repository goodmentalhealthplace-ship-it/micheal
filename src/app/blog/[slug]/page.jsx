import { createClient } from "contentful";
import { notFound } from "next/navigation";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getPost(slug) {
  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  return res.items[0];
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const image = post.fields.featuredImage;
  const imageUrl = image ? `https:${image.fields.file.url}` : null;

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      {/* Featured Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={post.fields.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "24px",
          }}
        />
      )}

      {/* Title */}
      <h1 style={{ marginBottom: "20px" }}>
        {post.fields.title}
      </h1>

      {/* Body */}
      {post.fields.body.content.map((block, index) => {
        if (block.nodeType === "paragraph") {
          return (
            <p
              key={index}
              style={{
                lineHeight: "1.7",
                marginBottom: "16px",
                fontSize: "16px",
              }}
            >
              {block.content?.[0]?.value}
            </p>
          );
        }

        return null;
      })}
    </main>
  );
}
