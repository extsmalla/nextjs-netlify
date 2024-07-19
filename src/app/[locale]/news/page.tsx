import Image from 'next/image'

export default function News() {
    return (
        <main>
            <h1>News</h1>
            <p>Here is some news!</p>

            <Image src="https://cdn.sanity.io/images/0akjcq0n/news/fddb1aa0032c4e50aa1c920bd48a9ae079148838-1920x1080.png" alt="" width={500} height={300} />
        </main>
    )
}
