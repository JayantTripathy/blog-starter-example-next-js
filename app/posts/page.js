import Link from 'next/link';


export default async function PostsPage() {
  const res = await fetch('http://localhost:3000/api/posts/');
  
  const { posts } =  await res.json()

  return (
    <div style={{ marginTop: '-60px' }}>
   
      <h3>All Blog Posts</h3>

      <div style={{ paddingTop: '20px' }}>
        {posts.map(post => (
          <article key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h5>{post.title}</h5>
            </Link>
            <p style={{ paddingBottom: '10px'}}>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}