<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">  
</head>
<body>

  <h1>LinkedIn Clone (Educational Project)</h1>
  <blockquote>
    A personal LinkedIn-like profile page built for learning and portfolio demonstration.
  </blockquote>

  <hr>

  <h2>Overview</h2>
  <p>
    This is a <strong>front-end clone</strong> of the LinkedIn profile page, created purely for <strong>educational purposes</strong>.
    It mimics the layout, styling, and user interface of LinkedIn, but is <strong>not connected</strong> to any backend or real LinkedIn API.
  </p>

  <h3>Key Features:</h3>
  <ul>
    <li>Profile header with cover photo, profile picture, and edit button</li>
    <li>Responsive mobile/tablet/desktop layouts</li>
    <li>Editable profile info form (name, bio, pronouns, etc.) using Redux for state management</li>
    <li>Infinite scrolling marquee to show disclaimers or important info</li>
    <li>Light and dark mode support</li>
  </ul>

  <hr>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>React</strong> (create-react-app structure)</li>
    <li><strong>Redux Toolkit</strong> for global state management</li>
    <li><strong>Tailwind CSS</strong> for styling and responsiveness</li>
    <li>Included custom CSS for animations beyond Tailwind’s scope</li>
  </ul>

  <hr>

  <h2>Project Structure</h2>
  <pre><code>src/
├── components/    # Shared UI components (Navbar, SearchResult, etc.)
├── store/         # Redux slices and store
├── pages/         # Main screen 
├── App.js         # Main app component with the react-router setup
├── assets/        # All required assets (images, js objects)
└── index.js       # App entry point
</code></pre>

  <hr>

  <h2>Running Locally</h2>
  <ol>
    <li><strong>Clone the repo</strong></li>
    <pre><code>git clone https://github.com/JoydeepPaul399/LinkedIn_profile.git
cd LinkedIn_profile</code></pre>

    <li><strong>Install dependencies</strong></li>
    <pre><code>npm install</code></pre>

    <li><strong>Start the development server</strong></li>
    <pre><code>npm run dev</code></pre>

    <li><strong>Open in your browser</strong></li>
    <pre><code>http://localhost:5173</code></pre>
  </ol>

</body>
</html>
