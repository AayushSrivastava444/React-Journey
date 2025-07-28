import Header from './Header.jsx'
import Footer from './footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ClickButton from './ClickButton.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import OnChange from './ONChange.jsx'


  function App(){
    

  

    
      const fruits =[{id:1, name : "apple", calories: 20},
        {id:2, name:"orange", calories: 70},
        {id:3, name:"banana", calories: 90},
        {id:4, name:"coconut", calories: 110}]

        const vegetables=[{id:5, name : "potato", calories: 120},
          {id:6, name:"tomato", calories: 170},
          {id:7, name:"brinjal", calories: 190},
          {id:8, name:"onion", calories: 210}]

        
   
        return(
    <>
    <Footer/>
       <Header/>
       <Food/>
       <Food/>
       <Food/>
       <Card/>
       <Card/>
       <Card/>
       <Card/> 
       <Button/>
       <Student name="Spongebob"/>
       <Student />
       <UserGreeting isLoggedIn={true}/>
       <List items={[]} category="empty"/>
       {fruits.length>0? <List items={fruits} category="Fruits"/> : null};
       {vegetables.length>0? <List items={vegetables} category="Vegetables"/> : null};
       <ClickButton/>
       <ProfilePicture/>
       <MyComponent/>
       <Counter/>
       <OnChange/>
    </>
  );
}


export default App
