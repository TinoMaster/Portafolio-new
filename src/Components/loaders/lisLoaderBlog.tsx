import "./listLoaderBlog.css";

function ListLoadingBlog() {
  return (
    <div className="flex flex-wrap w-full justify-between gap-2">
      <div className="LoadingBlog-container text-black rounded-md">
        <span className="LoadingBlog-completeIcon"></span>
        <p className="LoadingBlog-text font-serif text-center text-violet-700"></p>
      </div>
    </div>
  );
}

export { ListLoadingBlog };
