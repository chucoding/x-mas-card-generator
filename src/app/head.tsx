export default function Head() {
  const title = "크리스마스 카드 만들기";
  const description =
    "HyperCLOVA X 모델을 이용해 크리스마스 카드를 자동으로 생성해주는 웹 사이트";
  const url = "https://xmas.swygbro.com";
  const thumbnail = `${url}/img/thumbnail.png`;

  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="swyg,HyperCLOVA X,NAVERCloud,LLM,해커톤,개발자,메타콘첸츠,심리테스트,NextJS"
      />
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
      <link rel="icon" href="/favicon.ico" />{" "}
      {/*https://www.flaticon.com/kr/free-icon/christmas-card_2224608?term=%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4+%EC%B9%B4%EB%93%9C&page=2&position=89&origin=search&related_id=2224608*/}
      <link rel="apple-touch-icon" href={thumbnail} />
      <link rel="shortcut icon" href={thumbnail} />
    </>
  );
}
