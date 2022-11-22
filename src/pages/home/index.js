import React,{useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";

import logo from '../../components/assets/logo.png';
import axios from 'axios';
import { FiStar } from 'react-icons/fi';
import { AiFillStar} from 'react-icons/ai';
import './styles.css';
import '../../index.css';
import { useCookies } from 'react-cookie';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import placeholder from '../../components/assets/logo.png';
import Footer from '../../components/footer/Footer';
export default function Home(){
    const [informations, setInformations] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

    const [index, setIndex] = useState(0);
    const [name, setName] = useState('');

    const [totalPages, setTotalPages] = useState(0);
    const [book, setBook] = useState([]);
    const [bookItems, setBookItems] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();
    const maxResults = 12;

    // const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('');


    async function handleSearch(page = 0){
        if(!page){
            setIndex(0);
        }
        try {
            await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=${maxResults}&startIndex=${page}`)
            .then(response => {
            setTotalPages(Math.ceil(response.data.totalItems / maxResults));
            if (response.data.items.length > 0) {
                setBookItems(response.data.items);
                // console.log(response.data.items);
            }else{
                // console.log("hi");
                setBookItems([]);
            }
            setInformations(false);   
        })
        } catch (err) {
            console.error('Home.handleSearch', err);
        }
    }
    
    // console.log(bookItems);
    function handleMoreInfos(selectedBook) {
        setBook(selectedBook);
        setInformations(true);    
    } 

    // console.log(e.target.value);
  useEffect(()=>{
    bookItems.sort((a,b)=>{
        if (a.volumeInfo.publishedDate===undefined){
             a.volumeInfo.publishedDate='0000'
        } 
        else if ( b.volumeInfo.publishedDate===undefined){
             b.volumeInfo.publishedDate='0000'
        }    
      if (sortType ==="Newest"){
            return parseInt(a.volumeInfo.publishedDate.substring(0,4))-parseInt(b.volumeInfo.publishedDate.substring(0,4))
        } else if (sortType ==="Oldest"){
            return parseInt(b.volumeInfo.publishedDate.substring(0,4))-parseInt(a.volumeInfo.publishedDate.substring(0,4))
        } 
    })
  },[sortType])

    function handleFavorites(selectedBook){      
      //First query if there is something stored in no storage
         //If nothing is stored in storage, do it or insert the first ID
        if(localStorage.getItem('@google-book-search/books') === null || localStorage.getItem('@google-book-search/books') === `[]`){
            localStorage.setItem('@google-book-search/books', JSON.stringify([selectedBook]));
        }
        //Otherwise, if there is already something in the storage, the old values must be concatenated
         // with the new value and then perform the setItem on the new localStorage
        else{
            if(localStorage.getItem('@google-book-search/books') && localStorage.getItem('@google-book-search/books').indexOf(selectedBook.id) === -1){
                localStorage.setItem(
                    '@google-book-search/books',
                  // JSON.parse parses the string back to JSON, the reverse of JSON.strigify
                    JSON.stringify([
                      ...JSON.parse(localStorage.getItem('@google-book-search/books')),
                      selectedBook
                    ])
                );
            }
        }
        setRefresh(!refresh);
    }

    // useEffect(() => {
    //     const sortArray = type => {
    //       const types = {
    //         albums: 'albums',
    //         members: 'members',
    //         formed: 'formed_in',
    //       };
    //       const sortProperty = types[type];
    //       const sorted = [...bookItems].sort((a, b) => b[bookItems.volumeInfo.publishedDate.substring(0,4)] - a[bookItems.volumeInfo.publishedDate.substring(0,4)]);
    //       setData(sorted);
    //     };
    
    //     sortArray(sortType);
    //   }, [sortType]); 
    
    
    function changePage(page){
        handleSearch((page.selected * maxResults) + 1);
        setIndex(page.selected);
    }
    
    useEffect(()=>{},[refresh,bookItems]);
    
    return(
        
        <div className="page" >
            <div>
             <div className="container header my-3 p-2" style={{backgroundColor:"#fff"}}>
                <div >
            <a href="/"><img className="logo" src={logo} alt="logoBook"/></a>
            <h1 className="title">Google Book Search</h1>
                <h3 className="subtitle">Find the book you want</h3>
                </div>
            <div className="header-content">
             
                <section className="search ">
                <div className="input-block w-100">
                    <input
                    placeholder="Make your search..."
                    type="text"
                    className=''
                        name="Books"
                        label="Book"
                        required={true}
                        value={name}
                        onChange={event => setName(event.target.value)}
                        />
                       
                    <button className="button" type="button" onClick={()=>handleSearch()}>
                    Search
                </button>
             
                </div>

                <select className=' sort' defaultValue="Sort" onChange={(e) => setSortType(e.target.value)}> 
        <option disabled value="Sort">Sort by Date</option>
        <option value="Oldest" >Oldest</option>
        <option value="Newest">Newest</option>
      </select>
      {/* <option value="3">Three</option> */}
   
            </section>
            </div>
          
        </div>
       
            
            <main className='main' style={{marginBottom:"300px"}}>
            <ReactPaginate
                            containerClassName={'pagination'}
                            forcePage={index}
                            pageCount={totalPages}
                            pageRangeDisplayed={4}
                            marginPagesDisplayed={0}
                            nextClassName={'btn-next'}
                            previousClassName={'btn-prev'}
                            breakClassName={'btn-break'}
                            onPageChange={e => {
                                changePage(e)}
                                
                            } 
                            
                            />
                {!informations ?(
                    
                    <>
  
                        <div className="book-content mb-5" >
                        {/* {console.log(bookItems.categories)} */}
                            {bookItems.map(selectedBook => (
                                
                                <div className="each-book mb-4" key={selectedBook.id} >
                                    <div className="item p-1">
                                        <img src={selectedBook.volumeInfo.imageLinks === undefined ? placeholder : selectedBook.volumeInfo.imageLinks.thumbnail} alt={selectedBook.volumeInfo.title}/>
                                        <strong>{selectedBook.volumeInfo.title.substring(0,20)}..</strong>
                                        <span className=''>{(selectedBook.volumeInfo.publishedDate ? selectedBook.volumeInfo.publishedDate.substring(0,4): "-")}</span>
                                        <div className="button-container mt-1">
                                       
                                       {cookies.currentUser != null && (
                    <button className="button" onClick={() => handleFavorites(selectedBook)}>
                    {!!localStorage.getItem('@google-book-search/books') && localStorage.getItem('@google-book-search/books').indexOf(selectedBook.id) !== -1?
                        <AiFillStar size={20} color="#FFF" /> 
                    :
                        <FiStar size={20} color="#FFF" /> 
                    }
                    Fav
                </button>
                 )}
                 {cookies.currentUser == null && (
                      

               <Link to ="/login"><button> <FiStar size={20} color="#FFF" /> fav</button></Link>
               )}
                
                {cookies.currentUser != null && (
                      <button className="button" onClick={() => handleMoreInfos(selectedBook)}>
                                         
                      More 
                  </button>
                 )}
                 {cookies.currentUser == null && (
                      

               <Link to ="/login">  <button className="button" >
                                         
               More 
           </button></Link>
               )}
                                     
                                   </div>
                                        {/* <span>{selectedBook.volumeInfo.categories}</span>  */}
                                        {/* {selectedBook.volumeInfo.publishedDate ===undefined? selectedBook.volumeInfo.publishedDate ==='-':selectedBook.volumeInfo.publishedDate.substring(0,4)} */}
                                    </div>
                                    {/* {console.log(selectedBook.volumeInfo.publishedDate)} */}
                             
                                </div>
                            ))}
                        </div>
                        
                    </>
                )
                :(
                    <div className="each-book book-details" >
                        <div class-name="photo-titles">
                            <img src={book.volumeInfo.imageLinks === undefined ? placeholder : book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                            <div className="title-subtitle">
                                <strong className='my-1'>Title: {book.volumeInfo.title}</strong>
                                <strong className='my-1'>Author: {book.volumeInfo.authors}</strong>
                                <strong> {book.volumeInfo.publishedDate  ==='0000'? "-" :""}</strong>
                            </div>
                        </div>
                        {!!book.volumeInfo.description && <p><strong>Description:</strong> {book.volumeInfo.description}</p>}
                        {!!book.volumeInfo.language && <p><strong>Language:</strong> {book.volumeInfo.language}</p>}
                        {!!book.volumeInfo.pageCount && <p><strong>Pages</strong> {book.volumeInfo.pageCount}</p>}
                        {!!book.volumeInfo.publisher && <p><strong>Company:</strong> {book.volumeInfo.publisher}</p>}
                        {!!book.volumeInfo.categories && <p><strong>Categories:</strong> {book.volumeInfo.categories}</p>}
                        {!!book.saleInfo.listPrice && <p><strong>Price:</strong> R$ {book.saleInfo.listPrice.amount}</p>} 
                        {!!book.volumeInfo.previewLink &&<p><strong>Link:</strong> <a rel="noreferrer" target="_blank" href={book.volumeInfo.previewLink}>Open a preview</a></p>}
                        {!!book.volumeInfo.infoLink &&<p><strong>Informations:</strong> <a target="_blank" rel="noreferrer" href={book.volumeInfo.infoLink}>See it on google market</a></p>}
                        <button className="button" onClick={() => setInformations(false)}>
                          Back
                        </button>
                    </div>
                )}
            </main>
            </div>
          <Footer/>
        </div>
    )
}