import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Server Component Example",
  description: "Demonstrating Server Components in Next.js",
};

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

  return (
    <html lang="en">
      <body>
        <Navbar />
        <h1>Server Component Example</h1>
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </body>
    </html>
  );
}
