import Link from 'next/link';

const Page = () => (
  <div>
    <Link href='/'>back</Link>
    <p>See the green box? No? Now <strong>refresh!</strong></p>
    <div dangerouslySetInnerHTML={{ __html: `<script type='text/javascript' src='/document.write.js' />` }} />
  </div>
)

export default Page
