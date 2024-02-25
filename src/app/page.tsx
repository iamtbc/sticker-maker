import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import config from "../../next.config.mjs";
const BASE_PATH = config.basePath ?? "";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Turn Your Ideas into Stickers
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to StickerMaker, Create your own stickers with easy
              operation.
            </p>
            <div className="flex justify-center">
              <Link href="/editor" className={buttonVariants()}>
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Image
              src={`${BASE_PATH}/sticker-awesome.svg`}
              alt="awesome"
              width="200"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-100.svg`}
              alt="100"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-nice.svg`}
              alt="nice"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-wow.svg`}
              alt="wow"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-supercool.svg`}
              alt="super-cool"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-pien.svg`}
              alt="pien"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-ohmygod.svg`}
              alt="oh-my-god"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-heart.svg`}
              alt="heart"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-perfect.svg`}
              alt="perfect"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-cool.svg`}
              alt="cool"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-suteki.svg`}
              alt="suteki"
              width="200"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-bravo.svg`}
              alt="bravo"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-wink.svg`}
              alt="wink"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-unbelievable.svg`}
              alt="unbelievable"
              width="200"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-brilliant.svg`}
              alt="brilliant"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-good.svg`}
              alt="good"
              width="100"
              height="100"
            />
            <Image
              src={`${BASE_PATH}/sticker-kanpeki.svg`}
              alt="完璧"
              width="100"
              height="100"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
