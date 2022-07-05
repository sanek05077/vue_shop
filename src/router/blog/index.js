export default [
  {
    path: '/blog-:category_id',
    name: 'Category',
    component: () => import('@/views/blog/Category.vue'),
  },
  {
    path: '/post-:post_id',
    name: 'Article',
    component: () => import('@/views/blog/Article.vue'),
  },
];
