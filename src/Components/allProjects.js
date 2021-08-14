import port2 from '../img/portImages/port1.jpg';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';
import OSMS from '../img/PrductImg/osms.png';
import SCM from '../img/PrductImg/scm.png';
import MyCart from '../img/PrductImg/MyCart.png';
import BSP from '../img/PrductImg/BSP.png';
import SB from '../img/PrductImg/SB.png';
import SS from '../img/PrductImg/SS.png';
import TB from '../img/PrductImg/TB.png';



const allProjects = [

    // Java Stack Projects
    // id : 1-10
    {
        id: 1,
        category: 'JavaStack',
        link1: 'https://www.youtube.com/watch?v=jQELj4tTl78&list=PL7Bbro6nYMuDW_OT22YKla2tqYLa6U3og&index=5&ab_channel=Sahu%27sTheClassicEducation',
        link2: 'https://github.com/satendrasahu/Smart-Contact-Manager',
        icon1: 'Y',
        icon2: 'G',
        image: SCM,
        title: 'Smart Contact Manager',
        detailedDescription: `It's a fully responsive JavaStack Based website where users can manage their contacts information smartly on the cloud. user can modify(create, Read, Update, Delete) their Contacts details  in future. 
        One Extra Service Available here from user side Where he can donate money for the support of admin. Third party Service Available here that is payment for donation using Razor-Pay.
        It was my Great experience with web development. I developed a simple and light weighted  website. I used mainly bootstrap 4 along with HTML and CSS and a little bit of JQuery for the frontend, Spring Boot,Spring MVC,java, Thymeleaf as a Backend, Mysql for database.`

    },
    {
        id: 2,
        category: 'JavaStack',
        link1: 'https://www.youtube.com/watch?v=nfdCZxHuLR8&list=PL7Bbro6nYMuDW_OT22YKla2tqYLa6U3og&index=2',
        link2: 'https://github.com/satendrasahu/Mycart',
        icon1: 'Y',
        icon2: 'G',
        image: MyCart,
        title: 'My Cart',
        detailedDescription: `It’s an E-commerce  website developed for Electronic products Shopping. Here User can purchase and add products into a cart and can pay.
        Basically This Website focus On Cart functionality add to cart, remove product from Cart, Increment / Decrement Product Quantity. save product for future. Payment Service, Generate Bills order  delivery Service, Order Id, delivery Status, choose Different Products according to different Category. Admin can add or remove various Category / Products. No Of Active or Registered Users. many more functionality. 
        It was my Great experience with web development. I developed a simple and light weighted  website. I used mainly bootstrap 4 along with HTML and CSS and a little bit of JQuery for the frontend, Hibernate,java, servlet, JSP as a Backend, Mysql for database.`
    },

    {
        id: 3,
        category: 'JavaStack',
        link1: 'https://youtu.be/-lYrtEpBzvw',
        link2: 'https://youtu.be/-lYrtEpBzvw',
        icon1: 'Y',
        icon2: 'G',
        image: TB,
        title: 'Tech Blog',
        detailedDescription: `Tech Blog | Java Servlet JSP Project | J2EE Project
         This project is based on Java, servlet, JSP, MYSQL OR J2EE-MYSQL, Here user can read blogs,  create own Blogs based on different categories, Like, Comment, and share blogs. user can see author of blog, creation date & time no of likes, no of comments.  `
    },

    // MERN Stack Projects
    //id : 11-20
    {
        id: 11,
        category: 'MERN',
        link1: 'https://www.youtube.com/watch?v=I6vsF-ReOM0&list=PL7Bbro6nYMuDW_OT22YKla2tqYLa6U3og&index=1&ab_channel=Sahu%27sTheClassicEducation',
        link2: 'https://github.com/satendrasahu/Business-Shopping-Platform',
        icon1: 'Y',
        icon2: 'G',
        image: BSP,
        title: 'Business & Shopping Platform',
        detailedDescription: `The purpose of the project entitled as “Business & Shopping Platform” is an online business & Shopping platform which is based on affiliate marketing. Here Two Types of Services provided by “Business & Shopping Platform”, One is Start Business, and another Start Shopping.
       Start Business Service provide services for Businessmen. Here any Businessman can grow their business digitally, here any businessman can share post related to his/ her products like other platform ex. Facebook, Instagram, Youtube etc. He can make the public aware of the products. Businessman can see likes, dislikes, comments, followers, following, and no of sharing. Based on these feedback he can improve the quality of their products. Here any user can see post of trending, most popular products can read and write comments on the post. And click on link which is provide by businessman on their products post, user can purchase their products. User can also share posts of products and can earn commission. By purchasing the products by the another customer . By clicking on his posts link.
       Start Shopping is an  another service, where any customers can purchase various products based on various categories, he can see price of products, rating, discount on products. He can add product on the cart, can add, remove, save, increase or decrease the quantity of products in the cart. can order for products, can see products details, orders details, order’s product details, can see status of order delivery. Payment status. No of availability of products. Like other e-commerce platform ex. Flipkart, Amazon etc. customers can reach this platform direct through the “Business & Shopping Platform” or by click on post links.
       In this service “Business & Shopping Platform” provide admin panel, where admin can add various products, create page based on different categories. And can see no of products availability, no of orders and order delivery status.   
       The complete project entitled as “Business & Shopping Platform” is based on MERN STACK ( Mongodb, Express, React, Node) TECHNOLOGY.
   
        `
    },
    {
        id: 12,
        category: 'MERN',
        link1: 'https://www.youtube.com/watch?v=3Z5hs0bU1JA&list=PL7Bbro6nYMuDW_OT22YKla2tqYLa6U3og&index=6&ab_channel=Sahu%27sTheClassicEducation',
        link2: 'https://github.com/satendrasahu/TheBusiness',
        icon1: 'Y',
        icon2: 'G',
        image: SB,
        title: 'Start Business',
        detailedDescription: `Start Business Service provide services for Businessmen. Here any Businessman can grow their business digitally, here any businessman can share post related to his/ her products like other platform ex. Facebook, Instagram, Youtube etc. He can make the public aware of the products. Businessman can see likes, dislikes, comments, followers, following, and no of sharing. Based on these feedback he can improve the quality of their products. Here any user can see post of trending, most popular products can read and write comments on the post. And click on link which is provide by businessman on their products post, user can purchase their products. User can also share posts of products and can earn commission. By purchasing the products by the another customer . By clicking on his posts link.`
    },
    {
        id: 13,
        category: 'MERN',
        link1: 'https://www.youtube.com/watch?v=4BbwrwewnYk&list=PL7Bbro6nYMuDW_OT22YKla2tqYLa6U3og&index=4&ab_channel=Sahu%27sTheClassicEducation',
        link2: 'https://github.com/satendrasahu/TheShopping',
        icon1: 'Y',
        icon2: 'G',
        image: SS,
        title: 'Start Shopping',
        detailedDescription: `Start Shopping is an  another service, where any customers can purchase various products based on various categories, he can see price of products, rating, discount on products. He can add product on the cart, can add, remove, save, increase or decrease the quantity of products in the cart. can order for products, can see products details, orders details, order’s product details, can see status of order delivery. Payment status. No of availability of products. Like other e-commerce platform ex. Flipkart, Amazon etc. customers can reach this platform direct through the “Start Shopping” or by click on post links.`
    },

    // MEAN Stack Projects
    // id: 21-30
    {
        id: 21,
        category: 'MEAN',
        link1: '#',
        link2: 'https://github.com/satendrasahu/EmailGUI',
        icon1: 'Y',
        icon2: 'G',
        image: port4,
        title: 'Email Gui',
        detailedDescription: `Email GUI is Angular MEAN Stack Based Project, This Project provide Email functionality for user, he can send, read, delete, manage email functionality`
    },
    //React-Native Projects
    // id: 31-40
    {
        id: 31,
        category: 'React Native',
        link1: 'https://www.youtube.com/watch?v=4BbwrwewnYk&list=PL7Bbro6nYMuDW_OT22YKla2tqYLa6U3og&index=4&ab_channel=Sahu%27sTheClassicEducation',
        link2: 'https://github.com/satendrasahu/TheShopping',
        icon1: 'Y',
        icon2: 'G',
        image: port2,
        title: 'Instagram Clone',
        detailedDescription: `This is React-Native based project Insta-Gram Clone is social media platform, where users can communicate to all over World, can share posts, can like dislike, comment, share posts, can communicate with message or call. can take picture, go live on social media.   `
    },

    //Php
    //id:71-80

    {
        id: 71,
        category: 'PHP',
        link1: 'https://www.youtube.com/watch?v=cjDHSmUvK2Q&list=PL7Bbro6nYMuDW_OT22YKla2tqYLa6U3og&index=3&ab_channel=Sahu%27sTheClassicEducation',
        link2: 'https://github.com/satendrasahu/OSMS',
        icon1: 'Y',
        icon2: 'G',
        image: OSMS,
        title: 'Online Service Management System',
        detailedDescription: `It’s an online help and request  website, developed for Electronic products issues.It's Provide Service For Their Customers, Here User can complain for product quality and can get any product service enquiry. 
        I used mainly  bootstrap 4 along with HTML and CSS and a little bit of Java script  for the frontend,PHP as a Backend, Mysql for database. User can Register any complaint user can complain. can see complained Id, can see assigned Technician for his complaint. user can also purchase any Product and can see product details. administrator can see number of  Complaints,  number of technician, available technician, assigned  technician, no of active or registered. can generate bills. 
       `
    },

    //Flutter App
    //id:41-50
    {
        id: 41,
        category: 'Flutter',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'Y',
        icon2: 'G',
        image: port6,
        title: 'Running On..'
    },

    //Android App
    // id:51-60
    {
        id: 51,
        category: 'Android',
        link1: '#',
        link2: 'https://github.com/satendrasahu/GreatJob',
        icon1: 'Y',
        icon2: 'G',
        image: port7,
        title: 'Great JOB',
        detailedDescription: `This App has a functionality where any user will get job according to his time and his skills, his education and according to his passion. He'll get job yearly, monthly, weekly, daily, Hourly basis, and get money according to his time`

    },




]

export default allProjects;