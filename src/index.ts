import './sass/style.scss';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';

const deck = new Reveal({
  plugins: [Markdown, Highlight],
  hash: true,
});

deck.initialize({
  width: 1100,
  progress: true,
});
