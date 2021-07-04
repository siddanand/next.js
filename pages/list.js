import { useEffect, useState } from 'react';

export default function List() {
const [list, setList] = useState([]);
const [user, setUser] = useState('');

  useEffect(() => {
fetch('https://api.github.com/users')
.then(res => res.json())
.then(json=> {
  console.log(json);
  setList(json);
})
    }, [])

return(
  <div>
  <div class="container">
<h1>List of User Types:</h1>
{list.map((item)=>
  <div key={item.id}>
  {item.login}
  </div>
)}
</div>
</div>

)
}
