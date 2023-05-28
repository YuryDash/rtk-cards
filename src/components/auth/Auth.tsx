import { Header } from "components/header/header";

export const Auth = () => {
  const onClickButtonHandle = () => {
    alert("Allah Akbar! Boom :D");
  };
  return (
    <div>
      <Header btnText="Sign in" callback={onClickButtonHandle} />
    </div>
  );
};
