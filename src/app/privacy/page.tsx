export default function Terms() {
  return (
    <main className="container">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

        <div className="prose">
          <p>
            当サービスの利用に際して、以下のプライバシーポリシーをお読みいただき、これに同意することが条件となります。
          </p>
          <p className="mt-4">
            当サービスでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Googleアナリティクスサービス利用規約
            </a>
            のページや
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Googleポリシーと規約ページ
            </a>
            をご覧ください。
          </p>
        </div>
      </div>
    </main>
  );
}
