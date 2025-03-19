import Button from "./Button";
const list = ['home', 'cricket', 'sad', 'basketball', 'tennis', 'movie', 'trailers', 'funny', 'random','kite', 'trending', 'music', 'live', 'hello', 'happy'];
const ButtonList = () => {
  return (
    <div className="flex ml-1 mt-3">
      {list.map((e) => {return <Button key={e} data= {e}/>})}
    </div>
  );
};

export default ButtonList;
