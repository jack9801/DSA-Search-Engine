import Head from 'next/head'

const CustomHead = ({title = "AlgoSearch: Algo Problems Search Engine", desc="Discover a world of algorithmic problems effortlessly with AlgoSearch"}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default CustomHead
