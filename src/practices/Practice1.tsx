export const Practice1 = () => {
  const calFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calFee(1000);
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>実行</button>
    </div>
  );
};
