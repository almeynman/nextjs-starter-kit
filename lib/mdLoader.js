import MarkdownIt from 'markdown-it';
import fm from 'front-matter';

module.exports = function mdLoader(source) {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });

  const frontmatter = fm(source);
  frontmatter.attributes.html = md.render(frontmatter.body);

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`;
};
