const Footer = () => {
  return (
    <>
      <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Made by{" "}
            <a
              href="https://github.com/iamtbc"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              iamtbc
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/iamtbc/sticker-maker"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
          <span>
            <a
              href="/terms"
              className="text-gray-500 text-sm underline underline-offset-4"
            >
              利用規約
            </a>
            <a
              href="privacy"
              className="ml-3 text-gray-500 text-sm underline underline-offset-4"
            >
              プライバシーポリシー
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export { Footer };
