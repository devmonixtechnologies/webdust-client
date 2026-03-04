const fs = require('fs');
const file = 'app/global.module.css';
let content = fs.readFileSync(file, 'utf8');

// remove the custom scrollbar appended at the end
content = content.replace(/\/\* Custom Scrollbar \*\/.*$/s, '');

// add it inside the :global(html, body) rule
content = content.replace(
  /:global\(html,\s*body\)\s*\{/s,
  `:global(html, body) {
    /* Custom Scrollbar */
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: var(--background);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--accent);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: color-mix(in lab, var(--accent) 80%, black);
    }`
);

fs.writeFileSync(file, content);
