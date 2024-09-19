import Script from 'next/script';

const MAP_API_KEY = process.env.MAP_API_KEY;

const YMapLoader = () => {
    return (
        <Script src={`https://api-maps.yandex.ru/v3/?apikey=${MAP_API_KEY}&lang=ru_RU`} type="module" strategy="beforeInteractive"/>
    )
}

export default YMapLoader;