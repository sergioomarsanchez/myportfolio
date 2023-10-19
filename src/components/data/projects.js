import moviefy from '../../assets/Moviefy.png'
import thefoodapp from '../../assets/thefoodapp.png'
import pizzaapp from '../../assets/pizzaApp.png'
import myfin from '../../assets/myFin.png'
import tend from '../../assets/tend.png'


export const ProjectData=[
    {
        id:5,
        title:"Trabajo en Digital",
        about: "Trabajo en Digital is a leading online job search platform in Mexico. It uses an algorithm to match professionals, companies, and job openings to measure their compatibility.",
        tags:["Nextjs", "TailwindCSS", "Typescript", "Html/Css", "React Query", "Zod", "React Hooks Form", "Fuse.js", "Headless UI", "Shadqn/UI"],
        image:tend,
        demo:"https://www.trabajoendigital.com/",
    },
    {
        id:4,
        title:"My Fin",
        about: "My Fin is a personal finance app with features such as tracking bank accounts, managing income and expenses, and displaying detailed graphics using Next and Chart.js. It also includes a news section, bank logo display, SweetAlert2 for user feedback, a contact form using Nodemailer, and user authentication through JWT. The app aims to be user-friendly and help people manage their finances more effectively.",
        tags:["Nextjs", "Javascript", "MongoDB", "Html/Css", "Redux", "Javascript", "Mongoose", "JWT", "Chart.js", "SweetAlert2", "RapidApi"],
        github:"https://github.com/sergioomarsanchez/myfin",
        image:myfin,
        demo:"https://myfin-sergioomarsanchez.vercel.app/",
        videoLink:"https://youtu.be/POkgXD8j_bk"
    },
    {
        id:3,
        title:"Pizza Delivery App",
        about: "This is a Pizza delivery app. As a client you can select several pizzas, add them to the cart, and proceed to confirm the payment with PayPal or on delivery, once confirm you can check the order detail to follow the progress of it. As an admin, you can add and delete products, and update order status. Authentication is made with the cookies system.",
        tags:["Nextjs", "Javascript", "MongoDB", "Html/Css", "Redux", "Javascript", "Mongoose", "Cloudinary"],
        github:"https://github.com/sergioomarsanchez/pizzaapp",
        image:pizzaapp,
        demo:"https://pizzaapp-tau.vercel.app/",
        videoLink:"https://youtu.be/kkzPIZAvYB0"
    },
    {
        id:1,
        title:"Moviefy +",
        about: "Moviefy+ is a Web where you book cinema tickets to watch movies, create your own playlists, and watch content through streaming. Ontop of that, it has an admin dashboard with sales, subscriptions, and movies statistics boards, review forms, Mercadopago payment method integrated, mail notifications, and others. Please, click on the project image to check a short demo video",
        tags:["ReactJS", "Sass", "Mongodb", "Html/Css", "Redux", "Javascript", "express", "external API"],
        demo:"https://hpfc.netlify.app/",
        github:"https://github.com/mrtfog/PF-Henry-Front",
        image:moviefy,
        videoLink:"https://youtu.be/1F4NPhPwK_Q"
    },
    {
        id:2,
        title:"The Food App",
        about: "This is an individual project for my Bootcamp at Soy Henry. Is an App to check Recipes, search, order by name and heath rating and filter by recipe type, and you can also create your own recipes. Please, click on the project image to check a short demo video",
        tags:["ReactJS", "Javascript", "PostgreSQL", "Html/Css", "Redux", "Express", "external API"],
        github:"https://github.com/sergioomarsanchez/PI-Foods",
        image:thefoodapp,
        demo:"https://pi-thefoodap-sergioosanchez.netlify.app/",
        videoLink:"https://youtu.be/uqTnidI7LRc"
    }
];