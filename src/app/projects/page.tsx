import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 60,
      }
    });
  return response.json();
}

export default async function Posts() {
  const posts = await getData();
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}