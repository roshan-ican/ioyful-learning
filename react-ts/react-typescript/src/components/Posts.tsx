import { useEffect, useState } from "react";
import Post from "./Post";

type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

async function getPosts(): Promise<PostProps> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Faild to fetch");
  }
  return res.json();
}

function Posts() {
  const [data, setData] = useState<PostProps | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        setData(posts);
      } catch (error) {
        console.log("🚀 ~ file: Posts.tsx:26 ~ fetchData ~ error:", error);
      }
    };
    fetchData();
  }, []);
  console.log("🚀 ~ file: Posts.tsx:11 ~ Home ~ data:", data);
  return (
    <main>
      {data &&
        data.map((post) => (
          <Post
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
    </main>
  );
}
export default Posts;
