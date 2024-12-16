import BackPageArrow from "../BackPageArrow/BackPageArrow";

const ComingSoonPage = () => {
  return (
    <div className="mt-[1em]">
      <div>
        <BackPageArrow />
      </div>
      <div className="mt-[2.2em] flex h-full flex-col items-center justify-center text-center text-white">
        <h1>Coming Soon 🚧</h1>
        <p>
          We`re working hard to bring this feature to life! Stay tuned for
          updates—exciting things are on the way. Thank you for your patience
          and support! 🙏
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
