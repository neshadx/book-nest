import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";


const ReadList = () => {

const [readList,setReadList] = useState([]) 
 const data = useLoaderData();

 useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
    const myReadList = data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
 },[])  


  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book Read Already {readList.length}</h2>

          {
            readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Wish List Done</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
