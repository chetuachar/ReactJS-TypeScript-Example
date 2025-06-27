import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: ContactComponent,
});

function ContactComponent() {
  const navigate = useNavigate();
  return (
    <div>
      Contact Page
      <br />
      <button onClick={() => navigate({ to: "/about" })}>
        Navigate to Contact page
      </button>
    </div>
  );
}
