interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalInvoker({ setShowModal, showModal }: Props) {
  return (
    <div className="max-w-[816.5px] w-full bg-white p-4 flex h-[76px] rounded-xl items-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/remote-students-community-app.appspot.com/o/DefaultProfilePic.jpg?alt=media&token=cfc326ef-1ceb-401e-8060-6209a5faafd0"
        alt="User Icon"
        className="h-8 w-8 rounded-2xl cursor-pointer select-none mr-4"
      />
      <input
        type="text"
        className="w-full py-2 px-[14px] font-graphik outline-none bg-[#f4f4f4] hover:bg-[#E0E0E0] rounded-lg h-11"
        placeholder="Write a post"
        onClick={() => setShowModal(true)}
      />
    </div>
  );
}
