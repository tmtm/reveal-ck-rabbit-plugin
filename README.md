# reveal-ck-rabbit-plugin

[reveal-ck](http://jedcn.github.io/reveal-ck/)のスライドに、[rabbit](https://rabbit-shocker.org/)のようなウサギとカメを表示します。

## Installation

    % gem install reveal-ck-rabbit-plugin

## Usage

    % mkdir foo
    % cd foo
    % touch slides.md
    % reveal-ck-rabbit-plugin
    % reveal-ck generate

スライドを開始して2ページ目に進むとウサギが表示されます。
ウサギは現在のスライドの位置を示しています。

config.yml の `revealjs_config` に `alloted_time` を追加するとカメが表示されるようになります。

```yaml
title: "Slide title"
revealjs_config:
  alloted_time: 300
```

スライドの2ページ目を表示した時から `alloted_time`秒かけて右端に進んでいきます。

ウサギよりもカメが先行するようなら時間内にスライドの最後までたどり着けない可能性があります。

reveal-ck はファイルが更新されると自動的にスライドがリロードされますが、カメの位置はリロード前と変わりません。
カメを最初の位置にリセットしたい場合は、スライドの1ページ目でリロードしてください。

Linux上のFirefoxでしか動作確認はしていません。
