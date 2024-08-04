import '@styles/globals.css';

export const metadata = {
    title: "Owen Zeller",
    description: "A home for my projects & interests."
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        </head>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout