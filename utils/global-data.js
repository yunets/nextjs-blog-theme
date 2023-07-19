export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : '公益导航网站-chatgpt4.0';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : '公益导航网站-chatgpt4.0';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.-http://124.220.104.235:31105/web/chatgpt';

  return {
    name,
    blogTitle,
    footerText,
  };
};
