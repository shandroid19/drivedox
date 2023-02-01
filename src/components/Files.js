import { useSelector,useDispatch } from "react-redux";
import { setselected,setcontentloading,stopcontentloading} from "../redux/slices/fileslices";

export default function Files(){
    const API_KEY='AIzaSyDBR9Wm9gCc664tgAuk4QZafMll-P10CHY'  // API KEY is left in the open since the app has been verified 
    const files = useSelector((state)=>state.files.files);  
    const user = useSelector((state)=>state.files.user);  
    const dispatch = useDispatch();
    const listfiles = ()=>{
        const data = files.files.map((item,key)=>{
            return <li key={key} onClick={()=>{handleClick(item.id)}} className="list-group-item py-3">{item.name}</li>
        })
        return data;
    }

    const handleClick = async (fileid)=>{
        dispatch(setcontentloading())
        const response = await fetch('https://www.googleapis.com/drive/v2/files/'+fileid+'?key='+API_KEY)
        const req = await response.json();
        dispatch(setselected(req.embedLink))
        dispatch(stopcontentloading())
    }

    const message = ()=>{
        if(user.length==0)
            return <p className=" text-center mt-5 ">Login to view files</p>
        return <p className=" text-center mt-5 ">No docx files in the drive</p> 
    }

    return <div className="card ">
        <div className="card-header">
            <p className="card-title">Docx Files</p>
        </div>
        <div className="card-content filescard">
        <ul className="list-group">
        {files.files?listfiles():message()}
        </ul> 
        </div>  
    </div>
}