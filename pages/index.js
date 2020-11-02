import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Layout>
      <>
      <header className="page-title-bar">
                <div className="d-flex flex-column flex-md-row">
                  <p className="lead">
                    <span className="font-weight-bold">Hi, Hari.</span> <span className="d-block text-muted">Here’s what’s happening with your business today.</span>
                  </p>
                </div>
      </header>
      </>

      </Layout>
    </>
  )
}
