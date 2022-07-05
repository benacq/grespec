import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            {/* pass props as title */}
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" itemProp="image" content="https://i.ibb.co/4Wv589f/greepec-meta.jpg" />
            <meta property="og:description" content="We addresses the immediate and long-term development needs of people by providing consultancy services and training in agribusiness amongst others." />
            <meta property="og:site_name" content={props.title} />
            <meta property="og:image" content="https://i.ibb.co/4Wv589f/greepec-meta.jpg" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:image" content="https://i.ibb.co/4Wv589f/greepec-meta.jpg" />
            <meta property="og:url" content="http://greepecgh.com" />
            <meta property="twitter:description" content="We addresses the immediate and long-term development needs of people by providing consultancy services and training in agribusiness amongst others." />
            <meta name="keywords" content="Greepec Consult, Professional Advice, Guidance, Business Solutions, Consultancy in Ghana, Ghana Business, Ghana" />
            <meta name="description" content="We addresses the immediate and long-term development needs of people by providing consultancy services and training in agribusiness amongst others." />
            <link rel='shortcut icon' href='/greepec-fav.jpeg' />

        </Head>
    );
}

export default Meta;