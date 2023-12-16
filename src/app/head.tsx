export default function Head() {
  const title = "크리스마스 카드 만들기";
  const description =
    "HyperCLOVA X 모델을 이용해 크리스마스 카드를 자동으로 생성해주는 웹 사이트";
  const url =
    "https://x-mas-card-generator-byjgfzwv8-chucodings-projects.vercel.app";
  const thumbnail = `/img/thumbnail.png`;

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
      <meta name="og:image" content={thumbnail} />
      <meta name="twitter:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={thumbnail}></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </>
  );
}
