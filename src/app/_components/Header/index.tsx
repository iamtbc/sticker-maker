const Header = () => {
  return (
    <>
      <header className="py-6 md:px-8 border-b">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex">
            <a href="/">
              <h2 className="text-lg font-semibold">StickerMaker</h2>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
