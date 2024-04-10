import './AboutPage.css';

export function AboutPage() {
  return (
    <div className='about-content'>
      <div>
        <h1>About</h1>

        <h1>Background</h1>
        <p>Background paragraph</p>
      </div>

      <div>
        <h1>Skills</h1>

        <div className="skills-container">
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
        </div>
      </div>
    </div>
  );
}
