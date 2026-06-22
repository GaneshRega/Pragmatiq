const fs = require('fs');

const html = fs.readFileSync('__tmp.html', 'utf8');

// Extract body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.error("No body found");
  process.exit(1);
}

let bodyStr = bodyMatch[1]; // The inner content of body

// Remove script tags at the bottom which are astro injections
bodyStr = bodyStr.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>\s*/gi, '');

// Convert class=" -> className="
bodyStr = bodyStr.replace(/class="/g, 'className="');

// Convert for=" -> htmlFor="
bodyStr = bodyStr.replace(/for="/g, 'htmlFor="');

// convert srcset to srcSet
bodyStr = bodyStr.replace(/srcset="/g, 'srcSet="');

// convert tabindex to tabIndex
bodyStr = bodyStr.replace(/tabindex="/g, 'tabIndex="');

// Self close specific tags
const selfClosingTags = ['img', 'input', 'br', 'hr', 'source'];
selfClosingTags.forEach(tag => {
  // Regex to find tags that are not self-closed and close them.
  // This is a naive regex but works for well-formed HTML.
  const regex = new RegExp(`<(${tag})([^>]*[^\/])>`, 'gi');
  bodyStr = bodyStr.replace(regex, '<$1$2 />');
});

// Fix style="color: black" -> style={{color: 'black'}}
// We just remove inline styles for now as they are very rare in tailwind, or we can use a basic regex
bodyStr = bodyStr.replace(/style="([^"]*)"/g, (match, contents) => {
    const parts = contents.split(';').filter(Boolean);
    const styleObj = {};
    parts.forEach(p => {
        let [key, val] = p.split(':');
        if (key && val) {
            key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[key] = val.trim().replace(/"/g, "'");
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});


// Convert SVG xmlns:xlink=" -> xmlnsXlink="
bodyStr = bodyStr.replace(/xmlns:xlink="/g, 'xmlnsXlink="');
bodyStr = bodyStr.replace(/fill-rule="/g, 'fillRule="');
bodyStr = bodyStr.replace(/clip-rule="/g, 'clipRule="');
bodyStr = bodyStr.replace(/stroke-width="/g, 'strokeWidth="');
bodyStr = bodyStr.replace(/stroke-linecap="/g, 'strokeLinecap="');
bodyStr = bodyStr.replace(/stroke-linejoin="/g, 'strokeLinejoin="');

// Remove HTML comments
bodyStr = bodyStr.replace(/<!--[\s\S]*?-->/g, '');


const output = `
'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    // Dynamic AOS import to avoid SSR issues
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      import('aos/dist/aos.css');
      AOS.init({ once: true, duration: 800 });
    };
    initAOS();
  }, []);

  return (
    <>
      ${bodyStr}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', output);
console.log('Successfully generated page.tsx');
