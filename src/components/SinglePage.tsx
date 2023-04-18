import AllPosts from "./AllPosts";
import ModalInvoker from "./ModalInvoker";

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

export default function SinglePage({
  setShowModal,
  showModal,
  allPosts,
  setAllPosts,
}: Props) {
  return (
    <div className="w-full">
      <ModalInvoker showModal={showModal} setShowModal={setShowModal} />
      <AllPosts allPosts={allPosts} setAllPosts={setAllPosts} />
    </div>
  );
}
