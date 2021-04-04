export const Practice4 = () => {
  const calFee = (num: any) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calFee(1000);
  return (
    <div>
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>実行</button>
    </div>
  );
};
