export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611d93fbd57dec22ef916b25",
                  title: "Sanity Studio",
                  name: "gatsbysanityblog-studio",
                  apiId: "d5ba46a9-4cf0-4534-ab06-a371255b3f16",
                },
                {
                  buildHookId: "611d93fbfbab222e0f6797a7",
                  title: "Blog Website",
                  name: "gatsbysanityblog",
                  apiId: "f690e98b-345a-4ada-90db-7c8ad0583e84",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/TeimlyPublishing/Gatsbysanityblog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://gatsbysanityblog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
