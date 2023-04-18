import Post from "./Post";

interface PostSchema {
  community: string;
  title: string;
  description: string;
}

interface Props {
  allPosts: PostSchema[];
  setAllPosts: React.Dispatch<React.SetStateAction<PostSchema[]>>;
}

export default function AllPosts({ allPosts, setAllPosts }: Props) {
  return (
    <>
      <div className="w-full space-y-4 mt-10">
        {allPosts.map((currElem) => {
          return <Post {...currElem} />;
        })}
      </div>
    </>
  );
}
