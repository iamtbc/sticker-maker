import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="py-6 md:px-8 border-b">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex">
            <Link href="/">
              <h2 className="text-lg font-semibold">StickerMaker</h2>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
