import Link from 'next/link'

const Post = (props) => (
  <li>
    <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <h2>My blog</h2>
    <ul>
      <li>
        <Post slug="yet-another-post" title="Yet another post" />
        <Post slug="second-post" title="Second post" />
        <Post slug="hello-world" title="Hello, world!" />
      </li>
    </ul>

    <Link href="/contact">
      <a>Contact me!</a>
    </Link>

    <style jsx global>{`
      body { 
        font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
        margin: 2em;
      }
      h2 {
        font-style: italic;
        color: #373fff;
      }
    `}</style>
  </div>
)