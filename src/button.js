
function logRandom1(event){
  return event.target.name;
}
function Button()
{
  const[counter, setCounter]=useState(0);          
  const logRandom = () => Math.random();                       
  return <button onClick={logRandom}>{counter}</button>;

}


