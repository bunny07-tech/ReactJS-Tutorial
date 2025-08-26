import { useParams,useSearchParams,useNavigate } from 'react-router-dom'
import Home from './Home';
function User(){
  const params=useParams();
  const [searchparams,setsearchparams]=useSearchParams();
  const {name}=params;
const age=searchparams.get('age');
const navigate = useNavigate();

    return(
        <div>
           <h1> WELCOME TO {name}`s User Page </h1>
           < button onClick={()=>navigate('/Home')} >Navigate to home</button>
        </div>
    )
}
export default User