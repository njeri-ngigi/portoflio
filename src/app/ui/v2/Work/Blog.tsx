import { links } from "@/app/data/links";

const blogs = [
  {
    index: "blog-1",
    title: "Memory Management in JavaScript",
    description:
      "An overview of how JavaScript handles allocation and deallocation of memory.",
    link: "https://njeri-ngigi.hashnode.dev/memory-management-in-javascript",
  },
  {
    index: "blog-2",
    title: "Dependency Injection in JS",
    description:
      "DI is a programming pattern where dependencies are passed in as parameters instead of instantiation ...",
    link: "https://njeri-ngigi.hashnode.dev/dependency-injection-in-js",
  },
];

export function Blog() {
  return (
    <div className="font-jetbrains mt-4 lg:mt-8 w-3/4">
      <h2 className="text-black1 text-2xl font-light dark:text-gray1">BLOG</h2>
      <div className="mb-3">
        {blogs.map((blog) => (
          <a key={blog.index} href={blog.link} target="_blank">
            <div className="bg-yellow2/25 hover:bg-gray1 dark:bg-gray1 hover:dark:bg-yellow2 transition-all duration-200 p-4 my-3 xs:w-[320px] xs2:w-[290px]">
              <h3>{blog.title}</h3>
              <p className="text-black3 text-xs my-2">{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
      <a
        className="text-base text-orange1 hover:text-purple1 hover:dark:text-gray1 hover:underline transition-all duration-200"
        href={links.Hashnode}
        target="_blank"
      >
        MORE ON HASHNODE --&gt;
      </a>
    </div>
  );
}
