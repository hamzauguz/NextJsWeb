import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Hakkında</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          header {
            border-bottom: 1px solid #ccc;
            background: #fff;

            ul {
              display: flex;

              li {
                a {
                  display: flex;
                  height: 60px;
                  align-items: center;
                  padding: 0 20px;
                  color: #333;
                  text-decoration: none;
                }
              }
            }
          }
        `}
      </style>
    </header>
  )
}
