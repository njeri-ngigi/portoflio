import { links } from "@/app/data/links";

const blogs = [
  {
    index: "blog-1",
    title: "Memory Management in JavaScript",
    description: "An overview of how JavaScript handles memory allocation",
    link: "https://njeri-ngigi.hashnode.dev/memory-management-in-javascript",
  },
  {
    index: "blog-2",
    title: "Dependency Injection in JS",
    description:
      "DI is a programming pattern where dependencies are passed in as parameters.",
    link: "https://njeri-ngigi.hashnode.dev/dependency-injection-in-js",
  },
  {
    index: "blog-3",
    title: "Token Based Authentication",
    description:
      "How authentication sets the stage for secure communication between servers and clients.",
    link: "https://njeri-ngigi.hashnode.dev/token-based-authentication",
  },
];

export function Blog() {
  return (
    <div className="font-jetbrains mt-3 lg:mt-8 xs:mt-6 w-5/6 flex flex-col lg:items-center">
      <h2 className="text-black1 text-2xl font-light dark:text-gray1">BLOG</h2>
      <div className="max-w-md s:max-w-sm">
        {blogs.map((blog) => (
          <a key={blog.index} href={blog.link} target="_blank">
            <div className="bg-yellow2/25 hover:bg-gray1 dark:bg-black2 hover:dark:bg-orange1/70 transition-all duration-200 px-4 py-2 my-3 xs:w-[320px] xs2:w-[290px]">
              <h3 className="dark:text-gray2">{blog.title}</h3>
              <p className="text-black4 text-xs my-1 truncate dark:text-gray1">
                {blog.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <a
        className="text-lg text-orange2 dark:text-orange1 hover:text-purple1 hover:dark:text-gray1 hover:underline transition-all duration-200"
        href={links.Hashnode}
        target="_blank"
      >
        MORE ON HASHNODE --&gt;
      </a>
    </div>
  );
}
