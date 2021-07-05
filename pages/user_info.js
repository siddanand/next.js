import { useEffect, useState } from 'react';

export default function User_info(props) {
  const [userdetails, setUserdetails] = useState('');

    useEffect(() => {
      fetch('https://api.github.com/users/'+props.user)
      .then(res => res.json())
      .then(json=> {
        console.log(json);
        setUserdetails(json);
      })

    }, []);

return(
  <div>{JSON.stringify(userdetails, undefined, 4)}</div>
)
}
