import React, { createContext, useState } from "react";

const MyContext = createContext();

const Main = (props) => {
    
  const [user, setUser] = useState([{name:'Kushal',phone:'9369723410', email:'kushal@gmail.com',password:'12345'}]);
  const [idCounter, setIdCounter] = useState(6);
  const [signedUser, setSignedUser] = useState("");
  const [imageAddress, setImageAddress] = useState("");

  const [posts, setPosts] = useState([{id: 5,from: 'Ramesh', text: 'Hello fraandz, chai pi lo. Donec aliquet id libero vitae mollis. Phasellus accumsan lobortis blandit.', photo : 'https://uttarakhandtourism.gov.in/sites/default/files/2020-06/Mussoorie%20banner.jpg', likes: 1, comments : [{name: 'Alok', message : 'Party ho rahi hai!!'}]},
  
  {id: 4,from: 'Shivang', text: 'Beach is the best !!! Donec aliquet id libero vitae mollis. Phasellus accumsan lobortis blandit.', photo : 'https://cdn.wallpapersafari.com/99/73/ohtOmE.jpg', likes: 1, comments : [{name: 'Vikas', message : 'Nice Pic'}]},

  {id: 3,from: 'Sumit', text: 'Living the life !!! Donec aliquet id libero vitae mollis. Phasellus accumsan lobortis blandit.', photo : 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/3f/29.jpg', likes: 1, comments : [{name: 'Shruti', message:'Enjoy dude!!!'}]},

  {id: 2,from: 'Alisha', text: 'Sky is the limit !!! Donec aliquet id libero vitae mollis. Phasellus accumsan lobortis blandit.', photo : 'https://wallpaperaccess.com/full/1575212.jpg', likes: 1, comments : [{name: 'Niharika', message:'Nice Pic, Wish I could join you guys!'}]},

  {id: 1,from: 'Devansh', text: 'Food makes me happy !!! Donec aliquet id libero vitae mollis. Phasellus accumsan lobortis blandit.', photo : 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/chicken-and-broccoli.jpg?quality=82&strip=1', likes: 1, comments : [{name: 'Jay', message: 'Nice Pic'}]},

  {id: 0,from: 'Azhan', text: 'To the moon !!! Donec aliquet id libero vitae mollis. Phasellus accumsan lobortis blandit.', photo : 'https://static2.tripoto.com/media/filter/tst/img/1005926/TripDocument/1554289540_img_6fe970190badae1709e5f44ec2c9a8ed_1528195734566_processed_original.jpg', likes: 1, comments : [{name: 'Garima', message: 'Nice Pic'}]},


  ]);    
  return (
    <MyContext.Provider value={{user:[user, setUser], posts:[posts, setPosts], signedUser: [signedUser, setSignedUser], idCounter: [idCounter, setIdCounter], imageAddress: [imageAddress, setImageAddress]}}>
      {props.children}
    </MyContext.Provider>
  )
}

export  { Main, MyContext };