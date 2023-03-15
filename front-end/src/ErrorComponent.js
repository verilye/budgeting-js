export default function ErrorComponent({error}){

    return(
        <div>
            <p> Whoopsie, an error occured! </p>
            <pre> {error.message} </pre>            
        </div>
    )

}