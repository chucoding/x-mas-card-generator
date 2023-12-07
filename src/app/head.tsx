export default function Head() {
  const title = "꿈력 측정 테스트";
  const description =
    "꿈을 꾸는 환경, 꿈의 내용에 따라 그에 맞는 꿈력 분석을 제공하는 테스트 유형의 서비스입니다. ";
  const url = "https://dream.swygbro.com";
  const thumbnail = `${url}/img/thumbnail.png`;

  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta name="keywords" content="swyg,꿈,꿈력,기획자,개발자,메타콘첸츠" />
      <meta name="og:site_name" content={title} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={thumbnail}></meta>
      <meta name="twitter:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={thumbnail}></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href={thumbnail} />
      <link rel="shortcut icon" href={thumbnail} />
    </>
  );
}
