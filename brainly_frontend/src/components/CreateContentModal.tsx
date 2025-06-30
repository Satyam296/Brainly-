import {CrossIcon} from "../icons/CrossIcon";
import {Button} from "../components/Button";
import {Input} from "../components/Input" ;
import {useState , useRef} from "react";
import {BACKEND_URL} from "../components/config" ; 
import axios from "axios" ;

enum ContentType {
    Youtube = "youtube" ,
    Twitter = "twitter" ,
    Notes = "notes" 
}
type CreateContentModalProps = {
    open : boolean ;
    onClose : () => void ;
};
export function CreateContentModal ({open, onClose} : CreateContentModalProps) { 
    const titleRef = useRef<HTMLInputElement>(null) ;
    const linkRef = useRef<HTMLInputElement>(null) ; 
    const modalRef = useRef<HTMLDivElement>(null);
    const [type , setType] = useState(ContentType.Youtube);
    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value ; 
        
        await axios.post(`${BACKEND_URL}/api/v1/content` ,{
            link ,
            title ,
            type 
        },{
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        })

        onClose() ; 
    }  
    function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
     if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose(); // Close modal if click is outside the modal box
        }
        }

    return <div>
    {open && ( 
        <div onClick={handleOverlayClick} className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">        
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span ref={modalRef} className="bg-white opacity-100 p-4 rounded shadow-lg">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input reference={titleRef} classy="null" placeholder={"Title"} />
                        <Input reference={linkRef} classy="null" placeholder={"Link/Info"} />
                    </div>
                    <div>
                        <h1>Type</h1>
                        <div className="flex gap-1 justify-center pb-2">
                            <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }}></Button>
                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)
                            }}></Button>
                            <Button text="Text" variant={type === ContentType.Notes ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Notes)
                            }}></Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} variant="primary" text="Submit" />
                    </div>
                </span>
            </div>     
        </div>
         </div>)}
</div>

}