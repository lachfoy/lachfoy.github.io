import { motion } from "framer-motion";

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>

      <div className='about-item'>
        <h1>About</h1>
        <p>Aliquam at tincidunt velit. Donec lobortis vehicula ligula vel suscipit.</p>
        <p>Quisque vitae sem vel mauris lobortis dictum a ac elit. Morbi tristique ultricies erat, ut gravida ligula venenatis id.</p>
        <p>Quisque eget laoreet tortor. Donec non quam sit amet arcu sollicitudin semper. Phasellus blandit velit non arcu elementum molestie.</p>
        <p>Fusce viverra euismod ante, at laoreet est mattis et.</p>
      </div>

      {/* <div className='about-item'>
        <h1>Skills</h1>

        <div className="skills-container">
          <div>
            <h2>Languages</h2>
            <ul>
              <li>Git</li>
              <li>Visual Studio</li>
              <li>NoesisGUI/WPF</li>
              <li>CLI</li>
              <li>Agile</li>
            </ul>
          </div>

          <div>
            <h2>Tools</h2>
            <ul>
              <li>C/C++</li>
              <li>C#</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Lua</li>
              <li>XAML</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
}
