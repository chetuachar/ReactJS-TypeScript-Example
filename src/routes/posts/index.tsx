import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: PostComponent,
});

function PostComponent() {
  return (
    <div>
      <Link to="/posts/$id" params={{ id: "3" }}>
        Post 3
      </Link>
    </div>
  );
}
