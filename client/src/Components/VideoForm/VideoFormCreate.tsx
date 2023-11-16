import React, {useState} from 'react'
import { Video } from '../../Interfaces/Video'
import { createVideo} from '../../utils/VideoServices'
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


type inputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> 


const VideoFormCreate = () => {

  const initialState = {title:'', description:'', url:''};
  const [video, setVideo] = useState<Video>(initialState)
  const navigate = useNavigate()

  const handleOnchage = (e:inputEvent)=>{
    setVideo({...video, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const loading = toast.loading("Working on it...")
      try {
        await createVideo(video)
        setVideo(initialState)
        navigate('/')
        toast.update(loading,{ render: "Video Created", type: "success", isLoading: false,
        autoClose: 3000});
      } catch (error:any) {
        console.error(error.response.data)
      }
  }
   
  return (
      <div className="col-md-4 offset-md-4">
       
        <div className="card">
         <div className="card-body">
          <h4>New Video</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type="text" name="title" placeholder="Write video title"  className="form-control" required onChange={handleOnchage}/>
            </div>
            <div className="mb-3">
            <input type="text" name="url" placeholder="https://youtube.com/fkROgb26"  className="form-control" required onChange={handleOnchage}/>
            </div>
            <div className="mb-3">
            <textarea name="description" rows={3} placeholder="White a description" className="form-control" onChange={handleOnchage}></textarea>
            </div>
            <button className="btn btn-primary">Create Video</button>
          </form>
         </div>
        </div>
      </div> 
  )
}

export default VideoFormCreate
