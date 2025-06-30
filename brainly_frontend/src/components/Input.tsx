import classNames from 'classnames'; 

type InputProps = {
    placeholder: string;
    reference : any ;
    classy : string ;
  };
export function Input({ placeholder , reference , classy}: InputProps){
return <div>
<input ref = {reference} placeholder= {placeholder} type = {"text"} className={classNames('px-4 py-2 border rounded m-2', classy)} ></input>
</div>
}