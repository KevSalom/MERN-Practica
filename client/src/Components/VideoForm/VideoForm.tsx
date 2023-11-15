import React, {useState} from 'react'
import { Video } from '../../Interfaces/Video'


type inputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> 


const VideoForm = () => {

  const [video, setVideo] = useState<Video>({title:'', description:'', url:''})

  const handleOnchage = (e:inputEvent)=>{
    setVideo({...video, [e.target.name]:e.target.value})
       
  }

  return (
      <div className="col-md-4 offset-md-4">
        <div className="card">
         <div className="card-body">
          <h4>New Video</h4>
          <form >
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

export default VideoForm
