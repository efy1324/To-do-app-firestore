import './App.css';
import { db } from './firebase-config'
// import { uid } from 'uid'
// import { getDatabase, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util';




function App() {

  // const [product, setProduct] = useState('')
  const [users, setUsers] = useState([])
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)
  const [newEmail, setNewEmail] = useState('')


  const usersCollectionRef = collection(db, "/users")
  // //write or create
  const handleName = (e) => {
    setNewName(e.target.value)
  }
  const handleAge = (e) => {
    setNewAge(e.target.value)
  }
  const handleEmail = (e) => {
    setNewEmail(e.target.value)
  }
  // const createToDataBase = () => {
  //   const uuid = uid()
  //   set(ref(db,`/${uuid}`), {
  //     product:product,
  //     uuid:uuid,
  //   });


  //   setProduct('');
  // };
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: newAge, email: newEmail })
    setNewName('')
    setNewEmail('')
    setNewAge(0)
  }
  const updateUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    const updatedUser = {
      name: 'Anna',
      age: 24,
      email: 'anna@gmail.com'
    }
    await updateDoc(userDoc, updatedUser)
  }
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [])
  console.log(users)

  return (
    <div className="App">
      <input placeholder='name' type='text' value={newName} onChange={handleName} />
      <input placeholder='age......' type='number' value={newAge} onChange={handleAge} />
      <input placeholder='email' type='email' value={newEmail} onChange={handleEmail} />
      <button onClick={createUser}> Create User</button>
      {users.map((user) => {
        return <div key={user.id}>
          <h2>name:{user.name}</h2>
          <h2>age:{user.age}</h2>
          <h2>email:{user.email}</h2>
          <button onClick={() => updateUser(user.id)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      })}

      {/* <input onChange={handleInputChange} type="text" value={name} />
      <button >submit</button> */}
    </div>
  );
}

export default App;
