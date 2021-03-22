import '../styles/globals.css'
import Link from 'next/link';
function MyApp({ Component, pageProps }) {
  return (
      <div className="mx-auto my-5 w-9/12">
          <header>
              <h1 className="text-5xl font-bold text-center">My Blog</h1>
              <nav>
                  <ul className="flex flex-row space-x-10 justify-center my-5">
                      <li><Link href="/"><a>Home</a></Link></li>
                      <li><Link href="/about"><a>About</a></Link></li>
                  </ul>
              </nav>
          </header>

      <Component {...pageProps} />
      </div>
      )
}

export default MyApp
