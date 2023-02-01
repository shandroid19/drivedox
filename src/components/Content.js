
import { useSelector } from "react-redux"
export default function Content(){
    const user = useSelector((state)=>state.files.user); 
    const selected = useSelector((state)=>state.files.selected); 
    const contentloading = useSelector((state)=>state.files.contentloading)
    const message = ()=>{
        if(!user || user.length==0)
            return <h3 className=" text-center mt-5 ">Login to view files</h3>
        return <h3 className=" text-center mt-5 ">Select a file from the sidebar to view</h3> 
    }
    const frame = ()=>{
        if(!selected)
            return <h3 className=" text-center mt-5 text-danger">File has restricted Access :(</h3>
        return <iframe className="framebox" src={selected}></iframe>
    }
    return<>
    
        {contentloading?
        <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary text-center" role="status">
            <span className="sr-only"></span>
        </div>
        </div>:
        selected?.length==0?message():frame()}
    </>
}