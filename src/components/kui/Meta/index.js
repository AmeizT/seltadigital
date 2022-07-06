import Head from 'next/head'

function Meta({ title, keywords, description, image, appName, url }){
    return (
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#0066b2" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Selta Digital" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={appName} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:site" content="@seltadigital" />
            <meta name="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:image:alt" content={appName} />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <title>{title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        </Head>
    )
}

Meta.defaultProps = {
    appName: 'Selta Digital',
    url: 'https://selta.digital',
    title: 'Selta Digital -  Web, Software, App Design & Development',
    keywords: 'web development, software development, next.js, react, python, django, djangorestframework, sanity, web design, web app, postgresql, redux, styled-components, api, hosting, mobile apps, responsive design',
    description: 'Remote start-up developing stunning apps for the web and mobile.',
    image: '/logomark.png',
}

export default Meta