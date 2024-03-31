// import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="w-full py-4 md:py-6">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2 font-semibold" to="/">
            <img
              alt="Logo"
              className="h-8"
              height="32"
              src="/logo.svg"
              width="32"
            />
            <span>Datablevn</span>
          </Link>
          <nav className="hidden space-x-4 text-sm font-medium md:flex">
            <Link
              className="text-gray-900 rounded-md hover:underline dark:text-gray-50"
              to="#"
            >
              For Freelancers
            </Link>
            <Link
              className="text-gray-900 rounded-md hover:underline dark:text-gray-50"
              to="#"
            >
              For Clients
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" to="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="outline">
              <Link to="/dashboard">Login</Link>
            </Button>
          </div>
        </div>
      </header>
      <section className="w-full py-12 md:py-24">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Are you looking for
            </h1>
            <TypeAnimation
              sequence={[
                "making money from data annotation tasks?",
                3000,
                "data labelers for your ML/AI project?",
                3000,
              ]}
              wrapper="h2"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              speed={60}
              repeat={Infinity}
            />
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl lg:text-lg xl:text-xl leading-relaxed dark:text-gray-400">
              Join our network to earn money by labeling jobs <br /> or get
              resources to speed up your projects.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Find Work
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Post a Project
            </a>
          </div>
        </div>
      </section>
      <footer className="w-full border-t">
        <div className="container flex items-center justify-between py-3 px-4 md:px-6">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Datablevn, Inc. All rights reserved.
          </div>
          <nav className="flex items-center space-x-4 text-sm">
            <a
              className="underline hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Terms
            </a>
            <a
              className="underline hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Privacy
            </a>
          </nav>
        </div>
      </footer>
      <footer className="w-full">
        <div className="mx-auto max-w-6xl py-4" />
      </footer>
    </>
  );
}
