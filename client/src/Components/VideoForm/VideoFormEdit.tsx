import React, {useState, useEffect} from 'react'
import { Video } from '../../Interfaces/Video'
import { getVideo, editVideo} from '../../utils/VideoServices'
import { useNavigate, useParams} from 'react-router-dom'
import { toast } from 'react-toastify';


type inputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> 


const VideoFormEdit = () => {

  const initialState = {title:'', description:'', url:''};
  const [video, setVideo] = useState<Video>(initialState)
  const navigate = useNavigate()
  const {id} = useParams<string>()


  const handleOnchage = (e:inputEvent)=>{
    setVideo({...video, [e.target.name]:e.target.value})
  }

  const handleGetVideo = async (id: string) => {
    const res = await getVideo(id);
    console.log(res.data)
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  useEffect(()=>{
    if(id){handleGetVideo(id)}
 },[id])


  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const loading = toast.loading("Working on it...")

      if(id){
        try {
          console.log(video)
          console.log(id)
        await editVideo(id,video)
        setVideo(initialState)
        navigate('/')
        toast.update(loading,{ render: "Video Updated", type: "success", isLoading: false,
        autoClose: 3000});
      } catch (error:any) {
        toast.update(loading,{ render: "There's problems!", type: "error", isLoading: false,  autoClose: 3000})
        console.error(error.response.data)
      }
    }
  }
   
  return (
      <div className="col-md-4 offset-md-4">
       sdfdfsd
        <div className="card">
         <div className="card-body">
          <h4>New Visdfsdfsdeo</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type="text" name="title" placeholder="Write video title"  className="form-control" required onChange={handleOnchage} value={video.title}/>
            </div>
            <div className="mb-3">
            <input type="text" name="url" placeholder="https://youtube.com/fkROgb26"  className="form-control" required onChange={handleOnchage} value={video.url}/>
            </div>
            <div className="mb-3">
            <textarea name="description" rows={3} placeholder="White a description" className="form-control" onChange={handleOnchage} value={video.description}></textarea>
            </div>
            <button className="btn btn-primary">Create Video</button>
          </form>
         </div>
        </div>
      </div> 
  )
}

export default VideoFormEdit
