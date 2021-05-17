# SeekBar | Alex Zarazua & Vicent Coll

<p align="center">

  <a>
    <img src="frontend/src/assets/img/LOGOTIPO NEGRO.png" alt="Seekbar_logo">
  </a>

</p>


## INDEX

* Getting Started
* About this project
* Preview 
* Features
* Built With and technologies

## Getting Started 

* You have the instructions in this files.

* BACKEND /helps 
* But you also can do this : 
     * 1.- Clone this repo
     * 2.- Install Docker Community Edition :  ` https://docs.docker.com/engine/install/ubuntu/ `
     * 3.-Run this command in the terminal : ` docker-compose up --build `

    
## About this project

How many services can you book online nowadays?, how many apps help you to make a reservation with hundreds of options?, why not one to book a table in a bar?, how many times have we been tired of looking for the phone number of a bar?, how many times have we been tired of calling over and over again until they pick up the phone and we can find a free table?, how many times have we been tired of calling over and over again until they pick up the phone and we can find a free table?, how many times have we been tired of calling over and over again until they pick up the phone and we can find a table?
With SeekBar that won't happen because it offers the best way to quickly find and book a table in a bar.
Imagine finding and booking a table at your favourite bar in less than 5 seconds with the swipe of a finger.

The idea is to develop a web and mobile application that helps to offer greater convenience to check the availability of tables in bars and to speed up the customer's reservation in a simple way.
In other words, the main thing is to display a list of the bars near the user, showing the number of tables available in that bar, in addition to having a filtering system, in case a search for a specific bar is required, or for example bars with different characteristics, whether the tables available are for a specified number of diners, the number of tables occupied or whether the tables available are on the terrace or inside the premises, etc....
In addition, once this is done, the user will be able to reserve the table in the bars that have this option enabled in the application. Therefore, the bar will have to save all the reservations that are going to be generated in our application. In addition, before seating new customers at a table, the application will show them that the table is not reserved, and when it is found that the table is free and it is given to the diners, it will also have to be noted in the application.
On the other hand, there are also some improvements planned, which will be implemented when the application is already viable, such as for example: there will be a section in which bars will be able to offer a take-away food service, so the user will order the food from the application and the order will be taken home. However, this service will be the bar's own service, i.e. the bar will be in charge of delivering the food to the customer with its own means.


<p align="center"><strong>"SeekBar, from home to table with just one click".</strong></p>


## Preview

  * WEB

      * HOME
        <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/web/HomeOfertasDesktop.png"/>
      * BARES 
        <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/web/BaresDesktop.png"/>
      * BAR
        <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/web/BarDesktop.png"/>
      * LOGIN
        <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/web/LoginDesktop.png"/>
      * REGISTER
        <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/web/RegisterDesktop.png"/>
      * PROFILE
        <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/web/ProfileDesktop.png"/>
  

  * MOBILE

    * HOME
      <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/mobile/Home_Ofertas_mobile.png"/>

    * BARES 
      <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/mobile/Bares_mobile.png"/>

    * BAR
      <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/mobile/Bar_detail_mobile.png"/>

    * LOGIN
      <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/mobile/Login__Mobile.png"/>

    * REGISTER
      <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/mobile/Register_Mobile.png"/>

    * PROFILE
      <img src="https://raw.githubusercontent.com/alexzarazuaa/SeekBar/develop/frontend/src/assets/MockUps/mobile/Profile_Mobile.png"/>



## Features

  | Page | Features |
  | - | - |
  | Home |  Promotions Bars List and Toggle Menu |
  | Bars | List using Django Rest FrameWork and PostGre |
  | Bar | , Details using Django Rest FrameWork and PostGre, Img baber Bar and Favorite button |
  | Profile | User info, favourited Bars, and Desactivate User Option |

  <br>

  | Service | Features |
  | - | - |
  | Register | Regular register with the check if the user is already in use and the regular expresions  |
  | Login | Regular login with Django and PostGre and the check if the user is already in use or not and the regular expresions |
  | Favourites | Favourite button in each bar , favourited show up on profile  |
  | Create Bar | Form for create the bar for the  owner of the bar can create his bar to be present in the app|


  <br>

  | Techical Feature | Where it works |
  | - | - |
  | Docker | Entire application is dockerized |
  | Authentication | Login and Register Services with JWT |


<br>


## Built With

 * Djanfgo Rest FrameWork
 * Vuex--Version 4.0.0-0
 * Vue-Version 3.0.0
 * @ionic/vue: "^5.6.4",
 * ionicons: "^5.5.1",
 * Docker
 * Docker-Compose
 * PostGre
 * PgAdmin
 * PostMan

## Other Technologies

 * JWT
 * CSS3
 * Axios



  <h3 align="center"><strong>&copy; SeekBar 2021</strong></h3>

