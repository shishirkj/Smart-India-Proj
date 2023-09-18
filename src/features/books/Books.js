import React, { useEffect,useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { fetchAsync } from './booksSlice';
import { useAuth0 } from "@auth0/auth0-react";
  import { useSelector, useDispatch} from 'react-redux';

export default function Books() {
  const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    // book is store and books is array in booksSlice
    const books = useSelector((state) => state.book.books);
    const [showWelcome, setShowWelcome] = useState(true);


  useEffect(()=>{
    dispatch(fetchAsync())
  },[])



  useEffect(() => {
    // Set showWelcome to false after 2000 milliseconds (2 seconds)
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);


     // memory leak ko avoid karne ke liye
     return () => clearTimeout(timer);
    }, []);



  return (
   

    <div>


    
{showWelcome && (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-lg text-white">
          {isAuthenticated ? (
            <p className="text-2xl font-semibold">
              Welcome, {user.name || 'User'}!
            </p>
          ) : (
            <p className="text-2xl font-semibold">
              Welcome to Our Website!
            </p>
          )}
          <p className="text-lg mt-2">
            {isAuthenticated
              ? 'You are successfully logged in.'
              : 'Please log in to access all the features.'}
          </p>
        </div>
      )}



       <div className="flex flex-wrap -mx-4">
  {books.map((prod) => (
    <div key={prod.id} className="w-1/3 px-4 mb-8">
      <Card className="w-full shadow-xl">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={prod.cover_image?prod.cover_image:"http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec"} alt="card-image" className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody className="flex flex-col">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {prod.title}
          </Typography>
          <Typography className="mb-4">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
          <CardFooter className="mt-auto pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  ))}
</div>

    </div>
  )
}
