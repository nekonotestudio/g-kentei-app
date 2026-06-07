// questions.js — G検定 問題バンク Vol.1 (Q1–50)

const QUESTIONS = [
// ==================== AI概論・歴史 ====================
{
  category:"history", catLabel:"AI概論・歴史",
  q:"第一次AIブームのきっかけとなった、人間の問題解決プロセスを模倣したプログラムはどれですか？",
  options:["パーセプトロン","GPS（General Problem Solver）","ELIZA","バックプロパゲーション"],
  answer:1,
  explanation:"1957年にNewellとSimonが開発したGPS（General Problem Solver）が第一次AIブームを牽引しました。"
},
{
  category:"history", catLabel:"AI概論・歴史",
  q:"「AIの父」と呼ばれ、チューリングテストを提唱した人物は誰ですか？",
  options:["ジョン・マッカーシー","アラン・チューリング","マービン・ミンスキー","ジョフリー・ヒントン"],
  answer:1,
  explanation:"アラン・チューリングは1950年に「Computing Machinery and Intelligence」を発表し、知能の判定基準となるチューリングテストを提唱しました。"
},
{
  category:"history", catLabel:"AI概論・歴史",
  q:"「人工知能（Artificial Intelligence）」という用語が初めて使われた会議はどれですか？",
  options:["ダートマス会議（1956年）","国際AIシンポジウム（1960年）","MITAIセミナー（1955年）","スタンフォードAI会議（1958年）"],
  answer:0,
  explanation:"1956年のダートマス会議でジョン・マッカーシーらが「Artificial Intelligence」という用語を初めて使用しました。"
},
{
  category:"history", catLabel:"AI概論・歴史",
  q:"第二次AIブームを支えた主要な技術はどれですか？",
  options:["ディープラーニング","エキスパートシステム","強化学習","GPT"],
  answer:1,
  explanation:"第二次AIブーム（1980年代）はエキスパートシステム（知識ベースシステム）が中心でした。専門家の知識をルールとして記述しAIに組み込む手法です。"
},
{
  category:"history", catLabel:"AI概論・歴史",
  q:"2012年のImageNetコンペティション（ILSVRC）で圧勝し、第三次AIブームの火付け役となったモデルはどれですか？",
  options:["VGGNet","ResNet","AlexNet","GoogLeNet"],
  answer:2,
  explanation:"Hintonらが開発したAlexNetが2012年のILSVRCでエラー率を大幅に下げ、ディープラーニングブームの始まりとなりました。"
},
{
  category:"history", catLabel:"AI概論・歴史",
  q:"強いAI（汎用AI）と弱いAI（特化型AI）の説明として正しいものはどれですか？",
  options:["強いAIはすでに実用化されている","弱いAIは特定タスクに特化した人工知能","強いAIは人間より知能が低いAI","弱いAIは汎用的な知能を持つ"],
  answer:1,
  explanation:"弱いAI（Narrow AI）は囲碁・翻訳など特定タスク専用。強いAI（AGI）は人間と同等の汎用知能を持つもので、現在は実現していません。"
},

// ==================== 数学・統計 ====================
{
  category:"math", catLabel:"数学・統計",
  q:"機械学習でよく使われる「過学習」を防ぐための正則化手法のうち、L1正則化の別名はどれですか？",
  options:["Ridge回帰","Lasso回帰","Elastic Net","Dropout"],
  answer:1,
  explanation:"L1正則化はLasso回帰とも呼ばれ、スパースな解（多くのパラメータが0）を得やすい特徴があります。L2はRidge回帰です。"
},
{
  category:"math", catLabel:"数学・統計",
  q:"確率分布において、平均μ・分散σ²の正規分布で全データの約95%が含まれる範囲はどれですか？",
  options:["μ ± σ","μ ± 2σ","μ ± 3σ","μ ± 0.5σ"],
  answer:1,
  explanation:"正規分布では μ±σ に約68%、μ±2σ に約95%、μ±3σ に約99.7% のデータが含まれます（68-95-99.7則）。"
},
{
  category:"math", catLabel:"数学・統計",
  q:"ニューラルネットワークの学習において、誤差を各パラメータに対して微分する手法はどれですか？",
  options:["最急降下法","誤差逆伝播法（バックプロパゲーション）","最大尤度推定","EMアルゴリズム"],
  answer:1,
  explanation:"誤差逆伝播法（Backpropagation）は損失関数の勾配を連鎖律を使って出力層から入力層へと逆向きに計算する手法です。"
},
{
  category:"math", catLabel:"数学・統計",
  q:"機械学習モデルの評価において、「真陽性率（Recall）」と「適合率（Precision）」の調和平均を表す指標はどれですか？",
  options:["AUC","F1スコア","正解率（Accuracy）","特異度"],
  answer:1,
  explanation:"F1スコア = 2 × (Precision × Recall) / (Precision + Recall) で、PrecisionとRecallのバランスを示す指標です。"
},
{
  category:"math", catLabel:"数学・統計",
  q:"ベイズ定理において P(A|B) = P(B|A)P(A)/P(B) の P(A) を何と呼びますか？",
  options:["事後確率","尤度","事前確率","周辺確率"],
  answer:2,
  explanation:"P(A)は事前確率（Prior）、P(A|B)は事後確率（Posterior）、P(B|A)は尤度（Likelihood）です。"
},
{
  category:"math", catLabel:"数学・統計",
  q:"主成分分析（PCA）の目的として最も適切なものはどれですか？",
  options:["クラスタリング","次元削減","分類","異常検知"],
  answer:1,
  explanation:"PCAは分散が最大になる方向（主成分）を見つけ、高次元データを低次元に圧縮する次元削減手法です。"
},
{
  category:"math", catLabel:"数学・統計",
  q:"確率的勾配降下法（SGD）の説明として正しいものはどれですか？",
  options:["全データを使って勾配を計算する","ランダムに選んだ1つ（またはミニバッチ）のデータで勾配を計算する","学習率を自動調整する","二次微分情報を使う"],
  answer:1,
  explanation:"SGDは全データではなくランダムサンプリングしたデータで勾配を近似計算するため、計算コストを大幅に削減できます。"
},

// ==================== 機械学習 ====================
{
  category:"ml", catLabel:"機械学習",
  q:"教師なし学習の代表的な手法であるk-meansクラスタリングにおいて、最初に決める必要があるものはどれですか？",
  options:["学習率","クラスタ数k","サポートベクター","活性化関数"],
  answer:1,
  explanation:"k-meansはクラスタ数kをあらかじめ指定する必要があります。kの選択には「エルボー法」などが使われます。"
},
{
  category:"ml", catLabel:"機械学習",
  q:"サポートベクターマシン（SVM）における「マージン最大化」の説明として正しいものはどれですか？",
  options:["損失関数を最小化する","2クラス間の境界線からの距離を最大にする決定境界を求める","学習データ数を増やす","特徴量の数を増やす"],
  answer:1,
  explanation:"SVMは2クラスのデータを分離する超平面のうち、最も近い点（サポートベクター）との距離（マージン）が最大になるものを求めます。"
},
{
  category:"ml", catLabel:"機械学習",
  q:"決定木において過学習を防ぐための手法として最も適切でないものはどれですか？",
  options:["木の深さを制限する","剪定（pruning）を行う","学習データを増やす","ノードの最小サンプル数を設定する"],
  answer:2,
  explanation:"学習データを増やしても、決定木の深さ制限・剪定・葉ノードのサンプル数制限などがないと過学習は防げません。"
},
{
  category:"ml", catLabel:"機械学習",
  q:"アンサンブル学習のうち、複数の弱学習器を並列に学習させてそれらの予測を多数決・平均で統合する手法はどれですか？",
  options:["ブースティング","バギング","スタッキング","ドロップアウト"],
  answer:1,
  explanation:"バギング（Bootstrap Aggregating）は並列に学習させる手法で、ランダムフォレストがその代表例です。ブースティングは逐次的に学習します。"
},
{
  category:"ml", catLabel:"機械学習",
  q:"ランダムフォレストの説明として正しいものはどれですか？",
  options:["1本の深い決定木で学習する","複数の決定木をアンサンブルしたバギング手法","ニューラルネットワークの一種","SVMのカーネル拡張"],
  answer:1,
  explanation:"ランダムフォレストは、ブートストラップサンプリングで作成した多数の決定木の予測を統合するバギングベースのアンサンブル学習です。"
},
{
  category:"ml", catLabel:"機械学習",
  q:"教師あり学習において、訓練誤差は低いが汎化誤差が高い状態を何と呼びますか？",
  options:["アンダーフィッティング","オーバーフィッティング（過学習）","バイアス大","分散小"],
  answer:1,
  explanation:"過学習（Overfitting）は学習データに適合しすぎて未知データへの汎化性能が下がった状態。訓練誤差↓・検証誤差↑が典型的サインです。"
},
{
  category:"ml", catLabel:"機械学習",
  q:"交差検証（Cross-validation）の目的として最も適切なものはどれですか？",
  options:["学習の高速化","データ拡張","モデルの汎化性能を適切に評価する","パラメータ初期化"],
  answer:2,
  explanation:"交差検証は限られたデータを訓練用・検証用に分けて複数回評価することで、汎化性能の推定精度を高める手法です。"
},
{
  category:"ml", catLabel:"機械学習",
  q:"勾配ブースティング（Gradient Boosting）の代表的な実装として誤っているものはどれですか？",
  options:["XGBoost","LightGBM","CatBoost","DBSCAN"],
  answer:3,
  explanation:"DBSCAN（Density-Based Spatial Clustering）は密度ベースのクラスタリング手法で、勾配ブースティングとは異なります。"
},

// ==================== ディープラーニング ====================
{
  category:"dl", catLabel:"ディープラーニング",
  q:"ディープラーニングにおいてReLU活性化関数が広く使われる主な理由はどれですか？",
  options:["出力が0〜1に収まる","勾配消失問題を軽減できる","二値分類に最適","計算コストが高い"],
  answer:1,
  explanation:"ReLU（x>0でx、x≤0で0）は正の入力で勾配が1のため、シグモイドで発生しやすい勾配消失問題を緩和できます。"
},
{
  category:"dl", catLabel:"ディープラーニング",
  q:"バッチ正規化（Batch Normalization）の効果として正しくないものはどれですか？",
  options:["学習の安定化","学習の高速化","過学習の抑制","ネットワークの深さを自動調整する"],
  answer:3,
  explanation:"バッチ正規化はミニバッチ内のデータを正規化して学習安定化・高速化・正則化効果をもたらしますが、深さを自動調整する機能はありません。"
},
{
  category:"dl", catLabel:"ディープラーニング",
  q:"Dropout の説明として正しいものはどれですか？",
  options:["学習時にランダムにニューロンを無効化して過学習を防ぐ","テスト時にのみ使用される手法","勾配消失を防ぐ活性化関数","データ拡張手法"],
  answer:0,
  explanation:"Dropoutは学習時に確率pでランダムなニューロンを無効化することで、アンサンブル効果を生み過学習を防ぎます。推論時は全ニューロンを使用します。"
},
{
  category:"dl", catLabel:"ディープラーニング",
  q:"ResNet（残差ネットワーク）の特徴はどれですか？",
  options:["アテンション機構の導入","スキップ接続（残差接続）により非常に深いネットワークの学習を可能にした","再帰型構造を持つ","GAN（敵対的生成ネットワーク）の一種"],
  answer:1,
  explanation:"ResNetはスキップ接続（Skip Connection/残差接続）により勾配消失問題を解消し、100層以上の超深層ネットワークの学習を実現しました。"
},
{
  category:"dl", catLabel:"ディープラーニング",
  q:"Transformerモデルの中核となる機構はどれですか？",
  options:["畳み込み（Convolution）","自己注意機構（Self-Attention）","再帰構造（Recurrence）","プーリング（Pooling）"],
  answer:1,
  explanation:"2017年に提案されたTransformerはSelf-Attention機構により系列全体の依存関係を並列に計算でき、自然言語処理の主流となりました。"
},
{
  category:"dl", catLabel:"ディープラーニング",
  q:"GAN（敵対的生成ネットワーク）において、生成器（Generator）と識別器（Discriminator）の関係の説明として正しいものはどれですか？",
  options:["両者が協調して同じ損失を最小化する","生成器は識別器を騙すよう、識別器は見破るよう競合しながら学習する","生成器のみが学習する","識別器は固定され更新されない"],
  answer:1,
  explanation:"GANは生成器と識別器が敵対的に競い合う構造。生成器はより本物らしいデータを、識別器は本物と偽物を区別する能力を向上させます。"
},
{
  category:"dl", catLabel:"ディープラーニング",
  q:"オートエンコーダ（Autoencoder）の主な用途として適切でないものはどれですか？",
  options:["次元削減","異常検知","データ圧縮","強化学習の方策最適化"],
  answer:3,
  explanation:"オートエンコーダはエンコーダで圧縮・デコーダで復元する構造で次元削減・特徴抽出・異常検知に使われます。方策最適化はRL手法です。"
},
{
  category:"dl", catLabel:"ディープラーニング",
  q:"転移学習（Transfer Learning）の説明として最も適切なものはどれですか？",
  options:["モデルをゼロから学習する","大量データで事前学習済みのモデルを別タスクに活用する","データを他のドメインに転送する","強化学習エージェントの方策転送"],
  answer:1,
  explanation:"転移学習は事前学習（Pre-training）済みモデルの知識を新しいタスクに活用する手法。少ない学習データでも高性能を達成できます。"
},

// ==================== 自然言語処理 ====================
{
  category:"nlp", catLabel:"自然言語処理",
  q:"Word2Vecで学習される単語ベクトルの特徴として正しいものはどれですか？",
  options:["文字単位のベクトル表現","意味的・文法的関係を捉えた分散表現","1-hotエンコーディング","文書全体を1つのベクトルで表す"],
  answer:1,
  explanation:"Word2Vecは「king - man + woman ≈ queen」のように意味的関係を捉えた密なベクトル（分散表現・埋め込み）を学習します。"
},
{
  category:"nlp", catLabel:"自然言語処理",
  q:"BERTの事前学習タスクとして採用されているものはどれですか（2つ選択するとしたら）？",
  options:["マスク言語モデル（MLM）と次文予測（NSP）","テキスト分類とQ&A","機械翻訳と要約","固有表現認識と依存構造解析"],
  answer:0,
  explanation:"BERTはMasked Language Model（文中の単語をマスクして予測）とNext Sentence Prediction（2文の関係を予測）で事前学習されます。"
},
{
  category:"nlp", catLabel:"自然言語処理",
  q:"日本語テキストを形態素に分割するツールとして正しくないものはどれですか？",
  options:["MeCab","JUMAN++","SudachiPy","spaCy（英語版）"],
  answer:3,
  explanation:"MeCab・JUMAN++・SudachiPyは日本語形態素解析ツールです。spaCyは主に英語向けのNLPライブラリで、日本語形態素解析の代表的ツールではありません。"
},
{
  category:"nlp", catLabel:"自然言語処理",
  q:"ChatGPTなどの大規模言語モデル（LLM）の学習において用いられる「RLHF」の正式名称はどれですか？",
  options:["Reinforcement Learning from Human Feedback","Recurrent Learning with High Frequency","Regularized Learning with Hidden Features","Recursive Language with Hybrid Finetuning"],
  answer:0,
  explanation:"RLHF（Reinforcement Learning from Human Feedback）は人間の評価フィードバックを強化学習に活用してモデルを人間の意図に沿うよう調整する手法です。"
},
{
  category:"nlp", catLabel:"自然言語処理",
  q:"テキスト生成において「温度パラメータ（Temperature）」を高く設定した場合の効果はどれですか？",
  options:["出力がより決定論的になる","出力がより多様・創造的になる","モデルが高速になる","語彙サイズが増える"],
  answer:1,
  explanation:"Temperatureが高いほど確率分布が平坦になり、様々なトークンが選ばれやすく多様性・創造性が増します。低いほど最高確率トークンに集中します。"
},

// ==================== 画像認識・CV ====================
{
  category:"cv", catLabel:"画像認識・CV",
  q:"畳み込みニューラルネットワーク（CNN）において「プーリング層」の役割はどれですか？",
  options:["特徴マップの空間的サイズを縮小し位置不変性を高める","特徴量を増やす","勾配を計算する","正規化を行う"],
  answer:0,
  explanation:"プーリング層（MaxPoolingなど）は特徴マップをダウンサンプリングしてパラメータ数を削減し、物体の位置変化に対するロバスト性を高めます。"
},
{
  category:"cv", catLabel:"画像認識・CV",
  q:"物体検出において「IoU（Intersection over Union）」が使われる目的はどれですか？",
  options:["画像の解像度を評価する","予測バウンディングボックスと正解の重なり度合いを評価する","モデルの推論速度を測る","データ拡張の効果を測る"],
  answer:1,
  explanation:"IoU = 交差領域面積 / 和集合領域面積 で、物体検出における予測BBと正解BBの一致度を0〜1で評価します。"
},
{
  category:"cv", catLabel:"画像認識・CV",
  q:"画像セグメンテーションのうち、各ピクセルをクラスに割り当てる（インスタンスを区別しない）手法はどれですか？",
  options:["インスタンスセグメンテーション","セマンティックセグメンテーション","パノプティックセグメンテーション","物体検出"],
  answer:1,
  explanation:"セマンティックセグメンテーションは各ピクセルにクラスラベルを付与。インスタンスセグメンテーションは同クラスの異なる物体を区別します。"
},
{
  category:"cv", catLabel:"画像認識・CV",
  q:"データ拡張（Data Augmentation）の目的として最も適切なものはどれですか？",
  options:["テスト精度の直接向上","学習データを人工的に増やして過学習を防ぎ汎化性能を高める","推論の高速化","モデルの圧縮"],
  answer:1,
  explanation:"回転・反転・切り出し・色調変換などで学習データを擬似的に増やし、モデルの多様な入力への対応力と汎化性能を向上させます。"
},

// ==================== 強化学習 ====================
{
  category:"rl", catLabel:"強化学習",
  q:"強化学習における「マルコフ決定過程（MDP）」の構成要素として誤っているものはどれですか？",
  options:["状態（State）","行動（Action）","報酬（Reward）","正解ラベル（Label）"],
  answer:3,
  explanation:"MDPは状態S・行動A・報酬R・遷移確率・割引率で構成されます。正解ラベルは教師あり学習の概念であり、強化学習には含まれません。"
},
{
  category:"rl", catLabel:"強化学習",
  q:"DeepMindが囲碁でプロ棋士を打ち破ったAIの名前はどれですか？",
  options:["Deep Blue","Watson","AlphaGo","GPT-4"],
  answer:2,
  explanation:"2016年にDeepMindのAlphaGoが世界トップ棋士のイ・セドルに勝利しました。Deep BlueはチェスでカスパロフAI（IBM）です。"
},
{
  category:"rl", catLabel:"強化学習",
  q:"Q学習（Q-Learning）において「Q値」が表すものはどれですか？",
  options:["状態の評価値","ある状態である行動を取ったときの期待累積報酬","行動確率","損失関数の値"],
  answer:1,
  explanation:"Q(s,a)は状態sで行動aを取ったときの期待累積報酬（行動価値）を表します。Q値が最大の行動を選ぶのが最適方策です。"
},

// ==================== AI倫理・法律・社会実装 ====================
{
  category:"ethics", catLabel:"AI倫理・法律",
  q:"AIシステムの判断根拠を人間が理解・確認できるようにする考え方を何と呼びますか？",
  options:["ブラックボックスAI","説明可能AI（XAI）","汎用AI","強化学習"],
  answer:1,
  explanation:"説明可能AI（Explainable AI / XAI）はAIの判断根拠を人間が理解できる形で提示する技術・考え方。医療・金融などリスクの高い分野で重要です。"
},
{
  category:"ethics", catLabel:"AI倫理・法律",
  q:"機械学習モデルに含まれる「バイアス（偏り）」の問題として適切でないものはどれですか？",
  options:["学習データに偏りがあると差別的な予測をする","モデルが特定属性の集団に不利な判断を行う","モデルの計算速度が遅くなる","歴史的な偏見がデータに反映される"],
  answer:2,
  explanation:"AIバイアスはデータや設計の偏りによる差別・不公平な判断の問題。計算速度はバイアスとは無関係です。"
},
{
  category:"ethics", catLabel:"AI倫理・法律",
  q:"EU AI規制法（EU AI Act）における「受け入れられないリスク」のAIの例として適切なものはどれですか？",
  options:["医療画像診断支援","自動運転車","社会的スコアリングによる市民監視","工場の品質管理"],
  answer:2,
  explanation:"EU AI ActはリスクをUnacceptable・High・Limited・Minimalの4段階に分類。社会的スコアリングによる市民監視は禁止（Unacceptable Risk）に分類されます。"
},
{
  category:"ethics", catLabel:"AI倫理・法律",
  q:"「個人情報保護法」において個人情報に該当するものはどれですか？",
  options:["匿名化された統計データ","氏名・生年月日など特定の個人を識別できる情報","会社の売上データ","天気情報"],
  answer:1,
  explanation:"個人情報とは氏名・生年月日・住所・顔画像など、特定の個人を識別できる情報（または他の情報と照合して識別可能なもの）です。"
},
{
  category:"ethics", catLabel:"AI倫理・法律",
  q:"AIの「フェアネス（公平性）」の指標として「個人の公平性（Individual Fairness）」を表す説明はどれですか？",
  options:["グループ間で精度が等しい","似たような個人には似たような判断をする","全員に同じ確率で有利な判断をする","マイノリティグループへの誤検知率を一致させる"],
  answer:1,
  explanation:"個人の公平性は「類似した属性を持つ個人には類似した結果を出す」という考え。グループ間の統計的均衡を求めるグループ公平性とは異なります。"
},

// ==================== ビジネス応用 ====================
{
  category:"business", catLabel:"ビジネス応用",
  q:"AIプロジェクトにおいて「PoC（Proof of Concept）」の目的として最も適切なものはどれですか？",
  options:["本番システムの完全展開","アイデアや技術の実現可能性を小規模で検証する","全社員へのAI教育","予算の確定"],
  answer:1,
  explanation:"PoCは概念実証とも呼ばれ、フルスケール開発前に技術的・ビジネス的な実現可能性を小規模実験で確かめるプロセスです。"
},
{
  category:"business", catLabel:"ビジネス応用",
  q:"製造業でのAI活用において「予知保全（Predictive Maintenance）」の説明として正しいものはどれですか？",
  options:["定期的な時間でメンテナンスを実施する","センサーデータなどからAIが故障を予測し最適なタイミングでメンテナンスする","故障後に修理する事後保全","人手による目視点検"],
  answer:1,
  explanation:"予知保全はセンサー・IoTデータをAIで分析し故障前に保全作業を実施。定期保全（時間基準）や事後保全（故障後）と異なり、コスト・ダウンタイムを削減できます。"
},
{
  category:"business", catLabel:"ビジネス応用",
  q:"Amazonなどが利用する「レコメンデーションシステム」のうち、ユーザー同士の行動履歴の類似性を利用する手法はどれですか？",
  options:["コンテンツベースフィルタリング","協調フィルタリング","ルールベースレコメンド","ランダム推薦"],
  answer:1,
  explanation:"協調フィルタリングは「このユーザーと似た行動をした他のユーザーが好んだ商品を推薦」する手法。コンテンツベースはアイテムの特徴量を使います。"
},
{
  category:"business", catLabel:"ビジネス応用",
  q:"「AIガバナンス」において「モデルモニタリング」の主な目的はどれですか？",
  options:["AIの倫理委員会の設置","本番環境でのモデル精度低下（データドリフト等）を継続的に監視・検知する","AIの特許取得","新モデルの研究開発"],
  answer:1,
  explanation:"本番モデルは時間とともにデータ分布が変化してパフォーマンスが低下します（コンセプトドリフト）。継続的モニタリングでその検知・再学習のトリガーとします。"
},
{
  category:"business", catLabel:"ビジネス応用",
  q:"「MLOps」の説明として最も適切なものはどれですか？",
  options:["機械学習の数学理論","機械学習モデルの開発・デプロイ・運用を効率化するプラクティスと文化","機械学習専用のプログラミング言語","AIの倫理ガイドライン"],
  answer:1,
  explanation:"MLOpsはDevOpsの概念をML領域に適用したもの。データ管理・実験管理・CI/CD・モデル監視などを統合してMLシステムの信頼性・効率性を高めます。"
},
]; // end QUESTIONS
