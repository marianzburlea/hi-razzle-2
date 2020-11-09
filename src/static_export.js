import { renderApp } from './server';
export const render = (req, res) => {
  const { html = {}, ...rest } = renderApp(req, res);
  console.log('###########################')
  console.log(rest, html)
  res.json({ html });
};
export const routes = () => {
  return ['/', '/contact'];
};