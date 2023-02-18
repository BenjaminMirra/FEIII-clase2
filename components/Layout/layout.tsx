import Head from 'next/head';
import React, { FC } from 'react'
import Image from 'next/image'

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <header className="">
                <h1>HEADER</h1>
                <Image src="/google_chrome_icon_249756.ico" alt="hola"
                width={500}
                height={500}/>
            </header>
            <main>
                <Head>
                    <title>My page title</title>
                    <link rel="icon" href="/google_chrome_icon_249756.ico" />
                </Head>
                {children}
                
            </main>

            <footer>
                <h1>FOOTER</h1>
            </footer>


        </>
    )
}

export default Layout;