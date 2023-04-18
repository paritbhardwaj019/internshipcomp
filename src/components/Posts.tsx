import SinglePage from "./SinglePage";
import Widgets from "./Widgets";

interface PostSchema {
  community: string;
  title: string;
  description: string;
}

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  allPosts: PostSchema[];
  setAllPosts: React.Dispatch<React.SetStateAction<PostSchema[]>>;
}

export default function Posts({
  setShowModal,
  showModal,
  allPosts,
  setAllPosts,
}: Props) {
  return (
    <div className="mx-auto flex max-w-[1152px] justify-between w-full">
      <SinglePage
        setShowModal={setShowModal}
        showModal={showModal}
        allPosts={allPosts}
        setAllPosts={setAllPosts}
      />
      <Widgets />
    </div>
  );
}
