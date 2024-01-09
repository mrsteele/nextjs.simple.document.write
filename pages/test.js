import Link from 'next/link';

const Page = () => (
  <div>
    <Link href='/'>back</Link>
    <p>If you don't see a green box below you must have arrived from the link on the homepage. Please <strong>refresh</strong> to see the green box.</p>
    <div dangerouslySetInnerHTML={{ __html: `<script type='text/javascript' src='/document.write.js' />` }} />
  </div>
)

export default Page
