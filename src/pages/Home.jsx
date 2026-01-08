import PageLayout from "../layouts/PageLayout.jsx";
import Timeline from "../components/Timeline.jsx";
import PostEditor from "../components/PostEditor.jsx";
import useAuth from "../hooks/useAuth.jsx";

export default function Home() {

  const { isLoggedIn } = useAuth();

  return <PageLayout>
    {isLoggedIn && <PostEditor />}
    <Timeline />
  </PageLayout>;
}