import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {
    Link,
} from "react-router-dom";
export default function List(){
    function convertISOToDateTime(isoDateTime) {
        const date = new Date(isoDateTime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
      
        return `${hours}:${minutes} ${day}-${month}-${year}`;
    }
    const [data, setData] = useState([]);
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1dc16ec5b23648aa968caf240b21f3b7";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                alert(error);
            }
        };

        fetchData();
    }, [url]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className='col-md-12 row'>
          {data.articles && data.articles.map((article, index) => (
            (article.author != null && article.urlToImage != null)  ? (
              <Card className='card-new' style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200" height="200" src={article.urlToImage} />
                <Card.Body>
                  <Card.Title className='title'>{article.title}</Card.Title>
                  <Card.Text className='text'>
                    {article.author + " " + convertISOToDateTime(article.publishedAt)}
                  </Card.Text>
                  <Link className="btn btn-outline-primary" to={`/detail/${article.author}`} 
                  state={{ author: article.author, content: article.content, description: article.description, publish: article.publishedAt,title: article.title, url: article.url, urlToImage: article.urlToImage}}>Go to Detail</Link>
                </Card.Body>
              </Card>
            ) : null
          ))}
        </div>
      );
}