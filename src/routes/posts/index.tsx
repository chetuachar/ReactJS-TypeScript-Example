import { createFileRoute, Link, redirect } from '@tanstack/react-router';
import { isAuthenticated } from '../../hooks/useAuthentication';
import { Card, Flex, Grid } from '@radix-ui/themes';

export const Route = createFileRoute('/posts/')({
  beforeLoad: async () => {
    if (!isAuthenticated()) {
      throw redirect({ to: '/login', replace: true });
    }
  },
  component: PostComponent,
});

function PostComponent() {
  const postCount: number = 10;
  return (
    <Flex justify="center" height="85vh" align="center">
      <Grid columns="3" gap="4">
        {Array.from({ length: postCount }, (_, i) => (
          <Link to={'/posts/$id'} params={{ id: String(i + 1) }} key={i + 1}>
            <Card
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                marginBottom: '10px',
              }}
            >
              Post {i + 1}
            </Card>
          </Link>
        ))}
      </Grid>
    </Flex>
  );
}
