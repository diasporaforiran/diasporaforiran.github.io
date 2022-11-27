import Head from 'next/head'
import styles from '../styles/Home.module.css'

const links = [
    {
        label: 'Victims Posters',
        href: 'https://drive.google.com/file/d/1WoSU7IKvvaOXlou9TD2hG4s9zZm37VSw/view'
    },
    {
        label: 'Posters & Signs',
        href: 'https://drive.google.com/drive/u/0/folders/1LdimppQ3x6lk6dE14dQeJyQdUQeOjjfP'
    },
    {
        label: 'Artworks & Illustrations',
        href: 'https://drive.google.com/drive/u/0/folders/1bSK3r2zkvDX0IQqj_mVF3zWwcXrpwiwu'
    },
    {
        label: 'Photos & Raw Materials',
        href: 'https://drive.google.com/drive/u/0/folders/1P6cB8cULWWiM3lJALe3c7uhjDBLPP5eu'
    },
    {
        label: 'Victims List',
        href: 'https://docs.google.com/spreadsheets/d/1wYNsNeSqUIFGpBphpx6xCHlPRxeXysrJ9-6cmanoFhY/edit#gid=329711569'
    },
]

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Diaspora For Iran</title>
                <meta name="description" content="We tell the visual story of the #WomenLifeFreedom movement through art." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <img
                        src='/logo-red.jpeg'
                        style={{maxWidth: 160}}
                    />
                </div>
                {links.map((x, i) => (
                    <a key={i} href={x.href}>
                        <span children={x.label} />
                    </a>
                ))}
            </main>
        </div>
    )
}
