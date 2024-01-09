import Link from 'next/link';

const Index = () => (
  <div>
    <h1>document.write test</h1>
    <p>This page is intended to test document.write in NextJS. It appears to only work on direct lands vs using the internal router.</p>
    <h2>Instructions</h2>
    <ul>
      <li>Click <Link href="/test">this link</Link> and you will NOT see a <span style={{ backgroundColor: 'green', color: 'white'}}>green box</span> on the page.</li>
      <li>Refresh the page and you will.</li>
    </ul>
  </div>
);

export default Index
