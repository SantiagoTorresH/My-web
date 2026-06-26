import { MdApi, MdDevices } from 'react-icons/md'
import { SiFigma } from 'react-icons/si'

const icon = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`

export const skillIconConfig = {
  React: { type: 'image', src: icon('react', '61DAFB') },
  JavaScript: { type: 'image', src: icon('javascript', 'F7DF1E') },
  'HTML & CSS': {
    type: 'images',
    items: [
      { src: icon('html5', 'E34F26'), alt: 'HTML5' },
      { src: icon('css', '1572B6'), alt: 'CSS3' },
    ],
  },
  'Tailwind CSS': { type: 'image', src: icon('tailwindcss', '06B6D4') },
  'Responsive Design': { type: 'component', Icon: MdDevices, color: 'text-sky-400' },
  'UI/UX': { type: 'component', Icon: SiFigma, color: 'text-fuchsia-400' },
  'Node.js': { type: 'image', src: icon('nodedotjs', '339933') },
  Python: { type: 'image', src: icon('python', '3776AB') },
  'C#': { type: 'image', src: icon('dotnet', '512BD4') },
  Express: { type: 'image', src: icon('express', 'FFFFFF') },
  'REST API': { type: 'component', Icon: MdApi, color: 'text-emerald-400' },
  SQL: { type: 'image', src: icon('mysql', '4479A1') },
  MongoDB: { type: 'image', src: icon('mongodb', '47A248') },
  MySQL: { type: 'image', src: icon('mysql', '4479A1') },
  SQLite: { type: 'image', src: icon('sqlite', '003B57') },
  Firebase: { type: 'image', src: icon('firebase', 'DD2C00') },
  PostgreSQL: { type: 'image', src: icon('postgresql', '4169E1') },
  
  'Power BI': { type: 'image', src: icon('powerbi', 'F2C811') },
  Git: { type: 'image', src: icon('git', 'F05032') },
  GitHub: { type: 'image', src: icon('github', 'FFFFFF') },
  Docker: { type: 'image', src: icon('docker', '2496ED') },
  Linux: { type: 'image', src: icon('linux', 'FCC624') },
  vscode: { type: 'image', src: icon('visualstudiocode', '007ACC') },
  Postman: { type: 'image', src: icon('postman', 'FF6C37') },
}
