import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }: { params: { blog: string } }) {
  // Decode the URL parameter
  const filepath = `content/${params.blog}.md`;
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(fileContent);

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      
      theme:'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ]
    })
    .process(content)

  const htmlContent = file.toString();

  return (
    <div className="container max-w-5xl mx-auto p-4 text-foreground">
      <h1 className="font-bold text-3xl mb-4">{data.title}</h1>
      <p className="italic text-base border-l-4 pl-4 mb-4">{data.description}</p>
      <div className="mb-4 flex justify-start gap-2">
        <p className="text-sm text-foreground">By {data.author}</p>
        <p className="text-sm text-foreground">{data.date}</p>
      </div>
      <div>
        <style>
          {`
            .prose h1,
            .prose h2,
            .prose h3,
            .prose h4,
            .prose h5,
            .prose h6 {
              color: rgb(185 28 28); /* Apply the custom blue color */
            }
          `}
        </style>
        <div className="prose  dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
  
}