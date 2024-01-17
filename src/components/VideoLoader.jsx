function VideoLoader() {
  return (
    <div className="relative flex flex-col max-w-[376px] rounded-2xl overflow-hidden animate-pulse">
      <div className="w-[376px] h-[209px] bg-white bg-opacity-50"></div>
      <div className="flex w-64 animate-pulse gap-2 p-4">
        <div className="w-10 h-10 rounded-full bg-white bg-opacity-50"></div>
        <div className="flex-1 gap-1 flex flex-col">
          <div className="mb-1 h-5 w-[90%] rounded-lg bg-white bg-opacity-50 text-lg"></div>
          <div className="h-2 w-[40%] rounded-lg bg-white bg-opacity-50 text-sm"></div>
          <div className="h-2 w-[30%] rounded-lg bg-white bg-opacity-50 text-sm"></div>
        </div>
      </div>
    </div>
  );
}

export default VideoLoader;
