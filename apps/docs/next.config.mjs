import createMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMdx = createMdx({
  extension: /\.(md|mdx)?$/,
});

export default withMdx(nextConfig);
