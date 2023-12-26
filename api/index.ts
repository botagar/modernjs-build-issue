import { useContext } from '@modern-js/runtime/koa';

export default async () => {
  const ctx = useContext();
  console.log(ctx);
  return 'Hello Modern.js';
};

export const post = async () => ({
  message: 'Hello Modern.js',
});
