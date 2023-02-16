export default function NavSlide({ handleClose }) {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl mx-auto h-screen w-screen absolute z-100 bg-blue-400 cursor-pointer mx-auto">
      <p>hi</p>
      <p onClick={() => handleClose()}>close</p>
    </div>
  );
}
